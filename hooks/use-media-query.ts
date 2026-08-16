"use client"

import { useEffect, useState } from "react"

/**
 * Hook para detectar media queries (ej. detectar dispositivos táctiles
 * o tamaños de pantalla) de forma reactiva.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [query])

  return matches
}
