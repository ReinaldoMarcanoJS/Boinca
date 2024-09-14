import Image from "next/image";
import bg from "../../public/assets/greenmotor-min.webp";
import bg1 from "../../public/assets/pump1-min.webp";
import bg2 from "../../public/assets/pump2-min.webp";
import bg3 from "../../public/assets/bluemotor-min.webp";
import slogan from "../../public/assets/slogan-bg.png";
import { Slider } from "@/components/Slider";

export default function Section1() {
  return (
    <section className="flex justify-center w-full items-center pb-4">
      <div className="container flex justify-center pt-20 lg:pt-14 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl xl:text-3xl font-bold mb-2 lg:mt-14">
            Boinca Servicios
          </h1>
          <Image
            src={slogan}
            width={500}
            height={300}
            alt="slogan"
            className="pb-6"
            priority
          />
          <div className="md:flex h-full w-full text-2xl xl:text-3xl animate">
            <div className="flex flex-col w-full xl:mr-4 justify-center items-center max-h-[400px]">
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
                  <span className="lg:pr-4 rayo animate-pulse text-transparent">
                  tensión
                  </span>
                </div>
              </div>
              <div className="my-4 flex w-[90%]">
                <div className="w-full flex flex-col lg:h-full">
                  <Image
                    priority
                    width={330}
                    height={300}
                    className="w-full"
                    alt="personal boinca"
                    src={bg}
                  />
                </div>
                <div className="w-full flex flex-col">
                  <Image
                    priority
                    width={330}
                    height={300}
                    className="w-full"
                    alt="personal boinca"
                    src={bg3}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full justify-center items-center max-h-[400px]">
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

              <div className="my-4 flex w-[90%]">
                <div className="w-full flex">
                  <Image
                    priority
                    width={330}
                    height={300}
                    className="sm:h-full sm:w-full lg:w-full     "
                    alt="personal boinca"
                    src={bg2}
                  />
                </div>
                <div className=" w-full flex justify-center">
                  <Image
                    priority
                    width={330}
                    height={300}
                    className="sm:h-full sm:w-full lg:w-full     "
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
