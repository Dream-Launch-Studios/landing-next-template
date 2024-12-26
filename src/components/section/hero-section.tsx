import { Background } from "@/components/background";
import { Button, Highlight } from "@/components/button";
import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "../hero-image";

export function HeroSection() {
  return (
    <>
      <Container className="pt-20 mb-12 overflow-hidden">
        <Hero className="relative">
          <Background className="mix-blend-lighten opacity-10 absolute top-0 left-0 -z-50" />

          <Button className="">
            <Highlight>New Article on 5 benefits of localisation!</Highlight>
          </Button>

          <HeroTitle className="font-medium">
            Effectively Translate <br className="hidden md:block" /> Your Site
            With AI
          </HeroTitle>

          <HeroSubTitle>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores{" "}
            <br />
            enim sequi accusantium repudiandae laborum?
          </HeroSubTitle>

          <div className="mb-12 flex items-center gap-4 justify-center">
            <Button>Get Started</Button>
            <Button>Book a demo</Button>
          </div>

          <HeroImage />
        </Hero>
      </Container>
    </>
  );
}
