import React from "react"
import { useRef, useEffect } from "react";
import {ServiceContentList} from "./ServiceContentList";

// "service" is the string of the service which was clicked on
function ServiceContentUnit(props) { 
    const service_obj = ServiceContentList.find(content => content.title === props.service)
    const contentRef = useRef(null); // is it good to use null here?

    // resets animation when a new content is chosen
    useEffect(() => {
        contentRef.current.classList.remove("animate-content");
        void contentRef.current.offsetWidth; // triggers refresh to restart animation
        contentRef.current.classList.add("animate-content");
    }, [props.service])

    return (
        <div ref={contentRef} className="transform opacity-0 animate-content p-20">
            <div className="min-h-screen">
                <div class="flex justify-center items-center">
                    <img src={service_obj.icon}/>
                </div>
                <div className="font-bold text-xl text-center text-white">
                    {service_obj.title}
                </div>
                <div className="text-m ml-10 mr-10 text-center text-white mb-10">
                    {service_obj.short_desc}
                </div>
                <div className="text-s mb-20 ml-20 mr-20 text-left text-white">
                    {service_obj.long_desc}
                </div>
            </div>
        </div>
    );
}

export default ServiceContentUnit;