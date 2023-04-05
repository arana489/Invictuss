import React from "react";
import ServiceTabs from "./ServiceTabs";
import MobileService from "./MobileService";
import './animation.css';


export default function Service(){
    return(
        <div>
            {/* Mobile Version */}
            <div class="md:hidden">
                <MobileService/>
            </div>

            {/* Desktop Version */}
            <div class="hidden md:block">
                <div className="mt-20 text-lg text-light-blue text-center transform opacity-0 animate-slide-up" style={{ "--delay": "0" }}>
                    Our Services
                </div>
                <div className="mt-3 mb-10 text-xl text-white text-center">
                    What We Offer
                </div>
                <ServiceTabs/>
            </div>
        </div>
    )
}