import React from 'react';

const styles = `
  @keyframes parentSlide {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes childSlide {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes dataFlowDown {
    0% { transform: translateY(-10px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(10px); opacity: 0; }
  }
  .parent-comp { animation: parentSlide 0.5s ease-out 0.1s forwards; opacity: 0; }
  .child-comp { animation: childSlide 0.5s ease-out 0.3s forwards; opacity: 0; }
  .arrows { animation: parentSlide 0.4s ease-out 0.5s forwards; opacity: 0; }
  .legends { animation: parentSlide 0.4s ease-out 0.7s forwards; opacity: 0; }
`;

export default function ComponentCommunication(): JSX.Element {
  return (
    <svg viewBox="0 0 750 360" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="ccParentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dd0031" />
          <stop offset="100%" stopColor="#c3002f" />
        </linearGradient>
        <linearGradient id="ccChildGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <filter id="ccShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="30" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        Комуникация между Компоненти
      </text>

      {/* Parent Component */}
      <g className="parent-comp" filter="url(#ccShadow)">
        <rect x="225" y="55" width="300" height="100" rx="14" fill="url(#ccParentGrad)" />
        <text x="375" y="83" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="600">
          👨 Parent Component
        </text>
        <rect x="240" y="95" width="270" height="45" rx="8" fill="white" fillOpacity="0.95" />
        <text x="375" y="113" textAnchor="middle" fill="#c3002f" fontFamily="monospace" fontSize="9">
          parentData = signal('Hello from parent')
        </text>
        <text x="375" y="129" textAnchor="middle" fill="#c3002f" fontFamily="monospace" fontSize="9">
          {'<app-child [message]="parentData()">'}
        </text>
      </g>

      {/* Arrows */}
      <g className="arrows">
        {/* input() arrow */}
        <line x1="300" y1="160" x2="300" y2="210" stroke="#2ecc71" strokeWidth="3" />
        <polygon points="300,218 295,208 305,208" fill="#2ecc71" />
        <rect x="312" y="172" width="70" height="26" rx="6" fill="#2ecc71" />
        <text x="347" y="190" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">input()</text>

        {/* model() two-way arrow */}
        <line x1="420" y1="160" x2="420" y2="210" stroke="#9b59b6" strokeWidth="4" />
        <line x1="432" y1="210" x2="432" y2="160" stroke="#9b59b6" strokeWidth="4" />
        <polygon points="420,217 415,207 425,207" fill="#9b59b6" />
        <polygon points="432,153 427,163 437,163" fill="#9b59b6" />
        <rect x="445" y="170" width="80" height="30" rx="6" fill="#9b59b6" />
        <text x="485" y="190" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">model()</text>
      </g>

      {/* Child Component */}
      <g className="child-comp" filter="url(#ccShadow)">
        <rect x="225" y="220" width="300" height="110" rx="14" fill="url(#ccChildGrad)" />
        <text x="375" y="248" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="600">
          👶 Child Component
        </text>
        <rect x="240" y="260" width="270" height="55" rx="8" fill="white" fillOpacity="0.95" />
        <text x="375" y="278" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="9">
          {"message = input<string>('default')"}
        </text>
        <text x="375" y="294" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="9">
          {"count = model<number>(0) // two-way"}
        </text>
        <text x="375" y="310" textAnchor="middle" fill="#7f8c8d" fontFamily="monospace" fontSize="9">
          {'{{ message() }} • {{ count() }}'}
        </text>
      </g>

      {/* Legend boxes */}
      <g className="legends">
        <rect x="50" y="170" width="140" height="80" rx="8" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />
        <text x="120" y="190" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          input()
        </text>
        <text x="120" y="210" textAnchor="middle" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="10">
          ↓ Parent → Child
        </text>
        <text x="120" y="225" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="9">
          Read-only signal
        </text>
        <text x="120" y="240" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="9">
          input.required()
        </text>

        <rect x="560" y="170" width="140" height="80" rx="8" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />
        <text x="630" y="190" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">
          model()
        </text>
        <text x="630" y="210" textAnchor="middle" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="10">
          ↕ Two-way binding
        </text>
        <text x="630" y="225" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="9">
          Writable signal
        </text>
        <text x="630" y="240" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="9">
          {'[(prop)]="signal"'}
        </text>
      </g>
    </svg>
  );
}
