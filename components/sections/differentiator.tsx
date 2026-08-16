"use client"

import { motion } from "framer-motion"
import { Cloud, Database, Building2, Bot, Workflow, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { BridgeFlow } from "@/components/bridge-flow"
import { useTranslate } from "@/lib/i18n/dictionary"

const systemNodes = [
  { icon: Building2, label: "Empresas" },
  { icon: Database, label: "ERP" },
  { icon: Cloud, label: "Cloud" },
]

const aiNodes = [
  { icon: Bot, label: "Agentes" },
  { icon: Workflow, label: "Automatización" },
  { icon: Sparkles, label: "IA" },
]

const pillars = [
  "De ERP a IA generativa",
  "Base matemática, no solo sintaxis",
  "Pensamiento matemático",
]

function NodeCluster({
  nodes,
  theme,
  reverse = false,
  t,
}: {
  nodes: typeof systemNodes
  theme: "accent" | "primary"
  reverse?: boolean
  t: (text: string) => string
}) {
  const ring =
    theme === "accent"
      ? "border-accent/25 bg-gradient-to-br from-accent/25 to-accent/5 text-accent"
      : "border-primary/25 bg-gradient-to-br from-primary/25 to-primary/5 text-primary"

  return (
    <div
      className={`flex items-center justify-center gap-3 ${reverse ? "flex-row-reverse md:flex-col-reverse" : "md:flex-col"} md:gap-4`}
    >
      {nodes.map(({ icon: Icon, label }, i) => (
        <motion.div
          key={label}
          className="flex flex-col items-center gap-1.5"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.35,
          }}
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ring-1 ring-inset ring-current/20 ${ring}`}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="text-[11px] font-medium text-muted-foreground">
            {t(label)}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export function Differentiator() {
  const t = useTranslate()

  return (
    <section
      id="differentiator"
      aria-label="Mi diferenciador"
      className="relative px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal delay={0.1}>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 sm:px-10 sm:py-16">
            <BridgeFlow />

            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[auto_1fr_auto] md:gap-8">
              <NodeCluster nodes={systemNodes} theme="accent" t={t} />

              <div className="text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
                  {t("Mi diferenciador")}
                </span>
                <h3 className="text-balance mt-5 font-heading text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                  <span className="text-gradient">{t("Pienso en sistemas")}</span>
                  {t(", no en tecnologías sueltas.")}
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  {t(
                    "Las matemáticas me enseñaron a analizar, modelar y resolver problemas. Mi enfoque consiste en conectar lo que ya sostiene a una empresa — ERP, nube, arquitectura — con lo que va a redefinir cómo trabaja: IA, agentes y automatización."
                  )}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {pillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="rounded-full border border-border/60 bg-foreground/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground"
                    >
                      {t(pillar)}
                    </span>
                  ))}
                </div>
              </div>

              <NodeCluster nodes={aiNodes} theme="primary" reverse t={t} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
