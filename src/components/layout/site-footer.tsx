import { navLinks } from "@/lib/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Ikli<span className="text-primary">.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Premium digital experiences for brands that want to lead with
              clarity, craft, and confidence.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Ikli. All rights reserved.</p>
          <p>Built for static deployment on cPanel.</p>
        </div>
      </div>
    </footer>
  );
}
