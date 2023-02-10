import React from "react";
import ServiceDropdown from "./ServiceDropdown";

export default function Service(props){
    const services = ['DevSecOps and Cloud Defense',
                         'SSDLC + Security Awareness',
                        'CI/CD architecture and optimization',
                        'Visibility Enhancement',
                        'On-prem Hardening and Architecture',
                        'CISO as a Service',
                        'Web Application Penetration Testing (WAPT)',
                        'Compliance, Regulation, and GRC']
    return(
        <div>
            <div className="text-8xl text-center">
                <br></br>
                <h2>Services</h2>
                <p className="text-6xl">Description Here</p>
            </div>
            
            <div>
                <ServiceDropdown service={services[0]} description="description"></ServiceDropdown>
            </div>
            <div>
                <ServiceDropdown service={services[1]} description="description"></ServiceDropdown>
            </div>
            <div>
                <ServiceDropdown service={services[2]} description="description"></ServiceDropdown>
            </div>
            <div>
                <ServiceDropdown service={services[3]} description="description"></ServiceDropdown>
            </div>
            <div>
                <ServiceDropdown service={services[4]} description="description"></ServiceDropdown>
            </div>
            <div>
                <ServiceDropdown service={services[5]} description="description"></ServiceDropdown>
            </div>
            <div>
                <ServiceDropdown service={services[6]} description="description"></ServiceDropdown>
            </div>
            <div>
                <ServiceDropdown service={services[7]} description="description"></ServiceDropdown>
            </div>

            <div>
                <br></br>
                <br></br>
            </div>
        </div>
       

    )
}
