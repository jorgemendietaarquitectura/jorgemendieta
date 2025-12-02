"use client"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
            AIA SYNERGY
          </div>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            Creando espacios que sanan, transforman y dan esperanza a través del poder sanador de la naturaleza.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-500">© 2025 AIA SYNERGY. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
