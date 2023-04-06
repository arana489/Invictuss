import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";


export default function NavBar(props){

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return(
        <nav className={`flex mx-28 pl-8 pr-14 drop-shadow-lg text-light-blue bg-nav h-14 items-center rounded-3xl
        ${isScrolled ? 'bg-opacity-80 backdrop-blur scale-95 duration-300' : 'scale-100 duration-300'}`}>
            <Link to="/">
                <img className="scale-[90%]" src = "/InvictussLogo.svg" alt="Invictuss logo"/>
            </Link>

            <ul className="flex text-[1.1rem] ml-auto gap-10">
                <li><Link className="text-glow duration-150" to="/service">Services</Link></li>
                <li><Link className="text-glow duration-150" to="/about">About</Link></li>
                <li><Link className="text-glow duration-150" to="/careers">Careers</Link></li>
                <li><Link className="text-glow duration-150" to="/contact">Contact</Link></li> 
            </ul>
        </nav>
       
    )
}