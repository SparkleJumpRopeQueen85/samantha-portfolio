export type TimelineItem = {
  period: string
  title: string
  organization: string
  description: string
  type: "education" | "work" | "project" | "certification"
  tags?: string[]
}

export const timeline: TimelineItem[] = [
  {
    period: "Actualidad",
    title: "Ingeniería de Software",
    organization: "Universidad Madero (UMAD)",
    description:
      "Formación en desarrollo de software, arquitectura de sistemas, bases de datos y computación en la nube con un fuerte enfoque práctico.",
    type: "education",
    tags: ["Algoritmos", "Arquitectura", "Programación"],
  },
  {
    period: "Reciente",
    title: "Desarrollo de Soluciones Inteligentes",
    organization: "Trabajo Freelance",
    description:
      "Creo aplicaciones móviles y web, agentes de IA y automatizaciones que conectan personas, datos y procesos para impulsar la transformación digital de empresas.",
    type: "work",
    tags: ["APIs", "Software", "IA"],
  },
  {
    period: "2024 — 2026",
    title: "Proyectos destacados",
    organization: "Portafolio personal",
    description:
      "Desarrollo de la app de tutorías para mi universidad, el sistema de arena de videojuegos y el asistente de IA para la gestión de áreas administrativas de la universidad.",
    type: "project",
    tags: ["Full Stack", "AI", "Mobile"],
  },
  {
    period: "Continuo",
    title: "Certificaciones Profesionales",
    organization: "AWS · SAP · Microsoft · Cisco",
    description:
      "Formación continua y certificaciones que respaldan mis conocimientos en la nube, sistemas empresariales y redes.",
    type: "certification",
    tags: ["AWS", "SAP", "Microsoft", "Cisco"],
  },
]
