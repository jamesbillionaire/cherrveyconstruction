"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { SiteLogo } from "@/components/brand/site-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="h-[3px] bg-brand-blue">
        <span className="block h-full w-16 bg-brand-red" />
      </div>
      <div className="mx-auto flex h-[4.25rem] max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <SiteLogo compact />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-[0.8rem] tracking-[0.12em] uppercase transition-colors",
                  isActive
                    ? "font-semibold text-brand-navy"
                    : "text-muted-foreground hover:text-brand-navy"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-brand-red" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="cta" size="xl">
            Discuss a Project
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-border lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 block h-px w-5 bg-brand-ink transition-transform",
                isMenuOpen ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute top-1.5 left-0 block h-px w-5 bg-brand-ink transition-opacity",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-5 bg-brand-ink transition-transform",
                isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id={menuId}
          className="border-t border-border bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1180px] flex-col px-5 py-4 sm:px-6" aria-label="Mobile">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b border-border py-4 text-sm tracking-[0.14em] uppercase",
                    isActive ? "font-semibold text-brand-navy" : "text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <ButtonLink href="/contact" variant="cta" size="xl" className="mt-5">
              Discuss a Project
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
