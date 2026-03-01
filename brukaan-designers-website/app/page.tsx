import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectsMap } from "@/components/projects-map"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { VideoShowcase } from "@/components/video-showcase"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { Careers } from "@/components/careers"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectsMap />
      <Services />
      <Portfolio />
      <VideoShowcase />
      <About />
      <Testimonials />
      <Contact />
      <Careers />
      <Footer />
    </main>
  )
}
