import Image from "next/image";
import Link from "next/link";

import { CherrveyMark } from "@/components/brand/cherrvey-mark";
import { site } from "@/lib/company";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
  inverse?: boolean;
  compact?: boolean;
};

export function SiteLogo({
  className,
  markClassName,
  wordmark = true,
  inverse = false,
  compact = false,
}: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex min-w-0 items-center gap-3 no-underline",
        className
      )}
      aria-label={wordmark ? undefined : site.name}
    >
      <span
        className={cn(
          "relative block shrink-0",
          compact ? "size-11" : "size-12"
        )}
      >
        <Image
          src="/brand/cherrvey-logo.png"
          alt=""
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </span>
      {wordmark ? (
        <span className="min-w-0">
          <span
            className={cn(
              "block font-semibold tracking-[0.18em] uppercase",
              compact ? "text-[0.7rem]" : "text-[0.78rem] sm:text-[0.85rem]",
              inverse ? "text-white" : "text-brand-ink"
            )}
          >
            {site.shortName}
          </span>
          <span
            className={cn(
              "mt-0.5 block text-[0.65rem] leading-tight tracking-[0.08em] uppercase",
              inverse ? "text-white/70" : "text-brand-steel"
            )}
          >
            Construction Services
          </span>
        </span>
      ) : (
        <CherrveyMark className={cn("size-8", markClassName)} />
      )}
    </Link>
  );
}
