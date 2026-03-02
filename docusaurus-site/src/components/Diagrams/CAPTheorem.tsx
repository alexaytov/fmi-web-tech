import React from 'react';

const styles = `
  @keyframes capCirclePop {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes capFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .cap-c { animation: capCirclePop 0.5s ease-out 0.1s forwards; opacity: 0; }
  .cap-a { animation: capCirclePop 0.5s ease-out 0.3s forwards; opacity: 0; }
  .cap-p { animation: capCirclePop 0.5s ease-out 0.5s forwards; opacity: 0; }
  .cap-labels { animation: capFadeIn 0.4s ease-out 0.7s forwards; opacity: 0; }
  .cap-info { animation: capFadeIn 0.4s ease-out 0.9s forwards; opacity: 0; }
`;

export default function CAPTheorem(): JSX.Element {
  return (
    <svg viewBox="0 0 700 520" style={{ maxWidth: '700px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="capCGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="capAGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <linearGradient id="capPGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <filter id="capShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="350" y="35" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700">
        CAP Теорема
      </text>
      <text x="350" y="58" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="14">
        Изберете две от три в разпределени системи
      </text>

      {/* Triangle */}
      <polygon points="350,140 130,400 570,400" fill="none" stroke="#bdc3c7" strokeWidth="3" strokeDasharray="10,5" />

      {/* C - Consistency (top) */}
      <g className="cap-c" filter="url(#capShadow)">
        <circle cx="350" cy="140" r="50" fill="url(#capCGrad)" />
        <text x="350" y="150" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700">
          C
        </text>
      </g>
      <text x="350" y="80" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700">
        Consistency
      </text>
      <text x="350" y="210" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        Всички виждат еднакви данни
      </text>

      {/* A - Availability (bottom left) */}
      <g className="cap-a" filter="url(#capShadow)">
        <circle cx="130" cy="400" r="50" fill="url(#capAGrad)" />
        <text x="130" y="410" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700">
          A
        </text>
      </g>
      <text x="130" y="470" textAnchor="middle" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">
        Availability
      </text>
      <text x="130" y="490" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        Системата винаги отговаря
      </text>

      {/* P - Partition Tolerance (bottom right) */}
      <g className="cap-p" filter="url(#capShadow)">
        <circle cx="570" cy="400" r="50" fill="url(#capPGrad)" />
        <text x="570" y="410" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700">
          P
        </text>
      </g>
      <text x="570" y="470" textAnchor="middle" fill="#e74c3c" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">
        Partition Tolerance
      </text>
      <text x="570" y="490" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        Работи при мрежови проблеми
      </text>

      {/* Edge labels - without rotation, placed along edges */}
      <g className="cap-labels">
        <text x="210" y="255" fill="#8e44ad" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          CP: MongoDB
        </text>
        <text x="450" y="255" fill="#e67e22" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          AP: Cassandra
        </text>
        <text x="350" y="430" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="12">
          (P е задължително за NoSQL)
        </text>
      </g>

      {/* Info box */}
      <g className="cap-info">
        <rect x="175" y="280" width="350" height="90" rx="10" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />
        <text x="350" y="310" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          ⚡ Ключов избор:
        </text>
        <text x="350" y="335" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="12">
          CP → Силна консистентност, по-ниска достъпност
        </text>
        <text x="350" y="358" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="12">
          AP → Висока достъпност, евентуална консистентност
        </text>
      </g>
    </svg>
  );
}
