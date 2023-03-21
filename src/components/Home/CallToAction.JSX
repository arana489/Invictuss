import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function CallToAction(props) {
  // The content can be broken up into three sections:
  // - Top section: Is the portion above the type animation
  // - Middle Section: Is the content of the type animation
  // - Bottom section: Is the portion below the type animation
  const content = {
    top: "Profesional Cyber",
    // The middle section is an array of strings and numbers where
    // the string is one of the words to be animated and the following
    // number is the duration of the animation in milliseconds.
    middle: ["Security", 3000, "Protection", 3000, "Company", 3000],
    bottom: "with Reliable Service",
  };

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
