import Image from "next/image";
import Link from "next/link";
import { Slider } from "./components/slider";
import motor from "../public/motor.png";
import torno from "../public/torno.png";
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] pt-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={motor}
            alt="Motor industrial - BOINCA Servicios Industriales"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151a24] via-[#151a24]/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-7xl lg:text-6xl font-sans max-w-7xl font-extrabold leading-none text-white">
              Líderes en Reparación y{" "}
              <span className="text-[#2563eb]">Mantenimiento Industrial</span>{" "}
              para el Sector Petrolero
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/90 leading-relaxed">
              Especialistas en rebobinado de motores de alta tensión y
              mantenimiento preventivo. Garantizamos la máxima eficiencia
              operativa en los entornos más exigentes de Venezuela.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-6 py-3 text-white font-medium hover:bg-[#1d4ed8] transition-colors"
              >
                Solicitar Cotización
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="rounded-lg bg-[#1e2530] border border-white/10 px-6 py-3 text-white font-medium hover:bg-[#252d3a] transition-colors"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
          <Slider />
        </div>
      </section>

      {/* Estadísticas */}
      {/* <section className="bg-[#151a24] py-12 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
              <p className="text-sm text-[#94a3b8] mt-1">AÑOS DE EXP</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">2.5K</p>
              <p className="text-sm text-[#94a3b8] mt-1">MOTORES REPARADOS</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-sm text-[#94a3b8] mt-1">DISPONIBILIDAD</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">
                VENEZUELA
              </p>
              <p className="text-sm text-[#94a3b8] mt-1">ALCANCE NACIONAL</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Soluciones de Ingeniería */}
      <section className="bg-[#151a24] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium text-[#94a3b8] uppercase tracking-wider mb-2">
            Nuestro Expertizaje
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soluciones de Ingeniería de Clase Mundial
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mb-12">
            Utilizamos tecnología de punta para diagnosticar, reparar y
            optimizar sus activos críticos en entornos de alta exigencia.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-xl bg-[#1e2530] p-8 border border-white/5 hover:border-[#2563eb]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#2563eb]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Motores Eléctricos
              </h3>
              <ul className="space-y-2 text-[#94a3b8] text-sm">
                <li>• Rebobinado de alta tensión</li>
                <li>• Balanceo dinámico</li>
                <li>• Pruebas predictivas</li>
              </ul>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#2563eb] hover:underline"
              >
                Ver más servicios
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </article>
            <article className="rounded-xl bg-[#1e2530] p-8 border border-white/5 hover:border-[#2563eb]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#2563eb]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Bombas de Petróleo
              </h3>
              <ul className="space-y-2 text-[#94a3b8] text-sm">
                <li>• Sellos mecánicos</li>
                <li>• Maquinado de precisión</li>
                <li>• Pruebas de flujo</li>
              </ul>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#2563eb] hover:underline"
              >
                Ver más servicios
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </article>
            <article className="rounded-xl bg-[#1e2530] p-8 border border-white/5 hover:border-[#2563eb]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[#2563eb]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Servicios de Campo
              </h3>
              <ul className="space-y-2 text-[#94a3b8] text-sm">
                <li>• Diagnóstico in-situ</li>
                <li>• Reparaciones de emergencia</li>
                <li>• Análisis termográfico</li>
              </ul>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#2563eb] hover:underline"
              >
                Ver más servicios
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="bg-[#2563eb] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Infraestructura de vanguardia para requerimientos críticos
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contamos con bancos de gran escala, hornos de vaciado controlados
              y bancos de pruebas de última generación estudiados para el sector
              energético.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-[#2563eb] px-4 py-2.5 text-white font-medium">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Taller Certificado
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-[#2563eb] px-4 py-2.5 text-white font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Ingenieros Senior
              </span>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/10 shadow-xl">
              <Image
                src={torno}
                alt="Torno industrial"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacto / CTA */}
      <section className="relative bg-[#151a24] py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para optimizar su planta?
            </h2>
            <p className="text-[#94a3b8] mb-8 max-w-lg">
              Nuestro equipo técnico está listo para responder a sus solicitudes
              en menos de 12 horas. Trabajamos con los estándares más estrictos
              del sector.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full rounded-lg bg-[#1e2530] border border-white/10 px-4 py-3 text-white placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
              <input
                type="email"
                placeholder="Email corporativo"
                className="w-full rounded-lg bg-[#1e2530] border border-white/10 px-4 py-3 text-white placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
              />
              <textarea
                placeholder="Cuéntenos sobre su requerimiento técnico"
                rows={4}
                className="w-full rounded-lg bg-[#1e2530] border border-white/10 px-4 py-3 text-white placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb] resize-none"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#f97316] px-6 py-3 text-white font-semibold uppercase text-sm tracking-wide hover:bg-[#ea580c] transition-colors"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
          <div className="rounded-xl bg-[#1e2530]/80 p-8 border border-white/5 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4">
              Visita nuestras oficinas
            </h3>
            <p className="text-[#94a3b8]">Zona Industrial El Tigre</p>
            <p className="text-[#94a3b8]">Anzoátegui, Venezuela</p>
            <p className="text-[#94a3b8] mt-2">+58 285 555 1234</p>
          </div>
        </div>
      </section>
    </>
  );
}
