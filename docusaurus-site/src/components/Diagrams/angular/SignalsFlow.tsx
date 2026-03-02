import React from 'react';

const styles = `
  @keyframes sfBoxSlideIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes sfPulseGlow {
    0%, 100% { filter: drop-shadow(0 0 3px rgba(155, 89, 182, 0.3)); }
    50% { filter: drop-shadow(0 0 12px rgba(155, 89, 182, 0.6)); }
  }
  .sf-signal-box { animation: sfBoxSlideIn 0.5s ease-out 0.1s forwards; opacity: 0; }
  .sf-signal-glow { animation: sfPulseGlow 2s ease-in-out 1.5s infinite; }
  .sf-computed-box { animation: sfBoxSlideIn 0.5s ease-out 0.3s forwards; opacity: 0; }
  .sf-effect-box { animation: sfBoxSlideIn 0.5s ease-out 0.5s forwards; opacity: 0; }
  .sf-template-box { animation: sfBoxSlideIn 0.5s ease-out 0.7s forwards; opacity: 0; }
  .sf-arrows { animation: sfBoxSlideIn 0.4s ease-out 0.6s forwards; opacity: 0; }
  .sf-key-points { animation: sfBoxSlideIn 0.5s ease-out 1s forwards; opacity: 0; }
`;

export default function SignalsFlow(): JSX.Element {
  return (
    <svg viewBox="0 0 750 360" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="sfSignalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
        <linearGradient id="sfComputedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="sfTemplateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <linearGradient id="sfEffectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e74c3c" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <filter id="sfShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="30" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        Angular Signals: Реактивно Състояние
      </text>

      {/* Writable Signal - separate elements, not grouped */}
      <rect className="sf-signal-box" x="50" y="70" width="180" height="120" rx="12" fill="url(#sfSignalGrad)" filter="url(#sfShadow)" />
      <text className="sf-signal-box" x="140" y="100" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">
        ✏️ Writable Signal
      </text>
      <rect className="sf-signal-box" x="65" y="115" width="150" height="60" rx="8" fill="white" fillOpacity="0.95" />
      <text className="sf-signal-box" x="140" y="135" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="11">
        count = signal(0)
      </text>
      <text className="sf-signal-box" x="140" y="152" textAnchor="middle" fill="#7f8c8d" fontFamily="monospace" fontSize="10">
        count.set(5)
      </text>
      <text className="sf-signal-box" x="140" y="166" textAnchor="middle" fill="#7f8c8d" fontFamily="monospace" fontSize="10">
        count.update(v =&gt; v+1)
      </text>

      {/* Computed Signal */}
      <rect className="sf-computed-box" x="290" y="70" width="180" height="120" rx="12" fill="url(#sfComputedGrad)" filter="url(#sfShadow)" />
      <text className="sf-computed-box" x="380" y="100" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">
        📊 Computed Signal
      </text>
      <rect className="sf-computed-box" x="305" y="115" width="150" height="60" rx="8" fill="white" fillOpacity="0.95" />
      <text className="sf-computed-box" x="380" y="138" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="10">
        doubleCount = computed(
      </text>
      <text className="sf-computed-box" x="380" y="152" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="10">
        {'  () => count() * 2'}
      </text>
      <text className="sf-computed-box" x="380" y="166" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="10">
        )
      </text>

      {/* Effect box */}
      <rect className="sf-effect-box" x="520" y="70" width="180" height="120" rx="12" fill="url(#sfEffectGrad)" filter="url(#sfShadow)" />
      <text className="sf-effect-box" x="610" y="100" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">
        ⚡ effect()
      </text>
      <rect className="sf-effect-box" x="535" y="115" width="150" height="60" rx="8" fill="white" fillOpacity="0.95" />
      <text className="sf-effect-box" x="610" y="135" textAnchor="middle" fill="#c0392b" fontFamily="monospace" fontSize="10">
        {'effect(() => {'}
      </text>
      <text className="sf-effect-box" x="610" y="150" textAnchor="middle" fill="#c0392b" fontFamily="monospace" fontSize="10">
        {'  console.log(count())'}
      </text>
      <text className="sf-effect-box" x="610" y="165" textAnchor="middle" fill="#c0392b" fontFamily="monospace" fontSize="10">
        {'})'}
      </text>

      {/* Arrows */}
      {/* Arrow: Signal to Computed */}
      <line className="sf-arrows" x1="230" y1="130" x2="280" y2="130" stroke="#7f8c8d" strokeWidth="2" />
      <polygon className="sf-arrows" points="290,130 280,125 280,135" fill="#7f8c8d" />

      {/* Arrow: Signal to Effect (dashed, over top) */}
      <path className="sf-arrows" d="M230,100 L250,100 L250,50 L510,50 L510,80" stroke="#7f8c8d" strokeWidth="2" strokeDasharray="5,5" fill="none" />
      <polygon className="sf-arrows" points="510,90 505,80 515,80" fill="#7f8c8d" />

      {/* Arrows to Template */}
      <path className="sf-arrows" d="M140,200 L140,240 L375,240 L375,260" stroke="#7f8c8d" strokeWidth="2" fill="none" />
      <polygon className="sf-arrows" points="375,270 370,260 380,260" fill="#7f8c8d" />
      <line className="sf-arrows" x1="380" y1="200" x2="380" y2="235" stroke="#7f8c8d" strokeWidth="2" />

      {/* Template */}
      <rect className="sf-template-box" x="245" y="270" width="260" height="70" rx="12" fill="url(#sfTemplateGrad)" filter="url(#sfShadow)" />
      <text className="sf-template-box" x="375" y="295" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">
        🖥️ Template
      </text>
      <rect className="sf-template-box" x="260" y="305" width="230" height="25" rx="6" fill="white" fillOpacity="0.95" />
      <text className="sf-template-box" x="375" y="322" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="10">
        {'{{ count() }} · {{ doubleCount() }}'}
      </text>

      {/* Key points */}
      <rect className="sf-key-points" x="520" y="220" width="200" height="120" rx="10" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="2" />
      <text className="sf-key-points" x="620" y="245" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="12" fontWeight="600">
        Ключови предимства:
      </text>
      <text className="sf-key-points" x="535" y="265" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="11">
        ✓ Fine-grained reactivity
      </text>
      <text className="sf-key-points" x="535" y="282" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="11">
        ✓ Автоматичен tracking
      </text>
      <text className="sf-key-points" x="535" y="299" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="11">
        ✓ Без Zone.js overhead
      </text>
      <text className="sf-key-points" x="535" y="316" fill="#2ecc71" fontFamily="system-ui, sans-serif" fontSize="11">
        ✓ Performant updates
      </text>
    </svg>
  );
}
