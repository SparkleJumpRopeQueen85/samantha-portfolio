"use client"

import { motion } from "framer-motion"
import { Languages } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { useTranslate } from "@/lib/i18n/dictionary"
import { cn } from "@/lib/utils"

const options = ["en", "es"] as const

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const t = useTranslate()

  return (
    <div
      role="group"
      aria-label={t("Cambiar idioma")}
      data-cursor="hover"
      className="relative flex items-center gap-0.5 rounded-full border border-primary/25 bg-card/40 py-1 pl-2 pr-1 backdrop-blur transition-colors hover:border-primary/40"
    >
      <motion.span
        aria-hidden="true"
        animate={{ rotate: language === "en" ? 0 : 180 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mr-0.5 flex size-3.5 items-center justify-center text-accent"
      >
        <Languages className="size-3.5" />
      </motion.span>

      {options.map((lang) => {
        const selected = language === lang
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={selected}
            className={cn(
              "relative rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors",
              selected
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {selected && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_16px_-4px_oklch(0.8_0.13_200/70%)]"
              />
            )}
            {lang}
          </button>
        )
      })}
    </div>
  )
}
