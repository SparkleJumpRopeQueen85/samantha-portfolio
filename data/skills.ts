import type { IconType } from "react-icons"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiGit,
  SiGithub,
  SiDotnet,
  SiSap,
} from "react-icons/si"
import { FaAws, FaWindows, FaServer } from "react-icons/fa6"
import {
  CsharpIcon,
  HtmlIcon,
  CssIcon,
  JavaIcon,
  PhpIcon,
  NodeIcon,
  SqliteIcon,
  NetBeansIcon,
  NotepadPlusPlusIcon,
  LinuxIcon,
  XamlIcon,
  BlueJIcon,
  CiscoPacketTracerIcon,
  ScrumIcon,
} from "@/components/icons/skill-images"

export type Skill = {
  name: string
  icon: IconType
  /** color de marca en oklch o hex para el icono */
  color: string
  category:
    | "Cloud"
    | "Frontend"
    | "Backend"
    | "Lenguajes"
    | "Datos"
    | "DevOps"
    | "Sistemas"
    | "Herramientas"
    | "ERP"
    | "Metodologías"
}

export const skills: Skill[] = [
  { name: "AWS", icon: FaAws, color: "#FF9900", category: "Cloud" },
  { name: "SAP", icon: SiSap, color: "#4aa9ff", category: "ERP" },
  { name: ".NET", icon: SiDotnet, color: "#7c5cff", category: "Lenguajes" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Lenguajes" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Datos" },
  { name: "SQL Server", icon: FaServer, color: "#CC2927", category: "Datos" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "DevOps" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "DevOps" },
  { name: "Windows Server", icon: FaWindows, color: "#0078D6", category: "Sistemas" },
  { name: "C#", icon: CsharpIcon, color: "#9B4F96", category: "Lenguajes" },
  { name: "Java", icon: JavaIcon, color: "#EA2D2E", category: "Lenguajes" },
  { name: "PHP", icon: PhpIcon, color: "#777BB4", category: "Lenguajes" },
  { name: "HTML", icon: HtmlIcon, color: "#E34F26", category: "Frontend" },
  { name: "CSS", icon: CssIcon, color: "#1572B6", category: "Frontend" },
  { name: "Node.js", icon: NodeIcon, color: "#5FA04E", category: "Backend" },
  { name: "SQLite", icon: SqliteIcon, color: "#003B57", category: "Datos" },
  { name: "NetBeans", icon: NetBeansIcon, color: "#1B6AC6", category: "Herramientas" },
  { name: "Notepad++", icon: NotepadPlusPlusIcon, color: "#90E59A", category: "Herramientas" },
  { name: "Linux", icon: LinuxIcon, color: "#FCC624", category: "Sistemas" },
  { name: "XAML", icon: XamlIcon, color: "#F596BE", category: "Lenguajes" },
  { name: "BlueJ", icon: BlueJIcon, color: "#5A82AA", category: "Herramientas" },
  { name: "Cisco Packet Tracer", icon: CiscoPacketTracerIcon, color: "#3C8CBE", category: "Herramientas" },
  { name: "Scrum", icon: ScrumIcon, color: "#F04664", category: "Metodologías" },
]
