"use client";

import Link from "next/link";
import { Container } from "./container";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [hamburgerIcon, setHamhamburgerIcon] = useState<boolean>(false);

  const handleToggle = () => {
    console.log("clicked");
    setHamhamburgerIcon(!hamburgerIcon);
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) html.classList.toggle("overflow-hidden", hamburgerIcon);
  }, [hamburgerIcon]);

  useEffect(() => {
    const closehamburgerNavigation = () => setHamhamburgerIcon(false);
    window.addEventListener("orientationchange", closehamburgerNavigation);

    window.addEventListener("resize", closehamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closehamburgerNavigation);

      window.removeEventListener("resize", closehamburgerNavigation);
    };
  }, []);

  return (
    <header className="py-4 fixed top-0 left-0 w-full z-50 animate-fade-in [--animation-delay:200ms]">
      <Container className="flex items-center justify-between w-full p-8 bg-background/20 rounded-full h-navigation-height border border-transparent-white backdrop-blur-sm">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-4xl font-bold">
            Logo
          </Link>
          <nav
            className={cn(
              "transition-opacity duration-500 h-[calc(100vh_-_var(--navigation-height))] overflow-auto md:block fixed top-navigation-height left-0 w-full bg-background md:relative md:h-auto md:top-0 md:w-auto md:bg-transparent md:opacity-100 md:translate-x-0 ",
              hamburgerIcon
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-100vw]"
            )}
          >
            <ul
              className={cn(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b  [&_li]:border-transparent-white md:[&_li]:border-none ease-in [&_a]:text-primary-text [&_a:hover]:text-brand [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-xl [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerIcon && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Method</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Customers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Changelog</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
            </ul>
          </nav>
        </div>

        <button
          className="ml-6 md:hidden transition-transform"
          onClick={handleToggle}
        >
          <span className="sr-only ">Toggle Menu</span>
          {hamburgerIcon ? <X /> : <Menu />}
        </button>

        <div className="hidden xl:flex items-center gap-2">
          <Button size="medium" variant="secondary" className="">
            Log in
          </Button>
          <Button className="" size="medium">
            Sign up
          </Button>
        </div>
      </Container>
    </header>
  );
}
