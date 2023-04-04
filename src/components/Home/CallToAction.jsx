import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import dictionary from '../../dictionary.json'
import { TiArrowForward, TiMail } from 'react-icons/ti'

export default function CallToAction(props) {

    const Home = dictionary.Home

    return (
        <div className="flex items-center translate-y-4 font-dmsans font-bold tracking-widest">
            <div className="flex flex-col">
                <div className="flex flex-col gap-3 text-left text-xl">
                    <span className="text-white">{Home.CallToAction.top}</span>

                    <div className="flex items-center font-mono font-medium -translate-y-[0.1rem] h-10 text-light-blue">
                        &gt;&nbsp;
                        <TypeAnimation
                            sequence={Home.CallToAction.middle}
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>

                    <span className="text-orange ml-[0.2rem]"> {Home.CallToAction.bottom}</span>
                </div>
                <Link className="flex items-center hover:scale-105 hover:text-white hover:drop-shadow-xl duration-300 drop-shadow-lg bg-nav w-fit py-2 px-6 rounded-xl mt-8 text-light-blue font-normal tracking-normal" to="/service">Get Started<TiArrowForward className="ml-[0.3rem] -translate-y-[0.03rem]" /></Link>
            </div>
        </div>
    )
}