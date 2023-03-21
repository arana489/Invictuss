import React from "react";
import ValueBox from "./ValueBox";

export default function HomeValues(props) {
  const content = {
    header: "Protect Your Data",
    valueBox: [
      {
        imageSrc: "src/assets/Profile.svg",
        title: "Security",
        description:
          "We prioritize the protection of our clients' data through cutting-edge security practices and constant monitoring for emerging threats.",
      },
      {
        imageSrc: "src/assets/UserProfile.svg",
        title: "Expertise",
        description:
          "We are cybersecurity experts who stay up-to-date with the latest trends and technologies to provide optimal solutions.",
      },
      {
        imageSrc: "src/assets/CloudSecurity.svg",
        title: "Trust",
        description:
          "We prioritize building strong relationships with our clients based on transparency, honesty, and ethical behavior.",
      },
    ],
  };

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
