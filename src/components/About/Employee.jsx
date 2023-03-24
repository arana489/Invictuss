import React from "react";

export default function About({imageSrc,eName,title,description}) {
   
    return(
        <div className="text-white mb-8 w-80 md:w-64 lg:w-64  lg:text-center">
            <img className="border-b-white border-2 object-cover h-72 w-64 rounded-2xl" src={ imageSrc}></img>
            <div className="text-center" >
                <h1 className="text-lg mt-2">{eName}</h1>
                <h1 className="text-m ">{title}</h1>
                <p className="text-sm mt-2">{description}</p>
            </div>
            
        </div>
    );
}