import React from "react";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import HomeValues from "./HomeValues"

export default function Home(props) {
    return (
        <div className="overflow-y-auto flex-auto overflow-hidden w-full h-screen bg-blue-bg">
            <div className="flex">
                <CallToAction/>
                <img className="object-scale-down w-[0rem] md:w-[18rem] lg:w-[18rem]  ml-auto mr-24 mt-14" src = "src/assets/HomePic.svg" alt="Invictuss logo"/>
            </div>
            
            <HomeValues/>
            <Testimonials/>
        </div >


    )
}