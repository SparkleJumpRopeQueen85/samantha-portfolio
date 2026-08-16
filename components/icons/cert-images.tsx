import type { SVGProps } from "react"

/**
 * Íconos de certificaciones basados en imágenes reales (guardadas en
 * /public/icons/certifications). Sigue el mismo patrón que
 * components/icons/skill-images.tsx: se comporta como un ícono normal
 * de react-icons y encaja en `<cert.icon className="size-6" />` que ya
 * se usa en components/sections/certifications.tsx.
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

export function UdemyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ImageIcon src="/icons/certifications/udemy.png" alt="Udemy" {...props} />
  )
}

export function W3SchoolsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <ImageIcon
      src="/icons/certifications/w3schools.png"
      alt="W3Schools"
      {...props}
    />
  )
}
