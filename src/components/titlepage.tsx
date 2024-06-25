import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import bg from "../../public/assets/motorkrita.png";
import bg1 from "../../public/bombakrita2.png";
import bg2 from "../../public/bombaskrita.png";
import bg3 from "../../public/motorpage.png";
import { Courier_Prime } from "next/font/google";
import { Slider } from "./Slider";

const Courtier = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });
export const TitlePage = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center foto ">
      <div className="w-full h-full  mb:mt-0 lg:mt-10 xl:mt-10">
        <h1
          className={
            inter.className &&
            "flex flex-col font-bold text-7xl h-full max-w-[1500px] text-center tracking-wide justify-center items-center "
          }
        >
          <div className="title-l  flex flex-col justify-center items-center">
            <div></div>
            <div className="w-full h-full ">
              <p className="title-r  text-sky-800 h-auto mb-0 pt-0 text-center =">
                <p
                  className={
                    Courtier.className &&
                    "mb:text-xl mb:pt-4 sm:text-3xl font-bold text-black md:text-xl "
                  }
                >
                  Boinca Servicios
                </p>
              
                <div className=" flex justify-center mb-10  mb:text-3xl sm:text-5xl">
                  <p className=" flex t1 mb:mr-2 lg:mr-4 lg:mt-4">En</p>{" "}
                  <p className=" flex t2 mb:mr-2 lg:mr-4 lg:mt-2">busca</p>{" "}
                  <p className=" flex t3 mb:mr-2 lg:mr-4 lg:mt-1">de</p>{" "}
                  <p className=" flex t4 mb:mr-2 lg:mr-4 lg:mt-1">la</p>{" "}
                  <p className=" flex t5 lg:mt-[7px]">exce</p>{" "}
                  <p className=" flex t6 lg:mt-[15px]">lencia</p>
                </div>
              </p>
            </div>
            <div className="lg:flex h-full w-full ">
              <div className="flex flex-col w-full  xl:mr-4">
                <div className="">
                  <div
                    className={
                      inter.className &&
                      "flex flex-col font-bold mb:text-3xl sm:text-2xl lg:text-4xl  text-center tracking-wide "
                    }
                  >
                    <div className="title-l">
                      <span className="pr-4 text-cyan-950">
                        Motores electricos de
                      </span>
                    </div>
                    <div className="title-r">
                      <span className=" text-red-500 "> baja</span>
                      <span className="pr-4 text-cyan-950">,</span>
                      <span className="pr-4 text-red-500">media</span>
                      <span className="pr-4 text-cyan-950">y</span>
                      <span className="pr-4  text-red-500">alta</span>
                      <span className="pr-4 rayo animate-pulse text-transparent">
                        tension
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex mb:h-[200px] sm:h-[270px]">
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
                      "flex flex-col font-bold mb:text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide "
                    }
                  >
                    <div className="title-l">
                      <span className="pr-4 text-cyan-950 text-3xl">
                        Bombas centrifugadas{" "}
                      </span>
                    </div>
                    <div className="title-r ">
                      <span className=" text-red-500 pr-4 ">Mantenimiento</span>
                      <span className="pr-4 text-cyan-950">y</span>
                      <span className=" text-red-500">Recontruccion</span>
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
        </h1>
      </div>

    </div>
  );
};
