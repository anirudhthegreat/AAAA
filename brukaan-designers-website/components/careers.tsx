"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Briefcase, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const jobListings = [
  {
    id: 1,
    title: "Senior Interior Designer",
    department: "Design Studio",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead design projects from concept to completion, managing client relationships and overseeing junior designers.",
    requirements: [
      "Expertise in residential and commercial design",
      "Proficiency in design software (AutoCAD, SketchUp, 3DS Max)",
      "Strong portfolio of completed projects",
      "Leadership and project management skills"
    ]
  },
  {
    id: 2,
    title: "Interior Design Specialist",
    department: "Design Studio",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    experience: "2-4 years",
    description: "Collaborate with senior designers to create innovative interior solutions for diverse client projects.",
    requirements: [
      "Bachelor's degree in Interior Design",
      "Experience with design software",
      "Understanding of design principles and color theory",
      "Excellent communication skills"
    ]
  },
  {
    id: 3,
    title: "3D Visualization Artist",
    department: "Design Technology",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    experience: "3-5 years",
    description: "Create stunning 3D renderings and visualizations to bring design concepts to life for client presentations.",
    requirements: [
      "Expertise in V-Ray, Corona Render, or similar",
      "Advanced knowledge of 3DS Max or Blender",
      "Lighting and material expertise",
      "Post-production skills in Photoshop"
    ]
  },
  {
    id: 4,
    title: "Project Coordinator",
    department: "Operations",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    experience: "1-3 years",
    description: "Manage project timelines, coordinate with clients and vendors, and ensure smooth project execution.",
    requirements: [
      "Strong organizational skills",
      "Excellent communication abilities",
      "Project management experience",
      "Knowledge of design industry preferred"
    ]
  },
  {
    id: 5,
    title: "Junior Designer",
    department: "Design Studio",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    experience: "0-2 years",
    description: "Assist in design projects while developing your skills under the mentorship of experienced designers.",
    requirements: [
      "Degree in Interior Design or related field",
      "Passion for design and creativity",
      "Basic design software knowledge",
      "Willingness to learn and grow"
    ]
  },
  {
    id: 6,
    title: "Client Relations Manager",
    department: "Business Development",
    location: "Bhubaneswar, Odisha",
    type: "Full-time",
    experience: "3-5 years",
    description: "Build and maintain client relationships, manage inquiries, and ensure exceptional customer experience.",
    requirements: [
      "Excellent interpersonal skills",
      "Sales and negotiation experience",
      "Customer service excellence",
      "Knowledge of design industry"
    ]
  }
]

export function Careers() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  return (
    <section id="careers" className="py-24 lg:py-32 bg-gradient-to-br from-accent via-background to-accent/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-24 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/15 border border-primary/40 mb-6">
            <span className="text-sm font-serif font-semibold text-primary tracking-wider uppercase">Opportunities</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Shape the Future of Design
          </h2>
          <p className="text-lg text-foreground/75 font-light leading-relaxed">
            Join Brukaan Designers & Associates and collaborate with visionary designers on landmark projects across India. We're seeking talented professionals who share our passion for architectural excellence.
          </p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {jobListings.map((job, index) => (
            <div
              key={job.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => {
                  setExpandedJob(expandedJob === job.id ? null : job.id)
                  setSelectedJob(job.id)
                }}
                className="w-full text-left p-6 lg:p-8 rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:bg-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 lg:gap-4">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-light tracking-wide">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-light tracking-wide">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-light tracking-wide">{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedJob === job.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Details */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  expandedJob === job.id ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 lg:p-8 rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-md border-t-0 rounded-t-none">
                  <p className="text-foreground/70 font-light leading-relaxed mb-6 tracking-wide">
                    {job.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-serif text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                      Key Requirements
                    </h4>
                    <ul className="space-y-3">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-foreground/70 font-light tracking-wide">
                          <span className="text-primary flex-shrink-0 mt-1.5">◆</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    onClick={() => setSelectedJob(job.id)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif font-semibold transition-all duration-300 py-3"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 border border-primary/30 rounded-3xl p-8 lg:p-12 animate-fade-in backdrop-blur-sm">
          <h3 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-8 tracking-tight">
            Why Join Brukaan Designers?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center mb-5 group-hover:from-primary/40 group-hover:to-primary/30 transition-all duration-300">
                <span className="text-primary font-serif text-xl font-bold">✨</span>
              </div>
              <h4 className="font-serif font-bold text-foreground mb-3 text-lg">Creative Excellence</h4>
              <p className="text-sm text-foreground/70 font-light leading-relaxed tracking-wide">
                Work on high-end residential and commercial projects that showcase innovation and design brilliance.
              </p>
            </div>
            <div className="group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/20 flex items-center justify-center mb-5 group-hover:from-secondary/40 group-hover:to-secondary/30 transition-all duration-300">
                <span className="text-secondary font-serif text-xl font-bold">🚀</span>
              </div>
              <h4 className="font-serif font-bold text-foreground mb-3 text-lg">Career Growth</h4>
              <p className="text-sm text-foreground/70 font-light leading-relaxed tracking-wide">
                Mentorship from experienced designers and opportunities to lead your own projects and teams.
              </p>
            </div>
            <div className="group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 flex items-center justify-center mb-5 group-hover:from-primary/40 group-hover:to-primary/30 transition-all duration-300">
                <span className="text-primary font-serif text-xl font-bold">🎯</span>
              </div>
              <h4 className="font-serif font-bold text-foreground mb-3 text-lg">Premium Environment</h4>
              <p className="text-sm text-foreground/70 font-light leading-relaxed tracking-wide">
                State-of-the-art studio and cutting-edge tools to bring your creative vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
