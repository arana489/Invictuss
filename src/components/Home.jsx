import React from "react";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import HomeValues from "./HomeValues";
import Carousel from "./Carousel";

export default function Home(props) {
    return (
        <div className="overflow-y-auto flex-auto overflow-hidden w-full h-screen bg-[#04142A]">
            <CallToAction> </CallToAction>
            <HomeValues> </HomeValues>
            <Testimonials> </Testimonials>
            <Carousel> </Carousel>
        </div >


    )
}