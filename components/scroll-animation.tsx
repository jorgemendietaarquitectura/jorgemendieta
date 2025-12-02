"use client"

import { useEffect } from "react"

export function ScrollAnimation() {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }

    // Crear el observer con un callback y opciones
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.15, // Elemento visible al menos en un 15%
      rootMargin: "0px 0px -100px 0px", // Activar un poco antes de que sea visible
    })

    // Observar todos los elementos con la clase animate-on-scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    // Limpieza al desmontar
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  return null
}
