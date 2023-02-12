import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Expertise(props) {
    return (
        <div className="text-white text-6xl mt-72">
            <h1 className="animate-pulse text-center text-white">
                Expertise
            </h1>
            <div className="flex space-x-20">
                <div className="w-1/2 pl-15">
                    <p className="md:text 4xl pr-20 text-center text-white">
                        Expertise 1 here
                    </p>
                </div>
                <div className="w-1/2 pr-15">
                    <p className="md:text 4xl pr-20 text-right text-white">
                        Expertise 2 here
                    </p>
                </div>

            </div>
            <div className="flex space-x-20 mt-36">
                <div className="w-1/2 pl-15">
                    <p className="md:text 4xl pr-20 text-center text-white">
                        Expertise 3 here
                    </p>
                </div>
                <div className="w-1/2 pr-15">
                    <p className="md:text 4xl pr-20 text-right text-white">
                        Expertise 4 here
                    </p>
                </div>

            </div>

        </div>
    )
}