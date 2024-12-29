import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[10%] xl:h-[20%] w-full bg-background -z-50">
        <div className="absolute h-full w-full bg-[radial-gradient(#F39866_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>
      <Container className="mt-[12rem] mb-8 overflow-hidden">
        <Hero className="relative">
          <HeroTitle className=" animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] font-semibold">
            Effectively <span className="text-brand">Translate</span>{" "}
            <br className="hidden md:block" /> Your Site With AI
          </HeroTitle>

          <HeroSubTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores{" "}
            <br />
            enim sequi accusantium repudiandae laborum?
          </HeroSubTitle>

          <div className="flex items-center gap-4 justify-center animate-fade-in [--animation-delay:200ms] ">
            <Button className="flex items-center group shadow-2xl shadow-orange-300">
              Get Started{" "}
              <ChevronRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </Hero>
      </Container>
    </>
  );
}
