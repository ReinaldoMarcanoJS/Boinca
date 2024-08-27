import Image from "next/image";
import bg from "../../public/assets/greenmotor.png";
import bg1 from "../../public/assets/pump1.png";
import bg2 from "../../public/assets/pump2.png";
import bg3 from "../../public/assets/bluemotor.png";

import { Slider } from "@/components/Slider";

export default function Section1() {
  return (
    <section className="flex justify-center w-full items-center py-20 lg:py-30">
      <div className="container flex justify-center pt-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl xl:text-4xl font-bold mb-5">
            Boinca Servicios
          </h1>
          <h3 className="font-bold text-sky-800 mb-10 text-2xl xl:text-3xl">
            En busca de la excelencia
          </h3>

          <div className="my-6 lg:flex h-full w-full text-2xl xl:text-3xl animate">
            <div className="flex flex-col w-full xl:mr-4">
              <div className="flex flex-col font-bold text-center tracking-wide">
                <div>
                  <span className="lg:pr-4 text-cyan-950">
                    Motores electricos de
                  </span>
                </div>
                <div>
                  <span className=" text-red-500 ">baja</span>
                  <span className="pr-2 lg:pr-4 text-cyan-950">,</span>
                  <span className="pr-2 lg:pr-4 text-red-500">media</span>
                  <span className="pr-2 lg:pr-4 text-cyan-950">y</span>
                  <span className="pr-2 lg:pr-4 text-red-500">alta</span>
                  <span className="lg:pr-4 rayo -pulse text-transparent">
                    tension
                  </span>
                </div>
              </div>
              <div className="my-6 h-full w-full flex lg:h-[70%]">
                <div className="w-full flex flex-col lg:h-full">
                  <Image
                    width={330}
                    height={300}
                    className="w-[80%] m-auto lg:w-full h-full"
                    alt="personal boinca"
                    src={bg}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <Image
                    width={330}
                    height={300}
                    className="w-[80%] m-auto lg:w-full h-full"
                    alt="personal boinca"
                    src={bg3}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div
                className={"flex flex-col font-bold text-center tracking-wide "}
              >
                <div>
                  <span className="lg:pr-4 text-cyan-950 ">
                    Bombas centrifugadas{" "}
                  </span>
                </div>
                <div>
                  <span className=" text-red-500 pr-4 ">Mantenimiento</span>
                  <span className=" text-red-500">general</span>
                </div>
              </div>

              <div className="my-6 flex h-full lg:h-[80%] ">
                <div className="w-full flex">
                  <Image
                    width={330}
                    height={300}
                    className="sm:h-full sm:w-full lg:h-[90%] lg:w-full     "
                    alt="personal boinca"
                    src={bg2}
                  />
                </div>
                <div className=" w-full flex justify-center">
                  <Image
                    width={330}
                    height={300}
                    className="sm:h-full sm:w-full lg:h-[90%] lg:w-full     "
                    alt="personal boinca"
                    src={bg1}
                  />
                </div>
              </div>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
