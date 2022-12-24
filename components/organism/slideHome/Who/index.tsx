import React from "react";
import { SLIDE_CARD } from "../../../../commons/data";
import Card from "../../../molecols/Card";

type Props = {};

function Who({}: Props) {
  return (
    <div className="fle flex-col justify-center items-center p-[5px] bg-lightBeige py-[20px]">
      <div className="font-bold text-[25px] w-full text-center ">
        La mia identità
      </div>
      {/* Slide di chi sono */}
      <div className="flex flex-row items-center md:justify-center lg:justify-around  sm:justify-start overflow-x-scroll">
        {SLIDE_CARD.map((i, id) => {
          return (
            <div key={id}>
              <Card text={i.text} title={i.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Who;
