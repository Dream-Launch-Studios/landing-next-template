import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "../hero-image";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <>
      <Container className="pt-20 mb-12 overflow-hidden">
        <Hero className="relative">
          <Background className="mix-blend-lighten opacity-10 absolute top-0 left-0 -z-50" />

          <HeroTitle className="font-medium animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
            Effectively <span className="text-brand">Translate</span>{" "}
            <br className="hidden md:block" /> Your Site With AI
          </HeroTitle>

          <HeroSubTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores{" "}
            <br />
            enim sequi accusantium repudiandae laborum?
          </HeroSubTitle>

          <div className="mb-12 flex items-center gap-4 justify-center">
            <Button>Get Started</Button>
          </div>

          <HeroImage />
        </Hero>
      </Container>
    </>
  );
}
