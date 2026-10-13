import { business } from "@/content/site";
import { Icon } from "./Icons";

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="final__light" aria-hidden="true" />
      <div className="final__lines" aria-hidden="true" />
      <div className="container final__inner" data-reveal>
        <h2 id="final-title" className="final__title">
          When you need plumbing or heating help, <span className="hero__accent">start here.</span>
        </h2>
        <p className="final__lead">One call to talk through the problem, and free estimates so you know your options.</p>
        <div className="final__ctas">
          <a className="btn btn--primary btn--lg" href={business.phoneHref}>
            <Icon name="phone" />
            Call {business.phone}
          </a>
          <a className="btn btn--glass btn--lg" href="#contact">
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}
