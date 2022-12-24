import React from "react";
import { buttonType } from "../../../commons/types";
//ff7f66
const Button: React.FC<buttonType> = ({
  text,
  color,
  textColor,
  colorHover,
}) => {
  return (
    <div
      className={`flex flex-col font-semibold bg-[${color}] hover:bg-[${colorHover}] p-[10px] shadow-lg rounded-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300`}
    >
      <div className={`text-[16px] text-[${textColor}]`}>{text}</div>
    </div>
  );
};

export default Button;
