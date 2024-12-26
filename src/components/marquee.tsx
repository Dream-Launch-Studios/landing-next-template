import { cn } from "../utils/utils";

export const Marquee = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn(className)}>{children}</div>;
};
