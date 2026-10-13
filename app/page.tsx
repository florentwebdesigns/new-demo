import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { Nav } from "@/components/Nav";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Reveal } from "@/components/Reveal";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Problems />
        <Why />
        <About />
        <Process />
        <ServiceArea />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <Reveal />
    </>
  );
}
