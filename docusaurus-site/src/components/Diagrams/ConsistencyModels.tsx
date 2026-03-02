import React from 'react';

const styles = `
  @keyframes cmBarGrow {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes cmLabelFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes cmIconPop {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .cm-bar-strong { animation: cmBarGrow 0.6s ease-out 0.2s forwards; opacity: 0; }
  .cm-bar-eventual { animation: cmBarGrow 0.6s ease-out 0.4s forwards; opacity: 0; }
  .cm-bar-tunable { animation: cmBarGrow 0.6s ease-out 0.6s forwards; opacity: 0; }
  .cm-label-1 { animation: cmLabelFade 0.4s ease-out 0.3s forwards; opacity: 0; }
  .cm-label-2 { animation: cmLabelFade 0.4s ease-out 0.5s forwards; opacity: 0; }
  .cm-label-3 { animation: cmLabelFade 0.4s ease-out 0.7s forwards; opacity: 0; }
  .cm-icon-1 { animation: cmIconPop 0.4s ease-out 0.8s forwards; opacity: 0; }
  .cm-icon-2 { animation: cmIconPop 0.4s ease-out 0.9s forwards; opacity: 0; }
  .cm-icon-3 { animation: cmIconPop 0.4s ease-out 1.0s forwards; opacity: 0; }
`;

export default function ConsistencyModels(): JSX.Element {
  return (
    <svg viewBox="0 0 750 350" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="cmStrongGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="cmEventualGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="cmTunableGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <filter id="cmShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="35" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        Модели на Консистентност
      </text>
      <text x="375" y="58" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="13">
        Компромис между консистентност и производителност
      </text>

      {/* Strong Consistency - Row 1 (y base = 90) */}
      <text className="cm-label-1" x="40" y="110" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700">
        Strong Consistency
      </text>
      <text className="cm-label-1" x="40" y="128" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        Всички четат последния запис
      </text>
      <rect className="cm-bar-strong" x="240" y="98" width="450" height="35" rx="6" fill="url(#cmStrongGrad)" filter="url(#cmShadow)" />
      <text className="cm-label-1" x="460" y="122" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
        MongoDB (primary reads)
      </text>
      <circle className="cm-icon-1" cx="720" cy="116" r="18" fill="white" stroke="#3498db" strokeWidth="2" />
      <text className="cm-icon-1" x="720" y="122" textAnchor="middle" fontSize="16">🔒</text>

      {/* Eventual Consistency - Row 2 (y base = 165) */}
      <text className="cm-label-2" x="40" y="185" fill="#e74c3c" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700">
        Eventual Consistency
      </text>
      <text className="cm-label-2" x="40" y="203" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        Данните се синхронизират с времето
      </text>
      <rect className="cm-bar-eventual" x="240" y="173" width="300" height="35" rx="6" fill="url(#cmEventualGrad)" filter="url(#cmShadow)" />
      <text className="cm-label-2" x="390" y="197" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
        Cassandra (default)
      </text>
      <circle className="cm-icon-2" cx="570" cy="191" r="18" fill="white" stroke="#e74c3c" strokeWidth="2" />
      <text className="cm-icon-2" x="570" y="197" textAnchor="middle" fontSize="16">⏳</text>

      {/* Tunable Consistency - Row 3 (y base = 240) */}
      <text className="cm-label-3" x="40" y="260" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="700">
        Tunable Consistency
      </text>
      <text className="cm-label-3" x="40" y="278" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        Избирате ниво per-operation
      </text>
      <rect className="cm-bar-tunable" x="240" y="248" width="380" height="35" rx="6" fill="url(#cmTunableGrad)" filter="url(#cmShadow)" />
      <text className="cm-label-3" x="430" y="272" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
        Cassandra (ONE/QUORUM/ALL)
      </text>
      <circle className="cm-icon-3" cx="650" cy="266" r="18" fill="white" stroke="#2ecc71" strokeWidth="2" />
      <text className="cm-icon-3" x="650" y="272" textAnchor="middle" fontSize="16">⚙️</text>

      {/* Legend */}
      <text x="240" y="325" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">
        ← По-бързо / По-консистентно →
      </text>
      <line x1="370" y1="320" x2="590" y2="320" stroke="#bdc3c7" strokeWidth="2" strokeDasharray="4,2" />
      <polygon points="590,320 580,315 580,325" fill="#bdc3c7" />
    </svg>
  );
}
