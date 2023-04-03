import React from "react";
import ServiceTabs from "./ServiceTabs";
import './animation.css';

export default function Service(){
    return(
        <div>
            <div className="mt-20 mb-10 text-xl text-white text-center transform scale-y-0 opacity-0 animate-slide-up" style={{ "--delay": "0" }}>
                What We Offer
            </div>
            <ServiceTabs/>
        </div>
    )
}
