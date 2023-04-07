import React from "react";
import ReactDOM from 'react-dom';
import Box from './textBoxes';
import CareerBoxes from "./CareerBoxes";
import dictionary from '../../dictionary.json'



export default function Career() {

    const dict =dictionary.Careers


    return (
        
        <div class="flex-above">
         <div>
            <div class="relative h-screen">
                <div class="absolute right-1/3 bottom-1/2 h-1/3 w-3/5">
                    <h1 className="text-light-blue text-xl font-bold">
                        {dict.header}
                    </h1>
                    <br/><br/><br/>
                    <h3 class="text-white text-lg leading-9">
                        {dict.message1}
                    </h3>
                </div>
                <img className="object-scale-down w-[0rem] md:w-[18rem] lg:w-[18rem]  ml-auto mr-24 mt-14" src = "/CareersPage.svg" alt="Invictuss logo"/>
                <div class="absolute bottom-1/4 left-1/4 w-1/2 text-center text-white mt-14">
                    {dict.message2}
                </div>
            </div>
        </div>

            <div className='flex justify-center mx-20 mt-[-10%]'>
                <CareerBoxes />
            </div>
            <div class="pb-96"> </div>

        </div>

    )
}

          