"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-medium text-sm tracking-wide">
                  Premier Interior Design Studio
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] text-balance">
                <span className="block overflow-hidden">
                  <span className="block animate-slide-up">Where Vision</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block animate-slide-up animation-delay-100">Meets</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block animate-slide-up animation-delay-200 text-primary leading-[1.2]">Elegance</span>
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in animation-delay-300">
                Transform your vision into reality with Bhubaneswar&apos;s premier interior design studio. 
                We blend contemporary aesthetics with timeless elegance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                Explore Our Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border text-foreground hover:bg-muted group transition-all duration-300 bg-transparent"
              >
                <Play className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                Watch Showreel
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6 animate-fade-in animation-delay-500">
              <div className="group cursor-default">
                <p className="font-serif text-4xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  <AnimatedCounter target={150} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div className="w-px h-14 bg-border" />
              <div className="group cursor-default">
                <p className="font-serif text-4xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  <AnimatedCounter target={12} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="w-px h-14 bg-border hidden sm:block" />
              <div className="hidden sm:block group cursor-default">
                <p className="font-serif text-4xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  <AnimatedCounter target={50} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Design Awards</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div 
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-foreground/10 transition-transform duration-700 ease-out hover:scale-[1.02]"
              style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${-mousePosition.y * 0.1}deg)` }}
            >
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop"
                alt="Elegant interior design by Brukaan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-xl p-5 rounded-2xl border border-border/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg font-semibold text-foreground">Award Winning</p>
                      <p className="text-sm text-muted-foreground">Design Studio 2024</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
