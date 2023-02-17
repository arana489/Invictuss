import React from "react";
import ServiceDropdown from "./ServiceDropdown";
import { HashLink as Link } from 'react-router-hash-link';





export default function Service(props){
    // Array with all services, may incorporate a loop later for efficiency and better code
    const services = [{service: 'DevSecOps and Cloud Defense', description: "Description"},
                    {service: 'SSDLC + Security Awareness', description: "Description"},
                    {service: 'CI/CD Architecture and Optimization', description: "Description"},
                    {service: 'Visibility Enhancement', description: "Description"},
                    {service: 'On-prem Hardening and Architecture', description: "Description"},
                    {service: 'CISO as a Service', description: "Description"},
                    {service: 'Web App Penetration Testing', description: "Description"},
                    {service: 'Compliance, Regulation, and GRC', description: "Description"}]

    const serviceList=services.map((x) => <ServiceDropdown service={x.service} description={x.description}></ServiceDropdown>)
 
    return(
        <div>
            <div className="text-8xl text-center">
                <br></br>
                <h2>Services</h2>
                <p className="text-6xl">Description Here</p>
                <br></br>
            </div>
            {/* Possible bar with all services laid out and linked? */}



            <div className="flex justify-evenly">
                <div className="flex flex-wrap justify-evenly gap-3">
                    {serviceList}
                    {/* <ServiceDropdown service={services[0]} description="description"></ServiceDropdown>
                    <ServiceDropdown service={services[1]} description="description"></ServiceDropdown>
                    <ServiceDropdown service={services[2]} description="description"></ServiceDropdown>
                    <ServiceDropdown service={services[3]} description="description"></ServiceDropdown>
                    <ServiceDropdown service={services[4]} description="description"></ServiceDropdown>
                    <ServiceDropdown service={services[5]} description="description"></ServiceDropdown>
                    <ServiceDropdown service={services[6]} description="description"></ServiceDropdown>
                    <ServiceDropdown service={services[7]} description="description"></ServiceDropdown> */}
                </div>
            </div>
            
         

            <div>
                <br></br>
                <br></br>
            </div>
        </div>
        

    )
}
