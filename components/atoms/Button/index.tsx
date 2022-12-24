import React from "react";
import { buttonType } from "../../../commons/types";

//ff7f66
const Button: React.FC<buttonType> = ({ text, textColor }) => {
  return (
    <div
      className={`my-[10px] flex flex-col font-semibold bg-lightGreen hover:bg-lightBeige p-[10px] w-[10rem] shadow-lg rounded-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300`}
    >
      <div className={`text-[16px] ${textColor} font-bold`}>{text}</div>
    </div>
  );
};

export default Button;
