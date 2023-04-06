import React from "react";
import ServiceTabs from "./ServiceTabs";
import './animation.css';

export default function Service(){
    return(
        <div>
            <div className="mt-10 lg:text-lg md:text-m text-light-blue text-center transform opacity-0 animate-slide-up" style={{ "--delay": "0" }}>
                Our Services
            </div>
            <div className="mt-3 mb-5 lg:text-xl md:text-lg text-white text-center">
                What We Offer
            </div>
            <ServiceTabs/>
        </div>
    )
}
