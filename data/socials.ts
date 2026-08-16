import type { IconType } from "react-icons"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { HiOutlineMail } from "react-icons/hi"

export type Social = {
  label: string
  href: string
  icon: IconType
}

// Mis enlaces reales
export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/SparkleJumpRopeQueen85",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samantha-cruz-techalote-844a94345",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:sch.samantha0504@gmail.com",
    icon: HiOutlineMail,
  },
]
