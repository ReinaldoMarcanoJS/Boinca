import { TopMenu } from "../topMenu";
import { TitlePage } from "../titlepage";
import { Slider } from "../Slider";
import bg from "../../../public/bg-motores.png";
import Image from "next/image";
import { SliderImages } from "../SliderImages";

export const InitialPage = () => {
  return (
    <div className=" flex w-full h-full ">
      <main className="flex flex-col h-[100vh] justify-center items-center w-full from-transparent relative scroll-mx-0 bg-gradient-to-b to-cyan-950/30 from-30% ">
          <Image
            src={bg}
            width={1000}
            height={1000}
            alt="bg"
            className="w-full h-full absolute opacity-15"
          />
        <TopMenu />
        <div className="flex h-[100vh] justify-center items-center w-full    p-4 px-32">
            <div className="flex justify-center items-center ">
              <TitlePage />
              {/* <SliderImages/> */}
            </div>
        </div>
        <Slider />
      </main>
    </div>
  );
};
