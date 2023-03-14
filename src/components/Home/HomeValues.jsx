import React from "react";
import ValueBox from "./ValueBox";

export default function HomeValues(props) {
  return (
    <div className="space-x-8 pt-24">
      <h2 className="text-lg text-white font-medium mb-8 text-center">
        Protect Your Data
      </h2>
      <div className="lg:flex justify-center">
      <div className="pt-6 pl-10 pr-10 lg:gap-x-14">
          <ValueBox
            imageSrc="src/assets/Profile.svg"
            title="Value1"
            description="We believe in the power of collaboration and working together to achieve great things."
          />
        </div>
        <div className="pt-6 pl-10 pr-10">
          <ValueBox
            imageSrc="src/assets/UserProfile.svg"
            title="Value2"
            description="We believe in the power of collaboration and working together to achieve great things."
          />
        </div>
        <div className="pt-6 pl-10 pr-10 ">
          <ValueBox
            imageSrc="src/assets/CloudSecurity.svg"
            title="Value3"
            description="We believe in the power of collaboration and working together to achieve great things."
          />
        </div>
      </div>
    </div>
  );
}