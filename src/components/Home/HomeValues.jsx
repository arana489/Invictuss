import React from "react";
import ValueBox from "./ValueBox";

export default function HomeValues(props) {
  return (
    <div className="space-x-8 pt-20">
      <h2 className="text-5xl text-white font-medium mb-8 text-center">
        Protect Your Data
      </h2>
      <div className="flex justify-center">
      <div className="pt-6 pl-10 pr-10">
          <ValueBox
            imageSrc="src/assets/teamwork.png"
            title="Value1"
            description="We believe in the power of collaboration and working together to achieve great things."
          />
        </div>
        <div className="pt-6 pl-10 pr-10">
          <ValueBox
            imageSrc="src/assets/teamwork.png"
            title="Value2"
            description="We believe in the power of collaboration and working together to achieve great things."
          />
        </div>
        <div className="pt-6 pl-10 pr-10 ">
          <ValueBox
            imageSrc="src/assets/teamwork.png"
            title="Value3"
            description="We believe in the power of collaboration and working together to achieve great things."
          />
        </div>
      </div>
    </div>
  );
}