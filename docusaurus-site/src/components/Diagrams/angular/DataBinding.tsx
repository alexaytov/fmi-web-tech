import React from 'react';

const styles = `
  @keyframes cardSlideUp {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes arrowFlow {
    0% { stroke-dashoffset: 20; }
    100% { stroke-dashoffset: -20; }
  }
  .prop-card { animation: cardSlideUp 0.5s ease-out 0.1s forwards; opacity: 0; }
  .event-card { animation: cardSlideUp 0.5s ease-out 0.3s forwards; opacity: 0; }
  .twoway-card { animation: cardSlideUp 0.5s ease-out 0.5s forwards; opacity: 0; }
  .arrow-prop { stroke-dasharray: 5 3; animation: arrowFlow 1s linear 0.8s infinite; }
  .arrow-event { stroke-dasharray: 5 3; animation: arrowFlow 1s linear 1s infinite reverse; }
`;

export default function DataBinding(): JSX.Element {
  return (
    <svg viewBox="0 0 750 300" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="dbPropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="dbEventGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="dbTwoWayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
        <filter id="dbShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="30" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        Data Binding в Angular
      </text>

      {/* Property Binding */}
      <g className="prop-card" filter="url(#dbShadow)">
        <rect x="30" y="60" width="210" height="200" rx="14" fill="url(#dbPropGrad)" />
        <text x="135" y="90" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="600">
          [Property] Binding
        </text>
        <text x="135" y="110" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="11">
          Component → Template
        </text>

        <rect x="45" y="125" width="180" height="120" rx="10" fill="white" fillOpacity="0.95" />

        {/* Arrow showing direction */}
        <rect x="55" y="140" width="60" height="30" rx="4" fill="#3498db" fillOpacity="0.2" />
        <text x="85" y="160" textAnchor="middle" fill="#2980b9" fontSize="10" fontWeight="600">Component</text>
        <line className="arrow-prop" x1="125" y1="155" x2="155" y2="155" stroke="#3498db" strokeWidth="3" />
        <polygon points="165,155 155,150 155,160" fill="#3498db" />
        <rect x="170" y="140" width="45" height="30" rx="4" fill="#3498db" fillOpacity="0.2" />
        <text x="192" y="160" textAnchor="middle" fill="#2980b9" fontSize="10" fontWeight="600">DOM</text>

        <text x="135" y="195" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="11">[src]="imageUrl"</text>
        <text x="135" y="212" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="11">[disabled]="isDisabled"</text>
        <text x="135" y="229" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="11">[class.active]="isActive"</text>
      </g>

      {/* Event Binding */}
      <g className="event-card" filter="url(#dbShadow)">
        <rect x="270" y="60" width="210" height="200" rx="14" fill="url(#dbEventGrad)" />
        <text x="375" y="90" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="600">
          (Event) Binding
        </text>
        <text x="375" y="110" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="11">
          Template → Component
        </text>

        <rect x="285" y="125" width="180" height="120" rx="10" fill="white" fillOpacity="0.95" />

        {/* Arrow showing direction */}
        <rect x="295" y="140" width="50" height="30" rx="4" fill="#e74c3c" fillOpacity="0.2" />
        <text x="320" y="160" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="600">DOM</text>
        <line className="arrow-event" x1="355" y1="155" x2="390" y2="155" stroke="#e74c3c" strokeWidth="3" />
        <polygon points="400,155 390,150 390,160" fill="#e74c3c" />
        <rect x="405" y="140" width="55" height="30" rx="4" fill="#e74c3c" fillOpacity="0.2" />
        <text x="432" y="160" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="600">Component</text>

        <text x="375" y="195" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="11">(click)="onClick()"</text>
        <text x="375" y="212" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="10">(input)="onInput($event)"</text>
        <text x="375" y="229" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="11">(submit)="onSubmit()"</text>
      </g>

      {/* Two-Way Binding */}
      <g className="twoway-card" filter="url(#dbShadow)">
        <rect x="510" y="60" width="210" height="200" rx="14" fill="url(#dbTwoWayGrad)" />
        <text x="615" y="90" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="600">
          [(Two-Way)] Binding
        </text>
        <text x="615" y="110" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="11">
          Component ↔ Template
        </text>

        <rect x="525" y="125" width="180" height="120" rx="10" fill="white" fillOpacity="0.95" />

        {/* Bidirectional arrows */}
        <rect x="535" y="140" width="60" height="30" rx="4" fill="#9b59b6" fillOpacity="0.2" />
        <text x="565" y="160" textAnchor="middle" fill="#8e44ad" fontSize="10" fontWeight="600">Component</text>
        <line x1="605" y1="148" x2="630" y2="148" stroke="#9b59b6" strokeWidth="2" />
        <line x1="630" y1="162" x2="605" y2="162" stroke="#9b59b6" strokeWidth="2" />
        <polygon points="635,148 628,144 628,152" fill="#9b59b6" />
        <polygon points="600,162 607,158 607,166" fill="#9b59b6" />
        <rect x="640" y="140" width="55" height="30" rx="4" fill="#9b59b6" fillOpacity="0.2" />
        <text x="667" y="160" textAnchor="middle" fill="#8e44ad" fontSize="10" fontWeight="600">Template</text>

        <text x="615" y="195" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="11">[(ngModel)]="name"</text>
        <text x="615" y="212" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="11">[(count)]="myCount"</text>
        <text x="615" y="229" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          "Banana in a box" 🍌📦
        </text>
      </g>
    </svg>
  );
}
