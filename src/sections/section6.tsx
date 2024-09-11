import FormContact from "@/components/FormContact";

export default function Section6() {
  return (
    <section id="contact" className="bg-cyan-800/5 w-full py-20 lg:py-30">
      <div className=" container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Contáctanos
          </h2>
          <p className="mb-3 mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Si tienes alguna pregunta o necesitas más información sobre nuestros
            servicios, no dudes en ponerte en contacto con nosotros.
          </p>
        </div>
        <FormContact />
      </div>
    </section>
  );
}
