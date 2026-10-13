/*
 * Temporary text-based brand treatment for the demo. It is not the company's official
 * logo; replace it with supplied artwork when available.
 */
export function Wordmark({ tone = "light", id = "wm" }: { tone?: "light" | "dark"; id?: string }) {
  return (
    <span className={`wordmark wordmark--${tone}`}>
      <svg className="wordmark__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="38" height="38" rx="10" fill="none" stroke="currentColor" strokeOpacity=".28" />
        <path d="M11 13h11a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5h-4a5 5 0 0 0-5 5v0a5 5 0 0 0 5 5h11" fill="none" stroke={`url(#${id})`} strokeWidth="3.2" strokeLinecap="round" transform="translate(0 -3)" />
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#42D9FF" />
            <stop offset="1" stopColor="#1677FF" />
          </linearGradient>
        </defs>
      </svg>
      <span className="wordmark__text">
        <span className="wordmark__name">Savino Jr</span>
        <span className="wordmark__sub">Plumbing &amp; Heating</span>
      </span>
    </span>
  );
}
