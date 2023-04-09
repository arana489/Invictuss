import {React, useState} from "react";
import ServiceContentUnit from "./ServiceContentUnit";
import './animation.css';

function ServiceTabs() {
    const [selectedService, setSelectedService] = useState("DevSecOps");

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

  const services = [
    "DevSecOps", 
    "SSDLC", 
    "CI/CD Architecture", 
    "Visibility Enhancement",
    "On-Prem Hardening",
    "CISO",
    "PT",
    "Compliance"
  ]

    return(
        <div>
            <div className="text-center transform opacity-0 animate-slide-up" style={{ "--delay": "1" }}>
              <div className="pb-5 text-[1.1rem] flex justify-center">
                {services.map((service, i) => (
                  <button className={
                    `${selectedService === service ? `text-orange border-b-orange` : ``}
                    px-8 py-4 border-b-8 border-white hover:border-orange text-white hover:text-orange transition duration-500 ease-in-out`}
                    onClick={() => handleServiceSelect(service)}>
                      {service}
                  </button>
                ))}
              </div>
            </div>
            <div className="transform opacity-0 animate-slide-up w-full h-screen" style={{ "--delay": "2" }}>
                <ServiceContentUnit service={selectedService} name="test"/>
            </div>
        </div>
    );
}

export default ServiceTabs;