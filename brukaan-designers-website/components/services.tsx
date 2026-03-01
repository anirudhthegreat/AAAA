"use client"

import React from "react"

import { useRef, useState } from "react"
import { Home, Building2, Palette, Lightbulb, Ruler, Sofa, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Transform your home into a sanctuary with our bespoke residential interior solutions tailored to your lifestyle.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Create impactful workspaces that boost productivity and reflect your brand identity with our commercial design expertise.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Discover the perfect palette that harmonizes with your space and evokes the right emotions for every room.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Illuminate your spaces with thoughtfully designed lighting that enhances ambiance and functionality.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Maximize every square foot with intelligent layouts that optimize flow, function, and visual appeal.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sofa,
    title: "Furniture Curation",
    description: "Source and curate furniture pieces that perfectly complement your design vision and comfort needs.",
    color: "from-secondary/20 to-secondary/5",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Card 
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative bg-card border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-2 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--primary) / 0.1, transparent 40%)`,
        }}
      />
      
      <CardContent className="p-8 relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <service.icon className="w-7 h-7 text-foreground" />
        </div>
        
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3 transition-colors group-hover:text-primary">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          
          <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${isHovered ? "bg-primary border-primary" : ""}`}>
            <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? "text-primary-foreground translate-x-0.5 -translate-y-0.5" : "text-muted-foreground"}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Comprehensive Design Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to completion, we offer end-to-end interior design services 
            that bring your vision to life with precision and creativity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
