import React from "react";
import TestimonyBox from "./TestimonyBox";
import dictionary from '../../dictionary.json'
import { RiDoubleQuotesL } from 'react-icons/ri'
import BasicCarousel from "./BasicCarousel";


export default function Testimonials() {

  const test=dictionary.Home.Testimonials

  const testimonials =test.testimonials


  return (
    <div>
      <div className="flex items-center flex-col mb-24">
        <div className="flex flex-col text-white ">
          <RiDoubleQuotesL size={30} className="absolute -translate-y-2 " />
          <p className="text-m mx-9">
            {test.mainQuote}
          </p>
          <div className="pt-6 mx-9">
            <p className="text-[20px]">{test.person}</p>
            <p className="text-[14px] text-[#76798d] font-sans font-[300] tracking-wider">{test.role}</p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <BasicCarousel items={testimonials} />
    </div>
  );
}