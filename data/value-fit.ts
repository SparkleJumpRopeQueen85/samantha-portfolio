import type { LucideIcon } from "lucide-react"
import { Sigma, Building2, Bot, Rocket } from "lucide-react"

export type ValueFit = {
  id: string
  chip: string
  icon: LucideIcon
  heading: string
  description: string
  tags: string[]
}

export const valueFits: ValueFit[] = [
  {
    id: "cloud",
    chip: "Mi forma de crear software",
    icon: Sigma,
    heading: "Comprender. Modelar. Construir",
    description:
      "Cada proyecto comienza analizando el problema desde una perspectiva matemática. A partir de esa base, diseño algoritmos, arquitecturas y aplicaciones que son eficientes, escalables y fáciles de mantener.",
    tags: ["Matemáticas", "Lógica", "Álgebra", "Geometría Analítica"],
  },
  {
    id: "erp",
    chip: "Modernizar sistemas empresariales",
    icon: Building2,
    heading: "Hago que tus sistemas de negocio hablen entre sí",
    description:
      "Trabajo directamente sobre SAP ABAP y arquitecturas ERP: reportes, módulos personalizados y procesos optimizados sin interrumpir la operación diaria.",
    tags: ["SAP", "ABAP", "ERP", "Bases de datos"],
  },
  {
    id: "ai",
    chip: "Integrar IA a tus procesos",
    icon: Bot,
    heading: "Convierto la IA en algo que tu equipo realmente usa",
    description:
      "Construyo agentes y automatizaciones —como el asistente virtual que hoy atiende a toda una comunidad universitaria— que resuelven consultas, conectan plataformas y quitan carga operativa real.",
    tags: ["Agentes IA", "RAG", "Automatización", "APIs"],
  },
  {
    id: "product",
    chip: "Lanzar un producto full stack",
    icon: Rocket,
    heading: "Llevo una idea de cero a producción",
    description:
      "Del diseño de la base de datos a la interfaz final: aplicaciones móviles y web completas, con una arquitectura pensada para mantenerse y crecer, no solo para funcionar en la demo.",
    tags: ["Next.js", "React", ".NET MAUI", "TypeScript"],
  },
]
