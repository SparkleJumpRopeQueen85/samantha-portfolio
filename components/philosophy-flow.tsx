"use client"

import { useId } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

/**
 * Elemento decorativo de la sección Philosophy.
 *
 * Un trazo casi imperceptible (opacidad baja, igual que el resto de
 * detalles "glass" del sitio) atraviesa la tarjeta con el degradado de
 * marca (cian → violeta, los mismos acentos que ya usan las tarjetas
 * "Próxima certificación" y la línea de Trayectoria). Sobre ese trazo
 * viaja sin pausa una pequeña chispa de luz: una metáfora visual sutil
 * del recorrido de una idea, de la curiosidad al software.
 *
 * Puramente decorativo → aria-hidden, pointer-events-none, y respeta
 * prefers-reduced-motion igual que .aurora-blob en globals.css.
 */
export function PhilosophyFlow() {
  const uid = useId()
  const gradientId = `philosophy-gradient-${uid}`
  const glowId = `philosophy-glow-${uid}`
  const pathId = `philosophy-path-${uid}`
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <filter id={glowId} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Trazo apenas visible: el "hilo" que conecta la idea */}
      <path
        id={pathId}
        d="M -40 150 C 140 40, 260 190, 400 95 S 680 10, 840 90"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.3"
      />

      {!reduceMotion && (
        <>
          {/* Halo difuminado detrás de la chispa */}
          <circle r="9" fill={`url(#${gradientId})`} filter={`url(#${glowId})`} opacity="0.6">
            <animateMotion dur="8s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#${pathId}`} />
            </animateMotion>
          </circle>
          {/* Chispa nítida */}
          <circle r="3" fill="#f8fafc">
            <animateMotion dur="8s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#${pathId}`} />
            </animateMotion>
          </circle>
        </>
      )}
    </svg>
  )
}
