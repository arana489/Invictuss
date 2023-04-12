import React from "react";
import ServiceTabs from "./ServiceTabs";
import MobileService from "./MobileService";
import './animation.css';


export default function Service(){

    return(
        <div className="w-full flex justify-center 2xl:h-[1525px]">
            {/* Mobile Version */}
            <div class="md:hidden">
                <MobileService/>
            </div>

            {/* Desktop Version */}
            <div class="hidden md:block lg:max-w-screen-2xl">
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