import React from 'react';

const styles = `
  @keyframes serviceDropIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes dashFlow {
    0% { stroke-dashoffset: 20; }
    100% { stroke-dashoffset: -20; }
  }
  @keyframes servicePulse {
    0%, 100% { filter: drop-shadow(0 0 5px rgba(243, 156, 18, 0.3)); }
    50% { filter: drop-shadow(0 0 15px rgba(243, 156, 18, 0.6)); }
  }
  .service-box { animation: serviceDropIn 0.5s ease-out 0.1s forwards, servicePulse 3s ease-in-out 1s infinite; opacity: 0; }
  .comp-a { animation: serviceDropIn 0.5s ease-out 0.4s forwards; opacity: 0; }
  .comp-b { animation: serviceDropIn 0.5s ease-out 0.5s forwards; opacity: 0; }
  .inject-line { stroke-dasharray: 6 4; animation: dashFlow 1.5s linear 0.7s infinite; }
  .benefits-box { animation: serviceDropIn 0.4s ease-out 0.8s forwards; opacity: 0; }
`;

export default function ServicesDI(): JSX.Element {
  return (
    <svg viewBox="0 0 750 340" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="diServiceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#d68910" />
        </linearGradient>
        <linearGradient id="diCompAGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="diCompBGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <filter id="diShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="30" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        Services и Dependency Injection
      </text>

      {/* Service (Singleton) */}
      <g className="service-box" filter="url(#diShadow)">
        <rect x="275" y="55" width="200" height="130" rx="14" fill="url(#diServiceGrad)" />
        <text x="375" y="83" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">
          🔧 DataService
        </text>
        <text x="375" y="100" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="9">
          {"@Injectable({providedIn: 'root'})"}
        </text>
        <rect x="290" y="110" width="170" height="60" rx="8" fill="white" fillOpacity="0.95" />
        <text x="375" y="130" textAnchor="middle" fill="#d68910" fontFamily="monospace" fontSize="10">
          items = signal([])
        </text>
        <text x="375" y="147" textAnchor="middle" fill="#d68910" fontFamily="monospace" fontSize="10">
          addItem(item)
        </text>
        <text x="375" y="161" textAnchor="middle" fill="#d68910" fontFamily="monospace" fontSize="10">
          getItems()
        </text>
      </g>

      {/* Arrows from Service to Components */}
      <path className="inject-line" d="M275,140 L150,200" stroke="#f39c12" strokeWidth="3" fill="none" />
      <path className="inject-line" d="M475,140 L600,200" stroke="#f39c12" strokeWidth="3" fill="none" />

      {/* inject() labels with background badges */}
      <rect x="155" y="158" width="70" height="24" rx="12" fill="#f39c12" />
      <text x="190" y="175" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700">
        inject()
      </text>
      <rect x="495" y="158" width="70" height="24" rx="12" fill="#f39c12" />
      <text x="530" y="175" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="700">
        inject()
      </text>

      {/* Component A */}
      <g className="comp-a" filter="url(#diShadow)">
        <rect x="30" y="200" width="220" height="100" rx="12" fill="url(#diCompAGrad)" />
        <text x="140" y="225" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          📦 ComponentA
        </text>
        <rect x="40" y="240" width="200" height="45" rx="6" fill="white" fillOpacity="0.95" />
        <text x="140" y="257" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="8">
          dataService = inject(DataService)
        </text>
        <text x="140" y="274" textAnchor="middle" fill="#7f8c8d" fontFamily="monospace" fontSize="8">
          this.dataService.addItem(...)
        </text>
      </g>

      {/* Component B */}
      <g className="comp-b" filter="url(#diShadow)">
        <rect x="500" y="200" width="220" height="100" rx="12" fill="url(#diCompBGrad)" />
        <text x="610" y="225" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">
          📦 ComponentB
        </text>
        <rect x="510" y="240" width="200" height="45" rx="6" fill="white" fillOpacity="0.95" />
        <text x="610" y="257" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="8">
          dataService = inject(DataService)
        </text>
        <text x="610" y="274" textAnchor="middle" fill="#7f8c8d" fontFamily="monospace" fontSize="8">
          @for (item of dataService.items())
        </text>
      </g>

      {/* Benefits box */}
      <g className="benefits-box">
        <rect x="260" y="215" width="230" height="80" rx="10" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />
        <text x="375" y="237" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
          ✓ Предимства на DI
        </text>
        <text x="280" y="257" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          • Singleton - споделено състояние
        </text>
        <text x="280" y="272" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          • Лесно тестване с mock-ове
        </text>
        <text x="280" y="287" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          • Разделение на concerns
        </text>
      </g>
    </svg>
  );
}
