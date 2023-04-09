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
                <div className="mt-16 text-lg text-light-blue text-center transform opacity-0 animate-slide-up">
                    Our Services
                </div>
                <div className="mt-3 mb-16 text-xl font-bold text-white text-center">
                    What We Offer
                </div>
                <div className="mx-[11.5rem]">
                    <ServiceTabs />
                </div>
            </div>
        </div>
    )
}