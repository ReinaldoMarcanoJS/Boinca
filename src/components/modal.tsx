"use client";

import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Image from "next/image";
import ico from "./../app/icon.ico";
import Link from "next/link";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { PiPersonArmsSpreadBold } from "react-icons/pi";
import { RiGalleryLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";

export default function Modal ()  {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="relative">
      <div>
        <button
          onClick={() => setModal(!modal)}
          className="w-12 h-16 ml-2 mb:ml-0 -mr-2 border-r min-[1030px]:hidden "
        >
          <CiMenuBurger size={25} />
        </button>
      </div>

      {modal && (
         <div className="transition fixed duration-500  bg-white top-0 -left-2 w-[90vw] h-[100vh] sm:w-[70vw]  md:w-[50vw]  bg-[url('./../../public/bg/img.jpg')]  bg-[length:100%_350px]">
          <button
            className="absolute bg-white  border p-[2px] right-4 top-4"
            onClick={() => setModal(!modal)}
          >
            <AiOutlineClose />
          </button>

          <div className="boinca flex w-full items-center justify-center p-5 rounded-b-sm">
            <span className="absolute left-8">
              <Image
                src={ico}
                alt="ico"
                width={40}
                height={40}
                className="mr-4"
              />
            </span>
            <h3 className="bg-transparent drop-shadow-xl text-sky-80 text-4xl font-bold text-sky-800">
              Boinca
            </h3>
          </div>
          <div className="p-4 sm:p-6 ">
            <ul className="flex flex-col justify-between h-full  text-xl rounded-md font-semibold  ">
              <li className="py-3 flex  items-center border-b border-gray-500/25 m-0">
                <PiPersonArmsSpreadBold color="green" size={30} />
                <Link
                  className="ml-3 h-10 flex items-center transition duration-200  active:scale-110"
                  prefetch
                  href={"#about"}
                  onClick={() => setModal(false)}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li className="py-3 flex  items-center border-b border-gray-500/25 m-0">
                <MdOutlineMiscellaneousServices color="gray" size={30} />
                <Link
                  className=" h-10 ml-3 flex items-center transition duration-200  active:scale-110"
                  prefetch
                  href={"#services"}
                  onClick={() => setModal(false)}
                >
                  Servicios
                </Link>
              </li>
              <li className="flex  items-center  py-3 border-b border-gray-500/25 m-0">
                <BsTelephone color="red" size={30} />

                <Link
                  className=" h-10 ml-3 flex items-centertransition duration-200  active:scale-110"
                  href={"#contact"}
                  prefetch
                  onClick={() => setModal(false)}
                >
                  Contacto
                </Link>
              </li>

              <li className="py-3 flex  items-center border-b border-gray-500/25 m-0">
                <RiGalleryLine color="blue" size={30} />
                <Link
                  className=" h-10 ml-3 flex items-centertransition duration-200  active:scale-110"
                  onClick={() => setModal(false)}
                  href={"#gallery"}
                  prefetch
                >
                  Galeria
                </Link>
              </li>
            </ul>

            <div className="text-xl mb:text-2xl sm:text-3xl font-semibold text-sky-800 align-bottom mt-4">
              <p className="text-center mt-10">¡En busca de la excelencia!</p>
            </div>
          </div>
       </div>
      )}
    </div>
  );
};
