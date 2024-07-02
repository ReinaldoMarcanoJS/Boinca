'use client'
import { CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";
import { PiMapPinLineLight, PiMessengerLogoThin } from "react-icons/pi";
import { Li } from "./ui/Li";
import { useEffect, useState } from "react"; 

import { MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import { Modal } from "./modal";

export const Header = () => {
  const [modal,setModal] = useState(false);
  useEffect(() => {
    console.log(modal);
    
  },[modal])
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white z-10 top-0  border ">
      <div className="w-full mb:px-2 lg:px-6 flex items-center justify-between space-x-4 lg:py-2">
        <h5
          hidden
          className="bg-transparent font-bold text-4xl min-[1030px]:block"
        >
          <p className=" bg-transparent text-sha drop-shadow-xl text-sky-800">
            Boinca
          </p>
        </h5>
        <button className="w-12 h-16 ml-4 mb:ml-0 -mr-2 border-r min-[1030px]:hidden">
          <CiMenuBurger size={30} onClick={() => setModal(!modal)}/>
          { modal 
          ? (<Modal/>)
          :( <div></div>)
          }

        </button>

        {/* <div hidden className="md:block">
          <ul className='flex'>
            <li className='flex items-center justify-center m-4'>   <MdAlternateEmail   color='blue' size={20}/>: Boinca@gmail.com</li>
            <li className='flex items-center justify-center '> <PiMessengerLogoThin color='green' size={25}/> : +58 4249336565 </li>
             nnnb n
            
          </ul>
        </div> */}
        <div className="space-x-2 min-[700px]:text-base flex  ">
          {/* <a
            href={"#section2"}
            className="flex items-center justify-center w-10 h-10 rounded-xl border md:hidden"
          >
            <CiSearch />
          </a> */}
          <a
            href={"#section2"}
            className="flex items-center justify-center h-10 rounded-xl px-1 border"
          >
            <MdAlternateEmail color="Blue" size={25} />
            <span className="hidden lg:flex">: BoincaServicios@gmail.com</span>
          </a>
          <button className="flex items-center justify-center p-1 h-10 rounded-xl border">
            <PiMessengerLogoThin color="green" size={30} />
            <span className="hidden lg:flex">: +58 4249336565</span>
          </button>
          <button className="flex items-center justify-center  h-10 rounded-xl border px-1">
            <PiMapPinLineLight color="Red" size={30} />
            <span className="hidden lg:flex ">
              : Venezuela, Estado Bolivar, Cuidad Guayana
            </span>
          </button>
        </div>
      </div>
      <div className="w-full h-full items-center justify-between space-x-4 hidden md:flex">
        <div className="flex w-full h-full items-center justify-between">
          <ul className=" w-full items-center justify-between xl:text-2xl md:text-xl sm:hidden lg:flex">
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
