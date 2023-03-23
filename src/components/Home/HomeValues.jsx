import React from "react";
import ValueBox from "./ValueBox";
import json from "../../dictionary.json"

export default function HomeValues(props) {
  const content = json.Home.HomeValues
  return (
    <div className="space-x-8 pt-24">
      <h2 className="text-lg text-white font-medium mb-8 text-center">
        Protect Your Data
      </h2>
      <div className="lg:flex justify-center">
        {content.valueBox.map((vB) => {
          return (
            <div className="pt-6 pl-10 pr-10">
              <ValueBox
                imageSrc={vB.imageSrc}
                title={vB.title}
                description={vB.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
