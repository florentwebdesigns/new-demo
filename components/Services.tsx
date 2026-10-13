import { services } from "@/content/site";
import { Icon } from "./Icons";
import { SectionHead } from "./SectionHead";

export function Services() {
  const featured = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="services" className="section section--light" aria-labelledby="services-title">
      <div className="container">
        <SectionHead
          id="services-title"
          eyebrow="What we do"
          title="Plumbing & heating services"
          lead="Residential and commercial work, from a boiler that needs attention to the plumbing behind a new kitchen. Find the service that matches what you need."
        />

        <div className="services">
          {featured && (
            <article className="service service--featured" data-reveal>
              <div className="service--featured__glow" aria-hidden="true" />
              <div className="service__icon service__icon--lg">
                <Icon name={featured.icon} />
              </div>
              <p className="service__tag">Heating season essential</p>
              <h3 className="service__title">{featured.title}</h3>
              <p className="service__text">{featured.summary}</p>
              {featured.points && (
                <ul className="service__points">
                  {featured.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              <a className="btn btn--primary" href={`#contact`} data-service={featured.id}>
                Request heating service
                <Icon name="arrow" />
              </a>
            </article>
          )}

          <ul className="services__grid" role="list">
            {rest.map((s, i) => (
              <li key={s.id} className="service" data-reveal style={{ "--stagger": i } as React.CSSProperties}>
                <div className="service__icon">
                  <Icon name={s.icon} />
                </div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__text">{s.summary}</p>
                <a className="service__link" href="#contact" data-service={s.id} aria-label={`Request service: ${s.title}`}>
                  Request service
                  <Icon name="arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
