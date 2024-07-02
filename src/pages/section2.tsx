/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NRvSlZmWfCL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Section2() {
  return (
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En Boinca, ofrecemos una amplia gama de servicios especializados para satisfacer las necesidades de
                  nuestros clientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Reparación de Motores Eléctricos</h3>
                      <p className="text-muted-foreground">
                        Ofrecemos servicios de reparación y mantenimiento de motores eléctricos de todo tipo.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Reparación de Bombas Centrífugas</h3>
                      <p className="text-muted-foreground">
                        Nuestros expertos reparan y mantienen bombas centrífugas de alta calidad.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Servicios de Torno</h3>
                      <p className="text-muted-foreground">
                        Ofrecemos servicios de torno para la fabricación y reparación de piezas.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Perforación de Pozos de Agua</h3>
                      <p className="text-muted-foreground">
                        Nuestro equipo de expertos perfora pozos de agua para satisfacer las necesidades de nuestros
                        clientes.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Pruebas de Vibración</h3>
                      <p className="text-muted-foreground">
                        Realizamos pruebas de vibración para garantizar el correcto funcionamiento de los equipos.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Rebabado de Cojinetes</h3>
                      <p className="text-muted-foreground">
                        Ofrecemos servicios de rebabado de cojinetes para prolongar la vida útil de los equipos.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Servicios"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      
        </>
  )
}

