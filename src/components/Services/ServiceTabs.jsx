import {React, useState} from "react";
import ServiceContentUnit from "./ServiceContentUnit";
import './animation.css';

function ServiceTabs() {
    const [selectedService, setSelectedService] = useState("DevSecOps");

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    return(
        <div>
            <div className="text-center mb-20 ml-10 mr-10 transform opacity-0 animate-slide-up" style={{ "--delay": "1" }}>
                <div className="pt-20 pb-5 text-m flex justify-center font-lg"
                     style={{ '--text-color': 'var(--orange)' }}>
                    <button className="p-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "DevSecOps" ? "orange" : "",
                                borderBottomColor: selectedService === "DevSecOps" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("DevSecOps")}>DevSecOps</button>
                    <button className="p-8 border-b-8 border-white hover:border-orange hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "SSDLC" ? "orange" : "",
                                borderBottomColor: selectedService === "SSDLC" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("SSDLC")}>SSDLC</button>
                    <button className="p-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "CI/CD Architecture" ? "orange" : "",
                                borderBottomColor: selectedService === "CI/CD Architecture" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("CI/CD Architecture")}>CI/CD Architecture</button>
                    <button className="p-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "Visibility Enhancement" ? "orange" : "",
                                borderBottomColor: selectedService === "Visibility Enhancement" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("Visibility Enhancement")}>Visibility Enhancement</button>
                    <button className="p-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "On-Prem Hardening" ? "orange" : "",
                                borderBottomColor: selectedService === "On-Prem Hardening" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("On-Prem Hardening")}>On-Prem Hardening</button>
                    <button className="p-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "CISO" ? "orange" : "",
                                borderBottomColor: selectedService === "CISO" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("CISO")}>CISO</button>
                    <button className="p-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "PT" ? "orange" : "",
                                borderBottomColor: selectedService === "PT" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("PT")}>PT</button>
                    <button className="p-8 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out"
                            style={{
                                color: selectedService === "Compliance" ? "orange" : "",
                                borderBottomColor: selectedService === "Compliance" ? "orange" : ""
                              }}
                            onClick={() => handleServiceSelect("Compliance")}>Compliance</button>
                </div>
            </div>
            <div className="transform opacity-0 animate-slide-up w-full h-screen" style={{ "--delay": "2" }}>
                <ServiceContentUnit service={selectedService} name="test"/>
            </div>
        </div>
    );
}

export default ServiceTabs;