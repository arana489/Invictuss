import React from "react";
import ReactDOM from 'react-dom';
import Box from './textBoxes';
import CareerBoxes from "./CareerBoxes";


export default function Career() {
    return (
        
        <div class="flex-above">
            <div class="relative h-[30rem] flex items-center">
                <div class=" absolute right-1/3 bottom-1/2 h-1/3 w-3/5">
                    <h1 class="text-orange text-xl font-bold mb-16">
                        Come join our mission!
                    </h1>
                   
                    <h3 class="text-white text-m leading-9 " >
                        At Invictuss, we are committed to providing our employees with a fulfilling and engaging work experience. Our culture of excellence encourages employees to take ownership of their work and make a real impact on the team. Along with  compensation and comprehensive benefits, we offer flexible work-life balance and the innovative “choose your office” working approach, making Invictuss the perfect place for you to build your career.
                    </h3>
                </div>
                <img className="object-scale-down w-[0rem] md:w-[18rem] lg:w-[18rem]  ml-auto mr-24 mt-14" src = "src/assets/CareerImg.svg" alt="Invictuss logo"/>
            </div>

            <div className='flex justify-center mx-20'>
                <CareerBoxes />
            </div>
            <div class= "p-64"> </div>git

        </div>

    )
}

          