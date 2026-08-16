"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/data/skills"
import { useTranslate } from "@/lib/i18n/dictionary"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Skills() {
  const t = useTranslate()

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title={t("Mi stack tecnológico")}
          description={t(
            "Las tecnologías que utilizo abarcan desde la nube, DevOps, el desarrollo de software y backend, hasta AI y automatizaciones para convertir ideas en soluciones escalables, eficientes y listas para el mundo real.",
          )}
        />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.li key={skill.name} variants={item}>
              <motion.div
                whileHover={{ y: -6, rotateX: 6, rotateY: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                data-cursor="hover"
                className="glass group relative flex h-full flex-col items-center gap-3 rounded-2xl p-6 text-center [transform-style:preserve-3d]"
              >
                <span
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 36px -10px ${skill.color}`,
                    border: `1px solid ${skill.color}40`,
                  }}
                />
                <skill.icon
                  className="size-9 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">
                  {t(skill.category)}
                </span>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
