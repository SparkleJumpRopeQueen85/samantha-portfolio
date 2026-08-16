/**
 * Fondo aurora decorativo con blobs difuminados.
 * Es puramente decorativo, por lo que se oculta a lectores de pantalla.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="aurora-blob absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[120px]" />
      <div
        className="aurora-blob absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-accent/25 blur-[130px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]"
        style={{ animationDelay: "-12s" }}
      />
      {/* Grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.98 0.01 250 / 6%) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.98 0.01 250 / 6%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
    </div>
  )
}
