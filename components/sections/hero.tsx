"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaDownload, FaArrowRight } from "react-icons/fa6"
import { Typewriter } from "@/components/typewriter"
import { ParticlesBackground } from "@/components/particles-background"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { useLanguage } from "@/lib/i18n/language-context"
import { useTranslate } from "@/lib/i18n/dictionary"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  const { language } = useLanguage()
  const t = useTranslate()

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6"
    >
      <ParticlesBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t("Disponible para nuevas oportunidades")}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl xl:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            <Typewriter words={profile.taglines} />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            {t(profile.summary)}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.cvUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:glow-cyan"
            >
              <FaDownload className="size-4" />
              {t("Descargar CV")}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50"
            >
              {t("Contacto")}
              <FaArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="size-5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-2">
            <Image
              src={profile.image ?? "/images/samantha.png"}
              alt={
                language === "en"
                  ? `Professional photo of ${profile.name}`
                  : `Foto profesional de ${profile.name}`
              }
              width={520}
              height={640}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label={t("Desplázate hacia abajo")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-border p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </span>
      </motion.a>
    </section>
  )
}
