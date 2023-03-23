import React from "react";

export default function About(props) {
return(
    <div>
    <h1 >Our Approach</h1>
            {/* our approach section */}
            <div className="flex items-center pt-64 px-48">
            <div className="relative">
            <p className="text-center tracking-tight text-white text-m md:text-md lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt 
            interdum tellus du. Lorem ipsum dolor sit amet consectetur adipiscing elit nulla 
            adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit amet consectetur 
            adipiscing elit nulla adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit 
            amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
            </p>
            </div>
            </div>
            <hr class="h-px ml-16 mr-16 my-8 bg-white-200 border-2 dark:bg-gray-700"></hr>
            {/* meet our team section */}
        <div>
            <h1>Meet our Team</h1>
            <div class="hexagon"></div>
        </div>
            <hr class="h-px ml-16 mr-16 my-8 bg-white-200 border-2 dark:bg-gray-700"></hr>
            {/* message from CEO */}
        <div>
        <h1>Message from CEO</h1>
        <div className="flex text-left">
            <div className="relative">
                <p className="text-justify px-48 text-white">
                Lorem ipsum dolor sit amet consectetur 
                Lorem ipsum dolor sit amet consectetur
                </p>
                <p className="text-justify px-48 text-white">
                Lorem ipsum dolor sit amet consectetur 
                Lorem ipsum dolor sit amet consectetur
                </p>
            </div>
    </div>
    </div>
    </div>
    );
}