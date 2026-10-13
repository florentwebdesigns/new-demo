import { business, nav, services } from "@/content/site";
import { Icon } from "./Icons";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Wordmark id="wm-footer" />
            <p>
              Family-owned plumbing and heating based in {business.baseTown}, {business.state}, serving homes and businesses across{" "}
              {business.region}.
            </p>
            <ul className="footer__social" role="list">
              {business.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h2 className="footer__heading">Explore</h2>
            <ul role="list">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
              <li>
                <a href="#service-area">Service Area</a>
              </li>
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Services</h2>
            <ul role="list">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__heading">Contact</h2>
            <ul role="list" className="footer__contact">
              <li>
                <a href={business.phoneHref}>
                  <Icon name="phone" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}>
                  <Icon name="mail" />
                  <span className="footer__email">{business.email}</span>
                </a>
              </li>
              <li>
                <span>
                  <Icon name="pin" />
                  {business.baseTown}, {business.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <p className="footer__links">
            <a href="/privacy">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <span>Website by FD Web Designs LLC</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
