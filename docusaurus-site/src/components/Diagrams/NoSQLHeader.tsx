import React from 'react';

const styles = `
  @keyframes floatUp {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  @keyframes dataFlow {
    0% { transform: translateX(-20px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(20px); opacity: 0; }
  }
  @keyframes titleFade {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes iconPop {
    0% { opacity: 0; transform: scale(0.5); }
    70% { transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
  }
  .header-title { animation: titleFade 0.6s ease-out forwards; }
  .db-icon-1 { animation: iconPop 0.4s ease-out 0.2s forwards, floatUp 3s ease-in-out 1s infinite; opacity: 0; }
  .db-icon-2 { animation: iconPop 0.4s ease-out 0.35s forwards, floatUp 3s ease-in-out 1.2s infinite; opacity: 0; }
  .db-icon-3 { animation: iconPop 0.4s ease-out 0.5s forwards, floatUp 3s ease-in-out 1.4s infinite; opacity: 0; }
  .db-icon-4 { animation: iconPop 0.4s ease-out 0.65s forwards, floatUp 3s ease-in-out 1.6s infinite; opacity: 0; }
  .data-particle { animation: dataFlow 2s ease-in-out infinite; }
  .particle-1 { animation-delay: 0s; }
  .particle-2 { animation-delay: 0.4s; }
  .particle-3 { animation-delay: 0.8s; }
  .particle-4 { animation-delay: 1.2s; }
  .connection-line { animation: pulse 2s ease-in-out infinite; }
`;

export default function NoSQLHeader(): JSX.Element {
  return (
    <svg viewBox="0 0 800 200" style={{ maxWidth: '800px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="headerBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f093fb" />
          <stop offset="100%" stopColor="#f5576c" />
        </linearGradient>
        <filter id="headerGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="headerShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Background */}
      <rect x="0" y="0" width="800" height="200" rx="16" fill="url(#headerBgGrad)" />

      {/* Decorative circles */}
      <circle cx="50" cy="50" r="80" fill="white" fillOpacity="0.05" />
      <circle cx="750" cy="150" r="100" fill="white" fillOpacity="0.05" />
      <circle cx="400" cy="180" r="60" fill="white" fillOpacity="0.03" />

      {/* Connection lines */}
      <g className="connection-line">
        <line x1="180" y1="100" x2="280" y2="100" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="8,4" />
        <line x1="340" y1="100" x2="460" y2="100" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="8,4" />
        <line x1="520" y1="100" x2="620" y2="100" stroke="white" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="8,4" />
      </g>

      {/* Data particles */}
      <g filter="url(#headerGlow)">
        <circle className="data-particle particle-1" cx="230" cy="100" r="4" fill="url(#accentGrad)" />
        <circle className="data-particle particle-2" cx="400" cy="100" r="4" fill="url(#accentGrad)" />
        <circle className="data-particle particle-3" cx="570" cy="100" r="4" fill="url(#accentGrad)" />
      </g>

      {/* Database icons */}
      <g className="db-icon-1" filter="url(#headerShadow)">
        <circle cx="130" cy="100" r="40" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
        <text x="130" y="108" textAnchor="middle" fontSize="28">📄</text>
      </g>

      <g className="db-icon-2" filter="url(#headerShadow)">
        <circle cx="310" cy="100" r="40" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
        <text x="310" y="108" textAnchor="middle" fontSize="28">🔑</text>
      </g>

      <g className="db-icon-3" filter="url(#headerShadow)">
        <circle cx="490" cy="100" r="40" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
        <text x="490" y="108" textAnchor="middle" fontSize="28">📊</text>
      </g>

      <g className="db-icon-4" filter="url(#headerShadow)">
        <circle cx="670" cy="100" r="40" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
        <text x="670" y="108" textAnchor="middle" fontSize="28">🕸️</text>
      </g>

      {/* Title */}
      <g className="header-title">
        <text x="400" y="175" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600" letterSpacing="2">
          NOSQL DATABASES
        </text>
      </g>

      {/* Subtitle labels */}
      <text x="130" y="155" textAnchor="middle" fill="white" fillOpacity="0.7" fontFamily="system-ui, sans-serif" fontSize="9">
        Document
      </text>
      <text x="310" y="155" textAnchor="middle" fill="white" fillOpacity="0.7" fontFamily="system-ui, sans-serif" fontSize="9">
        Key-Value
      </text>
      <text x="490" y="155" textAnchor="middle" fill="white" fillOpacity="0.7" fontFamily="system-ui, sans-serif" fontSize="9">
        Wide-Column
      </text>
      <text x="670" y="155" textAnchor="middle" fill="white" fillOpacity="0.7" fontFamily="system-ui, sans-serif" fontSize="9">
        Graph
      </text>
    </svg>
  );
}
