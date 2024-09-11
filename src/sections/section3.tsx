"use client";
import Image from "next/image";
import Link from "next/link";
import about from "./../../public/assets/boincaxpdvsa.jpeg";
import { ExperienceCount } from "@/components/ui/count";

export default function Section3() {
  return (
    <>
      <section id="about" className="w-full py-20 lg:py-30">
        <div className="container flex justify-center m-auto">
          <div className="hidden lg:flex justify-end ">
            <Image
              src={about}
              width={400}
              height={400}
              alt="motor"
              className="w-[400px] h-[400px] rounded-l-xl object-cover"
            />
          </div>
          <div className="space-y-2 py-4  flex flex-col p-6 justify-center sm:bg-cyan-800/5 rounded-r-xl max-h-[400px]">
            <h2 className="text-3xl font-bold text-center tracking-tighter md:text-4xl/tight">
              Sobre Boinca
            </h2>
            <p className="max-w-[600px] p-4 text-justify text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Son mas de
              <ExperienceCount />
              años brindando soluciones especializadas en la reparación de
              motores de baja, media y alta potencia, ademas de bombas
              centrífugas para la industria del petróleo de la mano con{" "}
              <Link
                href={"http://www.pdvsa.com/"}
                target="_blank"
                className="text-red-500 font-bold animateCardletf"
              >
                PDVSA
              </Link>
              . A lo largo de nuestra trayectoria, hemos forjado relaciones Si
              buscas un socio con experiencia comprobada, nosotros somos tu
              mejor opción.
            </p>
            <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#ontact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contáctanos
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
