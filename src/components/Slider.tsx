import Image, { StaticImageData } from "next/image";
import leeson from "../../public/slider/sli/leeson.png";
import westinghouse from "../../public/slider/sli/westinghouse.png";
import Reliance_electric from "../../public/slider/sli/reliance-electric.png";
import motorUs from "../../public/slider/sli/motor-us.png";
import web from "../../public/slider/sli/web.png";
import Franklin_Electric from "../../public/slider/sli/Franklin_Electric.png";
import Lincoln_Electric from "../../public/slider/sli/Lincoln_Electric.png";
import pentax from "../../public/slider/sli/pentax.png";
import teco from "../../public/slider/sli/teco.png";

export const Slider = () => {
  return (
    <div className="bottom-0 slider flex items-center justify-center w-[100vw] h-full bg-transparent relative ">
      <div className="slide-track flex items-center justify-center w-full h-full bg-transparent absolute bottom-0">       <SliderItem src={leeson} />
        <SliderItem src={westinghouse} />
        <SliderItem src={motorUs} />
        <SliderItem src={Franklin_Electric} />
        <SliderItem src={pentax} />
        <SliderItem src={motorUs} />
        <SliderItem src={Lincoln_Electric} />
        <SliderItem src={teco} />
        <SliderItem src={Reliance_electric} />
        <SliderItem src={web} />
        <SliderItem src={leeson} />
        <SliderItem src={westinghouse} />
        <SliderItem src={Franklin_Electric} />
        <SliderItem src={pentax} />
        <SliderItem src={motorUs} />
        <SliderItem src={teco} />
        <SliderItem src={Reliance_electric} />
        <SliderItem src={web} />
        <SliderItem src={leeson} />
        <SliderItem src={westinghouse} />
        <SliderItem src={Franklin_Electric} />
        <SliderItem src={pentax} />
        <SliderItem src={Lincoln_Electric} />
        <SliderItem src={teco} />
        <SliderItem src={Reliance_electric} />
        <SliderItem src={Lincoln_Electric} />
        <SliderItem src={motorUs} />
        <SliderItem src={web} />
        <SliderItem src={leeson} />
        <SliderItem src={westinghouse} />
        <SliderItem src={Franklin_Electric} />
        <SliderItem src={pentax} />
        <SliderItem src={motorUs} />
        <SliderItem src={teco} />
        <SliderItem src={Reliance_electric} />
        <SliderItem src={Lincoln_Electric} />
        <SliderItem src={web} />
        <SliderItem src={leeson} />
        <SliderItem src={westinghouse} />
        <SliderItem src={Franklin_Electric} />
        <SliderItem src={pentax} />
        <SliderItem src={Lincoln_Electric} />
        <SliderItem src={teco} />
        <SliderItem src={Reliance_electric} />
        <SliderItem src={motorUs} />
        <SliderItem src={motorUs} />
        <SliderItem src={teco} />
        <SliderItem src={Reliance_electric} />
        <SliderItem src={Lincoln_Electric} />
        <SliderItem src={web} />
        <SliderItem src={leeson} />
        <SliderItem src={westinghouse} />
        <SliderItem src={Franklin_Electric} />
        <SliderItem src={pentax} />
        <SliderItem src={Lincoln_Electric} />
        <SliderItem src={teco} />
        <SliderItem src={Reliance_electric} />
        <SliderItem src={motorUs} />
      </div>
    </div>
  );
};

interface Props {
  src: StaticImageData;
}

export const SliderItem = ({ src }: Props) => {
  return (
    <div className="slide py-2">
    <Image
      src={src}
      height={50}
      width={80}
      className="h-[50px] w-[80px]"
      alt="logo"
    />
  </div>
  );
};
