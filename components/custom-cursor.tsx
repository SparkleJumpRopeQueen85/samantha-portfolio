"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

/**
 * Cursor personalizado con efecto magnético suave.
 * Se desactiva en dispositivos táctiles y con reduce-motion.
 */
export function CustomCursor() {
  const isTouch = useMediaQuery("(pointer: coarse)")
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    if (isTouch) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      setHovering(Boolean(target.closest("a, button, [data-cursor='hover']")))
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [isTouch, x, y])

  if (isTouch) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/70 bg-primary/10 backdrop-invert-0"
        animate={{
          width: hovering ? 48 : 22,
          height: hovering ? 48 : 22,
          opacity: hovering ? 1 : 0.7,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </motion.div>
  )
}
