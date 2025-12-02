"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/Banner.jpg"
          alt="Jardín terapéutico en centro médico"
          fill
          className="object-cover scale-110"
          priority
          onError={(e) => {
            console.error('Error loading banner image:', e)
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/30" />
      </div>

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className="mb-6 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <Star className="w-4 h-4 text-emerald-400 mr-2" />
          <span className="text-sm font-medium">Especialista en Paisajismo Médico</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in leading-tight">
          Espacios que
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Sanan y Transforman
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-delay max-w-3xl mx-auto leading-relaxed">
          Diseño paisajístico especializado en infraestructura médica y jardines terapéuticos que promueven la sanación
          integral
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg px-10 py-4 rounded-full shadow-2xl shadow-emerald-500/25 border-0 group"
            onClick={() => scrollToSection("projects")}
          >
            Ver Proyectos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-4 rounded-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            onClick={() => scrollToSection("contact")}
          >
            Contactar
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
