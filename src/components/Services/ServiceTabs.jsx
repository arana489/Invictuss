import {React, useState} from "react";
import ServiceContentUnit from "./ServiceContentUnit";
import './animation.css';

function ServiceTabs() {
    const [selectedService, setSelectedService] = useState("");

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    return(
        <div>
            <div className="text-center mb-10 ml-10 mr-10 transform opacity-0 animate-slide-up" style={{ "--delay": "1" }}>
                <div className="text-m mb-5 flex justify-center font-lg"
                     style={{ '--text-color': 'var(--orange)' }}>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "DevSecOps" ? "orange" : "",
                                borderBottomColor: selectedService === "DevSecOps" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("DevSecOps")}>DevSecOps</button>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "SSDLC" ? "orange" : "",
                                borderBottomColor: selectedService === "SSDLC" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("SSDLC")}>SSDLC</button>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "CI/CD Architecture" ? "orange" : "",
                                borderBottomColor: selectedService === "CI/CD Architecture" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("CI/CD Architecture")}>CI/CD Architecture</button>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "Visibility Enhancement" ? "orange" : "",
                                borderBottomColor: selectedService === "Visibility Enhancement" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("Visibility Enhancement")}>Visibility Enhancement</button>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "On-Prem Hardening" ? "orange" : "",
                                borderBottomColor: selectedService === "On-Prem Hardening" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("On-Prem Hardening")}>On-Prem Hardening</button>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "CISO as a Service" ? "orange" : "",
                                borderBottomColor: selectedService === "CISO as a Service" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("CISO as a Service")}>CISO as a Service</button>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "PT" ? "orange" : "",
                                borderBottomColor: selectedService === "PT" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("PT")}>PT</button>
                    <button className="pl-8 pr-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "Compliance" ? "orange" : "",
                                borderBottomColor: selectedService === "Compliance" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("Compliance")}>Compliance</button>
                </div>
            </div>
            <div className="transform opacity-0 animate-slide-up w-full h-screen mb-10" style={{ "--delay": "2" }}>
                <ServiceContentUnit service={selectedService} name="test"/>
            </div>
        </div>
    );
}

export default ServiceTabs;