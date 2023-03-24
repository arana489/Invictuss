import React from "react";
import {Link} from "react-router-dom"


export default function Footer(props){
    //nav bar organizes all the links
    return(
        <nav className="flex drop-shadow-lg text-light-blue font-extrabold  bg-navBg h-24 items-center ">
            <img className="object-scale-down ml-6 w-[9rem]" src = "/InvictussLogo.svg" alt="Invictuss logo"/>

        </nav>
       
    )
}