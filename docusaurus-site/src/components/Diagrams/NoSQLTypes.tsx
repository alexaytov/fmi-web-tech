import React from 'react';

const styles = `
  @keyframes cardPop {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes useCaseFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .nosql-card-1 { animation: cardPop 0.4s ease-out 0.1s forwards; opacity: 0; }
  .nosql-card-2 { animation: cardPop 0.4s ease-out 0.25s forwards; opacity: 0; }
  .nosql-card-3 { animation: cardPop 0.4s ease-out 0.4s forwards; opacity: 0; }
  .nosql-card-4 { animation: cardPop 0.4s ease-out 0.55s forwards; opacity: 0; }
  .use-case-1 { animation: useCaseFade 0.3s ease-out 0.6s forwards; opacity: 0; }
  .use-case-2 { animation: useCaseFade 0.3s ease-out 0.7s forwards; opacity: 0; }
  .use-case-3 { animation: useCaseFade 0.3s ease-out 0.8s forwards; opacity: 0; }
  .use-case-4 { animation: useCaseFade 0.3s ease-out 0.9s forwards; opacity: 0; }
`;

export default function NoSQLTypes(): JSX.Element {
  return (
    <svg viewBox="0 0 800 340" style={{ maxWidth: '800px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="ntDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="ntKvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="ntColGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <linearGradient id="ntGraphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
        <filter id="ntCardShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="400" y="35" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700">
        Четири Типа NoSQL Бази Данни
      </text>

      {/* Document Store - Card 1 */}
      <g className="nosql-card-1" filter="url(#ntCardShadow)">
        <rect x="30" y="60" width="170" height="160" rx="12" fill="url(#ntDocGrad)" />
        <text x="115" y="90" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">📄 Document</text>
        <rect x="45" y="105" width="140" height="100" rx="6" fill="white" fillOpacity="0.95" />
        <text x="55" y="125" fill="#333" fontFamily="monospace" fontSize="9">{"{"}"name": "Ivan",</text>
        <text x="55" y="138" fill="#333" fontFamily="monospace" fontSize="9"> "age": 25,</text>
        <text x="55" y="151" fill="#333" fontFamily="monospace" fontSize="9"> "skills": [</text>
        <text x="55" y="164" fill="#333" fontFamily="monospace" fontSize="9">   "JS", "DB"</text>
        <text x="55" y="177" fill="#333" fontFamily="monospace" fontSize="9"> ]{"}"}</text>
      </g>

      {/* Key-Value Store - Card 2 */}
      <g className="nosql-card-2" filter="url(#ntCardShadow)">
        <rect x="220" y="60" width="170" height="160" rx="12" fill="url(#ntKvGrad)" />
        <text x="305" y="90" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">🔑 Key-Value</text>
        <rect x="235" y="105" width="140" height="100" rx="6" fill="white" fillOpacity="0.95" />
        {/* Key-value pairs */}
        <rect x="245" y="115" width="45" height="20" rx="4" fill="#3498db" fillOpacity="0.2" />
        <text x="267" y="129" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="10">user:1</text>
        <text x="300" y="129" fill="#333" fontSize="12">→</text>
        <text x="315" y="129" fill="#333" fontFamily="monospace" fontSize="9">{"{"}...{"}"}</text>

        <rect x="245" y="142" width="45" height="20" rx="4" fill="#3498db" fillOpacity="0.2" />
        <text x="267" y="156" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="10">sess:A</text>
        <text x="300" y="156" fill="#333" fontSize="12">→</text>
        <text x="315" y="156" fill="#333" fontFamily="monospace" fontSize="9">token</text>

        <rect x="245" y="169" width="45" height="20" rx="4" fill="#3498db" fillOpacity="0.2" />
        <text x="267" y="183" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="10">cache</text>
        <text x="300" y="183" fill="#333" fontSize="12">→</text>
        <text x="315" y="183" fill="#333" fontFamily="monospace" fontSize="9">data</text>
      </g>

      {/* Wide-Column Store - Card 3 */}
      <g className="nosql-card-3" filter="url(#ntCardShadow)">
        <rect x="410" y="60" width="170" height="160" rx="12" fill="url(#ntColGrad)" />
        <text x="495" y="90" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">📊 Wide-Column</text>
        <rect x="425" y="105" width="140" height="100" rx="6" fill="white" fillOpacity="0.95" />
        {/* Column headers */}
        <rect x="433" y="112" width="38" height="16" rx="3" fill="#2ecc71" fillOpacity="0.3" />
        <rect x="476" y="112" width="38" height="16" rx="3" fill="#2ecc71" fillOpacity="0.3" />
        <rect x="519" y="112" width="38" height="16" rx="3" fill="#2ecc71" fillOpacity="0.3" />
        <text x="452" y="124" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="600">Col1</text>
        <text x="495" y="124" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="600">Col2</text>
        <text x="538" y="124" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="600">Col3</text>
        {/* Rows with sparse data */}
        <rect x="433" y="132" width="38" height="18" rx="3" fill="#ecf0f1" />
        <rect x="476" y="132" width="38" height="18" rx="3" fill="#ecf0f1" />
        <text x="452" y="145" textAnchor="middle" fill="#333" fontSize="9">val</text>
        <text x="495" y="145" textAnchor="middle" fill="#333" fontSize="9">val</text>
        <rect x="433" y="154" width="38" height="18" rx="3" fill="#ecf0f1" />
        <rect x="519" y="154" width="38" height="18" rx="3" fill="#ecf0f1" />
        <text x="452" y="167" textAnchor="middle" fill="#333" fontSize="9">val</text>
        <text x="538" y="167" textAnchor="middle" fill="#333" fontSize="9">val</text>
        <rect x="476" y="176" width="38" height="18" rx="3" fill="#ecf0f1" />
        <text x="495" y="189" textAnchor="middle" fill="#333" fontSize="9">val</text>
      </g>

      {/* Graph Store - Card 4 */}
      <g className="nosql-card-4" filter="url(#ntCardShadow)">
        <rect x="600" y="60" width="170" height="160" rx="12" fill="url(#ntGraphGrad)" />
        <text x="685" y="90" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">🕸️ Graph</text>
        <rect x="615" y="105" width="140" height="100" rx="6" fill="white" fillOpacity="0.95" />
        {/* Nodes */}
        <circle cx="650" cy="135" r="15" fill="#9b59b6" fillOpacity="0.2" stroke="#9b59b6" strokeWidth="2" />
        <text x="650" y="139" textAnchor="middle" fill="#8e44ad" fontSize="10" fontWeight="600">A</text>
        <circle cx="720" cy="135" r="15" fill="#9b59b6" fillOpacity="0.2" stroke="#9b59b6" strokeWidth="2" />
        <text x="720" y="139" textAnchor="middle" fill="#8e44ad" fontSize="10" fontWeight="600">B</text>
        <circle cx="685" cy="180" r="15" fill="#9b59b6" fillOpacity="0.2" stroke="#9b59b6" strokeWidth="2" />
        <text x="685" y="184" textAnchor="middle" fill="#8e44ad" fontSize="10" fontWeight="600">C</text>
        {/* Edges */}
        <line x1="665" y1="135" x2="705" y2="135" stroke="#9b59b6" strokeWidth="2" />
        <line x1="650" y1="150" x2="670" y2="168" stroke="#9b59b6" strokeWidth="2" />
        <line x1="720" y1="150" x2="700" y2="168" stroke="#9b59b6" strokeWidth="2" />
      </g>

      {/* Use cases row */}
      <g className="use-case-1">
        <text x="115" y="245" textAnchor="middle" fill="#e74c3c" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">Каталози, CMS</text>
        <text x="115" y="262" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">Гъвкава схема</text>
        <text x="115" y="280" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10" fontStyle="italic">MongoDB, Couchbase</text>
      </g>
      <g className="use-case-2">
        <text x="305" y="245" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">Кеширане, Сесии</text>
        <text x="305" y="262" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">Ултра бързо</text>
        <text x="305" y="280" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10" fontStyle="italic">Redis, DynamoDB</text>
      </g>
      <g className="use-case-3">
        <text x="495" y="245" textAnchor="middle" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">IoT, Time-series</text>
        <text x="495" y="262" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">Масивен запис</text>
        <text x="495" y="280" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10" fontStyle="italic">Cassandra, ScyllaDB</text>
      </g>
      <g className="use-case-4">
        <text x="685" y="245" textAnchor="middle" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">Социални мрежи</text>
        <text x="685" y="262" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">Връзки и графи</text>
        <text x="685" y="280" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10" fontStyle="italic">Neo4j, Neptune</text>
      </g>
    </svg>
  );
}
