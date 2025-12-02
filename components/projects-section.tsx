"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, Heart, Leaf, Users, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/jorgemendieta'

// Helper para agregar basePath solo a rutas locales
const getImageSrc = (src: string) => {
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }
  return `${basePath}${src}`
}

const categories = [
  {
    id: "todos",
    name: "Todos los Proyectos",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    id: "decoracion",
    name: "Decoración Interiores",
    icon: <Heart className="w-4 h-4" />,
  },
  {
    id: "infraestructura",
    name: "Infraestructura Clínica",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    id: "paisajismo",
    name: "Paisajismo",
    icon: <Leaf className="w-4 h-4" />,
  },
  {
    id: "arquitectura",
    name: "Arquitectura",
    icon: <Users className="w-4 h-4" />,
  },
]

const allProjects = [
  // Decoración Interiores (3 proyectos)
  {
    title: "Centro Médico San Lucas - Interiores",
    category: "Decoración Interiores",
    type: "decoracion",
    area: "3,200 m²",
    year: "2023",
    images: [
      "/proyectos/1.jpg",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Diseño interior completo con paleta de colores terapéuticos y mobiliario ergonómico",
    features: ["Paleta terapéutica", "Mobiliario ergonómico", "Iluminación natural"],
  },
  {
    title: "Clínica Dental Moderna",
    category: "Decoración Interiores",
    type: "decoracion",
    area: "800 m²",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Interiores modernos con tecnología de vanguardia y espacios acogedores",
    features: ["Tecnología avanzada", "Espacios acogedores", "Diseño minimalista"],
  },
  {
    title: "Hospital Pediátrico Colorido",
    category: "Decoración Interiores",
    type: "decoracion",
    area: "2,500 m²",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Diseño interior lúdico y colorido para crear un ambiente amigable para niños",
    features: ["Diseño lúdico", "Colores vibrantes", "Espacios interactivos"],
  },

  // Infraestructura Clínica (3 proyectos)
  {
    title: "Centro de Diagnóstico Avanzado",
    category: "Infraestructura Clínica",
    type: "infraestructura",
    area: "5,000 m²",
    year: "2023",
    images: [
      "/proyectos/2.jpg",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Infraestructura completa con laboratorios, salas de imagenología y consultorios",
    features: ["Laboratorios avanzados", "Salas de imagenología", "Consultorios especializados"],
  },
  {
    title: "Hospital de Emergencias 24/7",
    category: "Infraestructura Clínica",
    type: "infraestructura",
    area: "8,000 m²",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Infraestructura de emergencias con quirófanos, UCI y servicios críticos",
    features: ["Quirófanos de emergencia", "UCI completa", "Servicios críticos"],
  },
  {
    title: "Centro de Rehabilitación Integral",
    category: "Infraestructura Clínica",
    type: "infraestructura",
    area: "3,500 m²",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Infraestructura especializada en rehabilitación física y ocupacional",
    features: ["Gimnasio terapéutico", "Piscina terapéutica", "Salas de terapia"],
  },

  // Paisajismo (3 proyectos)
  {
    title: "Jardín Terapéutico Hospital General",
    category: "Paisajismo",
    type: "paisajismo",
    area: "2,800 m²",
    year: "2023",
    images: [
      "/proyectos/3.jpg",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Jardín terapéutico con senderos, áreas de descanso y plantas medicinales",
    features: ["Senderos terapéuticos", "Áreas de descanso", "Plantas medicinales"],
  },
  {
    title: "Paisajismo Centro Oncológico",
    category: "Paisajismo",
    type: "paisajismo",
    area: "1,500 m²",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Paisajismo contemplativo con espacios de meditación y reflexión",
    features: ["Espacios de meditación", "Jardín zen", "Áreas contemplativas"],
  },
  {
    title: "Jardín Botánico Hospitalario",
    category: "Paisajismo",
    type: "paisajismo",
    area: "4,200 m²",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Jardín botánico con colección de plantas medicinales y aromáticas",
    features: ["Plantas medicinales", "Huerto terapéutico", "Invernadero"],
  },

  // Arquitectura (3 proyectos)
  {
    title: "Hospital de Especialidades",
    category: "Arquitectura",
    type: "arquitectura",
    area: "15,000 m²",
    year: "2023",
    images: [
      "/proyectos/4.jpg",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Arquitectura hospitalaria moderna con diseño bioclimático y sostenible",
    features: ["Diseño bioclimático", "Arquitectura sostenible", "Espacios flexibles"],
  },
  {
    title: "Clínica Ambulatoria Integral",
    category: "Arquitectura",
    type: "arquitectura",
    area: "6,500 m²",
    year: "2023",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Arquitectura funcional optimizada para atención ambulatoria especializada",
    features: ["Arquitectura funcional", "Flujos optimizados", "Espacios modulares"],
  },
  {
    title: "Centro Médico Comunitario",
    category: "Arquitectura",
    type: "arquitectura",
    area: "3,800 m²",
    year: "2022",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    description: "Arquitectura comunitaria con enfoque en accesibilidad y bienestar social",
    features: ["Accesibilidad universal", "Bienestar social", "Integración comunitaria"],
  },
]

const backgroundImages = {
  todos:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  decoracion:
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  infraestructura:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  paisajismo:
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  arquitectura:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("todos")
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showGallery, setShowGallery] = useState(false)

  const filteredProjects =
    activeCategory === "todos" ? allProjects : allProjects.filter((project) => project.type === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const handleViewGallery = (project: any) => {
    setSelectedProject(project)
    setShowGallery(true)
  }

  const closeGallery = () => {
    setShowGallery(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImages[activeCategory as keyof typeof backgroundImages] || getImageSrc("/placeholder.svg")}
          alt="Fondo de jardín hospitalario"
          fill
          className="object-cover transition-all duration-1000"
          key={activeCategory}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-gray-900/80 to-teal-900/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Building2 className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-white font-medium">Proyectos Destacados</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Transformaciones
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Extraordinarias
            </span>
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
            Cada espacio cuenta una historia única de sanación, belleza y transformación que impacta vidas
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-col items-center gap-8 mb-16">
            {/* Botones principales - 4 categorías */}
            <div className="flex flex-wrap justify-center gap-6">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`min-w-[200px] px-6 py-4 rounded-2xl font-semibold transition-all duration-500 text-base border-2 ${activeCategory === category.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/30 scale-110 border-emerald-400"
                    : "bg-white/15 backdrop-blur-md text-white border-white/40 hover:bg-white/25 hover:scale-105 hover:border-white/60"
                    }`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className={`${activeCategory === category.id ? "text-white" : "text-emerald-300"}`}>
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Botón "Todos los Proyectos" separado */}
            <div className="pt-6 border-t border-white/20 w-full max-w-md">
              <button
                onClick={() => handleCategoryChange("todos")}
                className={`w-full px-8 py-5 rounded-2xl font-bold transition-all duration-500 text-lg border-2 ${activeCategory === "todos"
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-2xl shadow-emerald-500/40 scale-105 border-emerald-300"
                  : "bg-white/20 backdrop-blur-md text-white border-white/50 hover:bg-white/30 hover:scale-105 hover:border-white/70"
                  }`}
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className={`${activeCategory === "todos" ? "text-white" : "text-emerald-300"}`}>
                    {categories[0].icon}
                  </div>
                  <span>{categories[0].name}</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Help message */}
        <div className="text-center mb-8">
          <div className="text-white/80 text-lg">
            💡 Usa los botones de filtro arriba para cambiar categorías
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${activeCategory}-${project.title}-${index}`}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-700 bg-white rounded-lg border-2 border-emerald-500 shadow-2xl shadow-black/50"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={getImageSrc(project.images[0] || "/placeholder.svg")}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                    {project.images.length} fotos
                  </span>
                </div>

                {/* Mini Gallery Preview on Hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-2 mb-3">
                    {project.images.slice(0, 3).map((img, imgIndex) => (
                      <div key={imgIndex} className="w-12 h-8 rounded overflow-hidden border border-white/30">
                        <Image
                          src={getImageSrc(img || "/placeholder.svg")}
                          alt={`${project.title} ${imgIndex + 1}`}
                          width={48}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {project.images.length > 3 && (
                      <div className="w-12 h-8 rounded bg-black/50 flex items-center justify-center text-white text-xs">
                        +{project.images.length - 3}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{project.area}</span> • <span>{project.year}</span>
                  </div>
                  <button
                    onClick={() => handleViewGallery(project)}
                    className="flex items-center bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-600 hover:translate-x-2 transition-all duration-300 cursor-pointer shadow-lg"
                  >
                    Ver galería
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confirmation message */}
        <div className="text-center mt-8">
          <div className="text-white text-lg font-bold">
            ✅ Tarjetas renderizadas: {filteredProjects.length} proyectos
          </div>
        </div>

        {/* Show message if no projects found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-white/60 text-lg">No se encontraron proyectos en esta categoría</div>
          </div>
        )}

        {/* Debug info */}
        <div className="text-center mt-8">
          <div className="text-white/40 text-sm">
            Categoría activa: {activeCategory} | Proyectos mostrados: {filteredProjects.length}
          </div>
          <div className="text-white/30 text-xs mt-2">
            Tipos disponibles: {[...new Set(allProjects.map(p => p.type))].join(", ")}
          </div>
          <div className="text-white/30 text-xs mt-1">
            Proyectos filtrados: {filteredProjects.map(p => p.title).join(", ")}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={closeGallery}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.images.map((image: string, index: number) => (
                  <div key={index} className="relative group">
                    <Image
                      src={getImageSrc(image)}
                      alt={`${selectedProject.title} - Imagen ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        Imagen {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Características del proyecto:</h3>
                <ul className="space-y-1">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
