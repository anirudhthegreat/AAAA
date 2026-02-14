"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface JobApplicationProps {
  jobId: number
  jobTitle: string
  onClose: () => void
}

export function JobApplication({ jobId, jobTitle, onClose }: JobApplicationProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    coverLetter: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setSubmitted(true)
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-background border border-border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 lg:p-8 border-b border-border bg-background/95 backdrop-blur">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Apply Now</h2>
            <p className="text-sm text-muted-foreground font-light mt-1">{jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 lg:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                Application Submitted!
              </h3>
              <p className="text-muted-foreground font-light mb-6">
                Thank you for your interest in joining Brukaan Designers. We'll review your application and get back to you within 5-7 business days.
              </p>
              <p className="text-sm text-muted-foreground font-light">
                This dialog will close automatically.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-muted focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground font-light outline-none"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-muted focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground font-light outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-muted focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground font-light outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Portfolio URL */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Portfolio / Website</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-muted focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground font-light outline-none"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Years of Relevant Experience *</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-muted focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground font-light outline-none"
                  placeholder="e.g., 3 years"
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Cover Letter / Why should we hire you? *</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:bg-muted focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground font-light outline-none resize-none"
                  placeholder="Tell us about yourself, your experience, and why you're passionate about design..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center font-light">
                By submitting this application, you agree to our privacy policy and terms.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
