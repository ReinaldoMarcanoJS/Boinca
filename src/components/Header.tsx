// import { useEffect, useState } from "react";
import { Modal } from "./modal";
import { CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";
import { PiMapPinLineLight, PiMessengerLogoThin, PiPersonArmsSpreadBold } from "react-icons/pi";
import { Li } from "./ui/Li";
import { MdAlternateEmail, MdOutlineMiscellaneousServices } from "react-icons/md";

import { Inter, Courier_Prime } from "next/font/google";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";

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
      <div className="w-full px-2 lg:px-4 flex items-center justify-between space-x-4 lg:py-2">
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
        <ul className="hidden lg:flex justify-between h-full  text-lg font-semibold  ">
              <li className="py-3 mx-2 flex  items-center  border-gray-500/25 m-0 transition duration-200 hover:scale-105 active:scale-110">
                <PiPersonArmsSpreadBold color="green" size={20} />
                <Link
                  className="ml-3 h-10 flex items-center  "
                  href={"#about"}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li className="py-3 mx-2 flex  items-center  border-gray-500/25 m-0 transition duration-200 hover:scale-105 active:scale-110">
                <MdOutlineMiscellaneousServices color="gray" size={20} />
                <Link
                  className=" h-10 ml-3 flex items-center  "
                  href={"#services"}
                >
                  Servicios
                </Link>
              </li>
              <li className="flex mx-2  items-center  py-3  border-gray-500/25 m-0 transition duration-200 hover:scale-105 active:scale-110">
                <BsTelephone color="red" size={20} />

                <Link
                  className=" h-10 ml-3 flex items-center "
                  href={"#contact"}
                >
                  Contacto
                </Link>
              </li>

              <li className="py-3 ml-4 flex  items-center  border-gray-500/25 m-0 transition duration-200 hover:scale-105 active:scale-110">
                <RiGalleryLine color="blue" size={20} />
                <Link
                  className=" h-10 ml-3 flex items-center "
                  href={"#contact"}
                >
                  Galeria
                </Link>
              </li>
            </ul>
        </div>
      </div>
      
    </div>
  );
};
