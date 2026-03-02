import React from 'react';

const styles = `
  @keyframes serverGrow {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes labelSlide {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .vertical-server { animation: serverGrow 0.4s ease-out 0.2s forwards; opacity: 0; }
  .vertical-big { animation: serverGrow 0.5s ease-out 0.5s forwards; opacity: 0; }
  .horizontal-1 { animation: serverGrow 0.3s ease-out 0.2s forwards; opacity: 0; }
  .horizontal-2 { animation: serverGrow 0.3s ease-out 0.35s forwards; opacity: 0; }
  .horizontal-3 { animation: serverGrow 0.3s ease-out 0.5s forwards; opacity: 0; }
  .horizontal-4 { animation: serverGrow 0.3s ease-out 0.65s forwards; opacity: 0; }
  .label-vertical { animation: labelSlide 0.4s ease-out 0.7s forwards; opacity: 0; }
  .label-horizontal { animation: labelSlide 0.4s ease-out 0.8s forwards; opacity: 0; }
`;

export default function ScalingModels(): JSX.Element {
  return (
    <svg viewBox="0 0 750 420" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="smScaleUpGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
        <linearGradient id="smScaleOutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <filter id="smShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="35" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        Вертикално vs Хоризонтално Мащабиране
      </text>

      {/* === LEFT SIDE: Vertical Scaling (Scale Up) === */}
      <text x="180" y="70" textAnchor="middle" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700">
        Scale Up ↑
      </text>
      <text x="180" y="90" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="12">
        По-мощен сървър
      </text>

      {/* Small server */}
      <g className="vertical-server" filter="url(#smShadow)">
        <rect x="130" y="110" width="100" height="60" rx="8" fill="url(#smScaleUpGrad)" />
        <text x="180" y="147" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          4 CPU / 8GB
        </text>
      </g>

      {/* Arrow */}
      <line x1="180" y1="180" x2="180" y2="210" stroke="#9b59b6" strokeWidth="3" />
      <polygon points="180,220 170,205 190,205" fill="#9b59b6" />

      {/* Big server */}
      <g className="vertical-big" filter="url(#smShadow)">
        <rect x="105" y="230" width="150" height="100" rx="10" fill="url(#smScaleUpGrad)" />
        <text x="180" y="265" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          64 CPU / 512GB
        </text>
        <text x="180" y="285" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="10">
          💰 Скъпо!
        </text>
        <text x="180" y="315" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="9">
          Физически лимит
        </text>
      </g>

      {/* Left Label */}
      <g className="label-vertical">
        <rect x="90" y="345" width="180" height="55" rx="8" fill="#f8f9fa" stroke="#9b59b6" strokeWidth="2" />
        <text x="180" y="370" textAnchor="middle" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          ❌ Има физически лимит
        </text>
        <text x="180" y="390" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          ❌ Скъпо при голям мащаб
        </text>
      </g>

      {/* VS */}
      <text x="375" y="220" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700">
        vs
      </text>

      {/* === RIGHT SIDE: Horizontal Scaling (Scale Out) === */}
      <text x="560" y="70" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700">
        Scale Out →
      </text>
      <text x="560" y="90" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="12">
        Повече сървъри
      </text>

      {/* Server cluster - row 1 */}
      <g className="horizontal-1" filter="url(#smShadow)">
        <rect x="430" y="110" width="80" height="55" rx="6" fill="url(#smScaleOutGrad)" />
        <text x="470" y="143" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600">
          Node 1
        </text>
      </g>
      <g className="horizontal-2" filter="url(#smShadow)">
        <rect x="520" y="110" width="80" height="55" rx="6" fill="url(#smScaleOutGrad)" />
        <text x="560" y="143" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600">
          Node 2
        </text>
      </g>
      <g className="horizontal-3" filter="url(#smShadow)">
        <rect x="610" y="110" width="80" height="55" rx="6" fill="url(#smScaleOutGrad)" />
        <text x="650" y="143" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600">
          Node 3
        </text>
      </g>

      {/* Plus signs */}
      <text x="560" y="195" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700">
        + + +
      </text>

      {/* Server cluster - row 2 */}
      <g className="horizontal-4" filter="url(#smShadow)">
        <rect x="430" y="210" width="80" height="55" rx="6" fill="url(#smScaleOutGrad)" />
        <text x="470" y="243" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600">
          Node 4
        </text>
      </g>
      <g className="horizontal-4" filter="url(#smShadow)">
        <rect x="520" y="210" width="80" height="55" rx="6" fill="url(#smScaleOutGrad)" />
        <text x="560" y="243" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600">
          Node 5
        </text>
      </g>
      <g className="horizontal-4" filter="url(#smShadow)">
        <rect x="610" y="210" width="80" height="55" rx="6" fill="url(#smScaleOutGrad)" />
        <text x="650" y="243" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="9" fontWeight="600">
          Node N...
        </text>
      </g>

      {/* Right Label */}
      <g className="label-horizontal">
        <rect x="460" y="285" width="200" height="70" rx="8" fill="#f8f9fa" stroke="#3498db" strokeWidth="2" />
        <text x="560" y="310" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          ✓ Почти неограничено
        </text>
        <text x="560" y="330" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          ✓ Евтин commodity hardware
        </text>
        <text x="560" y="347" textAnchor="middle" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600">
          NoSQL е проектиран за това!
        </text>
      </g>
    </svg>
  );
}
