"use client"

import { useEffect } from "react"

export function AnimationInitializer() {
  useEffect(() => {
    // Pequeño retraso para asegurar que los elementos estén renderizados
    const timer = setTimeout(() => {
      // Inicializar las animaciones para elementos ya visibles en la carga inicial
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        if (isVisible) {
          el.classList.add("in-view")
        }
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return null
}
