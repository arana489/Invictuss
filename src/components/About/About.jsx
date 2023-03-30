import React from "react";
import ValueBox from "./ValueBox.jsx";
import {ImQuotesLeft} from "react-icons/im";

export default function About(props) {
return(
    <div>
    <h1 >Our Approach</h1>
            {/* our approach section */}
            <div className="flex items-center pt-16 px-16">
                <div className="relative">
                    <div className="overflow-y-auto flex-auto overflow-hidden w-full h-screen bg-blue-bg">
                        <div class="flex">
                            <p class="flex items-left pt-16 pr-80 text-center tracking-tight text-white text-m md:text-md md:text-md">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt
                                interdum tellus du. Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                                adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit amet consectetur
                                adipiscing elit nulla adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit
                                amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
                            </p>
                            <img className="flex items-right object-scale-down w-[0rem] md:w-[18rem] lg:w-[18rem] ml-auto mr-24 mt-14" src = "src/assets/HomePic.svg" alt="Invictuss logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="h-px ml-16 mr-16 border-white border-2"></hr>
            {/* meet our team section */}
    <div>
    <h1>Meet our Team</h1>
    <div className="justify-center">
       <div className="lg:gap-x-10">
        <ValueBox
            name="name"
            title="CEO"
            description="I AM A CEO"
        />
      </div>
      <div className="lg:gap-x-10">
        <ValueBox
            name="name"
            title="CEO"
            description="I AM A CEO"
        />
       </div>
      </div>
    </div>
        <hr class="h-px ml-16 mr-16 my-8 border-white border-2"></hr>
            {/* message from CEO */}
    <div>
    <h1>Message from CEO</h1>
        <div className="text-center flex text-white flex-col w-[24%]">
            <div className="relative w-full">
                <ImQuotesLeft size={30} className="absolute translate-x-8 translate-y-2"/>
                <p className="mt-9 ml-12">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                <p className="ml-12">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                <p className="ml-12">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                <p className="ml-12">Lorem ipsum Lorem ipsum Lorem ipsum</p>
                <p className="ml-12">Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
        </div>
    </div>
    </div>
    );
}