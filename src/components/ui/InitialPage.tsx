import { TopMenu } from "../topMenu";
import { TitlePage } from "../titlepage";
import { Slider } from "../Slider";
import { Inter } from "next/font/google";
// import bg from "../../../public/bg-motores.png";
import bg from "../../../public/assets/123.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
export const InitialPage = () => {

  return (
    <div className="bg-efect2 flex w-full h-full ">
      <main className="bg-efect  flex flex-col h-[100vh] justify-center items-center w-full from-transparent relative scroll-mx-0 bg-gradient-to-b to-cyan-950/30 from-30% ">
          {/* <Image
            src={bg}
            width={1000}
            height={1000}
            alt="bg"
            className="w-full h-full absolute opacity-15"
          /> */}
        <TopMenu />
        <div className="flex h-[100vh] justify-center items-center w-full    p-4 px-10">
            <div className="flex flex-col justify-center items-center h-full ">
              <TitlePage />
              {/* <SliderImages/> */}
              {/* <Image width={200} height={100} className="" alt="personal boinca" src={bg}/> */}
            </div>
            <div>
           

            </div>
        </div>
        <Slider />
      </main>
    </div>
  );
};
