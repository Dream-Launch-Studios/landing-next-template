import { cn } from "../utils/utils";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementsProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <h1
      className={cn(
        "text-6xl md:text-8xl text-center my-6 text-gradient",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <p
      className={cn(
        "md:text-xl text-lg text-center my-6 text-primary-text",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
