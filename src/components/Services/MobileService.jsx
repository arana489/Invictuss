import React from "react";
import ServiceDropdown from "./ServiceDropdown";
import { HashLink as Link } from 'react-router-hash-link';
import dictionary from "../../dictionary.json"


export default function MobileService(props){

    const services = dictionary.Services.services
    // Array with all services, may incorporate a loop later for efficiency and better code
    
    const serviceList=services.map((x, i) => (
        <ServiceDropdown key={i} service={x.title} short_desc={x.short_desc} long_desc={x.long_desc} d={x.icon}></ServiceDropdown>
    ))
 
    return(
        <div>
            <div className="my-8 text-center text-white">
                <h2 className="text-xl">Services</h2>
                <p className="text-lg">What We Offer</p>
            </div>
            {/* Possible bar with all services laid out and linked? */}

            <div className="flex justify-evenly">
                <div className="flex flex-wrap justify-evenly gap-3 mb-12">
                    {serviceList}
                </div>
            </div>
            
        </div>
        

    )
}
