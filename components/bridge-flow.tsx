"use client"

import { useId } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

/**
 * Elemento decorativo de la sección Diferenciador.
 *
 * Dos trazos casi imperceptibles nacen en los extremos (el mundo de los
 * sistemas ya establecidos, a la izquierda, y el de la IA/automatización,
 * a la derecha) y convergen al centro, donde chocan en un pequeño destello.
 * Mismo lenguaje visual que PhilosophyFlow: gradiente cian → violeta,
 * glow suave, respeta prefers-reduced-motion.
 */
export function BridgeFlow() {
  const uid = useId()
  const gradientId = `bridge-gradient-${uid}`
  const glowId = `bridge-glow-${uid}`
  const leftPathId = `bridge-left-${uid}`
  const rightPathId = `bridge-right-${uid}`
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)")

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 260"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <filter id={glowId} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* Trazos apenas visibles: los dos mundos acercándose */}
      <path
        id={leftPathId}
        d="M -40 200 C 160 220, 300 60, 500 130"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        id={rightPathId}
        d="M 1040 60 C 840 40, 700 210, 500 130"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.25"
      />

      {!reduceMotion && (
        <>
          {/* Chispa violeta viajando desde el lado "sistemas" */}
          <circle r="8" fill="#a78bfa" filter={`url(#${glowId})`} opacity="0.55">
            <animateMotion dur="6s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#${leftPathId}`} />
            </animateMotion>
          </circle>
          <circle r="2.75" fill="#f8fafc">
            <animateMotion dur="6s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#${leftPathId}`} />
            </animateMotion>
          </circle>

          {/* Chispa cian viajando desde el lado "IA" */}
          <circle r="8" fill="#22d3ee" filter={`url(#${glowId})`} opacity="0.55">
            <animateMotion dur="6s" begin="0.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#${rightPathId}`} />
            </animateMotion>
          </circle>
          <circle r="2.75" fill="#f8fafc">
            <animateMotion dur="6s" begin="0.4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href={`#${rightPathId}`} />
            </animateMotion>
          </circle>

          {/* Destello del encuentro, en el centro */}
          <circle cx="500" cy="130" r="4" fill="#f8fafc" filter={`url(#${glowId})`}>
            <animate attributeName="opacity" values="0;0;0.9;0" keyTimes="0;0.62;0.7;0.85" dur="6s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;4;16;4" keyTimes="0;0.62;0.7;0.85" dur="6s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </svg>
  )
}
