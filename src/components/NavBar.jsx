import React from "react";
import {Link} from "react-router-dom"


export default function NavBar(props){
    //nav bar organizes all the links
    return(
        <nav className="flex bg-light-blue h-14 items-center gap-x-60">
            <Link className="text-2xl ml-6 text-sky-100" to="/">Invictuss</Link>


   
            <ul className="flex gap-x-14">
                <li>
                    <Link to="/service">Services</Link>
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