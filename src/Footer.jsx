import React from "react";
import {Link} from "react-router-dom"


export default function Footer(props){
    //nav bar organizes all the links
    return(
        <nav className="md:flex lg:flex drop-shadow-lg text-light-blue font-extrabold  bg-navBg h-24 items-center ">
            <img className="object-scale-down ml-[40%] md:ml-6 lg:ml-6 mr-auto w-[9rem]" src = "/InvictussLogo.svg" alt="Invictuss logo"/>
            <div className="flex gap-x-4 md:mr-14 lg:mr-14 ml-[45%] mt-2 md:mt-0 lg:mt-0" >
                <div className="hover:bg-light-gray hover:rounded p-[2px]">
                    <a href="https://www.linkedin.com/company/invictuss/" target="_blank"><img className="object-scale-down w-[1.75rem]"src="./Linkedin.svg" ></img></a>
                </div>
                <div className="hover:bg-light-gray hover:rounded p-[2px]">
                    <a href="https://api.whatsapp.com/send?phone=972505156080&text=Hi" target="_blank"><img className="object-scale-down w-[1.75rem]"src="./whatsapp.svg" ></img></a>
                </div>
            </div>
            


        </nav>
       
    )
}