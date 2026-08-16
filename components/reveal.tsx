"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

const offset = 32

function buildVariants(direction: Direction): Variants {
  const map: Record<Direction, { x?: number; y?: number }> = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
    none: {},
  }
  return {
    hidden: { opacity: 0, ...map[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }
}

type RevealProps = {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  /** anima al entrar en viewport solo una vez */
  once?: boolean
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
