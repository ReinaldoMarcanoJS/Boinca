import Link from 'next/link'
import React from 'react'
import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from 'react-icons/ci'
import { PiMapPinLineLight, PiMessengerLogoThin } from 'react-icons/pi'
import { Li } from './ui/Li'

export const TopMenu = () => {
  return (
    <div className="w-full flex justify-center items-center py-1 bg-white z-10 top-0 h-16 border ">

    <div className="w-full px-6 flex items-center justify-between space-x-4 absolute">
      <h5 hidden className="bg-transparent font-bold text-4xl lg:block"><p className=' bg-transparent text-sha drop-shadow-xl text-red-500'>Boinca</p></h5>
      <button className="w-12 h-16 -mr-2 border-r lg:hidden">
        <CiMenuBurger size={30} />
      </button>

      <div hidden className="md:block">
          <ul className='flex'>
           
            <Li  href='Pozos profundos'>Pozos profundos</Li>
            <Li href='Balanceo Dinamico'>Balanceo Dinamico</Li>
            <Li href='Bombas centrifigadas'>Bombas centrifigadas</Li>
            <Li href='Motores Electricos'>Motores Electricos</Li>
            
          </ul>
        </div>
      <div className="flex space-x-2">
        
        
        
        <a href={"#section2"} className="flex items-center justify-center w-10 h-10 rounded-xl border md:hidden">
          <CiSearch />
        </a>
        <a href={"#section2"}   className="flex items-center justify-center w-10 h-10 rounded-xl border">
          <CiChat1 color='Blue' size={25} />
        </a>
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border">
          <PiMessengerLogoThin color='green' size={25}/>
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-xl border">
          <PiMapPinLineLight color='Red' size={25}/>
        </button>
      </div>
    </div>
  </div>
  )
}