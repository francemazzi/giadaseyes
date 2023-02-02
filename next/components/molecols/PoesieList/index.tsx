import React from "react";
import { SLICE_POESIE } from "../../../commons/data";
import PoesieCard from "../PoesieCard";

type Props = {};

function PoesieList({}: Props) {
  return (
    <div className="">
      <div className="font-bold text-[25px] w-full justify-around py-[20px] text-center">
        Le ultime creazione
      </div>
      <div className="flex flex-row items-center md:justify-center lg:justify-around  sm:justify-start overflow-x-scroll">
        {SLICE_POESIE.map((i, id) => {
          return (
            <div key={id}>
              <PoesieCard text={i.poetry} title={i.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PoesieList;
