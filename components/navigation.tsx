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
            {/* Logo Arquitectura y Paisajismo */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              {/* Fondo del edificio */}
              <rect
                x="8"
                y="20"
                width="16"
                height="20"
                rx="2"
                fill="url(#buildingGradient)"
                stroke="url(#strokeGradient)"
                strokeWidth="1.5"
              />

              {/* Ventanas del edificio */}
              <rect x="10" y="22" width="3" height="3" rx="0.5" fill="url(#windowGradient)" />
              <rect x="15" y="22" width="3" height="3" rx="0.5" fill="url(#windowGradient)" />
              <rect x="10" y="27" width="3" height="3" rx="0.5" fill="url(#windowGradient)" />
              <rect x="15" y="27" width="3" height="3" rx="0.5" fill="url(#windowGradient)" />

              {/* Puerta */}
              <rect x="11.5" y="34" width="5" height="6" rx="1" fill="url(#doorGradient)" />

              {/* Techo del edificio */}
              <path
                d="M8 20L16 12L24 20"
                fill="url(#roofGradient)"
                stroke="url(#strokeGradient)"
                strokeWidth="1.5"
              />

              {/* Árbol */}
              <circle cx="32" cy="28" r="8" fill="url(#treeGradient)" />
              <rect x="30" y="36" width="4" height="4" rx="1" fill="url(#trunkGradient)" />

              {/* Hojas del árbol */}
              <circle cx="30" cy="26" r="3" fill="url(#leafGradient)" />
              <circle cx="34" cy="26" r="3" fill="url(#leafGradient)" />
              <circle cx="32" cy="22" r="3" fill="url(#leafGradient)" />

              {/* Elementos paisajísticos */}
              <path
                d="M6 42C6 42 10 40 14 42C18 44 22 42 26 44C30 46 34 44 38 46C42 48 46 46 46 46"
                stroke="url(#grassGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Sol */}
              <circle cx="36" cy="12" r="4" fill="url(#sunGradient)" />
              <path
                d="M36 6L36 4M36 20L36 18M42 12L40 12M32 12L30 12M41.5 7.5L40.5 6.5M31.5 17.5L30.5 16.5M41.5 16.5L40.5 17.5M31.5 6.5L30.5 7.5"
                stroke="url(#sunGradient)"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Gradientes */}
              <defs>
                <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>

                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>

                <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="100%" stopColor="#bae6fd" />
                </linearGradient>

                <linearGradient id="doorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#92400e" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>

                <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>

                <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#15803d" />
                </linearGradient>

                <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#92400e" />
                  <stop offset="100%" stopColor="#78350f" />
                </linearGradient>

                <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>

                <linearGradient id="grassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84cc16" />
                  <stop offset="100%" stopColor="#65a30d" />
                </linearGradient>

                <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
            </svg>

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
