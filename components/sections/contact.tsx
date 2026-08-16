"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { FaDownload, FaPaperPlane } from "react-icons/fa6"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { submitContact, type ContactState } from "@/app/actions/contact"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { useLanguage } from "@/lib/i18n/language-context"
import { useTranslate } from "@/lib/i18n/dictionary"

const initialState: ContactState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  const t = useTranslate()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:glow-cyan disabled:opacity-60"
    >
      <FaPaperPlane className="size-4" />
      {pending ? t("Enviando...") : t("Enviar mensaje")}
    </button>
  )
}

const inputClass =
  "w-full rounded-xl border border-border bg-card/60 px-4 py-3 text-sm outline-none backdrop-blur transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)
  const mailto = `mailto:${profile.email}`
  const { language } = useLanguage()
  const t = useTranslate()

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={t("Contacto")}
          title={t("Trabajemos juntos")}
          description={t(
            "¿Tienes un proyecto o una oportunidad? Escríbeme y te responderé lo antes posible.",
          )}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="right" className="flex flex-col gap-4">
            <div className="glass flex flex-col gap-5 rounded-2xl p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(
                  "Las ideas cambian el mundo cuando alguien decide construirlas. Cuéntame la tuya y creemos una solución tecnológica inteligente.",
                )}
              </p>
              <a
                href={mailto}
                className="text-lg font-medium text-gradient"
              >
                {profile.email}
              </a>
              <ul className="flex gap-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                    >
                      <s.icon className="size-5" />
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-all hover:border-primary/50 hover:text-primary"
              >
                <FaDownload className="size-4" /> {t("Descargar CV")}
              </a>
            </div>
          </Reveal>

          <Reveal direction="left">
            <form action={formAction} className="glass flex flex-col gap-4 rounded-2xl p-6">
              <input type="hidden" name="language" value={language} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm">
                    {t("Nombre")}
                  </label>
                  <input id="name" name="name" type="text" className={inputClass} placeholder={t("Tu nombre")} />
                  {state.errors?.name && (
                    <p className="mt-1 text-xs text-destructive">{state.errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm">
                    {t("Correo")}
                  </label>
                  <input id="email" name="email" type="email" className={inputClass} placeholder={t("tu@correo.com")} />
                  {state.errors?.email && (
                    <p className="mt-1 text-xs text-destructive">{state.errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm">
                  {t("Mensaje")}
                </label>
                <textarea id="message" name="message" rows={5} className={inputClass} placeholder={t("Cuéntame sobre tu proyecto...")} />
                {state.errors?.message && (
                  <p className="mt-1 text-xs text-destructive">{state.errors.message}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <SubmitButton />
                <a href={mailto} className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline">
                  {t("o escríbeme por correo")}
                </a>
              </div>

              {state.status !== "idle" && (
                <p
                  role="status"
                  className={`text-sm ${state.status === "success" ? "text-primary" : "text-destructive"}`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
