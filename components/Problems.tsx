import { business, problems, services } from "@/content/site";
import { Icon } from "./Icons";

export function Problems() {
  return (
    <section className="section section--dark problems" aria-labelledby="problems-title">
      <div className="problems__light" aria-hidden="true" />
      <div className="container problems__inner">
        <div className="problems__intro" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Sound familiar?
          </p>
          <h2 id="problems-title" className="section-title">
            Plumbing or heating problem? Let&rsquo;s get you the right help.
          </h2>
          <p className="section-lead">
            Most calls start with something you can see or feel. Tell us what&rsquo;s going on and we&rsquo;ll talk through the next step.
          </p>
          <div className="problems__cta">
            <a className="btn btn--primary btn--lg" href={business.phoneHref}>
              <Icon name="phone" />
              Call {business.phone}
            </a>
            <a className="btn btn--glass btn--lg" href="#contact">
              Describe the problem
            </a>
          </div>
        </div>

        <ol className="problems__list">
          {problems.map((p, i) => {
            const service = services.find((s) => s.id === p.service);
            return (
              <li key={p.title} className="problem" data-reveal="slide" style={{ "--stagger": i } as React.CSSProperties}>
                <span className="problem__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="problem__body">
                  <p className="problem__title">{p.title}</p>
                  {service && <p className="problem__service">{service.title}</p>}
                </div>
                <a className="problem__go" href="#contact" data-service={p.service} aria-label={`Request help: ${service?.title ?? p.title}`}>
                  <Icon name="arrow" />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
