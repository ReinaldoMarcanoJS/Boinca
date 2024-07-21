import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
    <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
      <div className="grid gap-1">
        <h3 className="font-semibold">Empresa</h3>
        <Link href="#" prefetch={false}>
          Sobre Nosotros
        </Link>
        <Link href="#" prefetch={false}>
          Servicios
        </Link>
        <Link href="#" prefetch={false}>
          Contacto
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Servicios</h3>
        <Link href="#" prefetch={false}>
          Reparación de Motores Eléctricos
        </Link>
        <Link href="#" prefetch={false}>
          Reparación de Bombas Centrífugas
        </Link>
        <Link href="#" prefetch={false}>
          Otros Servicios
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Recursos</h3>
        <Link href="#" prefetch={false}>
          Blog
        </Link>
        <Link href="#" prefetch={false}>
          Preguntas Frecuentes
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Legal</h3>
        <Link href="#" prefetch={false}>
          Política de Privacidad
        </Link>
        <Link href="#" prefetch={false}>
          Términos y Condiciones
        </Link>
      </div>
      <div className="grid gap-1">
        <h3 className="font-semibold">Contacto</h3>
        <Link href="#" prefetch={false}>
          Teléfono
        </Link>
        <Link href="#" prefetch={false}>
          Correo Electrónico
        </Link>
        <Link href="#" prefetch={false}>
          Dirección
        </Link>
      </div>
    </div>
  </footer>
  )
}
