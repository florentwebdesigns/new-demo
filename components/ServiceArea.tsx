import { business } from "@/content/site";
import { Icon } from "./Icons";

export function ServiceArea() {
  const towns = business.serviceTowns;
  return (
    <section id="service-area" className="section section--dark area" aria-labelledby="area-title">
      <div className="container area__inner">
        <div className="area__copy" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Service area
          </p>
          <h2 id="area-title" className="section-title">
            Based in {business.baseTown}. Serving {business.region}.
          </h2>
          <p className="section-lead">
            We work in homes and businesses throughout {business.region}. Not sure if your town is covered? Call and ask; it only takes a
            minute.
          </p>
          {towns.length > 0 && (
            <ul className="area__towns" aria-label="Towns we serve">
              {towns.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          <a className="btn btn--glass" href={business.phoneHref}>
            <Icon name="phone" />
            Check your area: {business.phone}
          </a>
        </div>

        <div className="area__radar" aria-hidden="true" data-reveal="clip">
          <div className="area__ring area__ring--1" />
          <div className="area__ring area__ring--2" />
          <div className="area__ring area__ring--3" />
          <div className="area__sweep" />
          <div className="area__pin">
            <Icon name="pin" />
            <span>
              {business.baseTown}, {business.state}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
