import Link from "next/link";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import('../components/modal'))

export const Header = () => {
 
  return (
    <header
      className={
        "absolute w-full flex flex-col justify-center items-center bg-white z-10 top-0  border "
      }
    >
      <div className="w-full px-2 lg:px-4 flex items-center justify-between space-x-4 ">
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
            <li className="py-3 mx-2 flex  items-center m-0 transition duration-200 hover:scale-105 active:scale-110">
              <Link className="ml-3 h-10 flex items-center underline decoration-2 underline-offset-4 decoration-double decoration-sky-800 hover:decoration-sky-800" href={"#about"}>
                Sobre Nosotros
              </Link>
            </li>
            <li className="py-3 mx-2 flex  items-center  border-gray-500/25 m-0 transition duration-200 hover:scale-105 active:scale-110">
              <Link
                className=" h-10 ml-3 flex items-center   underline decoration-2 underline-offset-2 decoration-double decoration-sky-900 "
                href={"#services"}
              >
                Servicios
              </Link>
            </li>
            <li className="flex mx-2  items-center  py-3  border-gray-500/25 m-0 transition duration-200 hover:scale-105 active:scale-110">

              <Link className=" h-10 ml-3 flex items-center  underline decoration-2 underline-offset-2 decoration-double decoration-sky-900 " href={"#contact"}>
                Contacto
              </Link>
            </li>

            <li className="py-3 flex  items-center  border-gray-500/25 m-0 transition duration-200 hover:scale-105 active:scale-110">
              <Link
                className=" h-10 ml-3 flex items-center  underline decoration-2 underline-offset-2 decoration-double decoration-sky-900 decoration-w"
                href={"#gallery"}
              >
                Galeria
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
