"use client"

import { Award, Users, Calendar, Leaf, Building2, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: <Heart className="w-16 h-16 text-emerald-600" />,
      title: "Jardines Terapéuticos",
      description:
        "Diseño de espacios verdes específicamente pensados para la recuperación y bienestar integral de pacientes.",
      features: ["Diseño personalizado", "Plantas medicinales", "Espacios de meditación"],
    },
    {
      icon: <Building2 className="w-16 h-16 text-emerald-600" />,
      title: "Paisajismo Hospitalario",
      description:
        "Integración armoniosa de elementos naturales en la arquitectura médica para crear ambientes sanadores.",
      features: ["Integración arquitectónica", "Diseño funcional", "Ambientes sanadores"],
    },
    {
      icon: <Leaf className="w-16 h-16 text-emerald-600" />,
      title: "Jardines Sensoriales",
      description:
        "Espacios diseñados para estimular todos los sentidos y apoyar terapias de rehabilitación especializadas.",
      features: ["Estimulación sensorial", "Terapia ocupacional", "Accesibilidad total"],
    },
    {
      icon: <Users className="w-16 h-16 text-emerald-600" />,
      title: "Consultoría Especializada",
      description: "Asesoramiento experto en diseño de espacios verdes para centros de salud y bienestar.",
      features: ["Análisis de necesidades", "Planificación estratégica", "Seguimiento continuo"],
    },
    {
      icon: <Calendar className="w-16 h-16 text-emerald-600" />,
      title: "Mantenimiento Integral",
      description: "Cuidado y mantenimiento especializado de jardines en entornos médicos con protocolos específicos.",
      features: ["Mantenimiento especializado", "Protocolos médicos", "Cuidado continuo"],
    },
    {
      icon: <Award className="w-16 h-16 text-emerald-600" />,
      title: "Certificación Verde",
      description: "Proyectos certificados en sostenibilidad y eficiencia ambiental con estándares internacionales.",
      features: ["Certificación LEED", "Sostenibilidad", "Eficiencia ambiental"],
    },
  ]

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 rounded-full mb-6">
            <Heart className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium">Servicios Especializados</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Soluciones
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Integrales
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Servicios completos para espacios de sanación y bienestar que transforman vidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group text-center p-10 hover:shadow-2xl transition-all duration-500 animate-on-scroll bg-white border-0 shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl group-hover:from-emerald-100 group-hover:to-teal-100 transition-colors">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
