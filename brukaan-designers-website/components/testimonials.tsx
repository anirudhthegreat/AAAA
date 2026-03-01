"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Anand Mola",
    role: "Director,Lingraj Granites",
    quote: "Brukaan transformed our old house into a modern haven. Their attention to detail and understanding of our family's needs was exceptional. Every corner tells a story.",
    location: "Saheed Nagar, Bhubaneswar",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Mr. Shrinivas Senapati",
    role: "Owner, Keshav Jewellers",
    quote: "Our new office space has boosted team morale and productivity. The design perfectly captures our company culture while maintaining functionality.",
    location: "Infocity, Bhubaneswar",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Mr. Raaj Kishore Patra",
    role: "Owner, Hotel Holiday Resort",
    quote: "The restaurant design exceeded all expectations. Our customers constantly compliment the ambiance. Brukaan truly understands the hospitality industry.",
    location: "Janpath, Bhubaneswar",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            We take pride in building lasting relationships with our clients 
            through exceptional design and service.
          </p>
        </div>

        {/* Desktop: Grid view */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className={`bg-card border-border transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${
                index === activeIndex ? "ring-2 ring-primary shadow-lg shadow-primary/10" : ""
              }`}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 text-primary/20 mb-4 transition-colors group-hover:text-primary/40" />
                
                <p className="text-foreground/85 leading-relaxed mb-6 font-light tracking-wide text-lg italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <img 
                      src={testimonial.image || "/placeholder.svg"} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Carousel view */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <Quote className="w-8 h-8 text-primary/20 mb-4" />
                      
                      <p className="text-foreground leading-relaxed mb-6 text-sm">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      
                      <div className="flex items-center gap-3 border-t border-border pt-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                          <img 
                            src={testimonial.image || "/placeholder.svg"} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
