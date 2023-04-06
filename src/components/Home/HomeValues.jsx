import React from "react";
import ValueBox from "./ValueBox";
import dictionary from '../../dictionary.json'


export default function HomeValues(props) {

  const HV=dictionary.Home.HomeValues
  
  return (
    <div>
      <h2 className="text-lg text-white font-medium mb-8 text-center">
        {HV.header}
      </h2>
      <div className="lg:flex justify-center">
        <div className="pt-6 pl-10 pr-10 lg:gap-x-14 ">
          <ValueBox
            imageSrc="/Profile.svg"
            title={HV.valueBox[0].title}
            description={HV.valueBox[0].description}
          />
        </div>
        <div className="pt-6 pl-10 pr-10">
          <ValueBox
            imageSrc="/UserProfile.svg"
            title={HV.valueBox[1].title}
            description={HV.valueBox[1].description}
          />
        </div>
        <div className="pt-6 pl-10 pr-10">
          <ValueBox
            imageSrc="/Profile.svg"
            title={HV.valueBox[2].title}
            description={HV.valueBox[2].description}
          />
        </div>
      </div>
    </div>
  );
}