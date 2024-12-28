"use client";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { BorderBeam } from "./ui/border-beam";

export function HeroImage() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div ref={ref} className="mt-12 [perspective:2000px] py-8">
      <div
        className={cn(
          "max-w-[100rem] rounded-lg mx-auto bg-primary h-[70vh] p-4 flex flex-col gap-y-2 border border-transparent-white",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]"
        )}
      >
        <div className="h-[3%]">
          <div className="flex items-center gap-x-2">
            <div className="w-5 h-5  bg-red-500 rounded-full"></div>
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-background h-[97%] rounded-xl"></div>
        <BorderBeam size={180} duration={12} delay={9} />
      </div>
    </div>
  );
}
