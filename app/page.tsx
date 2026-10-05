import NavTabs from "@/components/nav-tabs";
import Hero from "@/components/hero";
import SetsSection from "@/components/sets-section";
import PromoGrid from "@/components/promo-grid";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import { SETS } from "@/lib/sets";

export default function Home() {
  return (
    <>
      <NavTabs />
      <main id="main">
        <Hero />
        <PromoGrid />
        <AboutSection />
        {SETS.length > 0 ? (
          <SetsSection sets={SETS} />
        ) : (
          <section className="shell music-note" aria-label="Music">
            <span className="tab-mark" aria-hidden="true" />
            <p>
              I also DJ. The same interest in audio runs through my engineering
              work.
            </p>
            <a
              href="https://www.instagram.com/domenico.valentino27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Outside the workshop <span aria-hidden="true">↗</span>
            </a>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
