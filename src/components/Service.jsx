import React from "react";
import ServiceDropdown from "./ServiceDropdown";
import { HashLink as Link } from 'react-router-hash-link';

export default function Service(props){
    // Array with all services, may incorporate a loop later for efficiency and better code
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
                <br></br>
            </div>
            {/* Possible bar with all services laid out and linked? */}
            <div className="text-center">
                <Link to="/Service#service1">{services[0]}</Link>
            </div>
            {/* All services are connected to the service dropdown component */}
            <div id="service1">
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
