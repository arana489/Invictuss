import React from "react";
import {Link} from "react-router-dom"


export default function NavBar(props){
    //nav bar organizes all the links
    return(
        <nav className="flex bg-cyan-800 h-14 items-center gap-x-60">
            <Link className="text-2xl ml-6 text-sky-100" activeStyle={{color:'white'}} style={{ textDecoration: 'none' }} to="/">Invictuss</Link>

            <ul className="flex gap-x-14">
                <li>
                    <Link activeStyle={{color:'white'}} style={{ color:'white', textDecoration: 'none' }} to="/service">Services</Link>
                </li>
                <li>
                    <Link activeStyle={{color:'white'}} style={{ color:'white', textDecoration: 'none' }} to="/about">About</Link>
                </li>
                <li>
                    <Link activeStyle={{color:'white'}} style={{ color:'white', textDecoration: 'none' }} to="/careers">Careers</Link>
                </li>
                <li>
                    <Link activeStyle={{color:'white'}} style={{ color:'white', textDecoration: 'none' }} to="/contact">Contact</Link>
                </li>

                
            </ul>
        </nav>
       
    )
}