"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { valueFits } from "@/data/value-fit"
import { useTranslate } from "@/lib/i18n/dictionary"
import { cn } from "@/lib/utils"

export function WhereIFit() {
  const [activeId, setActiveId] = useState(valueFits[0].id)
  const active = valueFits.find((v) => v.id === activeId) ?? valueFits[0]
  const activeIndex = valueFits.findIndex((v) => v.id === activeId)
  const isAccent = activeIndex % 2 === 1
  const t = useTranslate()

  return (
    <section
      id="where-i-fit"
      aria-label="¿Dónde encajo?"
      className="relative px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={t("¿Dónde encajo?")}
          title={t("Formas de aportar valor a tu equipo")}
          description={t(
            "Un mismo perfil, múltiples enfoques. Si alguna coincide con lo que buscas, conversemos.",
          )}
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {valueFits.map((item) => {
              const selected = item.id === activeId
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={selected}
                  data-cursor="hover"
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    selected
                      ? "border-primary/60 bg-primary/15 text-primary shadow-[0_0_28px_-8px_oklch(0.8_0.13_200/60%)]"
                      : "glass border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                  )}
                >
                  {t(item.chip)}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="relative mt-10">
          {/* Línea conectora sutil entre el selector y la tarjeta */}
          <div
            aria-hidden="true"
            className="mx-auto h-10 w-px bg-gradient-to-b from-primary/40 to-transparent"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "glass-strong relative overflow-hidden rounded-3xl p-8 text-center sm:p-10 md:p-12",
                isAccent
                  ? "shadow-[0_0_60px_-20px_oklch(0.62_0.2_295/45%)]"
                  : "shadow-[0_0_60px_-20px_oklch(0.8_0.13_200/45%)]",
              )}
            >
              <span
                className={cn(
                  "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-inset ring-current/20",
                  isAccent
                    ? "from-accent/25 to-accent/5 text-accent"
                    : "from-primary/25 to-primary/5 text-primary",
                )}
              >
                <active.icon className="h-6 w-6" strokeWidth={2} />
              </span>

              <h3 className="text-balance mx-auto mt-5 max-w-xl font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                {t(active.heading)}
              </h3>
              <p className="text-pretty mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {t(active.description)}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/60 bg-foreground/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground"
                  >
                    {t(tag)}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
