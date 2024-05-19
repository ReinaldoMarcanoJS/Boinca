import React from "react";
import { CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";
import { PiMapPinLineLight, PiMessengerLogoThin } from "react-icons/pi";
import { Li } from "./ui/Li";

import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

export const TopMenu = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white z-10 top-0  border ">
     
      <div className="w-full px-6 flex items-center justify-between space-x-4 py-2">
        <h5 hidden className="bg-transparent font-bold text-4xl lg:block">
          <p className=" bg-transparent text-sha drop-shadow-xl text-sky-800">
            Boinca
          </p>
        </h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>

        {/* <div hidden className="md:block">
          <ul className='flex'>
            <li className='flex items-center justify-center m-4'>   <MdAlternateEmail   color='blue' size={20}/>: Boinca@gmail.com</li>
            <li className='flex items-center justify-center '> <PiMessengerLogoThin color='green' size={25}/> : +58 4249336565 </li>
             
            
          </ul>
        </div> */}
        <div className="flex space-x-2">
          <a
            href={"#section2"}
            className="flex items-center justify-center w-10 h-10 rounded-xl border md:hidden"
          >
            <CiSearch />
          </a>
          <a
            href={"#section2"}
            className="flex items-center justify-center h-10 rounded-xl px-1 border"
          >
            <MdAlternateEmail color="Blue" size={20} /> :
            BoincaServicios@gmail.com
          </a>
          <button className="flex items-center justify-center p-1 h-10 rounded-xl border">
            <PiMessengerLogoThin color="green" size={25} /> : +58 4249336565
          </button>
          <button className="flex items-center justify-center  h-10 rounded-xl border px-1">
            <PiMapPinLineLight color="Red" size={25} />: Venezuela, Estado
            Bolivar, Cuidad Guayana
          </button>
        </div>
      </div>
      <div className="w-full h-fullflex items-center justify-between space-x-4 ">
        <div className="flex w-full h-full items-center justify-between">
          <ul className="flex w-full items-center justify-between">
            <Li href={"/#"}> Motores Electricos</Li>
            <span className="text-2xl font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Bombas centrifigadas</Li>
            <span className="text-2xl font-light text-gray-300">|</span>

            <Li href={"/#"}> Balanceo Dinamico</Li>

            <span className="text-2xl font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Bobinado</Li>

            <span className="text-2xl font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Torneria</Li>

            <span className="text-2xl font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Pozos profundos</Li>
            <span className="text-2xl font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Banco de Prueba</Li>
            <span className="text-2xl font-light text-gray-300 w-1">|</span>

            <Li href={"/#"}> Transformadores</Li>
          </ul>
        </div>
      </div>
    </div>
  );
};
