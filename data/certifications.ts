import type { IconType } from "react-icons"
import { FaAws, FaMicrosoft } from "react-icons/fa6"
import { SiSap, SiCisco } from "react-icons/si"
import { UdemyIcon, W3SchoolsIcon } from "@/components/icons/cert-images"

export type Certification = {
  title: string
  issuer: string
  year: string
  icon: IconType
  color: string
  /** marca true para los espacios reservados a futuras certificaciones */
  upcoming?: boolean
}

export const certifications: Certification[] = [
  {
    title: "Programación en Java: Nivel Intermedio",
    issuer: "Udemy",
    year: "2025",
    icon: UdemyIcon,
    color: "#A435F0",
  },
  {
    title: "Aprende a programar en Java desde cero",
    issuer: "Udemy",
    year: "2025",
    icon: UdemyIcon,
    color: "#A435F0",
  },
  {
    title: "SAP University Alliances",
    issuer: "SAP",
    year: "2024",
    icon: SiSap,
    color: "#4aa9ff",
  },
  {
    title: "Introduction to IoT",
    issuer: "Cisco",
    year: "2024",
    icon: SiCisco,
    color: "#1BA0D7",
  },
  {
    title: "Próxima certificación",
    issuer: "Espacio reservado",
    year: "2026",
    icon: W3SchoolsIcon,
    color: "#04B876",
    upcoming: true,
  },
  {
    title: "Próxima certificación",
    issuer: "Espacio reservado",
    year: "2026",
    icon: FaAws,
    color: "#FF9900",
    upcoming: true,
  },
  {
    title: "Próxima certificación",
    issuer: "Espacio reservado",
    year: "2026",
    icon: FaMicrosoft,
    color: "#a78bfa",
    upcoming: true,
  },
]
