import { Icon } from "./Icons";
import { SectionHead } from "./SectionHead";

/* Each point restates something the company says about itself on its own website. */
const points = [
  {
    icon: "home" as const,
    title: "Family owned and operated",
    text: "You're working with a family business that puts its name on every job, whatever its size.",
  },
  {
    icon: "clipboard" as const,
    title: "Free consultations and estimates",
    text: "Understand the problem and your options before any work begins, with no cost to ask.",
  },
  {
    icon: "chat" as const,
    title: "Open communication",
    text: "Clear updates from the first call to the finished job, so you always know what's happening and what comes next.",
  },
  {
    icon: "handshake" as const,
    title: "Your home, treated like ours",
    text: "Respect for your space while we work, and pride in work that's done properly.",
  },
];

export function Why() {
  return (
    <section className="section section--light why" aria-labelledby="why-title">
      <div className="container why__inner">
        <SectionHead
          id="why-title"
          eyebrow="Why Savino Jr"
          title="The right help starts with a better experience."
          lead="Plumbing and heating problems are stressful enough. Working with us should be the easy part."
        />
        <ul className="why__grid" role="list">
          {points.map((p, i) => (
            <li key={p.title} className="why__item" data-reveal style={{ "--stagger": i } as React.CSSProperties}>
              <span className="why__icon">
                <Icon name={p.icon} />
              </span>
              <h3 className="why__title">{p.title}</h3>
              <p className="why__text">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
