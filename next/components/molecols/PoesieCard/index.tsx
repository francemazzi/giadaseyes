import React from "react";

type Props = {
  title: string;
  text: string;
};

export default function PoesieCard({ title, text }: Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[20rem] mx-[15px] shadow-md rounded-md bg-white p-[4px] my-[15px]">
        <h2 className="p-[4px] font-bold text-darkBrown">{title}</h2>
        <p className="my-[5px]">{text}</p>
      </div>
    </>
  );
}
