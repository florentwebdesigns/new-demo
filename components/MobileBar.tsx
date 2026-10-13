import { business } from "@/content/site";
import { Icon } from "./Icons";

/* Sticky call/request bar on small screens. The page reserves bottom padding so it never covers content. */
export function MobileBar() {
  return (
    <div className="mobile-bar" role="region" aria-label="Quick contact">
      <a className="mobile-bar__btn mobile-bar__btn--call" href={business.phoneHref}>
        <Icon name="phone" />
        Call Now
      </a>
      <a className="mobile-bar__btn" href="#contact">
        Request Service
      </a>
    </div>
  );
}
