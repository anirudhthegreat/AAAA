"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

const videos = [
  {
    id: "1",
    title: "Modern Villa Transformation",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    duration: "3:45",
  },
  {
    id: "2",
    title: "Corporate Office Design Journey",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    duration: "4:20",
  },
  {
    id: "3",
    title: "Luxury Hotel Interior Tour",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop",
    duration: "5:10",
  },
  {
    id: "4",
    title: "Contemporary Living Space",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    duration: "3:55",
  },
]

export function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="videos" className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium text-sm tracking-wide">
              Video Gallery
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Behind the Design
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch our design process and see how we transform spaces into stunning 
            works of art through our video tours and project walkthroughs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(video.youtubeId)}
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center shadow-lg shadow-primary/40 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
                </div>
              </div>
              
              {/* Duration badge */}
              <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs font-medium">
                {video.duration}
              </div>
              
              {/* Title on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-medium text-sm line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for video player */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              
              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors z-10"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
