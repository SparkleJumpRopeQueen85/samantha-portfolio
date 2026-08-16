"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { AnimatedCounter } from "@/components/animated-counter"
import { profile, stats } from "@/data/profile"
import { useTranslate } from "@/lib/i18n/dictionary"
import { Rocket, Layers, Award, Coffee, type LucideIcon } from "lucide-react"

const focusAreas = ["Math", "Full Stack", "AI", "UX / UI"]

const statIcons: Record<string, LucideIcon> = {
  rocket: Rocket,
  layers: Layers,
  award: Award,
  coffee: Coffee,
}

const statThemes = [
  {
    ring: "border-primary/25 hover:border-primary/50",
    badge: "from-primary/25 to-primary/5 text-primary",
    glow: "hover:shadow-[0_0_45px_-12px_oklch(0.8_0.13_200/55%)]",
  },
  {
    ring: "border-accent/25 hover:border-accent/50",
    badge: "from-accent/25 to-accent/5 text-accent",
    glow: "hover:shadow-[0_0_45px_-12px_oklch(0.62_0.2_295/55%)]",
  },
]

export function About() {
  const t = useTranslate()

  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("Sobre mí")}
          title={t("Construyo software con propósito y detalle")}
          align="left"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  {t(paragraph)}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 pt-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = statIcons[stat.icon]
              const theme = statThemes[i % 2]
              return (
                <Reveal key={stat.label} delay={i * 0.08} direction="up">
                  <div
                    className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border p-6 glass transition-all duration-300 hover:-translate-y-1.5 ${theme.ring} ${theme.glow}`}
                  >
                    {/* Icono decorativo de fondo */}
                    <Icon
                      className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 text-foreground/[0.04] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                      strokeWidth={1}
                    />

                    <span
                      className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${theme.badge} ring-1 ring-inset ring-current/20 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>

                    <div className="relative flex flex-col gap-1">
                      <span className="font-heading text-4xl font-bold text-gradient sm:text-5xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {t(stat.label)}
                      </span>
                      <span className="text-xs leading-snug text-muted-foreground">
                        {t(stat.detail)}
                      </span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
