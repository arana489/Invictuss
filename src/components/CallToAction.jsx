import React from "react";
import { TypeAnimation } from 'react-type-animation';


export default function CallToAction(props) {
    return (
        <div className="flex ml-12 flex-col text-4xl md:text-7xl pl-10 pt-20 md:pt-40 text-center sm:text-left sm:pl-16 sm:pt-40 md:flex-wrap md:flex-row md:items-center">
  <h1 className="text-left text-white md:w-3/4 lg:w-1/2">
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