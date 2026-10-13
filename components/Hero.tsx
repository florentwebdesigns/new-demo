import { business, companyStatements } from "@/content/site";
import { HeroArt } from "./HeroArt";
import { Icon } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow hero-in" style={{ "--d": "0ms" } as React.CSSProperties}>
            <span className="eyebrow__dot" aria-hidden="true" />
            Plumbing &amp; heating · {business.baseTown}, {business.state}
          </p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero-line"><span style={{ "--d": "80ms" } as React.CSSProperties}>Your home&rsquo;s</span></span>{" "}
            <span className="hero-line"><span style={{ "--d": "150ms" } as React.CSSProperties}>plumbing &amp;</span></span>{" "}
            <span className="hero-line"><span style={{ "--d": "220ms" } as React.CSSProperties}>heating, in</span></span>{" "}
            <span className="hero-line"><span className="hero__accent" style={{ "--d": "290ms" } as React.CSSProperties}>good hands.</span></span>
          </h1>
          <p className="hero__lead hero-in" style={{ "--d": "380ms" } as React.CSSProperties}>
            Boiler service, heating repairs, water heaters, drains, fixtures and gas lines for homes and businesses across{" "}
            {business.region}.
          </p>
          <div className="hero__ctas hero-in" style={{ "--d": "480ms" } as React.CSSProperties}>
            <a className="btn btn--primary btn--lg" href={business.phoneHref}>
              <Icon name="phone" />
              Call for Service
            </a>
            <a className="btn btn--glass btn--lg" href="#services">
              Explore Our Services
              <Icon name="arrowDown" />
            </a>
          </div>
          <ul className="hero__facts hero-in" style={{ "--d": "580ms" } as React.CSSProperties} aria-label="About the company">
            <li>
              <Icon name="check" />
              {companyStatements.familyOwned}
            </li>
            <li>
              <Icon name="check" />
              {companyStatements.freeEstimates}
            </li>
            <li>
              <Icon name="check" />
              {companyStatements.residentialAndCommercial}
            </li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__art-frame">
            <HeroArt className="hero__art" />
          </div>
          <div className="hero__chip glass">
            <span className="hero__chip-label">Call to talk it through</span>
            <span className="hero__chip-value">{business.phone}</span>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#services" aria-label="Scroll to services">
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
