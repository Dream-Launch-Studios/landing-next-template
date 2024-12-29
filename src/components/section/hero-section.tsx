import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { Button } from "../ui/button";
import ScrollZoom from "../hero-image";

export function HeroSection() {
  return (
    <>
      <Container className="mt-[12rem] mb-8 overflow-hidden ">
        <Hero className="relative">
          <Background className="mix-blend-lighten opacity-10 absolute top-0 left-0 -z-50" />

          <HeroTitle className=" animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] font-semibold">
            Effectively <span className="text-brand">Translate</span>{" "}
            <br className="hidden md:block" /> Your Site With AI
          </HeroTitle>

          <HeroSubTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores{" "}
            <br />
            enim sequi accusantium repudiandae laborum?
          </HeroSubTitle>

          <div className="flex items-center gap-4 justify-center animate-fade-in [--animation-delay:200ms]">
            <Button>Get Started</Button>
          </div>
        </Hero>
        <ScrollZoom />
      </Container>
    </>
  );
}
