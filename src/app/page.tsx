import { Footer } from "@/components/footer";
import { Companies } from "@/components/section/companies";
import Features from "@/components/section/features";
import { HeroSection } from "@/components/section/hero-section";
import NewsLetter from "@/components/section/news-letter";
import Testimonial from "@/components/section/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Companies />
      <Features />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  );
}
