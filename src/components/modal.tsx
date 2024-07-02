import { AiOutlineClose } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { OptionsRedirectModal } from "./OptionsRedirectModal";

export const Modal = (): JSX.Element => {

  return (
    <div className=" text-white-default z-50 font-default mobile:w-full mobile:h-screen fixed bg-black/70 mobile:absolute">
      <div className="mobile:fixed  mobile:duration-300 mobile:h-screen mobile:w-3/4 tablet:w-3/5 md:w-7/12 desktop:w-2/5 2xl:w-2/5 bg-black/90">
        <div className="mobile:mx-2 mobile:rounded-lg mobile:h-full">
          <div
            className="absolute mobile:left-full text-2xl mobile:top-2">
          <div className="mobile:text-xl mobile:items-center mobile:text-white-default mobile:flex mobile:mb-6 w-full mobile:justify-center mobile:font-semibold mobile:mt-6 desktop:font-semibold">
          <div
            className="absolute mobile:left-full text-2xl mobile:top-2">
            <AiOutlineClose color="white" size="2rem" />
          </div>
                        
          <div className="mobile:mx-3 mobile:h-full mobile:text-base md:text-xl tablet:text-xl desktop:text-2xl 2xl:text-3xl">
            
            </div>
            </div>
            <ul className=" p">
              <h3 className=" mobile:ml-6 mt-2 2xl:mt-4">Categories</h3>
              <div className="w-full h-2 border-b-2 border-white/80"></div>

              <div className="">
                <OptionsRedirectModal className="mt-1 ">
                  Electronics
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Clothes
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Cars
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Houses and Departaments
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Electrodomestics
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Homes
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Games
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Software
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  Gift
                </OptionsRedirectModal>
                <OptionsRedirectModal className="mt-1">
                  anothers
                </OptionsRedirectModal>
              </div>

              <div className="w-full h-2 border-b-2 border-white/80 py-2"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
