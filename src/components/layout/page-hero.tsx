import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  parent?: { label: string; href: string };
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, className, parent, children }: PageHeroProps) {
  return (
    <section className={cn("cv-page-hero", className)}>
      <Container>
        <nav aria-label="Breadcrumb" className="cv-breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          {parent ? <><Link href={parent.href}>{parent.label}</Link><span aria-hidden="true">/</span></> : null}
          <span aria-current="page">{parent ? title : eyebrow}</span>
        </nav>
        <div className="cv-page-intro">
          <div><p className="cv-eyebrow">{eyebrow}</p><h1>{title}</h1></div>
          <div><p className="cv-lead">{description}</p>{children}</div>
        </div>
      </Container>
    </section>
  );
}
