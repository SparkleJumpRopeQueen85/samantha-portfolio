import type { SVGProps } from "react"

/**
 * Íconos de tecnología basados en las imágenes reales proporcionadas
 * (guardadas en /public/icons/skills). Cada uno se comporta como un
 * ícono normal de react-icons: acepta className/aria-hidden y encaja
 * en el mismo `<skill.icon className="size-9 ..." />` que ya se usa
 * en components/sections/skills.tsx.
 *
 * Nota: a diferencia de un ícono SVG monocromático, estas imágenes ya
 * traen su propio color, así que la prop `color` de cada skill sólo se
 * usa para el glow del hover (boxShadow/border), no para pintar el ícono.
 */

type ImageIconProps = SVGProps<SVGSVGElement> & {
  src: string
  alt: string
}

function ImageIcon({ src, alt, className, ...rest }: ImageIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`${className ?? ""} object-contain select-none`}
      {...rest}
    />
  )
}

export function CsharpIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/csharp.png" alt="C#" {...props} />
}

export function HtmlIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/html.png" alt="HTML" {...props} />
}

export function CssIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/css.png" alt="CSS" {...props} />
}

export function JavaIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/java.png" alt="Java" {...props} />
}

export function PhpIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/php.png" alt="PHP" {...props} />
}

export function NodeIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/nodejs.png" alt="Node.js" {...props} />
}

export function SqliteIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/sqlite.png" alt="SQLite" {...props} />
}

export function NetBeansIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/netbeans.png" alt="NetBeans" {...props} />
}

export function NotepadPlusPlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ImageIcon src="/icons/skills/notepadpp.webp" alt="Notepad++" {...props} />
  )
}

export function LinuxIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/linux.png" alt="Linux" {...props} />
}

export function XamlIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/xaml.png" alt="XAML" {...props} />
}

export function BlueJIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/bluej.png" alt="BlueJ" {...props} />
}

export function CiscoPacketTracerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ImageIcon
      src="/icons/skills/cisco-packet-tracer.png"
      alt="Cisco Packet Tracer"
      {...props}
    />
  )
}

export function ScrumIcon(props: SVGProps<SVGSVGElement>) {
  return <ImageIcon src="/icons/skills/scrum.png" alt="Scrum" {...props} />
}
