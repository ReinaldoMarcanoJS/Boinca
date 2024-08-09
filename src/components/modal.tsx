'use client'
import { AiOutlineClose } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { OptionsRedirectModal } from "./OptionsRedirectModal";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Image from "next/image";
import ico from "./../app/icon.ico"
import Link from "next/link";

export const Modal = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false)
  return (
    <div>
      <div>
      <button onClick={() => setModal(!modal)} className="w-12 h-16 ml-2 mb:ml-0 -mr-2 border-r min-[1030px]:hidden">
          <CiMenuBurger size={25} />
        </button>
      </div>

      {modal && (
          <div className="transition duration-500 absolute bg-white top-0 -left-2 w-[90vw] h-[100vh] md:w-[80vw] py-6 ">
              <button className="absolute bg-white rounded-sm border p-[2px] right-4" onClick={() => setModal(!modal)}>
              <AiOutlineClose/>
              </button>

              <div className="boinca flex w-full items-center justify-center">
                  <span className="absolute left-8"><Image src={ico} alt="ico" width={40} height={40} className="mr-4" /></span>
                  <h3 className="bg-transparent drop-shadow-xl text-sky-80 text-3xl font-bold ">Boinca</h3>
              </div>
              <div>
                <ul className="flex flex-col justify-between h-full ">
                    <Link className=" h-10 p-2 bg-white rounded-sm w-auto" href={"#contact"}>WhatsApp</Link>
                    <Link className=" h-10 p-2 bg-white rounded-sm  " href={"#contact"}>Sobre Nosotros</Link>
                    <Link className=" h-10 p-2 bg-white rounded-sm  " href={"#contact"}>Ubicacion</Link>
                    <Link className=" h-10 p-2 bg-white rounded-sm  " href={"#contact"}>Correo</Link>
                    <Link className=" h-10 p-2 bg-white rounded-sm  " href={"#contact"}>servicios</Link>
                    <Link className=" h-10 p-2 bg-white rounded-sm  " href={"#contact"}>Galeria</Link>
                </ul>
              </div>
          </div>
      )}
    </div>
  );
};
