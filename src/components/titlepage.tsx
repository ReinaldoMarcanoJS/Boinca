import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const TitlePage = () => {
  return (
    <div className="flex justify-center w-full h-full items-center flex-col ">
      <h1
        className={
          inter.className &&
          "flex flex-col font-bold text-6xl max-w-[600px] text-center tracking-wide  mb-20 "
        }
      >
        <div className="title-l">
          <span className="pr-4  text-red-500">Mantenimiento de</span>
        </div>
        <div className="title-r">
          <span className="pr-4 text-cyan-950">motores electricos de </span>
          <span className=" text-red-500 ">baja</span>
          <span className="pr-4 text-cyan-950">,</span>
          <span className="pr-4 text-red-500">media</span>
          <span className="pr-4 text-cyan-950">y</span>
        </div>
        <div className="title-l">
          <span className="pr-4  text-red-500">alta</span>
          <span className="pr-4 rayo animate-pulse text-transparent">
            tension
          </span>
        </div>
      </h1>
    </div>
  );
};
