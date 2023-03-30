import React from "react";
import { TypeAnimation } from 'react-type-animation';
import dictionary from '../../dictionary.json'

export default function CallToAction(props) {

    const Home = dictionary.Home
    return (
        <div className="flex text-xl md:text-xl ml-10 mt-24 text-center sm:text-left sm:pl-16 ">
            <h1 className="text-left font-extrabold text-white">
                {Home.CallToAction.top}
                <br />
                <span className=" text-light-blue">
                    <div className="h-14">
                    <TypeAnimation
                        sequence={Home.CallToAction.middle}
                        cursor={false}
                        repeat={Infinity}
                        style={{ fontSize: '4xl', color: 'light-blue', lineHeight: '1.2' }}
                    />
                    </div>
                    
                </span> 
                <span className="text-orange"> {Home.CallToAction.bottom}</span>
            </h1>
        </div>
    )
}