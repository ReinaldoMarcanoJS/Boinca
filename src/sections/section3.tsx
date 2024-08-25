import Image from "next/image";
import Link from "next/link";
import about from "./../../public/assets/about.jpg";

export default function Section3() {
  return (
    <>
      <section id="about" className="w-full py-24 lg:py-32 lg:px-10">
        <div className="max-w-[1100px] flex justify-center m-auto">
          <div className="hidden lg:flex justify-end ">
            <Image
              src={about}
              width={2000}
              height={2000}
              alt="motor"
              className="w-[400px] h-[400px] rounded-l-xl"
            />
          </div>
          <div className="space-y-2 flex flex-col p-6 justify-center   bg-cyan-800/5 rounded-r-xl">
            <h2 className="text-3xl font-bold text-center tracking-tighter md:text-4xl/tight">
              Sobre Boinca
            </h2>
            <p className="max-w-[600px] p-4 text-justify text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Boinca es una empresa líder en la reparación de motores eléctricos
              y bombas centrífugas. Contamos con un equipo de expertos altamente
              calificados y una amplia gama de servicios para satisfacer las
              necesidades de nuestros clientes.
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
