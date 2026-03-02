import React from 'react';

const styles = `
  @keyframes rowSlide {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes checkPop {
    0% { opacity: 0; transform: scale(0); }
    70% { transform: scale(1.3); }
    100% { opacity: 1; transform: scale(1); }
  }
  .header-row { animation: rowSlide 0.4s ease-out 0.1s forwards; opacity: 0; }
  .row-1 { animation: rowSlide 0.4s ease-out 0.2s forwards; opacity: 0; }
  .row-2 { animation: rowSlide 0.4s ease-out 0.3s forwards; opacity: 0; }
  .row-3 { animation: rowSlide 0.4s ease-out 0.4s forwards; opacity: 0; }
  .row-4 { animation: rowSlide 0.4s ease-out 0.5s forwards; opacity: 0; }
  .check-1 { animation: checkPop 0.3s ease-out 0.6s forwards; opacity: 0; }
  .check-2 { animation: checkPop 0.3s ease-out 0.7s forwards; opacity: 0; }
  .check-3 { animation: checkPop 0.3s ease-out 0.8s forwards; opacity: 0; }
  .check-4 { animation: checkPop 0.3s ease-out 0.9s forwards; opacity: 0; }
`;

export default function SelectionMatrix(): JSX.Element {
  return (
    <svg viewBox="0 0 800 420" style={{ maxWidth: '800px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="docMatrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="kvMatrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="colMatrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <linearGradient id="graphMatrixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
        <filter id="matrixShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
        </filter>
      </defs>
      <style>{styles}</style>

      <text x="400" y="35" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        NoSQL Матрица за Избор
      </text>
      <text x="400" y="55" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="13">
        Кой тип е най-подходящ за вашия use case?
      </text>

      {/* Table background */}
      <rect x="30" y="75" width="740" height="320" rx="12" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" filter="url(#matrixShadow)" />

      {/* Header row */}
      <g className="header-row">
        <rect x="30" y="75" width="160" height="50" fill="#ecf0f1" />
        <text x="110" y="107" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">
          Use Case
        </text>
        <rect x="190" y="75" width="140" height="50" fill="url(#docMatrixGrad)" />
        <text x="260" y="102" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
          📄 Document
        </text>
        <text x="260" y="118" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="9">
          MongoDB
        </text>
        <rect x="330" y="75" width="140" height="50" fill="url(#kvMatrixGrad)" />
        <text x="400" y="102" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
          🔑 Key-Value
        </text>
        <text x="400" y="118" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="9">
          Redis
        </text>
        <rect x="470" y="75" width="140" height="50" fill="url(#colMatrixGrad)" />
        <text x="540" y="102" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
          📊 Wide-Column
        </text>
        <text x="540" y="118" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="9">
          Cassandra
        </text>
        <rect x="610" y="75" width="160" height="50" rx="0 12 0 0" fill="url(#graphMatrixGrad)" />
        <text x="690" y="102" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
          🕸️ Graph
        </text>
        <text x="690" y="118" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="9">
          Neo4j
        </text>
      </g>

      {/* Row 1: E-commerce */}
      <g className="row-1">
        <rect x="30" y="125" width="160" height="60" fill="white" />
        <text x="110" y="150" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          🛒 E-commerce
        </text>
        <text x="110" y="170" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          Продуктови каталози
        </text>
        <line x1="30" y1="185" x2="770" y2="185" stroke="#e9ecef" strokeWidth="1" />
      </g>
      <g className="check-1">
        <circle cx="260" cy="155" r="18" fill="#e74c3c" fillOpacity="0.1" stroke="#e74c3c" strokeWidth="2" />
        <text x="260" y="161" textAnchor="middle" fill="#e74c3c" fontFamily="system-ui, sans-serif" fontSize="16">✓</text>
      </g>

      {/* Row 2: Caching */}
      <g className="row-2">
        <rect x="30" y="185" width="160" height="60" fill="#fafafa" />
        <text x="110" y="210" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          ⚡ Кеширане
        </text>
        <text x="110" y="230" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          Сесии, бърз достъп
        </text>
        <line x1="30" y1="245" x2="770" y2="245" stroke="#e9ecef" strokeWidth="1" />
      </g>
      <g className="check-2">
        <circle cx="400" cy="215" r="18" fill="#3498db" fillOpacity="0.1" stroke="#3498db" strokeWidth="2" />
        <text x="400" y="221" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="16">✓</text>
      </g>

      {/* Row 3: IoT / Time-series */}
      <g className="row-3">
        <rect x="30" y="245" width="160" height="60" fill="white" />
        <text x="110" y="270" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          📈 IoT / Логове
        </text>
        <text x="110" y="290" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          Time-series данни
        </text>
        <line x1="30" y1="305" x2="770" y2="305" stroke="#e9ecef" strokeWidth="1" />
      </g>
      <g className="check-3">
        <circle cx="540" cy="275" r="18" fill="#2ecc71" fillOpacity="0.1" stroke="#2ecc71" strokeWidth="2" />
        <text x="540" y="281" textAnchor="middle" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="16">✓</text>
      </g>

      {/* Row 4: Social Networks */}
      <g className="row-4">
        <rect x="30" y="305" width="160" height="60" fill="#fafafa" />
        <text x="110" y="330" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          👥 Социални мрежи
        </text>
        <text x="110" y="350" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          Връзки, препоръки
        </text>
      </g>
      <g className="check-4">
        <circle cx="690" cy="335" r="18" fill="#9b59b6" fillOpacity="0.1" stroke="#9b59b6" strokeWidth="2" />
        <text x="690" y="341" textAnchor="middle" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="16">✓</text>
      </g>

      {/* Legend */}
      <text x="400" y="408" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        ✓ = Препоръчителен избор за този use case
      </text>
    </svg>
  );
}
