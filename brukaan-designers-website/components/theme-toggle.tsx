"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="relative w-14 h-8 rounded-full bg-muted" aria-label="Toggle theme">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full bg-muted border border-border transition-colors duration-300 hover:border-primary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span 
        className={`absolute top-1 w-6 h-6 rounded-full bg-primary shadow-lg flex items-center justify-center transition-all duration-300 ease-out ${
          theme === "dark" ? "left-7" : "left-1"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-primary-foreground" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-primary-foreground" />
        )}
      </span>
    </button>
  )
}
