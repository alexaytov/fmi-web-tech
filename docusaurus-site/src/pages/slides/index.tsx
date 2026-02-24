import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './index.module.css';

interface SlideInfo {
  lectureNumber: number;
  lectureTitle: string;
  lectureSlug: string;
  theme: string;
}

interface SlidesPluginData {
  slides: SlideInfo[];
}

function useSlides(): SlideInfo[] {
  try {
    const data = usePluginData('reveal-slides-plugin') as SlidesPluginData;
    return data?.slides || [];
  } catch (error) {
    console.warn('reveal-slides-plugin data not available:', error);
    return [];
  }
}

export default function SlidesIndexPage() {
  const { siteConfig } = useDocusaurusContext();
  const slides = useSlides();
  const baseUrl = siteConfig.baseUrl;

  return (
    <Layout
      title="Презентации"
      description="Интерактивни слайдове за всички лекции от курса"
    >
      <main className="container margin-vert--lg">
        <div className={styles.header}>
          <h1>📊 Презентации</h1>
          <p className={styles.subtitle}>
            Интерактивни слайдове за всички лекции от курса
          </p>
        </div>

        {slides.length > 0 ? (
          <div className={styles.slidesGrid}>
            {slides.map((slide) => (
              <div key={slide.lectureSlug} className={styles.slideCard}>
                <div className={styles.lectureNumber}>
                  Лекция {slide.lectureNumber}
                </div>
                <h3 className={styles.lectureTitle}>{slide.lectureTitle}</h3>
                <div className={styles.actions}>
                  <a
                    href={`${baseUrl}slides/${slide.lectureSlug}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--primary button--block"
                  >
                    📊 Виж Презентация
                  </a>
                  <Link
                    to={`/docs/${slide.lectureSlug}/lecture`}
                    className="button button--secondary button--block"
                  >
                    📖 Виж Лекция
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>Все още няма налични презентации. Проверете отново скоро!</p>
          </div>
        )}

        <div className={styles.helpSection}>
          <h2>Как да използвам презентациите?</h2>
          <div className={styles.helpGrid}>
            <div className={styles.helpCard}>
              <h4>⌨️ Клавишни комбинации</h4>
              <ul>
                <li><strong>Стрелки</strong> - Навигация</li>
                <li><strong>Space</strong> - Следващ слайд</li>
                <li><strong>S</strong> - Speaker notes</li>
                <li><strong>F</strong> - Fullscreen</li>
                <li><strong>ESC</strong> - Overview mode</li>
                <li><strong>?</strong> - Help overlay</li>
              </ul>
            </div>
            <div className={styles.helpCard}>
              <h4>📄 PDF Export</h4>
              <ul>
                <li>Добавете <code>?print-pdf</code> към URL-а</li>
                <li>Използвайте Chrome браузър</li>
                <li>Print → Save as PDF</li>
              </ul>
            </div>
            <div className={styles.helpCard}>
              <h4>📱 Mobile Support</h4>
              <ul>
                <li>Swipe за навигация</li>
                <li>Tap за следващ слайд</li>
                <li>Responsive scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
