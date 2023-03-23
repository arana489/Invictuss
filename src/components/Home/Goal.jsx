import React from "react";


export default function Goal(props) {
    return (
    <div className= "flex flex-col">
      <div className="flex flex-col space-y-10 flex-wrap text-4xl md:text-8xl pl-10 pt-10 text-center sm:text-left sm:pl-16 sm:pt-40">   <h1 className="text-left text-white">
      Our Goal
        </h1>
      </div>


    <div className = "flex flex-col space-y-20 flex-wrap text- md:text-8xl pl-10 pt-10 text-center sm:text-left sm:pl-16 sm:pt-30">
    <div className="flex space-x-20 ">
    <p className="w-1/2 flex-col md:text-2xl pr-20 text-left text-white">
    We are a B2B services company that aims for being a product company in addition to our current offering. <br />Our clientele is companies - big or small. <br />As long as they have code infrastructure of a datacenter, either on-prem or cloud-based, we can help them secure it. </p>

                <div className="w-1/2 pl-15">
                    <img
                        src="https://via.placeholder.com/400x400"
                        alt="Placeholder Image"
                        className="h-64 w-full object-cover pl-20 ml-15"
                    />
                </div>
                
            </div>

      
  </div>
  </div>
    )
}