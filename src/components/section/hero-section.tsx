import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Spotlight } from "../ui/spotlight";
import Image from "next/image";
import heroImg1 from "@/../public/heroimg1.avif";
import heroImg2 from "@/../public/heroimg2.avif";
import { serif } from "@/app/layout";

export function HeroSection() {
  return (
    <>
      <Spotlight className="absolute top-0 left-0" fill="white" />
      <Image
        src={heroImg1}
        alt="hero-img1"
        className="absolute -z-50 top-10 right-20 blur-sm animate-bounce w-20 h-20"
      />
      <Image
        src={heroImg2}
        alt="hero-img1"
        className="absolute -z-50 top-[30rem] right-0 xl:right-[20rem] blur-sm animate-bounce opacity-50 xl:opacity-80"
      />
      <Container className="mt-[12rem] mb-8 overflow-hidden ">
        <Hero className="relative">
          <HeroTitle className=" animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] font-semibold">
            Effectively{" "}
            <span className={`text-brand ${serif.className} italic`}>
              Translate
            </span>
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
