"use client";

import { CheckIcon } from "lucide-react";
import { Container } from "../container";
import { motion } from "framer-motion";

export function PricingComponent() {
  return (
    <Container>
      <motion.section
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeIn", delay: 0.3 }}
        className="overflow-hidden py-16  text-neutral-800 dark:text-neutral-50 lg:pb-32"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-20 max-w-4xl text-center">
            <p className="text-md text-brand font-bold text-center mb-2">
              Pricing
            </p>
            <h2 className="mb-4 text-6xl font-bold tracking-tighter">
              Simple <span className="font-serif">pricing,</span> no surprises.
            </h2>
            <p className="text-lg tracking-tight text-primary-text">
              Choose a plan that fits your needs, with everything you need to
              stay organized and productive.
            </p>
          </div>

          <div className="-m-6 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 ">
            <div className="w-full p-6 ">
              <div className="h-full transform-gpu rounded-2xl border border-transparent-white bg-white transition duration-500 hover:-translate-y-2  dark:bg-neutral-900 ">
                <div className="border-b border-transparent-white p-12 ">
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl tracking-tighter">Solo</h4>
                    <p className="mb-2 text-xl font-semibold tracking-tight">
                      From $29/mo
                    </p>
                    <p className="tracking-tight text-sm">
                      The ideal plan for larger businesses who require heavy
                      usage.
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <ul className="-m-1.5 mb-11 text-sm">
                    <FeatureItem>50 Users</FeatureItem>
                    <FeatureItem>Unlimited Projects</FeatureItem>
                    <FeatureItem>Project Schedule</FeatureItem>
                    <FeatureItem>150+ Integrations</FeatureItem>
                    <FeatureItem>Priority Email Support</FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true}>
                    Try 14 Days Free Trial
                  </PricingButton>
                </div>
              </div>
            </div>

            <div className="w-full p-6 relative">
              <div
                className="transform-gpu overflow-hidden rounded-2xl p-px transition duration-500 hover:-translate-y-2"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/eldoraui/image/upload/v1734021310/advanced-gradient_un8eg6.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="h-full rounded-2xl bg-white dark:bg-neutral-900 border border-transparent-white overflow-hidden">
                  <div
                    className="p-12"
                    style={{
                      backgroundImage:
                        "url('https://res.cloudinary.com/eldoraui/image/upload/v1734021310/advanced-gradient_un8eg6.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="pr-9">
                      <h4 className="mb-6 text-6xl tracking-tighter text-white">
                        Startup
                      </h4>
                      <div className="mb-2">
                        <p className="text-xl font-semibold tracking-tighter text-white">
                          From $99/mo
                        </p>
                        <p className="text-sm font-semibold">(New Year Sale)</p>
                      </div>
                      <p className="tracking-tight text-white text-sm">
                        The ideal plan for larger businesses who require heavy
                        usage.
                      </p>
                    </div>
                  </div>
                  <div className="p-12 pb-11">
                    <ul className="-m-1.5 mb-11 text-sm">
                      <FeatureItem>50 Users</FeatureItem>
                      <FeatureItem>Unlimited Projects</FeatureItem>
                      <FeatureItem>Project Schedule</FeatureItem>
                      <FeatureItem>150+ Integrations</FeatureItem>
                      <FeatureItem>Priority Email Support</FeatureItem>
                    </ul>
                    <PricingButton noCardRequired={true}>
                      Try 14 Days Free Trial
                    </PricingButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-6 ">
              <div className="flex h-full transform-gpu flex-col justify-between rounded-2xl border border-transparent-white bg-white transition duration-500 hover:-translate-y-2  dark:bg-neutral-900">
                <div className="border-transparent-white p-12 ">
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl tracking-tighter">Custom</h4>
                    <p className="mb-2 text-xl font-semibold tracking-tighter">
                      From $399/mo
                    </p>
                    <p className="tracking-tight text-sm">
                      We can customize a plan that suits the exact needs of your
                      business.
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <PricingButton>Contact sales</PricingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center py-1.5">
      <CheckIcon className="mr-3 size-3 text-green-400" />
      <span className="font-medium tracking-tight text-primary-text">
        {children}
      </span>
    </li>
  );
};

const PricingButton = ({
  children,
  href,

  noCardRequired,
}: {
  children: string;
  href?: string;
  noCardRequired?: boolean;
}) => {
  return (
    <div className="">
      <a
        className="inline-block w-full rounded-lg border border-transparent-white  bg-transparent px-5 py-4 text-center font-semibold tracking-tight transition duration-200 hover:scale-105 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800 mb-4 text-sm"
        href={href ?? ""}
      >
        {children}
      </a>

      <p className="text-center">
        {noCardRequired ? (
          <span className="text-sm tracking-tight text-primary-text ">
            No credit card required
          </span>
        ) : (
          <span className="text-sm tracking-tight text-primary-text">
            Contact for more details
          </span>
        )}
      </p>
    </div>
  );
};
