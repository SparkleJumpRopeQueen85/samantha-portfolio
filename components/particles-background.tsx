"use client"

import { useMemo } from "react"
import Particles, { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine, ISourceOptions } from "@tsparticles/engine"

/**
 * Capa de partículas conectadas para el Hero (tsParticles v4).
 * ParticlesProvider inicializa el engine y Particles se renderiza
 * automáticamente cuando está listo.
 */
export function ParticlesBackground() {
  const init = useMemo(
    () => async (engine: Engine) => {
      await loadSlim(engine)
    },
    [],
  )

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: ["#22d3ee", "#a78bfa"] },
        links: {
          enable: true,
          color: "#5eead4",
          distance: 140,
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          outModes: { default: "out" },
        },
        opacity: { value: { min: 0.2, max: 0.6 } },
        size: { value: { min: 1, max: 2.5 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 160, links: { opacity: 0.35 } } },
      },
    }),
    [],
  )

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="hero-particles"
        options={options}
        className="absolute inset-0 -z-0"
      />
    </ParticlesProvider>
  )
}
