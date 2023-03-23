import React from "react";
import ReactDOM from 'react-dom';
import Box from './textBoxes';
import CareerBoxes from "./CareerBoxes";


export default function Career() {
    return (
        
        <div class="flex-above">
         <div>
            <div class="relative h-screen">
                <div class="absolute right-1/3 bottom-1/2 h-1/3 w-3/5">
                    <h1 class="text-white text-xl font-bold">
                        Come join our mission!
                    </h1>
                    <br/><br/><br/>
                    <h3 class="text-white text-lg leading-9">
                        If you are looking for a challenging and rewarding career in a fast-paced
                        and dynamic environment, Invictuss is the right place for you.
                    </h3>
                </div>
                <div class="text-white absolute left-3/4 bottom-2/3">
                    (insert image here)
                </div>
                <div class="absolute bottom-1/4 left-1/4 w-1/2 text-center text-white">
                    At Invictuss, we believe in fostering a culture of excellence, where every employee
                    is empowered to take ownership of their work and make a meaningful contribution to
                    the team. We offer competitive compensation packages, comprehensive benefits, and a
                    flexible work-life balance, as well as a “choose your office” working methodology.
                </div>
            </div>
        </div>

            <div className='flex justify-center mx-20'>
                <CareerBoxes />
            </div>
            <div class= "p-96"> </div>

        </div>

    )
}

          