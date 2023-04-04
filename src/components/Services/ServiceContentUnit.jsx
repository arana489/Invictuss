import React from "react"
import {ServiceContentList} from "./ServiceContentList";

// "service" is the string of the service which was clicked on
function ServiceContentUnit({service}) { 
    const service_obj = ServiceContentList.find(content => content.title === service)

    return (
        <div>
            {service_obj ? (
                <div className="min-h-screen">
                    <div class="flex justify-center items-center">
                        <img src={service_obj.icon}/>
                    </div>
                    <div className="font-bold text-xl text-center text-white">
                        {service_obj.title}
                    </div>
                    <div className="text-lg ml-10 mr-10 text-center text-white mb-10">
                        {service_obj.short_desc}
                    </div>
                    <div className="text-m mb-20 ml-20 mr-20 text-left text-white">
                        {service_obj.long_desc}
                    </div>
                </div>
            ) : (
                <div className="min-h-screen">
                    <div className="font-bold text-xl text-center text-white">
                        Our Services
                    </div>
                    <div className="text-lg ml-10 mr-10 text-center text-white mb-10">
                        Here are our services
                    </div>
                    <div className="text-m mb-20 ml-20 mr-20 text-left text-white">
                        We want to make services for you to make money
                    </div>
                </div>
            )}
        </div>
    );
}

export default ServiceContentUnit;