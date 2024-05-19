import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import bg from "../../public/assets/personal-edit2.png"
import { Courier_Prime } from 'next/font/google'
 
const Courtier = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
})
 

const inter = Inter({ subsets: ["latin"] });
export const TitlePage = () => {
  return (
    <div className="flex justify-center w-full h-full items-center foto ">

     <div className="w-full h-full mt-20">
      {/* <h2>
        Boinca Servicios
      </h2> */}
     <h1
        className={
          inter.className &&
          "flex flex-col font-bold text-7xl h-full max-w-[1500px] max-h-96 text-center tracking-wide justify-center items-center "
        }
      >
        <div className="title-l h-full flex flex-col justify-center items-center align-top">
        <h3 className="title-r pt-8  text-sky-800 h-full top-0">
          {/* <span className="text-gray-500 mr-4">+20</span> */}
          <span className={Courtier.className && "pt-52 text-5xl text-black "}>Boinca Servicios</span> <br></br>
          <div className=" flex"><div className="t1 mr-4 mt-4">En</div> <div className="t2 mr-4 mt-2">busca</div> <div className="t3 mr-4 mt-1">de</div> <div className="t4 mr-4 mt-1">la</div> <div className="t5 mt-[7px]">exce</div> <div className="t6 mt-[15px]">lencia</div></div>
          
        </h3>

      <Image width={1500} height={1000} className="w-[100%]    " alt="personal boinca" src={bg}/>
          {/* <span className="pr-4  text-sky-800">Mantenimiento de </span>
        </div>
        <div className="title-r">
          <span className="pr-4 text-sky-800">motores electricos de </span>
          <span className=" text-gray-600 ">baja</span>

          <span className="pr-4 text-sky-800">,</span>
          <span className="pr-4 text-gray-600">media</span>
          <span className="pr-4 text-sky-800">y</span>
        </div>
        <div className="title-l">
          <span className="pr-4  text-gray-600">alta</span>
          <span className="pr-4 rayo animate-pulse text-transparent">
            tension
          </span> */}
        </div>
      </h1>
     </div>
      {/* <div>
      <h1
        className={
          inter.className &&
          "flex flex-col font-bold text-7xl max-w-[600px] text-center tracking-wide justify-center items-center "
        }
      >
        <div className="title-l">
          <span className="pr-4  text-sky-800">Reparacion de</span>
        </div>
        <div className="title-r">
          <span className="pr-4 text-sky-800">motores electricos de </span>
          <span className=" text-gray-600 ">baja</span>
          <span className="pr-4 text-sky-800">,</span>
          <span className="pr-4 text-gray-600">media</span>
          <span className="pr-4 text-sky-800">y</span>
        </div>
        <div className="title-l">
          <span className="pr-4  text-gray-600">alta</span>
          <span className="pr-4 rayo animate-pulse text-transparent">
            tension
          </span>
        </div>
      </h1>      </div> */}
      <div>

      </div>
    </div>
  );
};
