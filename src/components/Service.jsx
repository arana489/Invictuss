import React from "react";
import ServiceDropdown from "./ServiceDropdown";

export default function Service(props){

    //array of titles
    // or loop from array

    return(
        <div>
            <div className="text-8xl text-center">
                <br></br>
                <h2>Services</h2>
                <p className="text-6xl">Description Here</p>
                <br></br>
            </div>
            
            <div>
                <ServiceDropdown service="service" description="description"></ServiceDropdown>
            </div>
            
        </div>
       

    )
}
