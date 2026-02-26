const fs = require('fs');
const path = require('path');

/**
 * Docusaurus Plugin to automatically load lecture metadata
 * This runs at build time and makes lecture data available globally
 */
module.exports = function lecturesPlugin(context, options) {
  return {
    name: 'lectures-plugin',

    async loadContent() {
      const docsDir = path.join(context.siteDir, 'docs');
      const lectures = [];

      // Read all directories in docs/
      const entries = fs.readdirSync(docsDir, { withFileTypes: true });

      for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        // Check if directory name starts with number (e.g., 01-complexity)
        const match = entry.name.match(/^(\d+)-(.+)$/);
        if (!match) continue;

        const number = parseInt(match[1], 10);
        const slug = match[2];

        // Read _category_.json
        const categoryPath = path.join(docsDir, entry.name, '_category_.json');
        if (!fs.existsSync(categoryPath)) {
          console.warn(`Warning: No _category_.json found for ${entry.name}`);
          continue;
        }

        const categoryData = JSON.parse(fs.readFileSync(categoryPath, 'utf8'));

        // Extract title from label (remove number prefix like "01. ")
        const title = categoryData.label.replace(/^\d+\.\s*/, '');
        const description = categoryData.link?.description || '';

        // Check if lecture.md exists (indicates lecture is ready)
        const lecturePath = path.join(docsDir, entry.name, 'lecture.md');
        const status = fs.existsSync(lecturePath) ? 'ready' : 'pending';

        // Extract topics based on title
        const topics = extractTopics(title);

        lectures.push({
          number,
          title,
          slug,
          status,
          topics,
          description
        });
      }

      // Sort by lecture number
      lectures.sort((a, b) => a.number - b.number);

      return { lectures };
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      // Make lectures data available globally to all pages
      setGlobalData(content);
    },
  };
};

/**
 * Extract topics from lecture title
 */
function extractTopics(title) {
  // Web Technologies topics
  if (title.includes('Cloud-Native')) {
    return ['Containers', 'Microservices', 'Kubernetes', 'Docker'];
  }
  if (title.includes('Git') || title.includes('GitHub')) {
    return ['Git', 'GitHub', 'Version Control', 'Collaboration'];
  }
  if (title.includes('IaaS') || title.includes('PaaS') || title.includes('SaaS')) {
    return ['Cloud', 'AWS', 'Azure', 'GCP'];
  }
  if (title.includes('Трислойна') || title.includes('Three-Tier')) {
    return ['Architecture', 'Frontend', 'Backend', 'Database'];
  }
  if (title.includes('JavaScript')) {
    return ['JavaScript', 'ES6+', 'Functions', 'DOM'];
  }
  if (title.includes('TypeScript')) {
    return ['TypeScript', 'Types', 'Interfaces', 'Compilation'];
  }
  if (title.includes('HTML') || title.includes('CSS')) {
    return ['HTML5', 'CSS3', 'Flexbox', 'Grid'];
  }
  if (title.includes('DOM')) {
    return ['DOM', 'Events', 'Manipulation', 'JavaScript'];
  }

  // Default topics for web tech
  return ['Web Development', 'Frontend', 'Backend', 'Practice'];
}
