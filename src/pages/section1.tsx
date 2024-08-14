import Image from "next/image";
import bg from "../../public/assets/motorkrita.png";
import bg1 from "../../public/bombakrita2.png";
import bg2 from "../../public/bombaskrita.png";
import bg3 from "../../public/motorpage.png";

import { Inter,Courier_Prime } from "next/font/google";
import { Slider } from "@/components/Slider";

const Courier = Inter({ subsets: ["latin"] });

export default function Section1() {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center foto 4 ">
      <div className="w-full h-full sm:px-10 lg:px-0  mb:mt-0 lg:mt-10 xl:mt-10 flex justify-center">
        <div

          className={
            Courier.className &&
            " font-bold text-7xl h-full  text-center tracking-wide justify-center items-center "
          }
        >
          <div className="title-l  flex flex-col justify-center items-center px-4 lg:px-10 lg:pt-16 xl:px-16 max-w-[1400px]">
            <p className="title-r  text-sky-800 h-auto mb-0 pt-0 text-center =">
              <p
                className={
                  "text-lg mb:text-xl mb:pt-4 sm:text-3xl font-bold text-black md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl h"
                }
              >
                Boinca Servicios
              </p>

              <div className="text-xl mb:text-2xl sm:text-3xl xl:text-4xl 2xl:text-6xl">
                <div className=" flex lg:hidden justify-center mb-10 ">
                  <p className=" flex mr-2 lg:mr-4 lg:mt-4">En</p>{" "}
                  <p className=" flex mr-2 lg:mr-4 lg:mt-2">busca</p>{" "}
                  <p className=" flex mr-2 lg:mr-4 lg:mt-1">de</p>{" "}
                  <p className=" flex mr-2 lg:mr-4 lg:mt-1">la</p>{" "}
                  <p className=" flex lg:mt-[7px]">exce</p>{" "}
                  <p className=" flex lg:mt-[15px]">lencia</p>
                </div>
                <div className="hidden  lg:flex justify-center mb-10 ">
                  <p className=" flex t1 mr-2 lg:mr-4 lg:mt-4">En</p>{" "}
                  <p className=" flex t2 mr-2 lg:mr-4 lg:mt-2">busca</p>{" "}
                  <p className=" flex t3 mr-2 lg:mr-4 lg:mt-1">de</p>{" "}
                  <p className=" flex t4 mr-2 lg:mr-4 lg:mt-1">la</p>{" "}
                  <p className=" flex t5 lg:mt-[7px]">exce</p>{" "}
                  <p className=" flex t6 lg:mt-[15px]">lencia</p>
                </div>
              </div>
            </p>
            <div className="lg:flex h-full w-full text-xl mb:text-2xl sm:text-3xl lg:text-3xl 2xl:text-5xl">
              <div className="flex flex-col w-full  xl:mr-4">
                  <div
                    className={
                      "flex flex-col font-bold  text-center tracking-wide "
                    }
                  >
                    <div className="title-l">
                      <span className="lg:pr-4 text-cyan-950">
                        Motores electricos de
                      </span>
                    </div>
                    <div className="title-r ">
                      <span className=" text-red-500 "> baja</span>
                      <span className="pr-2 lg:pr-4 text-cyan-950">,</span>
                      <span className="pr-2 lg:pr-4 text-red-500">media</span>
                      <span className="pr-2 lg:pr-4 text-cyan-950">y</span>
                      <span className="pr-2 lg:pr-4  text-red-500">alta</span>
                      <span className="lg:pr-4 rayo animate-pulse text-transparent">
                        tension
                      </span>
                    </div>
                </div>
                <div className="h-full w-full flex lg:h-[70%]">
                  <div className=" w-full flex flex-col  lg:h-full">
                    <Image
                      width={1500}
                      height={1000}
                      className="w-full h-full    "
                      alt="personal boinca"
                      src={bg}
                    />
                  </div>
                  <div className=" w-full flex flex-col">
                    <Image
                      width={1500}
                      height={1000}
                      className="w-full h-full    "
                      alt="personal boinca"
                      src={bg3}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div>
                  <div
                    className={
                      "flex flex-col font-bold text-center tracking-wide "
                    }
                  >
                    <div className="title-l">
                      <span className="lg:pr-4 text-cyan-950 ">
                        Bombas centrifugadas{" "}
                      </span>
                    </div>
                    <div className="title-r   ">
                      <span className=" text-red-500 pr-4 ">Mantenimiento</span>
                      {/* <span className="pr-4 text-cyan-950">y</span> */}
                      <span className=" text-red-500">general</span>
                    </div>
                  </div>
                </div>
                <div className="flex h-full  lg:h-[80%] ">
                  <div className=" w-full flex">
                    <Image
                      width={1500}
                      height={1000}
                      className="sm:h-full sm:w-full lg:h-[90%] lg:w-full     "
                      alt="personal boinca"
                      src={bg2}
                    />
                  </div>
                  <div className=" w-full flex justify-center">
                    <Image
                      width={1500}
                      height={1000}
                      className="sm:h-full sm:w-full lg:h-[90%] lg:w-full     "
                      alt="personal boinca"
                      src={bg1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}
