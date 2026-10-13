"use client";

import { useEffect, useRef, useState } from "react";
import { business, nav } from "@/content/site";
import { Icon } from "./Icons";
import { Wordmark } from "./Wordmark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector<HTMLElement>(n.href === "#top" ? "#top" : n.href))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Mobile menu: lock scroll, close on Escape, keep focus inside while open.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("menu-open");
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panel) {
        const items = Array.from(panel.querySelectorAll<HTMLElement>("a, button"));
        const all = [toggleRef.current!, ...items];
        const i = all.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) {
          e.preventDefault();
          all[all.length - 1].focus();
        } else if (!e.shiftKey && i === all.length - 1) {
          e.preventDefault();
          all[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 960px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`nav${scrolled || open ? " nav--solid" : ""}${open ? " nav--open" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label={`${business.shortName}, back to top`} onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className="nav__links" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} aria-current={active === item.href ? "location" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary btn--sm nav__call" href={business.phoneHref}>
            <Icon name="phone" />
            <span>Call for Service</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panelRef} className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                  <Icon name="arrow" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <a className="btn btn--primary btn--block" href={business.phoneHref}>
            <Icon name="phone" />
            Call {business.phone}
          </a>
          <a className="btn btn--ghost btn--block" href="#contact" onClick={() => setOpen(false)}>
            Request Service
          </a>
        </div>
      </div>
    </header>
  );
}
