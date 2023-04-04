import React from "react";
import TestimonyBox from "./TestimonyBox";
import dictionary from '../../dictionary.json'



export default function Testimonials() {

  const test=dictionary.Home.Testimonials

  const testimonials =test.testimonials

  const testimonialList = testimonials.map((x, i) => (
    <TestimonyBox key={i} name={x.name} text={x.text} role={x.role}/>
  ))


  return (
    <div className="flex items-center px-14 flex-col">
      <div className="bg-[#04142A] rounded-lg p-6  pb-9 flex flex-col">
        <div className="relative">
          <p className="tracking-tight text-white text-m md:text-lg lg:text-lg">
            {test.mainQuote}
          </p>
        </div>
        <div className="text-white py-6">
          <p className="text-white text-md">{test.person}</p>
          <p className="text-md text-light-gray">{test.role}</p>
        </div>
      </div>
      <div>
       
      </div>
      <div className="flex gap-x-20">
        {testimonialList}
      </div>
    </div>
  );
}