"use server"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  errors?: Partial<Record<"name" | "email" | "message", string>>
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const messages = {
  es: {
    name: "Ingresa tu nombre.",
    email: "Ingresa un correo válido.",
    message: "El mensaje es demasiado corto.",
    review: "Revisa los campos marcados.",
    success: "¡Gracias! Tu mensaje fue recibido. Te responderé pronto.",
  },
  en: {
    name: "Please enter your name.",
    email: "Please enter a valid email.",
    message: "Your message is too short.",
    review: "Please check the highlighted fields.",
    success: "Thank you! Your message has been received. I'll get back to you soon.",
  },
} as const

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const lang = formData.get("language") === "es" ? "es" : "en"
  const m = messages[lang]

  const errors: ContactState["errors"] = {}
  if (name.length < 2) errors.name = m.name
  if (!emailRegex.test(email)) errors.email = m.email
  if (message.length < 10) errors.message = m.message

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: m.review,
      errors,
    }
  }

  // Aquí podrías integrar un servicio de email (ej. Resend) en el futuro.
  // Por ahora registramos el mensaje en el servidor.
  console.log("[v0] Nuevo mensaje de contacto:", { name, email, message })

  return {
    status: "success",
    message: m.success,
  }
}
