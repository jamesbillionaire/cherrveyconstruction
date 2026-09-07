import Link from "next/link";
import type { ReactNode } from "react";

export function LinkArrow() {
  return <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="cv-text-link">{children}<LinkArrow /></Link>;
}
