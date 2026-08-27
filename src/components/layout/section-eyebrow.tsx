import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
};

export function SectionEyebrow({
  children,
  className,
  inverse = false,
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "text-[0.68rem] font-semibold tracking-[0.22em] uppercase",
        inverse ? "text-white/70" : "text-brand-blue",
        className
      )}
    >
      {children}
    </p>
  );
}
