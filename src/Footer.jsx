import React from "react";
import {Link} from "react-router-dom"
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'

export default function Footer(props){
    //nav bar organizes all the links
    return(
        <nav className="flex bg-nav h-24 items-center">
            <div className="flex w-full items-center mx-[11.5rem]">
                <img className="w-[9rem]" src="/InvictussLogo.svg" alt="Invictuss logo" />
                <p className="ml-auto mt-3 text-[0.85rem] font-sans font-light text-[#76798d]">Copyright &copy; Invictuss 2023. All rights reserved.</p>
                <div className="ml-auto flex items-center gap-x-10 text-[#76798d]" >
                    <a href="https://www.linkedin.com/company/invictuss/" target="_blank"><BsLinkedin className="hover:scale-125 duration-200" size={25} /></a>
                    <a href="https://api.whatsapp.com/send?phone=972505156080&text=Hi" target="_blank"><BsWhatsapp className="hover:scale-125 duration-200" size={25} /></a>
                </div>
            </div>
        </nav>
       
    )
}