import React from "react";
import {Link} from "react-router-dom"


export default function NavBar(props){
    //nav bar organizes all the links
    return(
        <nav className="flex drop-shadow-lg text-light-blue font-extrabold  bg-navBg h-14 items-center rounded-3xl">
            <Link className="ml-6 text-sky-100" to="/">
                <img className="object-scale-down ml-6 w-[9rem]" src = "src/assets/InvictussLogo.svg" alt="Invictuss logo"/>
            </Link>

            <ul className="text-m flex gap-x-10 md:gap-x-14 lg:gap-x-24 ml-auto mr-14 font-lg">
                <li className="">
                    <Link className="font-lg light-blue"to="/service">Services</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/careers">Careers</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                
            </ul>
        </nav>
       
    )
}