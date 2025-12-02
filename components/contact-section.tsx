"use client"

import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Mail className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-white font-medium">Contacto</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Hablemos de tu
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Proyecto
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              ¿Tienes un espacio médico que necesita transformarse en un oasis de sanación? Conversemos sobre cómo puedo
              ayudarte a crear algo extraordinario.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="w-6 h-6" />, label: "Email", value: "contacto@jorgemendieta.com" },
                { icon: <Phone className="w-6 h-6" />, label: "Teléfono", value: "+573003608433" },
                { icon: <MapPin className="w-6 h-6" />, label: "Ubicación", value: "Bogotá, Colombia" },
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-emerald-400 font-medium text-sm">{contact.label}</div>
                    <div className="text-white text-lg font-medium">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Jardín médico al atardecer"
                width={700}
                height={600}
                className="rounded-3xl shadow-2xl shadow-black/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
