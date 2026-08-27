import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 flex-col items-start justify-center px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="font-mono text-sm tracking-[0.18em] text-brand-red">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
          This page is not in the CHERRVEY site.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          The address may have changed, or the page does not exist. Return to
          the homepage or view selected projects.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="default" size="xl">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/projects" variant="outline" size="xl">
            View Our Projects
          </ButtonLink>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-block text-sm font-semibold tracking-[0.08em] text-brand-navy uppercase underline-offset-4 hover:underline"
        >
          Contact CHERRVEY
        </Link>
      </div>
    </main>
  );
}
