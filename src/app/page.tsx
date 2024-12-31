import { Footer } from "@/components/footer";
import ScrollZoom from "@/components/hero-image";
import { Companies } from "@/components/section/companies";
import { FAQ } from "@/components/section/faq";
import Features from "@/components/section/features";
import { HeroSection } from "@/components/section/hero-section";
import NewsLetter from "@/components/section/news-letter";
import { PricingComponent } from "@/components/section/pricing";
import { Testimonial } from "@/components/section/testimonials";

export default function Home() {
  return (
    <div className="px-4 xl:p-0 overflow-hidden">
      <HeroSection />
      <ScrollZoom />
      <Companies />
      <Features />
      <Testimonial />
      <PricingComponent />
      <FAQ />
      <NewsLetter />
      <Footer />
    </div>
  );
}
