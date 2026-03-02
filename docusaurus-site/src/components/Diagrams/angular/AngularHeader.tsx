import React from 'react';

const styles = `
  @keyframes titleSlide {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes featurePop {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes pulseGlow {
    0%, 100% { filter: drop-shadow(0 0 5px rgba(221, 0, 49, 0.3)); }
    50% { filter: drop-shadow(0 0 20px rgba(221, 0, 49, 0.6)); }
  }
  .header-title { animation: titleSlide 0.6s ease-out 0.2s forwards; opacity: 0; }
  .feature-1 { animation: featurePop 0.4s ease-out 0.4s forwards; opacity: 0; }
  .feature-2 { animation: featurePop 0.4s ease-out 0.5s forwards; opacity: 0; }
  .feature-3 { animation: featurePop 0.4s ease-out 0.6s forwards; opacity: 0; }
  .feature-4 { animation: featurePop 0.4s ease-out 0.7s forwards; opacity: 0; }
  .logo-glow { animation: pulseGlow 3s ease-in-out infinite; }
`;

export default function AngularHeader(): JSX.Element {
  return (
    <svg viewBox="0 0 800 200" style={{ maxWidth: '800px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="ahBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dd0031" />
          <stop offset="100%" stopColor="#c3002f" />
        </linearGradient>
        <filter id="ahGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Background */}
      <rect x="0" y="0" width="800" height="200" rx="16" fill="url(#ahBgGrad)" />

      {/* Decorative circles */}
      <circle cx="700" cy="50" r="100" fill="white" fillOpacity="0.05" />
      <circle cx="100" cy="150" r="80" fill="white" fillOpacity="0.05" />

      {/* Angular Logo */}
      <g className="logo-glow">
        <polygon points="100,40 155,150 45,150" fill="none" stroke="white" strokeWidth="4" />
        <polygon points="100,65 130,130 70,130" fill="white" fillOpacity="0.3" />
        <text x="100" y="115" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700">
          A
        </text>
      </g>

      {/* Title */}
      <g className="header-title">
        <text x="250" y="80" fill="white" fontFamily="system-ui, sans-serif" fontSize="32" fontWeight="700">
          Angular
        </text>
        <text x="250" y="110" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="16">
          Модерен JavaScript Framework
        </text>
      </g>

      {/* Feature badges */}
      <g className="feature-1">
        <rect x="250" y="130" width="90" height="28" rx="14" fill="white" fillOpacity="0.2" />
        <text x="295" y="149" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          🔄 Signals
        </text>
      </g>
      <g className="feature-2">
        <rect x="350" y="130" width="100" height="28" rx="14" fill="white" fillOpacity="0.2" />
        <text x="400" y="149" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          📦 Components
        </text>
      </g>
      <g className="feature-3">
        <rect x="460" y="130" width="75" height="28" rx="14" fill="white" fillOpacity="0.2" />
        <text x="497" y="149" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          💉 DI
        </text>
      </g>
      <g className="feature-4">
        <rect x="545" y="130" width="95" height="28" rx="14" fill="white" fillOpacity="0.2" />
        <text x="592" y="149" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          🛣️ Routing
        </text>
      </g>

      {/* Version badge */}
      <rect x="680" y="25" width="80" height="30" rx="15" fill="white" fillOpacity="0.9" />
      <text x="720" y="45" textAnchor="middle" fill="#dd0031" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700">
        v17+
      </text>
    </svg>
  );
}
