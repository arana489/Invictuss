import {React, useState} from "react";
import ServiceContentUnit from "./ServiceContentUnit";

function ServiceTabs() {
    const [selectedService, setSelectedService] = useState("Service");

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    return(
        <div>
            <div className="p-20 text-white text-m flex gap-x-10 md:gap-x-14 lg:gap-x-24 ml-auto mr-14 font-lg">
                <button onClick={() => handleServiceSelect("DevSecOps")}>DevSecOps</button>
                <button onClick={() => handleServiceSelect("SSDLC")}>SSDLC</button>
                <button onClick={() => handleServiceSelect("CI/CD Architecture")}>CI/CD Architecture</button>
                <button onClick={() => handleServiceSelect("Visibility Enhancement")}>Visibility Enhancement</button>
                <button onClick={() => handleServiceSelect("On-Prem Hardening")}>On-Prem Hardening</button>
                <button onClick={() => handleServiceSelect("CISO as a Service")}>CISO as a Service</button>
                <button onClick={() => handleServiceSelect("PT")}>PT</button>
                <button onClick={() => handleServiceSelect("Compliance")}>Compliance</button>
            </div>
            <ServiceContentUnit service={selectedService} name="test"/>
        </div>
    );
}

export default ServiceTabs;