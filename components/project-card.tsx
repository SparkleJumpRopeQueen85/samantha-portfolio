"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6"
import type { Project } from "@/data/projects"
import { useLanguage } from "@/lib/i18n/language-context"
import { useTranslate } from "@/lib/i18n/dictionary"

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage()
  const t = useTranslate()
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      data-cursor="hover"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass [transform-style:preserve-3d]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={
            language === "en"
              ? `Preview of the ${t(project.title)} project`
              : `Vista previa del proyecto ${project.title}`
          }
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
            {t("Destacado")}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-lg font-semibold">{t(project.title)}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {t(project.description)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t(tag)}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
            >
              <FaGithub className="size-4" /> {t("Código")}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <FaArrowUpRightFromSquare className="size-3.5" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
