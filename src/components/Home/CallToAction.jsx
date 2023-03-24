import React from "react";
import { TypeAnimation } from 'react-type-animation';


export default function CallToAction(props) {
    return (
        <div className="flex text-xl md:text-xl ml-10 mt-24 text-center sm:text-left sm:pl-16 ">
            <h1 className="text-left font-extrabold text-white">
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
                    
                </span> 
                <span className="text-orange"> with Reliable Service</span>
            </h1>
        </div>
    )
}
