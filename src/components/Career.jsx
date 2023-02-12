import React from "react";
import CareerBoxes from "./CareerBoxes";


export default function Career() {
    return (
        
        <div class="flex-above bg-dark-blue">
            <div class="flex">
                <div class="flex-above w-2/3 p-3">
                    <h1 class="text-center font-bold">
                        THE FUTURE OF CYBER-SECURITY AND THE BRIGHTEST MINDS  </h1>
                    <div class="table-auto">
                        <table class="w-full">
                            <tbody>
                                <tr>
                                    <td class="border px-4 py-8">Row 1, Column 2</td>
                                    <td class="border px-4 py-8">Row 1, Column 3</td>
                                </tr>
                                <tr>
                                    <td class="border px-4 py-8">Row 2, Column 2</td>
                                    <td class="border px-4 py-8">Row 2, Column 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    <div class="w-1/3 p-10">
                        <img class=" border-orange border-8 rounded-3xl" src="images/gili.jpg" alt="jake.jpg"></img>
                    </div>
            </div>
            <div className='flex justify-center'>
                <CareerBoxes />
            </div>
        </div>

    )
}

          