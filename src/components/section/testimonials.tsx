import { testimonials } from "@/lib/constant";
import clsx from "clsx";
import Image from "next/image";
import { QuoteIcon } from "../icons/quote";

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="relative py-20 sm:py-10"
    >
      <div className="absolute inset-x-0 -top-10 opacity-50 z-10 m-auto h-[27rem] max-w-lg sm:h-64 sm:max-w-7xl"></div>
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h2 className="text-3xl tracking-tighter text-gray-100 sm:text-6xl font-semibold">
            <span className="bg-brand bg-clip-text text-transparent">
              Loved
            </span>{" "}
            by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-300 font-geist">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] p-6 shadow-xl">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-950" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-gray-100">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100/10 pt-6">
                        <div className="w-2/3">
                          <div className="font-display text-sm text-base text-gray-100">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-xs text-primary-text">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={60}
                            height={60}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
