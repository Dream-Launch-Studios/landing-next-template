import Link from "next/link";
import { Container } from "./container";
// import { TwitterIcon } from "./icons/twitter";
// import { GithubIcon } from "./icons/github";
// import { SlackIcon } from "./icons/slack";

const footerLinks = [
  {
    title: "Products",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Career", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },

  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "Github", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-transparent-white mt-12 text-sm py-[5.6rem]">
      <Container className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex flex-row lg:flex-col justify-between h-full ">
            <div className="flex text-4xl  text-off-white font-bold items-center">
              Logo
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
              {/* <TwitterIcon />
              <GithubIcon />
              <SlackIcon /> */}
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
                      className="text-grey mb-3 block  hover:text-off-white transition-colors"
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
    </footer>
  );
};
