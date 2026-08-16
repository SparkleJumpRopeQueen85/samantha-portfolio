"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaRocket, FaAward } from "react-icons/fa6"
import type { IconType } from "react-icons"
import { SectionHeading } from "@/components/section-heading"
import { timeline, type TimelineItem } from "@/data/timeline"
import { useTranslate } from "@/lib/i18n/dictionary"

const iconMap: Record<TimelineItem["type"], IconType> = {
  education: FaGraduationCap,
  work: FaBriefcase,
  project: FaRocket,
  certification: FaAward,
}

export function Timeline() {
  const t = useTranslate()

  return (
    <section id="timeline" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={t("Trayectoria")}
          title={t("Mi camino hasta ahora")}
          description={t(
            "Formación, experiencia profesional y proyectos que han definido mi perfil como ingeniera.",
          )}
        />

        <div className="relative mt-16">
          {/* Línea vertical */}
          <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="flex flex-col gap-10">
            {timeline.map((entry, i) => {
              const Icon = iconMap[entry.type]
              const isRight = i % 2 === 1
              return (
                <li
                  key={`${entry.title}-${i}`}
                  className="relative pl-14 md:grid md:grid-cols-2 md:gap-8 md:pl-0"
                >
                  {/* Nodo */}
                  <span className="absolute left-0 top-1 z-10 flex size-10 items-center justify-center rounded-full glass-strong text-primary md:left-1/2 md:-translate-x-1/2">
                    <Icon className="size-4" />
                  </span>

                  <motion.div
                    initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`glass rounded-2xl p-6 ${
                      isRight ? "md:col-start-2" : "md:col-start-1 md:text-right"
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-widest text-primary">
                      {t(entry.period)}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold">
                      {t(entry.title)}
                    </h3>
                    <p className="text-sm text-accent">{t(entry.organization)}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(entry.description)}
                    </p>
                    {entry.tags && (
                      <div
                        className={`mt-4 flex flex-wrap gap-2 ${
                          !isRight ? "md:justify-end" : ""
                        }`}
                      >
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {t(tag)}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
