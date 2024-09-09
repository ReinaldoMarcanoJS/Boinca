import Image from "next/image";
import file1 from "./../../public/gallery/file1.jpg";
import file2 from "./../../public/gallery/file2.jpg";
import file3 from "./../../public/gallery/file3.jpg";
import file4 from "./../../public/gallery/file4.jpg";
import file5 from "./../../public/gallery/file5.jpg";
import file6 from "./../../public/gallery/file6.jpg";
import file7 from "./../../public/gallery/file7.jpg";
import file8 from "./../../public/gallery/file8.jpg";

export default function Section5() {
  const images = [
    {
      src: file1,
    },
    {
      src: file2,
    },
    {
      src: file3,
    },
    {
      src: file4,
    },
    {
      src: file5,
    },
    {
      src: file6,
    },
    {
      src: file7,
    },
    {
      src: file8,
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
                className="sm:w-[400px] h-72 group-hover:opacity-50 transition-opacity rounded-sm object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
