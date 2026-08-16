"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type Language = "en" | "es"

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
)

const STORAGE_KEY = "portfolio-language"

/**
 * Proveedor de idioma para todo el sitio.
 *
 * Idioma principal: inglés (default). Si la persona ya eligió español en
 * una visita anterior, se restaura desde localStorage tras el montaje
 * (evita mismatches de hidratación, ya que el servidor siempre renderiza
 * en inglés).
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "es" || stored === "en") {
      setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }

  function toggleLanguage() {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider")
  }
  return ctx
}
