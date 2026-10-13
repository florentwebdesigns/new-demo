import { business } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Icon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="section section--mist contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <div className="contact__info" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" className="section-title">
            Let&rsquo;s talk about your plumbing or heating needs.
          </h2>
          <p className="section-lead">
            The quickest way to reach us is a phone call. You can also send a request with the form and we&rsquo;ll follow up to discuss it.
          </p>

          <ul className="contact__methods" role="list">
            <li>
              <a className="contact__method contact__method--primary" href={business.phoneHref}>
                <span className="contact__method-icon">
                  <Icon name="phone" />
                </span>
                <span>
                  <span className="contact__method-label">Call</span>
                  <span className="contact__method-value">{business.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a className="contact__method" href={`mailto:${business.email}`}>
                <span className="contact__method-icon">
                  <Icon name="mail" />
                </span>
                <span>
                  <span className="contact__method-label">Email</span>
                  <span className="contact__method-value contact__method-value--email">{business.email}</span>
                </span>
              </a>
            </li>
            <li>
              <div className="contact__method contact__method--static">
                <span className="contact__method-icon">
                  <Icon name="pin" />
                </span>
                <span>
                  <span className="contact__method-label">Based in</span>
                  <span className="contact__method-value">
                    {business.baseTown}, {business.state} · serving {business.region}
                  </span>
                </span>
              </div>
            </li>
            {business.hours.length > 0 && (
              <li>
                <div className="contact__method contact__method--static">
                  <span className="contact__method-icon">
                    <Icon name="clock" />
                  </span>
                  <span>
                    <span className="contact__method-label">Hours</span>
                    {business.hours.map((h) => (
                      <span key={h.days} className="contact__method-value">
                        {h.days}: {h.hours}
                      </span>
                    ))}
                  </span>
                </div>
              </li>
            )}
          </ul>
        </div>

        <div className="contact__form-wrap" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
