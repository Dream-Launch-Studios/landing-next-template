import { Footer } from "@/components/footer";
import { Companies } from "@/components/section/companies";
import { HeroSection } from "@/components/section/hero-section";
import { Features } from "../components/section/features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Companies />
      <Features />
      <Footer />
    </>
  );
}
