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
        <div ref={contentRef} className="transform opacity-0 animate-content lg:p-15 md:p-15">
            <div className="min-h-screen">
                <div className="flex justify-center items-center">
                <svg fill="none" className="mx-auto" strokeWidth="1.5" stroke="white" viewBox="0 0 24 24" width="10%" height="10%">
                <path strokeLinecap="round" strokeLinejoin="round" d={service_obj.icon}>
                </path>
                </svg>
                </div>
                <div className="font-bold lg:text-xl md:text-lg text-center text-white">
                    {service_obj.title}
                </div>
                <div className="lg:text-m md:text-sm lg:ml-10 lg:mr-10 md:ml-5 md:mr-5 text-center text-white mb-10">
                    {service_obj.short_desc}
                </div>
                <div className="lg:text-s md:text-sx mb-20 lg:ml-20 lg:mr-20 md:ml-10 md:mr-10 text-left text-white">
                    {service_obj.long_desc}
                </div>
            </div>
        </div>
    );
}

export default ServiceContentUnit;