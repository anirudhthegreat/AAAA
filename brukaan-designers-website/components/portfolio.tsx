"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, MapPin } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Hospitality"]

const projects = [
  {
    title: "Modern Villa Retreat",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    location: "Saheed Nagar, Bhubaneswar",
    year: "2024",
  },
  {
    title: "Corporate Tech Hub",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    location: "Infocity, Bhubaneswar",
    year: "2024",
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    location: "Puri, Odisha",
    year: "2023",
  },
  {
    title: "Contemporary Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    location: "Patia, Bhubaneswar",
    year: "2023",
  },
  {
    title: "Restaurant & Lounge",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    location: "Janpath, Bhubaneswar",
    year: "2024",
  },
  {
    title: "Creative Agency Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop",
    location: "Nayapalli, Bhubaneswar",
    year: "2023",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide">
              Our Portfolio
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated collection of transformative spaces that showcase 
            our commitment to design excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50 bg-transparent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredProject === project.title ? "scale-110 blur-[2px]" : "scale-100"
                }`}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-accent via-accent/50 to-transparent transition-opacity duration-500 ${
                hoveredProject === project.title ? "opacity-95" : "opacity-0"
              }`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Year badge */}
                <div className={`absolute top-4 right-4 transition-all duration-500 ${
                  hoveredProject === project.title ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}>
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {project.year}
                  </span>
                </div>
                
                <div className={`transition-all duration-500 ${
                  hoveredProject === project.title ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                  <span className="text-primary-foreground/70 text-sm font-medium">{project.category}</span>
                  <h3 className="font-serif text-2xl font-semibold text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-primary-foreground/70 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
                
                {/* View button */}
                <div className={`absolute bottom-6 right-6 transition-all duration-500 ${
                  hoveredProject === project.title ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Border glow on hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                hoveredProject === project.title ? "border-primary/50" : "border-transparent"
              }`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 bg-transparent group"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
