import NavTabs from "@/components/nav-tabs";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import SetsSection from "@/components/sets-section";
import PromoGrid from "@/components/promo-grid";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import { SETS } from "@/lib/sets";

export default function Home() {
  return (
    <>
      <NavTabs />
      <Hero />
      <Ticker />
      <SetsSection sets={SETS} />
      <PromoGrid />
      <AboutSection />
      <Footer />
    </>
  );
}
