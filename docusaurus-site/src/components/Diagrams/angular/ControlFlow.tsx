import React from 'react';

const styles = `
  @keyframes cardRise {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes codeHighlight {
    0%, 100% { fill: #e74c3c; }
    50% { fill: #f39c12; }
  }
  .if-card { animation: cardRise 0.5s ease-out 0.1s forwards; opacity: 0; }
  .for-card { animation: cardRise 0.5s ease-out 0.25s forwards; opacity: 0; }
  .switch-card { animation: cardRise 0.5s ease-out 0.4s forwards; opacity: 0; }
  .track-warning { animation: codeHighlight 2s ease-in-out 1s infinite; }
`;

export default function ControlFlow(): JSX.Element {
  return (
    <svg viewBox="0 0 750 400" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="cfIfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#27ae60" />
        </linearGradient>
        <linearGradient id="cfForGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="cfSwitchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
        <filter id="cfShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="30" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        Modern Control Flow (Angular 17+)
      </text>
      <text x="375" y="52" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="13">
        Заменя *ngIf, *ngFor, *ngSwitch
      </text>

      {/* @if Card */}
      <g className="if-card" filter="url(#cfShadow)">
        <rect x="30" y="75" width="220" height="300" rx="14" fill="url(#cfIfGrad)" />
        <text x="140" y="105" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">
          @if / @else
        </text>
        <text x="140" y="125" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="11">
          Условно рендериране
        </text>

        <rect x="45" y="140" width="190" height="215" rx="10" fill="white" fillOpacity="0.95" />

        <text x="140" y="165" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="11" fontWeight="600">
          {'@if (isLoggedIn()) {'}
        </text>
        <text x="140" y="183" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="10">
          {'  <p>Welcome!</p>'}
        </text>
        <text x="140" y="201" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="11" fontWeight="600">
          {'} @else {'}
        </text>
        <text x="140" y="219" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="10">
          {'  <p>Please login</p>'}
        </text>
        <text x="140" y="237" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="11" fontWeight="600">
          {'}'}
        </text>

        <line x1="55" y1="255" x2="225" y2="255" stroke="#ecf0f1" strokeWidth="2" />

        <text x="140" y="275" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600">
          Поддържа и @else if:
        </text>
        <text x="140" y="295" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="10">
          {'@if (a) {...}'}
        </text>
        <text x="140" y="313" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="10">
          {'@else if (b) {...}'}
        </text>
        <text x="140" y="331" textAnchor="middle" fill="#27ae60" fontFamily="monospace" fontSize="10">
          {'@else {...}'}
        </text>
      </g>

      {/* @for Card */}
      <g className="for-card" filter="url(#cfShadow)">
        <rect x="265" y="75" width="220" height="300" rx="14" fill="url(#cfForGrad)" />
        <text x="375" y="105" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">
          @for / @empty
        </text>
        <text x="375" y="125" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="11">
          Итерация по колекции
        </text>

        <rect x="280" y="140" width="190" height="215" rx="10" fill="white" fillOpacity="0.95" />

        <text x="375" y="165" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="10" fontWeight="600">
          @for (item of items();
        </text>
        <text className="track-warning" x="375" y="183" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="600">
          {'     track item.id) {'}
        </text>
        <text x="375" y="201" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="10">
          {'  <li>{{ item.name }}</li>'}
        </text>
        <text x="375" y="219" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="11" fontWeight="600">
          {'} @empty {'}
        </text>
        <text x="375" y="237" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="10">
          {'  <p>No items</p>'}
        </text>
        <text x="375" y="255" textAnchor="middle" fill="#2980b9" fontFamily="monospace" fontSize="11" fontWeight="600">
          {'}'}
        </text>

        <line x1="290" y1="273" x2="460" y2="273" stroke="#ecf0f1" strokeWidth="2" />

        <text x="375" y="295" textAnchor="middle" fill="#e74c3c" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="600">
          ⚠️ track е ЗАДЪЛЖИТЕЛЕН!
        </text>
        <text x="375" y="315" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          Подобрява performance
        </text>
        <text x="375" y="333" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          чрез уникална идентификация
        </text>
      </g>

      {/* @switch Card */}
      <g className="switch-card" filter="url(#cfShadow)">
        <rect x="500" y="75" width="220" height="300" rx="14" fill="url(#cfSwitchGrad)" />
        <text x="610" y="105" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="16" fontWeight="600">
          @switch / @case
        </text>
        <text x="610" y="125" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="11">
          Множество условия
        </text>

        <rect x="515" y="140" width="190" height="215" rx="10" fill="white" fillOpacity="0.95" />

        <text x="610" y="165" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="11" fontWeight="600">
          {'@switch (theme()) {'}
        </text>
        <text x="610" y="185" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="10">
          {"  @case ('dark') {"}
        </text>
        <text x="610" y="201" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="10">
          {'    <div>🌙</div>'}
        </text>
        <text x="610" y="217" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="10">
          {'  }'}
        </text>
        <text x="610" y="233" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="10">
          {"  @case ('light') {"}
        </text>
        <text x="610" y="249" textAnchor="middle" fill="#2c3e50" fontFamily="monospace" fontSize="10">
          {'    <div>☀️</div>'}
        </text>
        <text x="610" y="265" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="10">
          {'  }'}
        </text>
        <text x="610" y="281" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="10">
          {'  @default { ... }'}
        </text>
        <text x="610" y="297" textAnchor="middle" fill="#8e44ad" fontFamily="monospace" fontSize="11" fontWeight="600">
          {'}'}
        </text>

        <text x="610" y="330" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          Чисто и четимо за
        </text>
        <text x="610" y="348" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="10">
          множество условия
        </text>
      </g>
    </svg>
  );
}
