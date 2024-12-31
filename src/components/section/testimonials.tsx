"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { Container } from "../container";
import { reviews } from "@/lib/constant";
import { motion } from "framer-motion";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border border-brand p-4",
        "border-brand bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-brand/40 dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeIn", delay: 0.3 }}
      className="animate-fade-in"
    >
      <Container className="py-16">
        <div className="mx-auto max-w-full text-center mb-10">
          <p className="text-md text-brand font-bold text-center mb-2">
            Testimonial
          </p>
          <h2 className="text-6xl tracking-tighter  sm:text-6xl font-semibold">
            <span className="mr-2 text-brand font-serif">Loved by</span>
            businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-primary-text font-geist max-w-5xl mx-auto text-center">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl mask-image-custom pb-10">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://framerusercontent.com/images/irbr4QZCegbD5uR6fKBtapXJKA.jpg"
              className="w-full h-full object-cover"
              alt="Background Texture"
            />
          </div>
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </Container>
    </motion.div>
  );
}
