import {React, useState} from "react";
import ServiceContentUnit from "./ServiceContentUnit";

function Tab() {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    return(
        <React.Fragment>
        <div>
            <nav>
                <ul>
                    <li onClick={() => handleServiceSelect("DevSecOps")}>DevSecOps</li>
                    <li onClick={() => handleServiceSelect("SSDLC")}>SSDLC</li>
                    <li onClick={() => handleServiceSelect("CI/CD Architecture")}>CI/CD Architecture</li>
                    <li onClick={() => handleServiceSelect("Visibility Enhancement")}>Visibility Enhancement</li>
                    <li onClick={() => handleServiceSelect("On-Prem Hardening")}>On-Prem Hardening</li>
                    <li onClick={() => handleServiceSelect("CISO as a Service")}>CISO as a Service</li>
                    <li onClick={() => handleServiceSelect("PT")}>PT</li>
                    <li onClick={() => handleServiceSelect("Compliance")}>Compliance</li>
                </ul>
            </nav>
        </div>
        <div>
        <ServiceContentUnit
        service = {selectedService}>
        </ServiceContentUnit>
        </div>
        </React.Fragment>
    );
}

export default Tab;