"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "Personalized design approach for every project",
  "Sustainable and eco-friendly material sourcing",
  "Seamless project management from concept to completion",
  "Collaboration with skilled local artisans",
  "Transparent pricing with no hidden costs",
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
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
    const increment = target / 60
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 25)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden transition-all duration-700 ${isHovered ? "shadow-2xl shadow-primary/20" : "shadow-xl shadow-foreground/5"}`}>
              <Image
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop"
                alt="Brukaan design team at work"
                fill
                className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className={`absolute -bottom-8 -right-8 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-background hidden md:block transition-all duration-500 ${isHovered ? "translate-x-2 translate-y-2" : ""}`}>
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Interior design detail"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <div className={`absolute -top-4 -left-4 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-xl transition-all duration-500 ${isHovered ? "-translate-x-2 -translate-y-2" : ""}`}>
              <p className="font-serif text-4xl font-bold">{"25+"}</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
            
            {/* Decorative border */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-[2rem] -z-10" />
          </div>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-primary font-medium text-sm tracking-wide">
                  About Us
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
                Designing Dreams Since 1999
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Brukaan Designers & Associates was founded with a singular vision: to transform 
                spaces into extraordinary experiences. Based in the cultural heart of Odisha, 
                Bhubaneswar, we bring together traditional craftsmanship and contemporary design 
                sensibilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of passionate designers, architects, and craftsmen work collaboratively 
                to understand your unique needs and translate them into stunning interiors that 
                stand the test of time.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight} 
                  className="flex items-start gap-3 group cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                <p className="font-serif text-3xl font-semibold text-primary group-hover:scale-110 transition-transform">
                  <AnimatedCounter target={150} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="text-center p-5 bg-card rounded-2xl border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                <p className="font-serif text-3xl font-semibold text-secondary group-hover:scale-110 transition-transform">
                  <AnimatedCounter target={25} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Team Members</p>
              </div>
              <div className="text-center p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-default">
                <p className="font-serif text-3xl font-semibold text-foreground group-hover:scale-110 transition-transform">
                  <AnimatedCounter target={12} suffix="+" />
                </p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 mt-4"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
