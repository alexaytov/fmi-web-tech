import React from 'react';

const styles = `
  @keyframes vPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes circleDraw {
    from { stroke-dashoffset: 440; }
    to { stroke-dashoffset: 0; }
  }
  @keyframes textFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .circle-volume { animation: circleDraw 0.8s ease-out 0.2s forwards; stroke-dasharray: 440; stroke-dashoffset: 440; }
  .circle-velocity { animation: circleDraw 0.8s ease-out 0.4s forwards; stroke-dasharray: 440; stroke-dashoffset: 440; }
  .circle-variety { animation: circleDraw 0.8s ease-out 0.6s forwards; stroke-dasharray: 440; stroke-dashoffset: 440; }
  .text-1 { animation: textFade 0.4s ease-out 0.6s forwards; opacity: 0; }
  .text-2 { animation: textFade 0.4s ease-out 0.8s forwards; opacity: 0; }
  .text-3 { animation: textFade 0.4s ease-out 1.0s forwards; opacity: 0; }
`;

export default function ThreeVsBigData(): JSX.Element {
  return (
    <svg viewBox="0 0 700 320" style={{ maxWidth: '700px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="tvVolumeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="tvVelocityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="tvVarietyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <filter id="tvShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="350" y="35" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700">
        3V-тата на Big Data
      </text>
      <text x="350" y="58" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="13">
        Защо традиционните RDBMS не са достатъчни
      </text>

      {/* Volume Circle */}
      <circle cx="120" cy="175" r="70" fill="url(#tvVolumeGrad)" fillOpacity="0.15" filter="url(#tvShadow)" />
      <circle className="circle-volume" cx="120" cy="175" r="70" fill="none" stroke="url(#tvVolumeGrad)" strokeWidth="6" />

      {/* Volume Text */}
      <g className="text-1">
        <text x="120" y="155" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="32" fontWeight="700">V</text>
        <text x="120" y="180" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Volume</text>
        <text x="120" y="200" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">Петабайти данни</text>
        <text x="120" y="230" textAnchor="middle" fontSize="24">📊</text>
      </g>

      {/* Velocity Circle */}
      <circle cx="350" cy="175" r="70" fill="url(#tvVelocityGrad)" fillOpacity="0.15" filter="url(#tvShadow)" />
      <circle className="circle-velocity" cx="350" cy="175" r="70" fill="none" stroke="url(#tvVelocityGrad)" strokeWidth="6" />

      {/* Velocity Text */}
      <g className="text-2">
        <text x="350" y="155" textAnchor="middle" fill="#e74c3c" fontFamily="system-ui, sans-serif" fontSize="32" fontWeight="700">V</text>
        <text x="350" y="180" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Velocity</text>
        <text x="350" y="200" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">Реално време</text>
        <text x="350" y="230" textAnchor="middle" fontSize="24">⚡</text>
      </g>

      {/* Variety Circle */}
      <circle cx="580" cy="175" r="70" fill="url(#tvVarietyGrad)" fillOpacity="0.15" filter="url(#tvShadow)" />
      <circle className="circle-variety" cx="580" cy="175" r="70" fill="none" stroke="url(#tvVarietyGrad)" strokeWidth="6" />

      {/* Variety Text */}
      <g className="text-3">
        <text x="580" y="155" textAnchor="middle" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="32" fontWeight="700">V</text>
        <text x="580" y="180" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Variety</text>
        <text x="580" y="200" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">Разнородни формати</text>
        <text x="580" y="230" textAnchor="middle" fontSize="24">🔀</text>
      </g>

      {/* Connecting lines */}
      <line x1="190" y1="175" x2="280" y2="175" stroke="#bdc3c7" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="420" y1="175" x2="510" y2="175" stroke="#bdc3c7" strokeWidth="2" strokeDasharray="5,5" />

      {/* Bottom info */}
      <rect x="175" y="275" width="350" height="35" rx="8" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />
      <text x="350" y="298" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="12">
        NoSQL е проектиран да се справя и с трите V-та! 🚀
      </text>
    </svg>
  );
}
