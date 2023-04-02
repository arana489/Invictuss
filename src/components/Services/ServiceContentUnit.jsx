import React from "react"
import {ServiceContentList} from "./ServiceContentList";

// "service" is the string of the service which was clicked on
function ServiceContentUnit({service}) { 
    const service_obj = ServiceContentList.find(content => content.title === service)

    return (
        <div>
            {service_obj ? (
                <div className="min-h-screen">
                    <div className="text-xl text-center text-white">
                        {service_obj.title}
                    </div>
                    <div className="text-center text-white">
                        {service_obj.short_desc}
                    </div>
                    <div className="text-center text-white">
                        {service_obj.long_desc}
                    </div>
                </div>
            ) : (
                <div className="min-h-screen">
                    <div className="text-xl text-center text-white">
                        Our Services
                    </div>
                    <div className="text-center text-white">
                        Here are our services
                    </div>
                    <div className="text-center text-white">
                        We want to make services for you to make money
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServiceContentUnit;