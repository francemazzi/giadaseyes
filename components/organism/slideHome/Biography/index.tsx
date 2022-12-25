import React from "react";
import Image from "next/image";
//import data
import { BIOGRAPHY } from "../../../../commons/data";
type Props = {};

export default function Biography({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center p-[5px] bg-lightBeige py-[10px]">
      <div className="flex flex-row items-center font-bold text-[25px] w-full justify-around py-[10px] lg:justify-center ">
        <Image
          width={100}
          height={100}
          src="/img/jadePhotoProfile.jpg"
          className="shadow-md rounded-full lg:mx-[20px]"
          alt="jade photo"
        />
        <p className="lg:mx-[20px]">{BIOGRAPHY.name}</p>
      </div>

      <div className="p-[22px] lg:mx-[15rem]">{BIOGRAPHY.description}</div>
    </div>
  );
}
