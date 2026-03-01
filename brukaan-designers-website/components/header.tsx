"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Determine active section
      const sections = navItems.map(item => item.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-xl shadow-lg shadow-foreground/5 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web-b1aChZ4L7TAunpzIXIEqKHIv9mTI3s.jpg"
                alt="Brukaan Designers & Associates"
                width={48}
                height={48}
                className="w-10 h-10 lg:h-12 object-contain transition-transform duration-500 group-hover:scale-110 lg:w-12 mx-0 my-3.5"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-lg lg:text-xl font-semibold text-foreground tracking-tight">
                Brukaan Designers 
              </span>
              <span className="hidden md:inline text-muted-foreground text-sm ml-2 font-light">
                
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <span>Get a Quote</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "top-3 rotate-45" : "top-1"}`} />
                <span className={`absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : "opacity-100"}`} />
                <span className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "top-3 -rotate-45" : "top-5"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 px-4 text-base font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
