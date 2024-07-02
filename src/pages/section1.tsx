import Image from "next/image";
import bg from "../../public/assets/motorkrita.png";
import bg1 from "../../public/bombakrita2.png";
import bg2 from "../../public/bombaskrita.png";
import bg3 from "../../public/motorpage.png";

import { Inter } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import { Slider } from "@/components";

const inter = Inter({ subsets: ["latin"] });
const Courtier = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

export const Section1 = () => {
  return (
    <div className="bg-section-1 flex flex-col justify-center w-full h-full xl:h-[100vh] items-center foto ">
      <div className="w-full h-full sm:px-10  mb:mt-0 lg:mt-10 xl:mt-10 flex justify-center">
        <div
          className={
            inter.className &&
            "flex flex-col font-bold text-7xl h-full max-w-[1500px] text-center tracking-wide justify-center items-center "
          }
        >
          <div className="title-l  flex flex-col justify-center items-center">
            <p className="title-r  text-sky-800 h-auto mb-0 pt-0 text-center =">
              <p
                className={
                  Courtier.className &&
                  "text-lg mb:text-xl mb:pt-4 sm:text-3xl font-bold text-black md:text-xl h"
                }
              >
                Boinca Servicios
              </p>

              <div className=" flex lg:hidden justify-center mb-10 text-xl mb:text-2xl sm:text-4xl xl:text-5xl">
                <p className=" flex mr-2 lg:mr-4 lg:mt-4">En</p>{" "}
                <p className=" flex mr-2 lg:mr-4 lg:mt-2">busca</p>{" "}
                <p className=" flex mr-2 lg:mr-4 lg:mt-1">de</p>{" "}
                <p className=" flex mr-2 lg:mr-4 lg:mt-1">la</p>{" "}
                <p className=" flex lg:mt-[7px]">exce</p>{" "}
                <p className=" flex lg:mt-[15px]">lencia</p>
              </div>
              <div className="hidden  lg:flex justify-center mb-10 text-xl mb:text-2xl sm:text-4xl xl:text-5xl">
                <p className=" flex t1 mr-2 lg:mr-4 lg:mt-4">En</p>{" "}
                <p className=" flex t2 mr-2 lg:mr-4 lg:mt-2">busca</p>{" "}
                <p className=" flex t3 mr-2 lg:mr-4 lg:mt-1">de</p>{" "}
                <p className=" flex t4 mr-2 lg:mr-4 lg:mt-1">la</p>{" "}
                <p className=" flex t5 lg:mt-[7px]">exce</p>{" "}
                <p className=" flex t6 lg:mt-[15px]">lencia</p>
              </div>
            </p>
            <div className="lg:flex h-full w-full ">
              <div className="flex flex-col w-full  xl:mr-4">
                <div className="">
                  <div
                    className={
                      inter.className &&
                      "flex flex-col font-bold text-2xl mb:text-2xl sm:text-4xl lg:text-4xl  text-center tracking-wide "
                    }
                  >
                    <div className="title-l">
                      <span className="lg:pr-4 text-cyan-950">
                        Motores electricos de
                      </span>
                    </div>
                    <div className="title-r text-xl mb:text-2xl sm:3xl lg:text-4xl">
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
                </div>
                <div className="flex h-[160px]  sm:h-[230px]">
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
                      inter.className &&
                      "flex flex-col font-bold text-xl mb:text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide "
                    }
                  >
                    <div className="title-l">
                      <span className="lg:pr-4 text-cyan-950 text-2xl mb:text-2xl sm:text-4xl lg:text-4xl">
                        Bombas centrifugadas{" "}
                      </span>
                    </div>
                    <div className="title-r  text-xl mb:text-2xl sm:3xl lg:text-4xl">
                      <span className=" text-red-500 pr-4 ">Mantenimiento</span>
                      {/* <span className="pr-4 text-cyan-950">y</span> */}
                      <span className=" text-red-500">general</span>
                    </div>
                  </div>
                </div>
                <div className="flex h-full">
                  <div className=" w-full flex ">
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
          <Slider/>
        </div>
      </div>
    </div>
  );
};
