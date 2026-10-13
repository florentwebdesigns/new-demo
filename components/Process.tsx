import { business } from "@/content/site";
import { SectionHead } from "./SectionHead";

const steps = [
  {
    title: "Get in touch",
    text: `Call ${business.phone} or send a service request using the form below.`,
  },
  {
    title: "Explain what you need",
    text: "Tell us what you're seeing, where it is and when it started, plus any timing that works best for you.",
  },
  {
    title: "Talk through the next step",
    text: "We'll follow up to discuss the work and your options. Consultations and estimates are free.",
  },
];

export function Process() {
  return (
    <section className="section section--light process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead id="process-title" eyebrow="How it works" title="Getting started is simple." align="center" />
        <ol className="process__steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step" data-reveal style={{ "--stagger": i } as React.CSSProperties}>
              <span className="step__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
