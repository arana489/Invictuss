import React from "react";
import ServiceDropdown from "./ServiceDropdown";
import { HashLink as Link } from 'react-router-hash-link';
import dictionary from '../../dictionary.json'






export default function Service(props){

   
    // Array with all services, may incorporate a loop later for efficiency and better code
    const services = dictionary.Services.services

    const serviceList=services.map((x, i) => (
        <ServiceDropdown key={i} service={x.service} description={x.description} d={x.d}></ServiceDropdown>
    ))
 
    return(
        <div>
            <div className="my-8 text-center text-white">
                <h2 className="text-xl">Services</h2>
                <p className="text-lg">Description Here</p>
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
