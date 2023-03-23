import React from "react";


export default function Testimonials(props) {
  return (
    <div className="flex items-center flex-col p-12">
      <div className="bg-[#04142A] rounded-lg p-20 pb-9 flex flex-col">
      <h2 className="text-5xl text-white font-medium text-center">
        Testimonials
      </h2>
      <h2 className="text-xl text-white font-medium ml-4">
        <img src="src/assets/teamwork.png" width="66" height="33"/>
      </h2>
        <div className="relative " style={{ width: "100%", maxWidth: "926px" }}>
          <p className="tracking-tight text-left text-white text-2xl pl-20 pr-20">
            Invictuss secured our cloud infrastructure, identified and
            resolved several vulnerabilities that could have caused a major security
            breach, and provided practical and easy-to-maintain solutions. We highly
            recommend their services to secure any company's cloud infrastructure. 
          </p>
        </div>
        <div className="text-white py-6 pl-20">
          <p className="text-white text-2xl">Daniel</p>
          <p className="text-sm text-light-gray">Cheif Technical Officer</p>
        </div>
      </div>        
      </div>
    
  );
}
