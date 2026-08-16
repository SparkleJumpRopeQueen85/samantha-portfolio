"use client"

import { useLanguage } from "@/lib/i18n/language-context"

/**
 * Diccionario plano: cada clave es el texto en español TAL COMO aparece
 * hoy en el sitio (fuente de verdad, sin modificar). El valor es su
 * traducción al inglés.
 *
 * Por qué este enfoque: así el contenido en español (`data/*.ts` y el
 * JSX existente) no se toca ni se duplica — cero riesgo de que las dos
 * versiones se desincronicen. `t()` simplemente busca el texto original;
 * si no lo encuentra (ej. nombres propios, tecnologías, "React", "AWS"),
 * lo devuelve tal cual, así que nunca puede "romper" nada.
 */
export const enDictionary: Record<string, string> = {
  // Nav
  Inicio: "Home",
  "Sobre mí": "About Me",
  Trayectoria: "Journey",
  Proyectos: "Projects",
  Certificaciones: "Certifications",
  Contacto: "Contact",

  // Hero
  "Disponible para nuevas oportunidades": "Available for new opportunities",
  "Descargar CV": "Download CV",
  "Desplázate hacia abajo": "Scroll down",
   "La programación es el resultado; las matemáticas son el proceso; y la inteligencia artificial es el puente hacia soluciones más inteligentes. Mi curiosidad me lleva a investigar continuamente, aprender nuevas herramientas y utilizar el pensamiento lógico para para transformar cualquier problema en sistemas claros, eficientes y preparados para evolucionar. Considero que la mejor forma de dominar una tecnología es aplicándola en escenarios reales, por lo que busco transformar cada aprendizaje en una solución práctica.":
    "Programming is the result; mathematics is the process; and artificial intelligence is the bridge to smarter solutions. My curiosity leads me to continually investigate, learn new tools and use logical thinking to transform any problem into clear, efficient systems prepared to evolve. I believe that the best way to master a technology is to apply it in real scenarios, so I seek to transform each learning into a practical solution.",


  // About
  "Construyo software con propósito y detalle":
    "I build software with purpose and precision",
  "Soy estudiante de Ingeniería en Software con experiencia en el desarrollo de aplicaciones web y móviles, arquitectura de software, bases de datos, computación en la nube y diseño de soluciones tecnológicas. No me interesa desarrollar software únicamente porque funciona. Me interesa comprender cómo funciona, por qué funciona y cómo puede transformar la manera en que las personas trabajan, aprenden y viven.":
    "I'm a Software Engineering student with experience building web and mobile applications, software architecture, databases, cloud computing, and technology solutions. I'm not interested in building software just because it works — I want to understand how it works, why it works, and how it can transform the way people work, learn, and live.",
  "Cada proyecto que construyo nace de una pregunta, un problema o una idea que merece convertirse en una solución real. Desde aplicaciones web y móviles hasta plataformas impulsadas por inteligencia artificial y automatización de procesos, busco diseñar tecnología que combine innovación, precisión y propósito.":
    "Every project I build starts as a question, a problem, or an idea worth turning into a real solution. From web and mobile applications to AI-powered platforms and process automation, I aim to design technology that combines innovation, precision, and purpose.",
  "Este portafolio reúne el resultado de esa curiosidad: proyectos que reflejan mi forma de aprender, crear y resolver desafíos a través de la ingeniería de software.":
    "This portfolio brings together the result of that curiosity: projects that reflect how I learn, create, and solve challenges through software engineering.",
  "De la idea al despliegue en producción": "From idea to production deployment",
  Tecnologías: "Technologies",
  "Un stack versátil en constante expansión": "A versatile, ever-growing stack",
  "Certificaciones y cursos": "Certifications & courses",
  "Conocimiento validado y aplicado": "Validated, applied knowledge",
  "Canciones de Lana del rey por semana": "Lana del Rey songs per week",
  "El combustible detrás de cada línea de código":
    "The fuel behind every line of code",

  // Philosophy
  "El principio detrás de cada proyecto": "The principle behind every project",

  // Skills
  "Mi stack tecnológico": "My tech stack",
  "Las tecnologías que utilizo abarcan desde la nube, DevOps, el desarrollo de software y backend, hasta AI y automatizaciones para convertir ideas en soluciones escalables, eficientes y listas para el mundo real.":
    "The technologies I use range from cloud and DevOps to software and backend development, AI, and automation — turning ideas into scalable, efficient, real-world-ready solutions.",
  Lenguajes: "Languages",
  Datos: "Data",
  Sistemas: "Systems",
  Herramientas: "Tools",
  Metodologías: "Methodologies",

  // Differentiator
  "Mi diferenciador": "What sets me apart",
  "Pienso en sistemas": "I think in systems",
  ", no en tecnologías sueltas.": ", not standalone technologies.",
  "Las matemáticas me enseñaron a analizar, modelar y resolver problemas. Mi enfoque consiste en conectar lo que ya sostiene a una empresa — ERP, nube, arquitectura — con lo que va a redefinir cómo trabaja: IA, agentes y automatización.":
    "Mathematics taught me to analyze, model and solve problems. My approach is to connect what already sustains a company — ERP, cloud, architecture — with what will redefine how it works: AI, agents and automation.",
  "De ERP a IA generativa": "From ERP to generative AI",
  "Base matemática, no solo sintaxis": "Math-driven thinking, not just syntax",
  "Pensamiento matemático": "Mathematical thinking", 
  Empresas: "Business",
  Agentes: "Agents",
  Automatización: "Automation",
  IA: "AI",

  // Where I fit
  "¿Dónde encajo?": "Where do I fit?",
  "Formas de aportar valor a tu equipo": "Ways I can add value to your team",
  "Un mismo perfil, múltiples enfoques. Si alguna coincide con lo que buscas, conversemos.":
    "The same profile, multiple approaches. If any match what you are looking for, let's talk.",
  "Mi forma de crear software": "My way of creating software",
  "Comprender. Modelar. Construir": "Understand. Model. Build.",
  "Cada proyecto comienza analizando el problema desde una perspectiva matemática. A partir de esa base, diseño algoritmos, arquitecturas y aplicaciones que son eficientes, escalables y fáciles de mantener.":
    "Each project begins by analyzing the problem from a mathematical perspective. From that foundation, I design algorithms, architectures and applications that are efficient, scalable and easy to maintain.",
  "Matemáticas": "Mathematics",
  "Lógica": "Logic",
  "Álgebra": "Algebra",
  "Geometría Analítica": "Analytical Geometry",
    "Modernizar sistemas empresariales": "Modernize enterprise systems",
  "Hago que tus sistemas de negocio hablen entre sí":
    "I get your business systems talking to each other",
  "Trabajo directamente sobre SAP ABAP y arquitecturas ERP: reportes, módulos personalizados y procesos optimizados sin interrumpir la operación diaria.":
    "I work directly with SAP ABAP and ERP architectures: reports, custom modules, and optimized processes without disrupting daily operations.",
  "Bases de datos": "Databases",
  "Integrar IA a tus procesos": "Bring AI into your processes",
  "Convierto la IA en algo que tu equipo realmente usa":
    "I turn AI into something your team actually uses",
  "Construyo agentes y automatizaciones —como el asistente virtual que hoy atiende a toda una comunidad universitaria— que resuelven consultas, conectan plataformas y quitan carga operativa real.":
    "I build agents and automations — like the virtual assistant currently serving an entire university community — that resolve queries, connect platforms, and take real operational load off your team.",
  "Agentes IA": "AI Agents",
  "Lanzar un producto full stack": "Ship a full-stack product",
  "Llevo una idea de cero a producción": "I take an idea from zero to production",
  "Del diseño de la base de datos a la interfaz final: aplicaciones móviles y web completas, con una arquitectura pensada para mantenerse y crecer, no solo para funcionar en la demo.":
    "From database design to the final interface: complete mobile and web applications, architected to last and grow — not just to work in the demo.",

  // Timeline
  "Mi camino hasta ahora": "My path so far",
  "Formación, experiencia profesional y proyectos que han definido mi perfil como ingeniera.":
    "Education, professional experience, and projects that have shaped my profile as an engineer.",
  Actualidad: "Present",
  "Ingeniería de Software": "Software Engineering",
  "Formación en desarrollo de software, arquitectura de sistemas, bases de datos y computación en la nube con un fuerte enfoque práctico.":
    "Training in software development, systems architecture, databases, and cloud computing with a strong hands-on focus.",
  Algoritmos: "Algorithms",
  Arquitectura: "Architecture",
  Programación: "Programming",
  Reciente: "Recent",
  "Desarrollo de Soluciones Inteligentes": "Building Intelligent Solutions",
  "Trabajo Freelance": "Freelance Work",
  "Creo aplicaciones móviles y web, agentes de IA y automatizaciones que conectan personas, datos y procesos para impulsar la transformación digital de empresas.":
    "I build mobile and web applications, AI agents, and automations that connect people, data, and processes to drive companies' digital transformation.",
  "Proyectos destacados": "Featured Projects",
  "Portafolio personal": "Personal Portfolio",
  "Desarrollo de la app de tutorías para mi universidad, el sistema de arena de videojuegos y el asistente de IA para la gestión de áreas administrativas de la universidad.":
    "Development of the tutoring app for my university, the gaming arena management system, and the AI assistant for the university's administrative areas.",
  Continuo: "Ongoing",
  "Certificaciones Profesionales": "Professional Certifications",
  "Formación continua y certificaciones que respaldan mis conocimientos en la nube, sistemas empresariales y redes.":
    "Continuous learning and certifications that back up my knowledge of cloud, enterprise systems, and networking.",

  // Projects section
  "Casos de Éxito": "Success Stories",
  "Esta es una muestra de cómo transformo ideas en soluciones con impacto.":
    "A sample of how I turn ideas into solutions with real impact.",
  Destacado: "Featured",
  Código: "Code",
  "App Universitaria de tutorías": "University Tutoring App",
  "Aplicación móvil para gestionar tutorías universitarias con horarios, seguimiento de avances y comunicación entre estudiantes y tutores.":
    "Mobile app for managing university tutoring sessions, with scheduling, progress tracking, and communication between students and tutors.",
  "Asistente Virtual Inteligente para la Atención Integral de la Comunidad Universitaria, que responde de manera inmediata, precisa y segura las consultas de estudiantes, aspirantes, docentes y personal administrativo de la UMAD, mejorando la experiencia de atención y reduciendo la carga operativa de las áreas administrativas.":
    "An intelligent virtual assistant for comprehensive university community support, answering questions from students, prospective students, faculty, and administrative staff instantly, accurately, and securely — improving the support experience and reducing the administrative workload.",
  "App de Protección para Mujeres": "Women's Safety App",
  "Aplicación móvil de seguridad con botón de pánico, ubicación en tiempo real, semáforo de violencia, zonas rojas y zonas de riesgo y red de contactos de confianza para responder ante emergencias.":
    "A mobile safety app with a panic button, real-time location sharing, a violence-risk indicator, red zones and risk areas, and a trusted-contact network to respond to emergencies.",
  "Desarrollo móvil": "Mobile development",
  Seguridad: "Security",
  "Desarrollo de agentes inteligentes capaces de comprender información, responder consultas, automatizar procesos y asistir a usuarios mediante modelos de lenguaje e integración con sistemas empresariales.":
    "Development of intelligent agents that understand information, answer queries, automate processes, and assist users through language models integrated with enterprise systems.",
  "Automatización inteligente de procesos empresariales mediante Inteligencia Artificial. Diseño flujos que eliminan tareas repetitivas, conectan plataformas y optimizan operaciones para mejorar la productividad y la toma de decisiones.":
    "Intelligent automation of business processes powered by AI. I design workflows that eliminate repetitive tasks, connect platforms, and optimize operations to improve productivity and decision-making.",
  "Sistema Arena de Videojuegos": "Gaming Arena Management System",
  "Desarrollo de un sistema integral y completamente funcional para la administración de una arena de videojuegos y eventos interactivos. El sistema fue diseñado para optimizar la gestión operativa, ventas y control administrativo del establecimiento.":
    "Development of a complete, fully functional system for managing a gaming arena and interactive events. The system was designed to streamline operations, sales, and administrative control for the venue.",
  "Arquitecturas en AWS": "AWS Architectures",
  "Diseño e implementación de infraestructura escalable en la nube con servicios serverless, alta disponibilidad y optimización de costos.":
    "Design and implementation of scalable cloud infrastructure using serverless services, high availability, and cost optimization.",
  "Desarrollo SAP ABAP": "SAP ABAP Development",
  "Soluciones empresariales sobre SAP: reportes, módulos personalizados y optimización de procesos de negocio con ABAP.":
    "Enterprise solutions on SAP: reports, custom modules, and business process optimization with ABAP.",
  "Base de Datos SAP": "SAP Database",
  "Diseño y desarrollo de una base de datos en SAP siguiendo estándares empresariales y convenciones específicas. Características técnicas: Maintenance View Dialog, Data Elements reutilizables, Domains personalizados, Manejo de datos sensibles a mayúsculas/minúsculas, Objetos activos y documentados":
    "Design and development of a SAP database following enterprise standards and specific conventions. Technical highlights: Maintenance View Dialog, reusable Data Elements, custom Domains, case-sensitive data handling, and fully active, documented objects.",
  "Base de Datos": "Database",
  "Calculadora en ABAP": "ABAP Calculator",
  "Desarrollo de un programa ABAP con funciones básicas de cálculo. Características técnicas: Uso de Packed Number, Manejo de decimales, Validación de operaciones":
    "Development of an ABAP program with basic calculation functions. Technical highlights: use of Packed Number, decimal handling, and operation validation.",
  Calculadora: "Calculator",

  // Certifications section
  "Validación de mis conocimientos": "Proof of my knowledge",
  "Certificaciones obtenidas, cursos que reflejan mi formación continua y espacios reservados para las próximas en camino.":
    "Certifications earned, courses that reflect my continuous learning, and reserved slots for the ones on the way.",
  "Programación en Java: Nivel Intermedio": "Java Programming: Intermediate Level",
  "Aprende a programar en Java desde cero": "Learn to Program in Java from Scratch",
  "Próxima certificación": "Upcoming certification",
  "Espacio reservado": "Reserved slot",

  // Contact section
  "Trabajemos juntos": "Let's work together",
  "¿Tienes un proyecto o una oportunidad? Escríbeme y te responderé lo antes posible.":
    "Have a project or an opportunity? Reach out and I'll get back to you as soon as possible.",
  "Las ideas cambian el mundo cuando alguien decide construirlas. Cuéntame la tuya y creemos una solución tecnológica inteligente.":
    "Ideas change the world when someone decides to build them. Tell me yours, and let's create a smart tech solution together.",
  Nombre: "Name",
  Correo: "Email",
  Mensaje: "Message",
  "Tu nombre": "Your name",
  "tu@correo.com": "you@email.com",
  "Cuéntame sobre tu proyecto...": "Tell me about your project...",
  "Enviar mensaje": "Send message",
  "Enviando...": "Sending...",
  "o escríbeme por correo": "or email me directly",

  // Footer
  "Todos los derechos reservados.": "All rights reserved.",

  // Navbar
  "Abrir menú": "Open menu",

  // Back to top
  "Volver arriba": "Back to top",

  // Language toggle
  "Cambiar idioma": "Switch language",
}

/**
 * Hook de traducción. `t(texto en español)` devuelve el inglés si el
 * idioma activo es "en"; si el idioma es "es", o si el texto no está en
 * el diccionario (nombres propios, tecnologías), devuelve el original
 * sin cambios.
 */
export function useTranslate() {
  const { language } = useLanguage()
  return function t(text: string): string {
    if (language === "es") return text
    return enDictionary[text] ?? text
  }
}
