import React from "react";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import HomeValues from "./HomeValues";
import "./Home.css";
import InfiniteSlider from "./InfiniteSlider";
import BasicCarousel from "./BasicCarousel";

export default function Home(props) {
    return (
        <div className="bg-blue-bg">
            <img className="absolute top-[4.7rem] right-0 w-10/12" src="/hexes.svg" />
            <div className="flex mt-10 h-[30rem] mx-[11.5rem]">
                <CallToAction />
                <div className="-mr-24 mt-8 ml-auto animate-float">
                    <img className="opacity-0 max-w-[38rem] animate-slide-in-right" src="/HomePic.webp" alt="Invictuss logo" />
                </div>
            </div>
            <div className="mt-20 z-50">
                <InfiniteSlider />
            </div>
            <div className="mt-24">
                <HomeValues />
            </div>
            <div className="mt-16 mb-24 mx-[11.5rem]">
                <Testimonials />
            </div>
        </div >
    )
}