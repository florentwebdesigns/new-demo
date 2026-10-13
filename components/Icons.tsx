import type { IconName } from "@/content/site";

type Props = { name: IconName | UiIcon; className?: string };
type UiIcon = "phone" | "mail" | "pin" | "arrow" | "arrowDown" | "check" | "chat" | "clipboard" | "handshake" | "home" | "quote" | "plus" | "menu" | "close" | "clock";

/* One consistent line-icon set: 32px grid, 1.6 stroke, round caps. */
const paths: Record<IconName | UiIcon, React.ReactNode> = {
  boiler: (
    <>
      <rect x="8" y="4" width="16" height="22" rx="2" />
      <circle cx="16" cy="12" r="3.5" />
      <path d="M16 10.5v3M12 20h8M12 23h8M11 26v3M21 26v3" />
    </>
  ),
  waterHeater: (
    <>
      <path d="M9 7a7 3 0 0 1 14 0v18a7 3 0 0 1-14 0z" />
      <path d="M12 3v1.5M20 3v1.5M16 14c-1.6 2-2.4 3.3-2.4 4.4a2.4 2.4 0 0 0 4.8 0c0-1.1-.8-2.4-2.4-4.4z" />
    </>
  ),
  drain: (
    <>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="5.5" />
      <path d="M16 5v5.5M16 21.5V27M5 16h5.5M21.5 16H27" />
    </>
  ),
  fixture: (
    <>
      <path d="M6 14h20M8 14v3a8 8 0 0 0 16 0v-3" />
      <path d="M13 14V8a3 3 0 0 1 6 0M19 8h3M16 25v3M11 28h10" />
    </>
  ),
  gas: (
    <>
      <path d="M4 22h9M19 22h9M13 18h6v8h-6z" />
      <path d="M16 18v-3M13 13h6" />
      <path d="M16 4c-2.2 2.6-3.2 4.2-3.2 5.6a3.2 3.2 0 0 0 6.4 0C19.2 8.2 18.2 6.6 16 4z" />
    </>
  ),
  remodel: (
    <>
      <path d="M5 27V12l11-8 11 8v15z" />
      <path d="M11 27v-8h10v8M5 27h22" />
      <path d="M13 13h6" />
    </>
  ),
  disposal: (
    <>
      <path d="M5 8h22M9 8v2a7 7 0 0 0 14 0V8" />
      <rect x="11" y="17" width="10" height="10" rx="2" />
      <path d="M14 21.5l4 1M14 23.5l4-1" />
    </>
  ),
  plumbing: (
    <>
      <path d="M4 10h10a4 4 0 0 1 4 4v14" />
      <path d="M4 15h6a3 3 0 0 1 3 3v10" />
      <path d="M4 7v11M15 28h6M22 7l6 6-3 3-6-6z" />
    </>
  ),
  commercial: (
    <>
      <path d="M5 28V8l9-4v24M14 12h13v16" />
      <path d="M9 11h1M9 16h1M9 21h1M19 17h3M19 22h3M3 28h26" />
    </>
  ),
  phone: (
    <path d="M10.5 4.5l3 6-2.3 1.8a14 14 0 0 0 8.5 8.5l1.8-2.3 6 3-1.2 4.7c-.3.9-1.1 1.4-2 1.3C13.8 26.6 5.4 18.2 4.5 7.7c-.1-.9.4-1.7 1.3-2z" />
  ),
  mail: (
    <>
      <rect x="4" y="7" width="24" height="18" rx="2" />
      <path d="M5 9l11 8 11-8" />
    </>
  ),
  pin: (
    <>
      <path d="M16 28s9-8.2 9-15a9 9 0 0 0-18 0c0 6.8 9 15 9 15z" />
      <circle cx="16" cy="13" r="3.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="16" cy="16" r="11" />
      <path d="M16 10v6l4 3" />
    </>
  ),
  arrow: <path d="M6 16h20M19 9l7 7-7 7" />,
  arrowDown: <path d="M16 6v20M9 19l7 7 7-7" />,
  check: <path d="M7 16.5l5.5 5.5L25 9.5" />,
  chat: (
    <>
      <path d="M5 7h22v14H14l-6 5v-5H5z" />
      <path d="M10 12h12M10 16h8" />
    </>
  ),
  clipboard: (
    <>
      <rect x="7" y="6" width="18" height="22" rx="2" />
      <path d="M12 4h8v4h-8zM11 14h10M11 18h10M11 22h6" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 12l5-4 5 2 4-2 5 1 7 4" />
      <path d="M3 12l7 9 3 3 3-1 3 1 2-3 6-6" />
      <path d="M13 10l-3 4 3 1 4-3" />
    </>
  ),
  home: (
    <>
      <path d="M5 15L16 5l11 10M8 12.5V27h16V12.5" />
      <path d="M13 27v-7h6v7" />
    </>
  ),
  quote: (
    <path d="M8 23c3-1 4.5-3.5 4.5-7H8V9h7v7c0 5.5-2.6 9-7 10zM18 23c3-1 4.5-3.5 4.5-7H18V9h7v7c0 5.5-2.6 9-7 10z" />
  ),
  plus: <path d="M16 7v18M7 16h18" />,
  menu: <path d="M5 10h22M5 16h22M11 22h16" />,
  close: <path d="M8 8l16 16M24 8L8 24" />,
};

export function Icon({ name, className }: Props) {
  return (
    <svg
      className={className ? `icon ${className}` : "icon"}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
