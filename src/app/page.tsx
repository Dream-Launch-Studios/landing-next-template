import { Footer } from "@/components/footer";
import { Companies } from "@/components/section/companies";
import { HeroSection } from "@/components/section/hero-section";
import { Features } from "../components/section/features";
import { Testimonial } from "@/components/section/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Companies />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
}
