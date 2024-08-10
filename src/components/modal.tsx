"use client";
import { AiOutlineClose } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { OptionsRedirectModal } from "./OptionsRedirectModal";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Image from "next/image";
import ico from "./../app/icon.ico";
import bg from "./../../public/img.png";
import Link from "next/link";
import {
  MdAlternateEmail,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import {
  PiMapPinLineLight,
  PiMessengerLogoThin,
  PiPersonArmsSpreadBold,
} from "react-icons/pi";
import { RiGalleryLine } from "react-icons/ri";

export const Modal = (): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div>
      <div>
        <button
          onClick={() => setModal(!modal)}
          className="w-12 h-16 ml-2 mb:ml-0 -mr-2 border-r min-[1030px]:hidden"
        >
          <CiMenuBurger size={25} />
        </button>
      </div>

      {modal && (
        <div className="transition duration-500 absolute bg-white  top-0 -left-2 w-[90vw] h-[100vh] md:w-[80vw] bg-[url('./../../public/img.png')] bg-[length:100%_300px]">
          <button
            className="absolute bg-white  border p-[2px] right-4 top-4"
            onClick={() => setModal(!modal)}
          >
            <AiOutlineClose />
          </button>

          <div className="boinca flex w-full items-center justify-center p-5  bg-sky-800/80 rounded-b-sm">
            <span className="absolute left-8">
              <Image
                src={ico}
                alt="ico"
                width={40}
                height={40}
                className="mr-4"
              />
            </span>
            <h3 className="bg-transparent drop-shadow-xl text-sky-80 text-4xl font-bold ">
              Boinca
            </h3>
          </div>
          <div className="p-6 ">
            <ul className="flex flex-col justify-between h-full  text-xl rounded-md font-semibold  ">
              <li className="py-3 flex  items-center border-b border-gray-500/25 m-0">
                <PiPersonArmsSpreadBold color="green" size={30} />
                <Link
                  className="ml-3 h-10 flex items-center  hover:bg-sky-800 rounded-md "
                  href={"#contact"}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li className="py-3 flex  items-center border-b border-gray-500/25 m-0">
                <MdOutlineMiscellaneousServices color="gray" size={30} />
                <Link
                  className=" h-10 ml-3 flex items-center  hover:bg-sky-800 rounded-md "
                  href={"#contact"}
                >
                  Servicios
                </Link>
              </li>
              <li className="flex  items-center  py-3 border-b border-gray-500/25 m-0">
                <PiMessengerLogoThin color="green" size={30} />

                <Link
                  className=" h-10 ml-3 flex items-center hover:bg-sky-800 rounded-md "
                  href={"#contact"}
                >
                  WhappApp
                </Link>
              </li>
              <li className="flex  items-center py-3 border-b border-gray-500/25 m-0">
                <MdAlternateEmail color="Blue" size={30} />

                <Link
                  className=" h-10 ml-3 flex items-center hover:bg-sky-800 rounded-md "
                  href={"#contact"}
                >
                  Correo
                </Link>
              </li>
              <li className="flex  items-center py-3 border-b border-gray-500/25 m-0">
                <PiMapPinLineLight color="Red" size={30} />

                <Link
                  className=" h-10 ml-3 hover:bg-sky-800 rounded-md "
                  href={"#contact"}
                >
                  Ubicacion
                </Link>
              </li>
              <li className="py-3 flex  items-center border-b border-gray-500/25 m-0">
                <RiGalleryLine color="yellow" size={30} />
                <Link
                  className=" h-10 ml-3 flex items-center hover:bg-sky-800 rounded-md "
                  href={"#contact"}
                >
                  Galeria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
