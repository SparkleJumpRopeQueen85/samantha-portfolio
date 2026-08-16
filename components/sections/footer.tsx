"use client"

import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { navLinks } from "@/data/nav"
import { useTranslate } from "@/lib/i18n/dictionary"

export function Footer() {
  const year = new Date().getFullYear()
  const t = useTranslate()

  return (
    <footer className="relative border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#hero" className="font-heading text-xl font-semibold">
            <span className="text-gradient">{profile.shortName}</span>
          </a>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. {t("Todos los derechos reservados.")}
          </p>
          <p>Maya</p>
        </div>
      </div>
    </footer>
  )
}
