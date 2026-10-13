"use client";

import { useState } from "react";
import { faqs } from "@/content/site";
import { Icon } from "./Icons";
import { SectionHead } from "./SectionHead";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section section--light faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <SectionHead
          id="faq-title"
          eyebrow="FAQs"
          title="Questions, answered."
          lead="Can't find what you're looking for? Call and ask. We're happy to talk it through."
        />
        <div className="faq__list" data-reveal>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq__item${isOpen ? " is-open" : ""}`}>
                <h3 className="faq__q">
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="faq__icon" aria-hidden="true">
                      <Icon name="plus" />
                    </span>
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="faq__panel" inert={!isOpen}>
                  <div className="faq__panel-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
