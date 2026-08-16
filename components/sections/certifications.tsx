"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { certifications } from "@/data/certifications"
import { useTranslate } from "@/lib/i18n/dictionary"
import { cn } from "@/lib/utils"

export function Certifications() {
  const t = useTranslate()

  return (
    <section id="certifications" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("Certificaciones")}
          title={t("Validación de mis conocimientos")}
          description={t(
            "Certificaciones obtenidas, cursos que reflejan mi formación continua y espacios reservados para las próximas en camino.",
          )}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={`${cert.title}-${i}`} delay={(i % 3) * 0.08} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full items-start gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1",
                  cert.upcoming
                    ? "border border-dashed border-border bg-card/30"
                    : "glass",
                )}
              >
                <span
                  className="flex size-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: `${cert.color}1f`,
                    color: cert.color,
                  }}
                >
                  <cert.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3
                    className={cn(
                      "font-heading font-semibold leading-snug",
                      cert.upcoming && "text-muted-foreground",
                    )}
                  >
                    {t(cert.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t(cert.issuer)}</p>
                  <span className="mt-2 inline-block text-xs font-medium text-primary">
                    {cert.year}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
