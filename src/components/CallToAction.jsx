import React from "react";
import { TypeAnimation } from 'react-type-animation';


export default function CallToAction(props) {
    return (
        <div className="flex flex-wrap text-4xl md:text-8xl pl-10 pt-10 text-center sm:text-left sm:pl-16 sm:pt-16">        <h1 className="text-left text-white">
            Professional Cyber
            <br />
            <span className=" text-light-blue">
                <TypeAnimation
                    sequence={[
                        'Security',
                        4000,
                        'Protection',
                        4000,
                        'Company',
                        4000
                    ]}
                    cursor={false}
                    repeat={Infinity}
                    style={{ fontSize: '4xl', color: 'light-blue', lineHeight: '1.2' }}
                />
            </span> <span className="text-white"> with </span>

            <span className=" text-orange"> Reliable </span> Service
        </h1>
        </div>
    )
}