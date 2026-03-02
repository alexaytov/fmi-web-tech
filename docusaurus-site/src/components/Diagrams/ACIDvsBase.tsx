import React from 'react';

const styles = `
  @keyframes abSlideIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes abItemFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .ab-acid-box { animation: abSlideIn 0.6s ease-out forwards; }
  .ab-base-box { animation: abSlideIn 0.6s ease-out 0.2s forwards; opacity: 0; }
  .ab-vs-text { animation: abSlideIn 0.4s ease-out 0.4s forwards; opacity: 0; }
  .ab-acid-item-1 { animation: abItemFadeIn 0.3s ease-out 0.5s forwards; opacity: 0; }
  .ab-acid-item-2 { animation: abItemFadeIn 0.3s ease-out 0.6s forwards; opacity: 0; }
  .ab-acid-item-3 { animation: abItemFadeIn 0.3s ease-out 0.7s forwards; opacity: 0; }
  .ab-acid-item-4 { animation: abItemFadeIn 0.3s ease-out 0.8s forwards; opacity: 0; }
  .ab-base-item-1 { animation: abItemFadeIn 0.3s ease-out 0.7s forwards; opacity: 0; }
  .ab-base-item-2 { animation: abItemFadeIn 0.3s ease-out 0.85s forwards; opacity: 0; }
  .ab-base-item-3 { animation: abItemFadeIn 0.3s ease-out 1.0s forwards; opacity: 0; }
`;

export default function ACIDvsBase(): JSX.Element {
  return (
    <svg viewBox="0 0 750 340" style={{ maxWidth: '750px', margin: '1rem auto', display: 'block' }}>
      <defs>
        <linearGradient id="abAcidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3498db" />
          <stop offset="100%" stopColor="#2980b9" />
        </linearGradient>
        <linearGradient id="abBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b59b6" />
          <stop offset="100%" stopColor="#8e44ad" />
        </linearGradient>
        <filter id="abShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.2" />
        </filter>
      </defs>
      <style>{styles}</style>

      {/* Title */}
      <text x="375" y="35" textAnchor="middle" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700">
        ACID vs BASE: Транзакционни Свойства
      </text>

      {/* ACID Box */}
      <rect className="ab-acid-box" x="30" y="60" width="320" height="260" rx="16" fill="url(#abAcidGrad)" filter="url(#abShadow)" />
      <text className="ab-acid-box" x="190" y="95" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700">ACID</text>
      <text className="ab-acid-box" x="190" y="118" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="12">Релационни бази данни</text>
      <rect className="ab-acid-box" x="50" y="135" width="280" height="170" rx="10" fill="white" fillOpacity="0.95" />

      {/* ACID Items */}
      <text className="ab-acid-item-1" x="70" y="165" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700">A</text>
      <text className="ab-acid-item-1" x="85" y="165" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13">tomicity - Всичко или нищо</text>

      <text className="ab-acid-item-2" x="70" y="195" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700">C</text>
      <text className="ab-acid-item-2" x="85" y="195" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13">onsistency - Данните са валидни</text>

      <text className="ab-acid-item-3" x="70" y="225" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700">I</text>
      <text className="ab-acid-item-3" x="82" y="225" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13">solation - Независими транзакции</text>

      <text className="ab-acid-item-4" x="70" y="255" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700">D</text>
      <text className="ab-acid-item-4" x="88" y="255" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13">urability - Промените се запазват</text>
      <rect className="ab-acid-item-4" x="55" y="275" width="270" height="22" rx="4" fill="#3498db" fillOpacity="0.1" />
      <text className="ab-acid-item-4" x="190" y="290" textAnchor="middle" fill="#3498db" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">🎯 Фокус: Силен интегритет на данните</text>

      {/* VS */}
      <text className="ab-vs-text" x="375" y="200" textAnchor="middle" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="700">vs</text>

      {/* BASE Box */}
      <rect className="ab-base-box" x="400" y="60" width="320" height="260" rx="16" fill="url(#abBaseGrad)" filter="url(#abShadow)" />
      <text className="ab-base-box" x="560" y="95" textAnchor="middle" fill="white" fontFamily="system-ui, sans-serif" fontSize="24" fontWeight="700">BASE</text>
      <text className="ab-base-box" x="560" y="118" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="system-ui, sans-serif" fontSize="12">NoSQL бази данни</text>
      <rect className="ab-base-box" x="420" y="135" width="280" height="170" rx="10" fill="white" fillOpacity="0.95" />

      {/* BASE Items */}
      <text className="ab-base-item-1" x="440" y="165" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700">B</text>
      <text className="ab-base-item-1" x="455" y="165" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13">asically Available</text>
      <text className="ab-base-item-1" x="440" y="182" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">Системата винаги е достъпна</text>

      <text className="ab-base-item-2" x="440" y="212" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700">S</text>
      <text className="ab-base-item-2" x="455" y="212" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13">oft State</text>
      <text className="ab-base-item-2" x="440" y="229" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">Състоянието може да се промени</text>

      <text className="ab-base-item-3" x="440" y="259" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="15" fontWeight="700">E</text>
      <text className="ab-base-item-3" x="455" y="259" fill="#2c3e50" fontFamily="system-ui, sans-serif" fontSize="13">ventual Consistency</text>
      <text className="ab-base-item-3" x="440" y="276" fill="#7f8c8d" fontFamily="system-ui, sans-serif" fontSize="11">Консистентност с времето</text>
      <rect className="ab-base-item-3" x="425" y="285" width="270" height="22" rx="4" fill="#9b59b6" fillOpacity="0.1" />
      <text className="ab-base-item-3" x="560" y="300" textAnchor="middle" fill="#9b59b6" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="600">🚀 Фокус: Висока достъпност и мащаб</text>
    </svg>
  );
}
