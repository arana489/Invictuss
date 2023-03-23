import React from "react";
import TestimonyBox from "./TestimonyBox";
import json from "../../dictionary.json"

export default function Testimonials() {
  const content = json.Home.Testimonials
  const testimonialList = content.testimonials.map((x, i) => (
    <TestimonyBox key={i} name={x.name} text={x.text} role={x.role} />
  ));

  return (
    <div className="flex items-center flex-col p-20">
      <div className="bg-[#04142A] rounded-lg p-6 pb-9 flex flex-col">
        <div className="relative">
          <p className="tracking-tight text-white text-m md:text-lg lg:text-lg">
            {content.mainQuote}
          </p>
        </div>
        <div className="text-white py-6">
          <p className="text-white text-md">{content.person}</p>
          <p className="text-md text-light-gray">{content.role}</p>
        </div>
      </div>
      <div></div>
      <div className="flex gap-x-20">{testimonialList}</div>
    </div>
  );
}
