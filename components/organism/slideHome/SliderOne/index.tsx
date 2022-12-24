import React from "react";
import Image from "next/image";
import Button from "../../../atoms/Button";

//import data
import { SLIDE_ONE_HOMEPAGE } from "../../../../commons/data";

//TODO --> inserire div ombra e margine laterale
const SliderOne = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[18rem] lg:h-[40rem] w-screen p-[5px] relative">
      <div className="absolute h-[18rem] lg:h-[40rem] w-screen">
        <Image
          objectFit="cover"
          layout="fill"
          src="/img/jadeIntro.JPG"
          priority
          alt="jade"
        />
      </div>
      <div className=" text-[25px] font-bold px-[3rem] text-white relative">
        {SLIDE_ONE_HOMEPAGE.beging_phrase}
        <Button text={SLIDE_ONE_HOMEPAGE.button} textColor="text-black" />
      </div>
    </div>
  );
};

export default SliderOne;
