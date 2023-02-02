import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center shadow-inner p-4">
      <input
        placeholder="Contattami !"
        type="text"
        name="subscribe-Newsletter"
        width="w-full"
        className="text-center w-full border-slate-500 bg-lightBeige p-[10px] rounded-md text-[16px] shadow-lg my-[8px]"
      />
      <span>
        Puoi trovarmi anche su:
        <a
          href="https://www.linkedin.com/in/giadapasquali/"
          className="mx-[5px] font-bold cursor-pointer"
        >
          Linkedin 👩🏻‍💼
        </a>
      </span>
    </div>
  );
}

export default Footer;
