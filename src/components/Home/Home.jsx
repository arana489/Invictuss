import React from "react";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import HomeValues from "./HomeValues";
import Panel from "./Panel";

export default function Home(props) {
    return (
        <div className="overflow-y-auto flex-auto overflow-hidden w-full h-screen bg-blue-bg">
            <div className="flex mr-20 pr-20">
               <div className="ml-20 pl-20"> <CallToAction /></div>
                <img className="object-scale-down w-[0rem] md:w-[18rem] lg:w-[18rem]  ml-auto mr-24 mt-14" src = "src/assets/HomePic.svg" alt="Invictuss logo"/>
            </div>
            
            <HomeValues/>
            <Panel/>
            <Testimonials/>
        </div >


    )
}