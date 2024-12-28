"use client";

import Link from "next/link";
import { Container } from "./container";
import { footerLinks } from "@/lib/constant";
import { TwitterIcon } from "./icons/twitter";
import { GithubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeIn", delay: 0.3 }}
      className="border-t border-transparent-white mt-12 text-sm py-[5.6rem]"
    >
      <Container className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex flex-row lg:flex-col justify-between h-full ">
            <div className="flex text-4xl  text-off-white font-bold items-center">
              Logo
            </div>
            <div className="mt-auto flex space-x-4 [&_svg]:text-grey">
              <TwitterIcon className="hover:text-brand transition-colors" />
              <GithubIcon className="hover:text-brand transition-colors" />
              <SlackIcon className="hover:text-brand transition-colors" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0"
            >
              <h3 className="font-medium mb-3">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <Link
                      href={link.href}
                      className="text-grey mb-3 block  hover:text-brand transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </motion.footer>
  );
};
