import React from "react";
import ReactDOM from 'react-dom';
import Box from './CareerBadges';
import CareerBoxes from "./CareerBoxes";
import dictionary from '../../dictionary.json';

export default function Career() {

    const dict=dictionary.Careers
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-[80rem] mx-[11.5rem]">
                <img className="absolute top-[4.7rem] right-0 w-10/12" src="/hexes.svg" />
                <div className="relative flex mt-16 h-[30rem] items-center">
                    <div className="w-7/12">
                        <h1 className="text-orange text-xl font-bold mb-16 animate-slide-up">
                            {dict.header}
                        </h1>

                        <h3 className="text-white text-m animate-slide-up" >
                            {dict.message1}
                        </h3>
                    </div>
                    <img className="ml-auto w-[23rem] animate-slide-in-right" src="/CareersPage.svg" />
                </div>

                <div className='flex justify-center mt-24 mb-60'>
                    <CareerBoxes />
                </div>

            </div>
        </div>
    )
}

          