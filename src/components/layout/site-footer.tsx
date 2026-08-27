import Link from "next/link";

import { SiteLogo } from "@/components/brand/site-logo";
import { footerNav } from "@/lib/nav";
import { site } from "@/lib/company";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div>
          <SiteLogo inverse />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Construction, facility improvement, and technical infrastructure for
            government, commercial, and institutional clients.
          </p>
          <p className="mt-5 font-mono text-[0.7rem] tracking-[0.16em] text-white/50 uppercase">
            PCAB No. {site.pcabNumber}
          </p>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-white/45 uppercase">
            Pages
          </p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-white/45 uppercase">
            Contact
          </p>
          <address className="mt-4 not-italic">
            <p className="text-sm leading-relaxed text-white/75">
              {site.address.display}
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
              {site.phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {phone.display}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="text-sm break-all text-white/75 transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
