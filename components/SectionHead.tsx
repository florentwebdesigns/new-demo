type Props = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHead({ id, eyebrow, title, lead, align = "left", tone = "light" }: Props) {
  return (
    <header className={`section-head section-head--${align} section-head--${tone}`} data-reveal>
      <p className="eyebrow">
        <span className="eyebrow__dot" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
