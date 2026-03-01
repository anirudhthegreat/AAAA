"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    details: ["N-6/357, IRC Village, Nayapalli, Bhubaneswar"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91-9337720201", "+91-9090320201"],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["brukaandesigns@gmail.com", "ab.brukaan@gmail.com"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
    color: "bg-secondary/10 text-secondary",
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormState({ name: "", phone: "", email: "", project: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide">
              Get In Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your space? Contact us for a free consultation 
            and let&apos;s discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title} 
                  className="group p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-3 tracking-tight">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-foreground/70 font-light tracking-wide leading-relaxed">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-lg group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4643.552584378229!2d85.82007159999999!3d20.2949509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c519675db3%3A0x217cd27264b5128f!2sBRUKAAN!5e1!3m2!1sen!2sin!4v1771057832276!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brukaan Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-border shadow-lg">
                <p className="text-sm font-medium text-foreground">Brukaan </p>
                <p className="text-xs text-muted-foreground">{"IRC VILLAGE"}</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 lg:p-10 rounded-3xl border border-border shadow-xl relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 relative z-10">
              Send Us a Message
            </h3>
            <p className="text-muted-foreground mb-8 relative z-10">
              Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === "name" ? "scale-[1.02]" : ""}`}>
                    <Input
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Doe"
                      className="bg-background border-border focus:border-primary transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === "phone" ? "scale-[1.02]" : ""}`}>
                    <Input
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+91 98765 43210"
                      className="bg-background border-border focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className={`relative transition-all duration-300 ${focusedField === "email" ? "scale-[1.02]" : ""}`}>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    className="bg-background border-border focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="project" className="block text-sm font-medium text-foreground">
                  Project Type
                </label>
                <div className={`relative transition-all duration-300 ${focusedField === "project" ? "scale-[1.02]" : ""}`}>
                  <select
                    id="project"
                    value={formState.project}
                    onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                    onFocus={() => setFocusedField("project")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Your Message
                </label>
                <div className={`relative transition-all duration-300 ${focusedField === "message" ? "scale-[1.02]" : ""}`}>
                  <Textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none transition-all"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group" 
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
