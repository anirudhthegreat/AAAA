"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Twitter, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Residential Design",
  "Commercial Spaces",
  "Hospitality Design",
  "Space Planning",
  "Furniture Curation",
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <footer className="bg-accent text-accent-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
      
      {/* Newsletter section */}
      <div className="border-b border-accent-foreground/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-accent-foreground mb-2">
                Stay Inspired
              </h3>
              <p className="text-accent-foreground/70">
                Subscribe to our newsletter for design tips, trends, and exclusive offers.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full max-w-md">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap group transition-all duration-300"
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
                {!isSubscribed && <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/logo.webp"
                alt="Brukaan Designers & Associates"
                width={48}
                height={48}
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <span className="font-serif text-xl font-semibold text-accent-foreground">
                  Brukaan
                </span>
              </div>
            </Link>
            <p className="text-accent-foreground/70 mb-6 leading-relaxed">
              Transforming spaces into extraordinary experiences since 2012. 
              Your vision, our expertise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-accent-foreground mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-accent-foreground mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-accent-foreground/70 hover:text-secondary transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-accent-foreground mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary" />
            </h3>
            <div className="space-y-3 text-accent-foreground/70">
              <p className="hover:text-accent-foreground transition-colors cursor-default">
                Jaydev Vihar Square
              </p>
              <p className="hover:text-accent-foreground transition-colors cursor-default">
                Bhubaneswar, Odisha 751013
              </p>
              <p className="hover:text-primary transition-colors cursor-pointer">
                +91 674 254 1234
              </p>
              <p className="hover:text-primary transition-colors cursor-pointer">
                hello@brukaan.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60">
            <p className="flex items-center gap-1">
              &copy; 2025 Brukaan Designers & Associates. Made with 
              <Heart className="w-4 h-4 text-secondary fill-secondary" /> 
              in Bhubaneswar
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
