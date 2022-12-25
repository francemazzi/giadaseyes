import React from "react";

//data import
import { NAVBAR } from "../../../commons/data";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3.5 px-4 bg-white shadow-md">
      <div className="text-black text-[22px] hover:text-darkBrown font-bold lg:text-[25px]">
        {NAVBAR[0].logo}
      </div>
    </div>
  );
};

export default Navbar;
