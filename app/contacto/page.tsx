export const metadata = {
  title: "Contacto | BOINCA Servicios Industriales",
  description: "Contáctenos para cotizaciones y soporte técnico.",
};

export default function ContactoPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Contacto</h1>
      <p className="text-lg text-white/80 max-w-2xl mb-10">
        Estamos en Zona Industrial El Tigre, Anzoátegui, Venezuela. Soporte 24/7.
      </p>
      <div className="rounded-xl bg-[#2d3a4d] p-8 border border-white/5 max-w-md">
        <p className="text-white/90">Zona Industrial El Tigre</p>
        <p className="text-white/90">Anzoátegui, Venezuela</p>
        <p className="text-white/90 mt-2">+58 285 555 1234</p>
      </div>
    </section>
  );
}
