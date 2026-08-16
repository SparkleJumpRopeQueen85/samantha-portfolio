"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import { useTranslate } from "@/lib/i18n/dictionary"

export function Projects() {
  const t = useTranslate()

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("Proyectos")}
          title={t("Casos de Éxito")}
          description={t(
            "Esta es una muestra de cómo transformo ideas en soluciones con impacto.",
          )}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
