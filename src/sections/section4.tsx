import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { PiMapPinLineLight, PiMessengerLogoThin } from "react-icons/pi";

export default function Section4() {
  return (
    <section id="services" className="bg-cyan-800/5 py-20 lg:py-30">
      <div className="container lg:flex justify-around">
        <div className="text-center space-y-4 items-center flex flex-col justify-center">
          <h2 className=" text-3xl font-bold tracking-tight lg:mb-4">
            Ubicación
          </h2>
          <div className=" text-sm font-medium  min-[700px]:text-base flex gap-2 flex-col text-muted-foreground">
            <Link
              target="_blank"
              href={"https://maps.app.goo.gl/H4tUjDh2zBq8euec6"}
              className="flex items-center justify-start h-10 rounded-xl border p-4 gap-4 mb-2  bg-white text-cyan-900 hover:text-white hover:bg-[#0f172a]"
            >
              <PiMapPinLineLight color="Red" size={30} />
              <span>Estado Bolivar, Cuidad Guayana</span>
            </Link>
            <Link
              target="_"
              href={"https://wa.me/message/GNCLRMSDVKFOH1"}
              className="flex items-center justify-start h-10 rounded-xl border p-4 gap-4 mb-2  bg-white text-cyan-900 hover:text-white hover:bg-[#0f172a]"
            >
              <PiMessengerLogoThin color="green" size={30} />
              <span>+58 4249336565</span>
            </Link>
            <Link
              target="_"
              href={
                "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWZbLpdSrhQtTJlqmDvMDcnRjWMCrdsqThZjBqmBmpxSNKwSPLTMQBmKSXckcWvXwGzsx"
              }
              className="flex items-center justify-start h-10 rounded-xl border p-4 gap-4 mb-2 bg-white text-cyan-900 hover:text-white hover:bg-[#0f172a]"
            >
              <MdAlternateEmail color="Blue" size={25} />
              <span>boincaservicios@gmail.com</span>
            </Link>
            <Link
              target="_"
              href={"tel:02869513460"}
              className="flex items-center justify-start h-10 rounded-xl border p-4 gap-4 mb-2 bg-white text-cyan-900 hover:text-white hover:bg-[#0f172a]"
            >
              <BsTelephone color="black" size={25} />
              <span>02869513460</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.248848138607!2d-62.77387892562821!3d8.278013300293377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf9007f202c5b%3A0x2b1d3e7ad1854923!2sBoinca%20Servicios!5e0!3m2!1ses!2sve!4v1723647959223!5m2!1ses!2sve"
            width="400"
            height="300"
            className="border-0 block sm:hidden"
            title="boinca mapa"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.238990123446!2d-62.77363932562822!3d8.278996500279176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf9007f202c5b%3A0x2b1d3e7ad1854923!2sBoinca%20Servicios!5e0!3m2!1ses!2snl!4v1724273567467!5m2!1ses!2snl"
            width="600"
            title="boinca mapa"
            height="450"
            className="hidden sm:block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
