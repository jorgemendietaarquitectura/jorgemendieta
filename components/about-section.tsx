"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Award, Leaf } from "lucide-react"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/jorgemendieta' : '')

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-32 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full">
              <Leaf className="w-4 h-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 font-medium text-sm md:text-base">Sobre Mí</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Creando Espacios Sanadores
              </span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Con más de 15 años de experiencia en arquitectura paisajística, me especializo en crear espacios verdes
                que no solo embellecen, sino que también sanan. Mi pasión es diseñar jardines terapéuticos para centros
                médicos, hospitales y espacios de bienestar.
              </p>
              <p>
                Cada proyecto es una oportunidad única para combinar la belleza natural con la funcionalidad médica,
                creando ambientes que promueven la recuperación y el bienestar de pacientes, familias y personal médico.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8">
              {[
                { number: "150+", label: "Proyectos Completados" },
                { number: "15+", label: "Años de Experiencia" },
                { number: "50+", label: "Hospitales Transformados" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mt-1 md:mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-emerald-500/20 h-[400px] md:h-[600px]">
              <Image
                src={`${basePath}/SobreMi.jpg`}
                alt="Jorge Mendieta - Arquitecto Paisajista"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-2xl shadow-emerald-500/25 max-w-[calc(100%-2rem)] md:max-w-none">
              <Award className="w-6 h-6 md:w-10 md:h-10 mb-2 md:mb-3" />
              <div className="font-bold text-sm md:text-lg">Certificado Internacional</div>
              <div className="text-emerald-100 text-xs md:text-base">Jardines Terapéuticos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
