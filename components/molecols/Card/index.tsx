import React from "react";

type Props = {
  title: string;
  text: string;
};

export default function Card({ title, text }: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-[12rem] h-[8rem] mx-[5px] shadow-md rounded-md bg-white p-[4px] my-[15px]">
      <h2 className="p-[4px] font-bold text-darkBrown">{title}</h2>
      <p className="my-[5px]">{text}</p>
    </div>
  );
}
