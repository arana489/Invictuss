import React from "react";
import {Link} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav className="flex bg-cyan-800 h-14 items-center gap-x-60">
                <Link className="text-2xl ml-6 text-sky-100" to="/">Invictuss</Link>

                <ul className="flex gap-x-14 text-white">
                    <li>
                        <Link to="/service">Services</Link>
                    </li>
                    <li>
                        <Link to="/career">Career</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}