export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
    {
    title: "App Universitaria de tutorías",
    description:
      "Aplicación móvil para gestionar tutorías universitarias con horarios, seguimiento de avances y comunicación entre estudiantes y tutores.",
    image: "/images/project-tutoring.png",
    tags: [".NET MAUI", "Entity Framework", "SQLite", "MVVM"],
    github: "https://github.com/SparkleJumpRopeQueen85/AprendiendoConElTigreMaxV2.git",
    featured: true,
  },
  {
    title: "UMAD AI Assistant",
    description:
      "Asistente Virtual Inteligente para la Atención Integral de la Comunidad Universitaria, que responde de manera inmediata, precisa y segura las consultas de estudiantes, aspirantes, docentes y personal administrativo de la UMAD, mejorando la experiencia de atención y reduciendo la carga operativa de las áreas administrativas.",
    image: "/images/project-ai.png",
    tags: ["Next.js", "Gemini API", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/SparkleJumpRopeQueen85/UMAD_AI_Assistant_2026.git",
    demo: "https://umad-ai-assistant-2026.vercel.app/",
    featured: true,
  },
  {
    title: "App de Protección para Mujeres",
    description:
      "Aplicación móvil de seguridad con botón de pánico, ubicación en tiempo real, semáforo de violencia, zonas rojas y zonas de riesgo y red de contactos de confianza para responder ante emergencias.",
    image: "/images/project-safety.png",
    tags: ["Desarrollo móvil", "Bases de datos", "UX/UI", "Geolocation", "Seguridad"],
    github: "https://github.com/SparkleJumpRopeQueen85",
    featured: true,
  },
  {
    title: "AI AGENTS",
    description:
      "Desarrollo de agentes inteligentes capaces de comprender información, responder consultas, automatizar procesos y asistir a usuarios mediante modelos de lenguaje e integración con sistemas empresariales.",
    image: "/images/project-vr.png",
    tags: ["RAG", "API KEY", "AI",],
    github: "https://github.com/tu-usuario",
  },
  {
    title: "AI AUTOMATIONS",
    description:
      "Automatización inteligente de procesos empresariales mediante Inteligencia Artificial. Diseño flujos que eliminan tareas repetitivas, conectan plataformas y optimizan operaciones para mejorar la productividad y la toma de decisiones.",
    image: "/images/project-auto.png",
    tags: ["AI", "API KEY", "CRM Integrations", "Webhooks", "Google Sheets", "WhatsApp Business"],
    github: "https://github.com/tu-usuario",
  },
  {
    title: "Sistema Arena de Videojuegos",
    description:
      "Desarrollo de un sistema integral y completamente funcional para la administración de una arena de videojuegos y eventos interactivos. El sistema fue diseñado para optimizar la gestión operativa, ventas y control administrativo del establecimiento.",
    image: "/images/project-arena.png",
    tags: ["JavaScript", "php", "CSS", "HTML"],
    github: "https://github.com/SparkleJumpRopeQueen85",
  },
  {
    title: "Arquitecturas en AWS",
    description:
      "Diseño e implementación de infraestructura escalable en la nube con servicios serverless, alta disponibilidad y optimización de costos.",
    image: "/images/project-aws.png",
    tags: ["AWS", "Lambda", "DynamoDB", "S3", "ECR", "RDS"],
  },
  {
    title: "Desarrollo SAP ABAP",
    description:
      "Soluciones empresariales sobre SAP: reportes, módulos personalizados y optimización de procesos de negocio con ABAP.",
    image: "/images/project-sap.png",
    tags: ["SAP", "ABAP", "ERP"],
  },
  {
    title: "Base de Datos SAP",
    description:
      "Diseño y desarrollo de una base de datos en SAP siguiendo estándares empresariales y convenciones específicas. Características técnicas: Maintenance View Dialog, Data Elements reutilizables, Domains personalizados, Manejo de datos sensibles a mayúsculas/minúsculas, Objetos activos y documentados",
    image: "/images/project-abap.png",
    tags: ["SAP", "ABAP", "Base de Datos", "ERP"],
  },
  {
    title: "Calculadora en ABAP",
    description:
      "Desarrollo de un programa ABAP con funciones básicas de cálculo. Características técnicas: Uso de Packed Number, Manejo de decimales, Validación de operaciones",
    image: "/images/project-calculator.png",
    tags: ["SAP", "ABAP", "Calculadora", "ERP"],
  },
]
