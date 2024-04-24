import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Feutures } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Navbar } from "./components/navbar";
import * as Accordion from "@radix-ui/react-accordion";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Feutures />
        <Faq />
        <Pricing />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
