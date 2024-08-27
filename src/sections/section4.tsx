import Link from "next/link";
import { MdAlternateEmail } from "react-icons/md";
import { PiMapPinLineLight, PiMessengerLogoThin } from "react-icons/pi";

export default function Section4() {
  return (
    <section id="services" className="bg-cyan-800/5 py-20 lg:py-30">
      <div className="container lg:flex justify-around">
        <div className="text-center space-y-4 items-center flex flex-col justify-center">
          <h2 className=" text-3xl font-bold tracking-tight lg:mb-10">
            Ubicacion
          </h2>
          <div className="space-x-2 min-[700px]:text-base flex gap-2 flex-col text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <Link
              href={"#ubicacion"}
              className="flex items-center justify-start h-10 rounded-xl border p-4 gap-2"
            >
              <PiMapPinLineLight color="Red" size={30} />
              <span>Estado Bolivar, Cuidad Guayana</span>
            </Link>
            <Link
              href={"#"}
              className="flex items-center justify-start h-10 rounded-xl border p-4 gap-2"
            >
              <PiMessengerLogoThin color="green" size={30} />
              <span>+58 4249336565</span>
            </Link>
            <Link
              href={"#section2"}
              className="flex items-center justify-start h-10 rounded-xl border p-4 gap-2"
            >
              <MdAlternateEmail color="Blue" size={25} />
              <span>BoincaServicios@gmail.com</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.248848138607!2d-62.77387892562821!3d8.278013300293377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf9007f202c5b%3A0x2b1d3e7ad1854923!2sBoinca%20Servicios!5e0!3m2!1ses!2sve!4v1723647959223!5m2!1ses!2sve"
            width="400"
            height="300"
            className="border-0 block sm:hidden"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.238990123446!2d-62.77363932562822!3d8.278996500279176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf9007f202c5b%3A0x2b1d3e7ad1854923!2sBoinca%20Servicios!5e0!3m2!1ses!2snl!4v1724273567467!5m2!1ses!2snl"
            width="600"
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
