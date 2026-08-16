"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaBars, FaXmark } from "react-icons/fa6"
import { navLinks } from "@/data/nav"
import { profile } from "@/data/profile"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { useTranslate } from "@/lib/i18n/dictionary"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"

const ids = navLinks.map((l) => l.href.replace("#", ""))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(ids)
  const t = useTranslate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled ? "glass-strong glow-cyan/0 shadow-lg" : "bg-transparent",
        )}
      >
        <a
          href="#hero"
          className="font-heading text-lg font-semibold tracking-tight"
        >
          <span className="text-gradient">SC</span>
          <span className="hidden sm:inline">{" · "}{profile.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            const isActive = active === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/15 ring-1 ring-primary/30"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {t(link.label)}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          <button
            type="button"
            aria-label={t("Abrir menú")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg text-foreground md:hidden"
          >
            {open ? <FaXmark className="size-5" /> : <FaBars className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
