import { business, reviews } from "@/content/site";
import { Icon } from "./Icons";

export function About() {
  return (
    <section id="about" className="section section--mist about" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__visual" data-reveal="clip">
          <div className="about__panel">
            <div className="about__panel-grid" aria-hidden="true" />
            <svg className="about__panel-mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
              <path d="M11 10h11a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-4a5 5 0 0 0-5 5a5 5 0 0 0 5 5h11" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="about__panel-quote">
              &ldquo;We treat your home like it&rsquo;s our own home.&rdquo;
            </p>
            <p className="about__panel-meta">
              <span>{business.shortName}</span>
              <span>Owned and run by {business.owner}</span>
            </p>
            <div className="about__panel-pin">
              <Icon name="pin" />
              {business.baseTown}, {business.state}
            </div>
          </div>
        </div>

        <div className="about__copy" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            About us
          </p>
          <h2 id="about-title" className="section-title">
            Local service. A personal approach.
          </h2>
          <p>
            {business.legalName} is a family-owned plumbing and heating company based in {business.baseTown},{" "}
            {business.state}, and run by owner {business.owner.replace(/\.$/, "")}. We work in homes and businesses across{" "}
            {business.region}, on everything from boiler tune-ups and water heaters to gas lines and remodels.
          </p>
          <p>
            Our goal is simple: quality plumbing and heating work at a reasonable price, with clear communication from the first call to the
            finished job. We take pride in our work and in earning the trust of every customer.
          </p>

          {reviews.length > 0 && (
            <div className="about__reviews">
              {reviews.map((r) => (
                <figure key={r.author} className="review">
                  <Icon name="quote" className="review__mark" />
                  <blockquote>
                    <p>{r.quote}</p>
                  </blockquote>
                  <figcaption>
                    <span className="review__author">{r.author}</span>
                    <span className="review__detail">
                      {r.detail} · recommendation on{" "}
                      <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer">
                        {r.source}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
