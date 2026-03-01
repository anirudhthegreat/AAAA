'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

interface ProjectLocation {
  city: string
  coordinates: [number, number]
  projects: number
  status: 'ongoing' | 'completed'
}

const locations: ProjectLocation[] = [
  { city: 'Bhubaneswar', coordinates: [20.2961, 85.8245], projects: 12, status: 'ongoing' },
  { city: 'Kolkata', coordinates: [22.5726, 88.3639], projects: 8, status: 'completed' },
  { city: 'Sundergarh', coordinates: [22.2319, 84.0243], projects: 5, status: 'ongoing' },
  { city: 'Dhenkanal', coordinates: [20.9317, 85.5945], projects: 4, status: 'completed' },
  { city: 'Anugul', coordinates: [20.6862, 84.9906], projects: 6, status: 'ongoing' },
  { city: 'Sambalpur', coordinates: [21.5652, 83.9880], projects: 7, status: 'completed' },
  { city: 'Rourkela', coordinates: [22.2046, 84.8537], projects: 9, status: 'ongoing' },
  { city: 'Hyderabad', coordinates: [17.3850, 78.4867], projects: 11, status: 'completed' },
  { city: 'Bangalore', coordinates: [12.9716, 77.5946], projects: 10, status: 'ongoing' },
  { city: 'Mumbai', coordinates: [19.0760, 72.8777], projects: 14, status: 'completed' },
  { city: 'Cuttack', coordinates: [20.4625, 85.8830], projects: 3, status: 'ongoing' },
  { city: 'Berhampur', coordinates: [19.3155, 84.7941], projects: 5, status: 'completed' },
  { city: 'Bargarh', coordinates: [21.7515, 83.6385], projects: 4, status: 'ongoing' },
  { city: 'Bhadrak', coordinates: [20.8109, 86.4889], projects: 3, status: 'completed' },
  { city: 'Balasore', coordinates: [21.4887, 87.0672], projects: 6, status: 'ongoing' },
   { city: 'Puri', coordinates: [19.8135, 85.8312], projects: 6, status: 'ongoing' }
]

export function ProjectsMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Dynamically load Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'
    document.head.appendChild(link)

    // Dynamically load Leaflet JS
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
    script.async = true
    script.onload = () => {
      const L = (window as any).L
      if (!L) return

      // Initialize map centered on India
      map.current = L.map(mapContainer.current).setView([20.5937, 78.9629], 5)

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        className: 'map-tiles',
      }).addTo(map.current)

      // Add markers for each location
      locations.forEach((location) => {
        const color = location.status === 'ongoing' ? '#1a9a96' : '#d97166'
        
        const markerHtml = `
          <div style="
            width: 40px;
            height: 40px;
            background: ${color};
            border: 3px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            cursor: pointer;
            font-weight: bold;
            color: white;
            font-size: 14px;
            font-family: 'Playfair Display', serif;
          ">
            ${location.projects}
          </div>
        `

        const customIcon = L.divIcon({
          html: markerHtml,
          iconSize: [40, 40],
          iconAnchor: [20, 20],
          popupAnchor: [0, -20],
          className: 'custom-marker',
        })

        const marker = L.marker([location.coordinates[0], location.coordinates[1]], { icon: customIcon })
          .bindPopup(`
            <div style="font-family: 'Playfair Display', serif; min-width: 220px; padding: 4px;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: bold; color: #18181b;">${location.city}</h3>
              <div style="display: flex; gap: 12px; font-size: 14px; color: #666;">
                <div><strong>Projects:</strong> ${location.projects}</div>
                <div><strong>Status:</strong> <span style="color: ${color}; text-transform: capitalize; font-weight: bold;">${location.status}</span></div>
              </div>
            </div>
          `, {
            closeButton: true,
            autoClose: false,
            maxWidth: 300,
          })
          .addTo(map.current)

        marker.on('mouseover', () => setHoveredCity(location.city))
        marker.on('mouseout', () => setHoveredCity(null))
      })
    }
    document.body.appendChild(script)

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  return (
    <section id="projects-map" className="py-24 lg:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/15 border border-primary/40 mb-6">
            <span className="text-sm font-serif font-semibold text-primary tracking-wider uppercase">Our Presence</span>
          </div>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Projects Across India
          </h2>
          <p className="text-lg text-foreground/75 font-light leading-relaxed">
            Brukaan Designers operates across India's premier cities, delivering exceptional design projects from residential homes to commercial landmarks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative bg-card/80 backdrop-blur-md border border-primary/20 rounded-3xl overflow-hidden shadow-2xl">
              <div
                ref={mapContainer}
                className="w-full h-[550px] rounded-3xl"
                style={{
                  filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.1))',
                }}
              />
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#1a9a96] shadow-md" />
                <span className="text-sm font-light text-foreground/75 tracking-wide">Ongoing Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#d97166] shadow-md" />
                <span className="text-sm font-light text-foreground/75 tracking-wide">Completed Projects</span>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 group">
                <div className="text-4xl font-serif font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {locations.length}
                </div>
                <p className="text-sm text-foreground/70 font-light uppercase tracking-wider">Cities</p>
              </div>
              <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 group">
                <div className="text-4xl font-serif font-bold text-secondary mb-2 group-hover:scale-110 transition-transform">
                  {locations.reduce((sum, loc) => sum + loc.projects, 0)}
                </div>
                <p className="text-sm text-foreground/70 font-light uppercase tracking-wider">Projects</p>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-2xl p-6">
              <h3 className="font-serif font-bold text-foreground mb-4 text-lg uppercase tracking-wider">Locations</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {locations.map((location) => (
                  <div
                    key={location.city}
                    onMouseEnter={() => setHoveredCity(location.city)}
                    onMouseLeave={() => setHoveredCity(null)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 group ${
                      hoveredCity === location.city
                        ? 'bg-primary/20 border border-primary/40'
                        : 'border border-transparent hover:bg-primary/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-light text-foreground tracking-wide group-hover:text-primary transition-colors">
                          {location.city}
                        </span>
                      </div>
                      <span className="text-xs font-serif font-bold text-primary bg-primary/15 px-2.5 py-1 rounded-md">
                        {location.projects}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 ml-6">
                      <div
                        className="w-2.5 h-2.5 rounded-full transition-all"
                        style={{
                          background: location.status === 'ongoing' ? '#1a9a96' : '#d97166',
                        }}
                      />
                      <span className="text-xs text-foreground/60 font-light capitalize tracking-wide">
                        {location.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .leaflet-container {
          font-family: inherit;
        }
        .leaflet-popup-content-wrapper {
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
        .leaflet-popup-tip {
          background: white;
        }
      `}</style>
    </section>
  )
}
