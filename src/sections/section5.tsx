import Image from "next/image";

export default function Section5() {
  const images = [
    {
      src: "https://i.ibb.co/2tkZbLf/IMG-20240728-081257.jpg",
    },
    {
      src: "https://i.ibb.co/PtmmSs5/balanceo.jpg",
    },
    {
      src: "https://i.ibb.co/x6Z7Xtt/IMG-20240715-162204.jpg",
    },
    {
      src: "https://i.ibb.co/nfK6gDT/IMG-20230222-151044.jpg",
    },
    {
      src: "https://i.ibb.co/2hS7LYt/IMG-20240805-112723.jpg",
    },

    {
      src: "https://i.ibb.co/rs0tnzJ/IMG-20220921-WA0022.jpg",
    },
    {
      src: "https://i.ibb.co/sJYcLby/bomb.jpg",
    },
    {
      src: "https://i.ibb.co/R0JQpGc/IMG-20240803-105259.jpg",
    },
  ];

  return (
    <section id="gallery" className="flex justify-center py-20 lg:py-30">
      <div className="container m-auto flex flex-col justify-center">
        <h2 className=" text-3xl font-bold tracking-tight m-auto mb-6">
          Galeria
        </h2>
        <p className="text-muted-foreground text-justify md:text-center max-w-3xl mx-auto mb-6">
          Contamos con un registro fotográfico detallado y una documentación
          completa de cada trabajo es una ventaja estratégica que enriquece
          nuestro proceso y profesionalismo con que abordamos cada proyecto.
        </p>
        <div className="w-full grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
          {images.map((image, i) => (
            <div key={i} className="flex justify-center mb-2">
              <Image
                src={image.src}
                alt="Motores, bombas"
                width={316}
                height={218}
                className="sm:w-[400px] h-72 group-hover:opacity-50 transition-opacity rounded-sm object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
