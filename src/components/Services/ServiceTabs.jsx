import {React, useState} from "react";
import ServiceContentUnit from "./ServiceContentUnit";

function ServiceTabs() {
    const [selectedService, setSelectedService] = useState("Service");

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    return(
        <div>
            <div className="text-center mb-20 ml-10 mr-10">
                <div className="border-b-8 border-white pt-20 pb-5 text-m flex justify-center gap-x-6 md:gap-x-10 lg:gap-x-20 font-lg">
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("DevSecOps")}>DevSecOps</button>
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("SSDLC")}>SSDLC</button>
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("CI/CD Architecture")}>CI/CD Architecture</button>
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("Visibility Enhancement")}>Visibility Enhancement</button>
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("On-Prem Hardening")}>On-Prem Hardening</button>
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("CISO as a Service")}>CISO as a Service</button>
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("PT")}>PT</button>
                    <button className="text-white hover:text-orange" onClick={() => handleServiceSelect("Compliance")}>Compliance</button>
                </div>
            </div>
            <div>
                <ServiceContentUnit service={selectedService} name="test"/>
            </div>
        </div>
    );
}

export default ServiceTabs;