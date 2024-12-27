"use client";

import Link from "next/link";
import { Container } from "./container";
import { Button } from "./button";

export function Header() {
  return (
    <header className="py-4 fixed top-0 left-0 w-full z-50">
      <Container className="flex items-center justify-between w-full p-8 bg-background/20 rounded-full h-navigation-height border border-transparent-white backdrop-blur-sm">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-4xl font-bold">
            Logo
          </Link>
          <nav className="">
            <ul className="flex items-center gap-8 [&_a]:text-sm [&_a]:text-grey">
              <Link
                href="#"
                className="hover:text-off-white transition-colors font-medium"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="hover:text-off-white transition-colors font-medium"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="hover:text-off-white transition-colors font-medium"
              >
                Contact
              </Link>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </Container>
    </header>
  );
}
