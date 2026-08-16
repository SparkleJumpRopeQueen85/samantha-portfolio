"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { PhilosophyFlow } from "@/components/philosophy-flow"
import { useTranslate } from "@/lib/i18n/dictionary"

export function Philosophy() {
  const t = useTranslate()

  return (
    <section id="philosophy" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Philosophy"
          title={t("El principio detrás de cada proyecto")}
          align="center"
        />

        <Reveal delay={0.15} className="mt-14">
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16 md:py-20">
            <PhilosophyFlow />

            <blockquote className="text-balance relative z-10 font-heading text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl md:text-4xl">
              <span className="text-gradient font-semibold">Curiosity</span> drives my
              learning. <span className="text-gradient font-semibold">Engineering</span>{" "}
              shapes my ideas.{" "}
              <span className="text-gradient font-semibold">Software</span> is how I turn
              them into reality.
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
