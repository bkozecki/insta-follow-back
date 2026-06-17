import styles from './HeroIllustration.module.css'

export const HeroIllustration = () => (
  <div className={styles.wrapper}>
    <svg
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      aria-hidden="true"
    >
      <circle cx="320" cy="40" r="60" fill="#FFF7ED" />
      <circle cx="60" cy="280" r="40" fill="#FFF7ED" />
      <circle cx="340" cy="240" r="24" fill="#FED7AA" opacity="0.5" />

      <rect
        x="40"
        y="40"
        width="240"
        height="220"
        rx="16"
        fill="white"
        style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.08))' }}
      />

      <rect x="40" y="40" width="240" height="48" rx="16" fill="#F97316" />
      <rect x="40" y="72" width="240" height="16" fill="#F97316" />
      <circle cx="64" cy="64" r="12" fill="rgba(255,255,255,0.2)" />
      <rect x="84" y="58" width="100" height="8" rx="4" fill="rgba(255,255,255,0.9)" />
      <rect x="84" y="70" width="60" height="6" rx="3" fill="rgba(255,255,255,0.5)" />

      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0, ${String(i * 40)})`}>
          <circle cx="64" cy="116" r="14" fill="#FFF7ED" />
          <circle cx="64" cy="116" r="6" fill="#FED7AA" />
          <rect x="86" y="110" width={80 + (i % 3) * 20} height="7" rx="3.5" fill="#E7E5E4" />
          <rect x="86" y="122" width={50 + (i % 2) * 15} height="5" rx="2.5" fill="#F5F4F3" />
          <circle cx="258" cy="116" r="8" fill="#FFF7ED" />
          <path
            d="M254 116 L258 120 L263 112"
            stroke="#F97316"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}

      <rect
        x="200"
        y="180"
        width="160"
        height="100"
        rx="12"
        fill="white"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.1))' }}
      />
      <rect x="200" y="180" width="160" height="36" rx="12" fill="#FFF7ED" />
      <rect x="200" y="204" width="160" height="12" fill="#FFF7ED" />
      <rect x="216" y="192" width="80" height="7" rx="3.5" fill="#FED7AA" />
      <circle cx="216" cy="232" r="10" fill="#F5F4F3" />
      <rect x="232" y="227" width="70" height="6" rx="3" fill="#E7E5E4" />
      <rect x="232" y="238" width="50" height="5" rx="2.5" fill="#F5F4F3" />
      <circle cx="216" cy="258" r="10" fill="#F5F4F3" />
      <rect x="232" y="253" width="85" height="6" rx="3" fill="#E7E5E4" />
      <rect x="232" y="264" width="55" height="5" rx="2.5" fill="#F5F4F3" />

      <circle cx="160" cy="20" r="4" fill="#FED7AA" />
      <circle cx="175" cy="20" r="4" fill="#F97316" opacity="0.4" />
      <circle cx="190" cy="20" r="4" fill="#FED7AA" />
    </svg>
  </div>
)
