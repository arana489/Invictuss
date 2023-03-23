import React from "react";
import { TypeAnimation } from 'react-type-animation';


export default function CallToAction(props) {
    return (
        <div className="flex flex-col text-xl md:text-xl pl-10 pt-24 text-center sm:text-left sm:pl-16  md:flex-wrap md:flex-row md:items-center">
            <h1 className="text-left font-extrabold text-white md:w-3/4 lg:w-1/2">
                Professional Cyber
                <br />
                <span className=" text-light-blue">
                    <div className="h-14">
                    <TypeAnimation
                        sequence={[
                            'Security',
                            3000,
                            'Protection',
                            3000,
                            'Company',
                            3000
                        ]}
                        cursor={false}
                        repeat={Infinity}
                        style={{ fontSize: '4xl', color: 'light-blue', lineHeight: '1.2' }}
                    />
                    </div>
                    
                </span> <span className="text-white"> with </span>

                <span className=" text-bright-orange"> Reliable </span> Service
            </h1>
        </div>
    )
}