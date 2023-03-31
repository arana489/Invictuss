import React from "react";
import ReactDOM from 'react-dom';
import Box from './textBoxes';
import CareerBoxes from "./CareerBoxes";


export default function Career() {
    return (
        
        <div class="">
            <div class="flex">
                <div class="mt-14 ml-16 lg:ml-24">
                    <h1 class="text-white text-lg l font-bold">
                        Come join our mission!
                    </h1>
                    <p class="text-white text-mdmt-4 w-96 wrap leading-9">
                        If you are looking for a challenging and rewarding career in a fast-paced
                        and dynamic environment, Invictuss is the right place for you.
                    </p>
                </div>
                <div class="w-0 md:w-72 lg:w-72 p-10 ml-auto mr-24 ">
                        <img class="" src="/CareersPage.svg" alt="jake.jpg"></img>
                </div>
        </div>

            <div className='flex justify-center'>
                <CareerBoxes />
            </div>

        </div>

    )
}

          