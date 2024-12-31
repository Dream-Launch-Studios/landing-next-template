"use client";

import { faq } from "@/lib/constant";
import { Container } from "../container";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import faq1 from "@/../public/faq1.avif";

interface FAQItem {
  question: string;
  answer: string;
}

function AccordionItem({ data }: { data: FAQItem }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className="mb-4 border border-brand/25 w-full p-2 rounded-2xl backdrop-blur-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <p className={cn("text-md font-semibold", open && "mb-5")}>
          {data.question}
        </p>
        {open ? <Minus size={16} /> : <Plus size={16} />}
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pt-2 text-sm text-primary-text">{data.answer}</p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  return (
    <>
      <Container className="py-16">
        <div className="mx-auto max-w-full text-center mb-10">
          <p className="text-md text-brand font-bold text-center mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-6xl tracking-tighter sm:text-6xl font-semibold">
            Everything you <span className="font-serif text-brand">need</span>{" "}
            to know.
          </h2>
          <p className="mt-4 text-md md:text-lg tracking-tight text-balance text-primary-text font-geist max-w-5xl mx-auto text-center">
            Got questions? We’ve got answers. Here’s everything you need to know
            before getting started.
          </p>
        </div>

        <div className="flex items-center flex-col max-w-5xl mx-auto relative">
          {faq.map((data, idx) => (
            <AccordionItem key={idx} data={data} />
          ))}
          <Image
            src={faq1}
            className="animate-bounce absolute bottom-0 -left-20 w-20 h-20 -z-50 blur-sm"
            alt="img"
          />
          <Image
            src={faq1}
            className="animate-bounce absolute -top-10 -right-10 w-20 h-20 -z-50 blur-sm"
            alt="img"
          />

          <div className="bg-brand absolute h-[10rem] w-[20rem] top-20 right-20 -z-50 blur-3xl opacity-55"></div>
        </div>
      </Container>
    </>
  );
}
