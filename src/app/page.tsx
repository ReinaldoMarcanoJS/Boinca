import { InitialPage, Sidebar, TopMenu } from "@/components";
import Image from "next/image";
import leeson from "../../public/leeson.png";
import westinghouse from "../../public/westinghouse.png";
import motorUs from "../../public/motor-us.png";
import web from "../../public/web.png";
import Franklin_Electric from "../../public/Franklin_Electric.png";
import Lincoln_Electric from "../../public/Lincoln_Electric.png";
import pentax from "../../public/pentax.png";
import teco from "../../public/teco.png";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col h-[100vh] justify-center items-center w-full from-transparent to-cyan-950/30 from-30% ">
      <div className="flex flex-col h-[100vh] justify-center items-center w-full bg-gradient-to-b   p-4 px-32">
        <TopMenu />
        {/* <section className="flex justify-center  pt-20 w-full">
        <div className="w-full h-full">
          <div className="flex w-full h-full flex-col">
            <div className="flex w-full h-full items-center flex-col">
              <h1 className={inter.className && "font-bold text-3xl"}>
                Mantenimiento de Motores Electricos de Media y Alta tension
              </h1>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-2 justify-center items-center p-2 bg-white">
          <div className="w-full h-full row-span-2 bg-black rounded-lg"></div>
          <div className="w-40 h-40 bg-black rounded-lg"></div>{" "}
          <div className="w-40 h-40 bg-black rounded-lg"></div>{" "}
          <div className="w-40 h-40 bg-black rounded-lg"></div>{" "}
          <div className="w-full h-48 col-span-2 bg-black rounded-lg"></div>{" "}
          <div className="w-40 h-48 bg-black rounded-lg"></div>{" "}
          <div className="w-40 h-40 bg-black rounded-lg"></div>{" "}
          <div className="w-40 h-40 bg-black rounded-lg"></div>{" "}
          <div className="w-full h-full col-span-2 bg-black rounded-lg"></div>
        </div>
      </section>

      <section className="w-full h-[500px]"></section>
      <Image src={bg} width={1000} height={1000} className="w-full h-full" alt="bg"/> */}
        {/* <Image src={bgs} width={1000} height={1000} className="w-full h-full" alt="bg"/>  */}
        <div className="pt-24 flex w-full h-full items-center flex-col ">
          <h1
            className={
              inter.className &&
              "flex flex-col font-bold text-6xl max-w-[600px] text-center tracking-wide "
            }
          >
            <div className="title-l">
              <span className="pr-4  text-red-500">Mantenimiento</span>
              <span className="pr-4 text-cyan-950">de</span>
            </div>
            <div className="title-r">
              <span className="pr-4 text-cyan-950"> motores electricos de</span>
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

        <div className="flex w-full bg-transparent">
          {/* <div className="logos w-full max-h-[50px] bg-cyan-950">
        <div className="logos-slide flex w-full">
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={leeson} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={westinghouse} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={motorUs} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={web} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={Franklin_Electric} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={Lincoln_Electric} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={teco} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={pentax} />
        </div>

        <div className="logos-slide flex">
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={leeson} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={westinghouse} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={motorUs} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={web} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={Franklin_Electric} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={Lincoln_Electric} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={teco} />
          <Image width={1000} height={1000} className="w-10 h-10" alt="logos" src={pentax} />
        </div>
      </div> */}
          
        </div>
      </div>
      <div className="slider flex items-center justify-center w-full h-full bg-transparent relative">
            <div className="slide-track flex items-center justify-center w-full h-full bg-transparent absolute">
              <div className="slide flex items-center justify-center w-full h-full bg-transparent">
                <Image
                  src={leeson}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={teco}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={westinghouse}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={motorUs}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={pentax}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={web}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={Franklin_Electric}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={Lincoln_Electric}
                  height={100}
                  width={250}
                  className="h-[30px] w-[80px]"
                  alt="logo"
                />
              </div>
              <div>
              <Image
                  src={leeson}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={teco}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={westinghouse}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={motorUs}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={pentax}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={web}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={Franklin_Electric}
                  height={100}
                  width={250}
                  className="h-[40px] w-[70px]"
                  alt="logo"
                />
              </div>
              <div className="slide">
                <Image
                  src={Lincoln_Electric}
                  height={100}
                  width={250}
                  className="h-[30px] w-[80px]"
                  alt="logo"
                />
              </div>
            </div>
          </div>
    </main>
  );
}
