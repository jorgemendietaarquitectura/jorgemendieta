"use client"

import { useState } from "react"
import { Menu, Home, User, FolderOpen, Settings, Mail } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const menuItems = [
    { label: "Inicio", id: "home", icon: Home },
    { label: "Sobre Mí", id: "about", icon: User },
    { label: "Proyectos", id: "projects", icon: FolderOpen },
    { label: "Servicios", id: "services", icon: Settings },
    { label: "Contacto", id: "contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100/50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            {/* Texto del logo */}
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Jorge Mendieta
            </div>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            })}
          </div>

          {/* Menú Hamburguesa Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetContent side="top" className="w-full">
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-2 mt-6">
                  {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center space-x-3 text-left text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
