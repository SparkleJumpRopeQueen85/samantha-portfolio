import { AuroraBackground } from "@/components/aurora-background"
import { CustomCursor } from "@/components/custom-cursor"
import { Navbar } from "@/components/navbar"
import { BackToTop } from "@/components/back-to-top"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Philosophy } from "@/components/sections/philosophy"
import { Skills } from "@/components/sections/skills"
import { Differentiator } from "@/components/sections/differentiator"
import { WhereIFit } from "@/components/sections/where-i-fit"
import { Timeline } from "@/components/sections/timeline"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <AuroraBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Skills />
        <Differentiator />
        <WhereIFit />
        <Timeline />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
