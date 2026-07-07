const paths = {
  briefcase: (
    <>
      <rect x="8" y="20" width="48" height="34" rx="3" stroke="currentColor" strokeWidth="3" />
      <path d="M22 20 V14 a4 4 0 0 1 4-4 h16 a4 4 0 0 1 4 4 v6" stroke="currentColor" strokeWidth="3" />
      <path d="M8 34 H56" stroke="currentColor" strokeWidth="3" />
    </>
  ),
  gem: (
    <path
      d="M14 24 L32 10 L50 24 L32 56 Z M14 24 H50 M32 10 L24 24 L32 56 M32 10 L40 24 L32 56"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  ),
  ring: (
    <>
      <circle cx="32" cy="38" r="16" stroke="currentColor" strokeWidth="3" />
      <path d="M24 22 L32 8 L40 22" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </>
  ),
  flame: (
    <path
      d="M32 6 C24 20 16 26 16 38 a16 16 0 0 0 32 0 c0-8-5-12-7-16 c1 6-3 9-5 6 c-2-3 1-8-4-22 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  ),
  leaf: (
    <path
      d="M14 50 C14 24 40 10 54 10 C54 24 40 50 14 50 Z M14 50 C20 40 26 32 36 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  ),
  shield: (
    <>
      <path
        d="M32 6 L54 14 V30 C54 44 44 53 32 58 C20 53 10 44 10 30 V14 Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M22 31 L29 38 L43 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  chip: (
    <>
      <rect x="18" y="18" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="3" />
      <rect x="26" y="26" width="12" height="12" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 26 H10 M18 38 H10 M46 26 H54 M46 38 H54 M26 18 V10 M38 18 V10 M26 46 V54 M38 46 V54" stroke="currentColor" strokeWidth="2.5" />
    </>
  ),
  wheel: (
    <>
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="3" />
      <path d="M32 12 V22 M32 42 V52 M12 32 H22 M42 32 H52 M18 18 L25 25 M39 39 L46 46 M46 18 L39 25 M25 39 L18 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  monogram: (
    <>
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" />
      <text x="32" y="41" textAnchor="middle" fontSize="24" fontFamily="var(--font-display)" fontWeight="700" fill="currentColor">L</text>
    </>
  ),
  paw: (
    <>
      <ellipse cx="32" cy="42" rx="14" ry="11" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="16" cy="22" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="30" cy="14" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="46" cy="22" r="6" stroke="currentColor" strokeWidth="2.5" />
    </>
  ),
  ball: (
    <>
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" />
      <path d="M32 12 L40 20 L37 30 H27 L24 20 Z M27 30 L18 38 M37 30 L46 38 M24 20 L14 22 M40 20 L50 22 M18 38 L21 50 M46 38 L43 50" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </>
  ),
  flag: (
    <>
      <path d="M16 8 V56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 10 H46 L38 20 L46 30 H16" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </>
  ),
};

export default function CategoryIcon({ name, className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      {paths[name] || paths.monogram}
    </svg>
  );
}
