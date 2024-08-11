// import { useEffect, useState } from "react";
import { Modal } from "./modal";
import { CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";
import { PiMapPinLineLight, PiMessengerLogoThin } from "react-icons/pi";
import { Li } from "./ui/Li";
import { MdAlternateEmail } from "react-icons/md";

import { Inter, Courier_Prime } from "next/font/google";
import Link from "next/link";

const Courier = Inter({ subsets: ["latin"] });

export const Header = () => {
  // const [modal, setModal] = useState(false);
  // useEffect(() => {
  //   console.log(modal);
  // }, [modal]);
  return (
    <div
      className={
        "absolute w-full flex flex-col justify-center items-center bg-white z-10 top-0  border "
      }
    >
      <div className="w-full px-2 lg:px-6 flex items-center justify-between space-x-4 lg:py-2">
        <h5
          hidden
          className="bg-transparent font-bold text-4xl min-[1030px]:block"
        >
          <p className=" bg-transparent drop-shadow-xl text-sky-800">Boinca</p>
        </h5>
        <div className="relative">
          <Modal />
        </div>

        <div className="space-x-3 min-[700px]:text-base flex  ">
          <Link
            href={"#section2"}
            className="flex items-center justify-center h-10 rounded-xl px-1 border transition duration-200 hover:scale-105 active:scale-110 hover:border-sky-800"
          >
            <MdAlternateEmail color="Blue" size={25} />
            <span className="hidden lg:flex">: BoincaServicios@gmail.com</span>
          </Link>
          <Link
            href={"#section2"}
            className="flex items-center justify-center p-1 h-10 rounded-xl border transition duration-200 hover:scale-105 active:scale-110 hover:border-green-600"
          >
            <PiMessengerLogoThin color="green" size={30} />
            <span className="hidden lg:flex">: +58 4249336565</span>
          </Link>
          <Link
            href={"https://maps.app.goo.gl/q8WbtL5oTbRXaHQf8"}
            className="flex items-center justify-center  h-10 rounded-xl border px-1 transition duration-200 hover:scale-105 active:scale-110 hover:border-red-700"
          >
            <PiMapPinLineLight color="Red" size={30} />
            <span className="hidden lg:flex ">
              : Venezuela, Estado Bolivar, Cuidad Guayana
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-full items-center justify-between space-x-4 hidden md:flex">
        <div className="flex w-full h-full items-center justify-between">
          <ul className=" w-full items-center justify-between xl:text-2xl md:text-xl 2xl:text-2xl sm:hidden lg:flex">
            <Li href={"/#"}> Motores Electricos</Li>
            <span className=" font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Bombas centrifigadas</Li>
            <span className="font-light text-gray-300">|</span>

            <Li href={"/#"}> Balanceo Dinamico</Li>

            <span className="font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Bobinado</Li>

            <span className="font-light text-gray-300 w-1">|</span>

            <span className="sm:hidden md:flex xl:flex items-center">
              <Li href={"/#"}> Torneria</Li>
              <span className="font-light text-gray-300 w-1">|</span>
            </span>

            <Li href={"/#"}> Pozos profundos</Li>
            <span className="sm:hidden md:hidden xl:flex">
              <span className="font-light text-gray-300 w-1">|</span>
              <Li href={"/#"}> Rebabitado</Li>
            </span>

            <span className="sm:hidden md:hidden xl:hidden 2xl:flex ">
              <span className="font-light text-gray-300 w-1">|</span>
              <Li href={"/#"}> Transformadores</Li>
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};
