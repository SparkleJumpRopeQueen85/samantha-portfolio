"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaArrowUp } from "react-icons/fa6"
import { useTranslate } from "@/lib/i18n/dictionary"

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const t = useTranslate()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("Volver arriba")}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="glass-strong fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full text-primary glow-cyan"
        >
          <FaArrowUp className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
