import Image from "next/image";
import { footer, navLinks, site } from "@/lib/content";
import { Trademark } from "@/components/ui/Trademark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/images/Logo1.jpeg"
              alt="Credentia AI shield mark"
              width={80}
              height={80}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <p className="mt-4 font-display text-lg font-semibold text-text-primary">
              <Trademark name={site.name} />
            </p>
            <p className="mt-2 text-sm text-text-muted">{site.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-cyan-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-subtle">
              Contact
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-4 block text-sm font-medium text-cyan-accent hover:underline"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>

        <div className="gradient-hairline my-8 w-full" />

        <p className="text-xs leading-relaxed text-text-subtle">{footer.disclaimer}</p>
        <p className="mt-4 text-xs text-text-subtle">{footer.copyright}</p>
      </div>
    </footer>
  );
}
