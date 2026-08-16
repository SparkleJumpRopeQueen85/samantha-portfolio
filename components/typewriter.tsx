"use client"

import { useEffect, useState } from "react"

type TypewriterProps = {
  words: string[]
  className?: string
}

export function Typewriter({ words, className }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const complete = !deleting && text === current
    const cleared = deleting && text === ""

    let delay = deleting ? 45 : 90
    if (complete) delay = 1600
    if (cleared) delay = 300

    const timeout = setTimeout(() => {
      if (complete) {
        setDeleting(true)
        return
      }
      if (cleared) {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
        return
      }
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      )
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className={className} aria-live="polite">
      <span className="text-gradient">{text}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-primary align-middle" />
    </span>
  )
}
