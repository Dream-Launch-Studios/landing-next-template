import { cn } from "@/utils/utils";

export function FeatureHighlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("text-sm", className)}>{children}</div>;
}

export function FeatureTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-5xl font-semibold", className)}>{children}</div>
  );
}

export function FeatureSubTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function FeaturePara({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("text-md", className)}>{children}</div>;
}
