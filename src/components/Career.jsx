import React from "react";
import ReactDOM from 'react-dom';
import Box from './textBoxes';
import CareerBoxes from "./CareerBoxes";


export default function Career() {
    return (
        
        <div class="flex-above bg-dark-blue">
            <div class="flex">
                <div class="flex-above w-2/3 p-10">
                    <h1 class="text-center font-bold">
                        THE FUTURE OF CYBER-SECURITY AND THE BRIGHTEST MINDS  </h1>
                       
                    
                    <Box></Box>
                
                </div>
                    <div class="w-1/3 p-10">
                        <img class=" border-orange border-8 rounded-3xl" src="images/gili.jpg" alt="jake.jpg"></img>
                    </div>
            </div>

            <div className='flex justify-center'>
                <CareerBoxes />
            </div>
            <div class= "p-96"> </div>

        </div>

    )
}

          