'use client'

import Navbar from '@/components/ui-pro/layout/Navbar'

export default function HomePage() {
  return (
    <>
      {/* Navbar principal */}
      <Navbar />

      {/* Banner de anuncio (visible en home) */}

      {/* Contenido principal */}
      <main className="px-4 py-20">
        {/* Aquí puedes agregar secciones como Hero, Features, etc. */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Welcome to Fascinante Digital
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
          We help local businesses shine online through local SEO, listings, and reputation management.
        </p>
      </main>
    </>
  )
}