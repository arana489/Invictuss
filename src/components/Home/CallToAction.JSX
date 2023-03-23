import React from "react";
import { TypeAnimation } from "react-type-animation";
import json from "../../dictionary.json"

export default function CallToAction(props) {
  const content = json.Home.CallToAction
  return (
    <div className="flex flex-col text-xl md:text-xl pl-10 pt-24 text-center sm:text-left sm:pl-16  md:flex-wrap md:flex-row md:items-center">
      <h1 className="text-left font-extrabold text-white md:w-3/4 lg:w-1/2">
        {content.top}
        <br />
        <span className=" text-light-blue">
          <div className="h-14">
            <TypeAnimation
              sequence={content.middle}
              cursor={false}
              repeat={Infinity}
              style={{
                fontSize: "4xl",
                color: "light-blue",
                lineHeight: "1.2",
              }}
            />
          </div>
        </span>{" "}
        <span className="text-white">{content.bottom}</span>
        {/* <span className=" text-orange"> Reliable </span> Service */}
      </h1>
    </div>
  );
}
