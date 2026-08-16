"use client"

import { useEffect, useState } from "react"

/**
 * Devuelve el id de la sección actualmente visible en el viewport.
 */
export function useScrollSpy(ids: string[], offset = 0.4) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        rootMargin: `-${offset * 100}% 0px -${(1 - offset) * 100}% 0px`,
        threshold: 0,
      },
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
