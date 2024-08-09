
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Section4() {
  return (
    <>
      <section id="contact" className="bg-cyan-800/5 w-full py-6 md:py-24 lg:py-32 ">
        <div className=" container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Contáctanos
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Si tienes alguna pregunta o necesitas más información sobre
              nuestros servicios, no dudes en ponerte en contacto con nosotros.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="text"
                placeholder="Nombre"
                className="max-w-lg flex-1"
              />
              <Input
                type="email"
                placeholder="Correo Electrónico"
                className="max-w-lg flex-1"
              />
            </form>
            <Textarea placeholder="Mensaje" className="max-w-lg w-full" />
            <Button type="submit">Enviar</Button>
          </div>
        </div>
      </section>
    </>
  );
}
