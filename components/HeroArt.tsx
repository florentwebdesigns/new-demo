/*
 * Technical line drawing of a hydronic heating setup (boiler, indirect water heater,
 * expansion tank, circulator, valves). It is a generic illustration, not a picture of
 * any real job. Swap in company photography via the `hero.image` slot in Hero.tsx when
 * the owner supplies it.
 */
const LINE = "var(--art-line)";
const BG = "var(--art-bg)";

function Pipe({ d, flow, delay = 0, reverse = false }: { d: string; flow: "supply" | "return"; delay?: number; reverse?: boolean }) {
  return (
    <g>
      <path d={d} stroke={LINE} strokeWidth="11" fill="none" strokeLinejoin="round" />
      <path d={d} stroke={BG} strokeWidth="8" fill="none" strokeLinejoin="round" />
      <path
        d={d}
        className={`art-flow art-flow--${flow}${reverse ? " art-flow--rev" : ""}`}
        style={{ animationDelay: `${delay}s` }}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Valve({ x, y, vertical = false }: { x: number; y: number; vertical?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})${vertical ? " rotate(90)" : ""}`}>
      <path d="M-13 -10 L0 0 L-13 10 Z M13 -10 L0 0 L13 10 Z" fill={BG} stroke={LINE} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M0 0 V-18 M-8 -18 H8" stroke={LINE} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}

function Callout({ x, y, tx, ty, label }: { x: number; y: number; tx: number; ty: number; label: string }) {
  const anchor = tx < x ? "end" : "start";
  return (
    <g className="art-callout">
      <circle cx={x} cy={y} r="3" fill="var(--cyan)" />
      <path d={`M${x} ${y} L${tx} ${ty}`} stroke="var(--art-dim)" strokeWidth="1" />
      <text x={tx + (anchor === "end" ? -8 : 8)} y={ty + 4} textAnchor={anchor}>
        {label}
      </text>
    </g>
  );
}

export function HeroArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 700" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="burner" cx="50%" cy="60%" r="60%">
          <stop offset="0" stopColor="#FFD089" />
          <stop offset=".45" stopColor="#FFB547" stopOpacity=".85" />
          <stop offset="1" stopColor="#FF8A3D" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10284a" />
          <stop offset="1" stopColor="#0a1c34" />
        </linearGradient>
        <pattern id="artGrid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0V25" stroke="var(--art-grid)" strokeWidth="1" />
        </pattern>
        <radialGradient id="gridFade" cx="55%" cy="45%" r="60%">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="gridMask">
          <rect width="800" height="700" fill="url(#gridFade)" />
        </mask>
      </defs>

      <rect width="800" height="700" fill="url(#artGrid)" mask="url(#gridMask)" />

      {/* Floor */}
      <path d="M40 620 H780" stroke={LINE} strokeWidth="1.5" />
      <path d="M40 620 H780" stroke="var(--art-dim)" strokeWidth="1" strokeDasharray="2 10" transform="translate(0 10)" />

      {/* Pipework */}
      <Pipe d="M360 250 V150 H750 V448 H712" flow="supply" />
      <Pipe d="M548 532 H525 V572 H500" flow="return" delay={0.9} />
      <Pipe d="M300 420 H230" flow="supply" delay={0.5} />
      <Pipe d="M230 500 H300" flow="return" delay={1.1} />
      <Pipe d="M110 60 V280" flow="return" delay={0.2} />
      <Pipe d="M180 280 V230 H250 V60" flow="supply" delay={0.6} />

      {/* Expansion tank */}
      <path d="M600 150 V220" stroke={LINE} strokeWidth="1.5" />
      <rect x="570" y="220" width="60" height="96" rx="30" fill={BG} stroke={LINE} strokeWidth="1.5" />
      <path d="M570 268 H630" stroke="var(--art-dim)" strokeWidth="1" strokeDasharray="3 4" />

      {/* Pressure gauge */}
      <path d="M490 150 V110" stroke={LINE} strokeWidth="1.5" />
      <circle cx="490" cy="92" r="18" fill={BG} stroke={LINE} strokeWidth="1.5" />
      <path d="M478 98 A13 13 0 1 1 502 98" stroke="var(--art-dim)" strokeWidth="1" />
      <path d="M490 92 L499 84" className="art-needle" stroke="var(--cyan)" strokeWidth="1.6" strokeLinecap="round" />

      {/* Circulator pump */}
      <circle cx="750" cy="300" r="20" fill={BG} stroke={LINE} strokeWidth="1.5" />
      <path d="M740 292 L750 310 L760 292 Z" stroke="var(--cyan)" strokeWidth="1.4" strokeLinejoin="round" />

      <Valve x={680} y={150} />
      <Valve x={750} y={390} vertical />
      <Valve x={110} y={110} vertical />

      {/* Boiler */}
      <rect x="300" y="250" width="200" height="370" rx="10" fill="url(#panel)" stroke={LINE} strokeWidth="1.5" />
      <path d="M300 286 H500" stroke="var(--art-dim)" strokeWidth="1" />
      <rect x="322" y="306" width="156" height="104" rx="6" fill={BG} stroke={LINE} strokeWidth="1.2" />
      <circle cx="362" cy="358" r="27" stroke={LINE} strokeWidth="1.2" />
      <path d="M344 368 A20 20 0 1 1 380 368" stroke="var(--art-dim)" strokeWidth="1" />
      <path d="M362 358 L374 346" className="art-needle art-needle--slow" stroke="var(--warm)" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="408" y="330" width="52" height="22" rx="3" fill="#06111f" stroke={LINE} strokeWidth="1" />
      <path d="M415 341 h6 m4 0 h6 m4 0 h6" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" className="art-blink" />
      <circle cx="418" cy="378" r="4" stroke={LINE} strokeWidth="1" />
      <circle cx="434" cy="378" r="4" stroke={LINE} strokeWidth="1" />
      <circle cx="450" cy="378" r="4" fill="var(--cyan)" opacity=".8" />

      {/* Burner window */}
      <rect x="345" y="448" width="110" height="66" rx="8" fill="#050d18" stroke={LINE} strokeWidth="1.2" />
      <ellipse cx="400" cy="492" rx="50" ry="26" fill="url(#burner)" className="art-flame" />
      <path d="M362 500 h76" stroke="#FFB547" strokeOpacity=".6" strokeWidth="1" strokeDasharray="2 4" />

      {/* Louvres */}
      {[548, 562, 576, 590].map((y) => (
        <path key={y} d={`M330 ${y} H470`} stroke="var(--art-dim)" strokeWidth="1.2" strokeLinecap="round" />
      ))}

      {/* Indirect water heater */}
      <path d="M80 300 Q80 280 145 280 Q210 280 210 300 V600 Q210 620 145 620 Q80 620 80 600 Z" fill="url(#panel)" stroke={LINE} strokeWidth="1.5" />
      <path d="M100 340 c30 18 60 -18 90 0 M100 380 c30 18 60 -18 90 0 M100 420 c30 18 60 -18 90 0 M100 460 c30 18 60 -18 90 0" stroke="var(--art-dim)" strokeWidth="1.1" strokeLinecap="round" />
      <rect x="120" y="530" width="50" height="28" rx="3" fill={BG} stroke={LINE} strokeWidth="1" />

      {/* Wall radiator */}
      <g transform="translate(560 430)">
        {[0, 18, 36, 54, 72, 90, 108, 126].map((x) => (
          <rect key={x} x={x} y="0" width="13" height="120" rx="6" fill={BG} stroke={LINE} strokeWidth="1.3" className="art-fin" style={{ animationDelay: `${x / 60}s` }} />
        ))}
        <path d="M-12 18 H152 M-12 102 H152" stroke={LINE} strokeWidth="1.3" />
      </g>

      {/* Annotations */}
      <Callout x={490} y={74} tx={420} ty={40} label="PRESSURE" />
      <Callout x={630} y={268} tx={664} ty={236} label="EXP. TANK" />
      <Callout x={145} y={600} tx={160} ty={656} label="HOT WATER" />
      <Callout x={640} y={150} tx={622} ty={108} label="SUPPLY" />
      <Callout x={525} y={560} tx={545} ty={600} label="RETURN" />
      <Callout x={700} y={550} tx={720} ty={600} label="RADIATOR" />

      {/* Dimension line */}
      <g stroke="var(--art-dim)" strokeWidth="1">
        <path d="M300 650 V670 M500 650 V670 M300 662 H500" />
        <path d="M300 662 l8 -4 M300 662 l8 4 M500 662 l-8 -4 M500 662 l-8 4" />
      </g>
    </svg>
  );
}
