"use client"

export function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100/50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            {/* Texto del logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Jorge Mendieta
            </div>
          </div>

          <div className="hidden md:flex space-x-10">
            {["Inicio", "Sobre Mí", "Proyectos", "Servicios", "Contacto"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(["home", "about", "projects", "services", "contact"][index])}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
