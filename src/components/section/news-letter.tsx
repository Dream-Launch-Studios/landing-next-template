"use client";
import React from "react";
import { Button } from "../ui/button";

export default function NewsLetter() {
  return (
    <section className="py-14 max-w-screen-xl mx-auto ">
      <div className="relative overflow-hidden mx-4 px-4 py-14 bg-transparent rounded-2xl  md:px-8 md:mx-8">
        <div className="relative z-10 max-w-4xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-4xl text-white font-bold tracking-tighter font-geist">
              Subscribe to our <span className="text-brand">newsletter</span>
            </h3>
            <hr className="w-1/2 h-[1px] mx-auto mb-5" />
            <p className="leading-relaxed text-md text-primary-text">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
          </div>
          <div className="mt-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center bg-transparent rounded-lg p-1 sm:max-w-md sm:mx-auto border border-transparent-white"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="text-primary-text w-full p-2 outline-none border-none active:border-none focus:outline-none focus:ring-0 focus:border-none bg-inherit text-sm"
              />
              <Button className="border border-transparent-white bg-primary hover:bg-primary/50 transition-colors">
                Subscribe
              </Button>
            </form>
            <p className="mt-5 max-w-4xl text-md text-primary-text sm:mx-auto">
              No spam ever, we are care about the protection of your data. Read
              our
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
