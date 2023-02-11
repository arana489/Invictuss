import React from "react";
import {Link} from "react-router-dom";
export default function Nav() {
    return (
        <div>
            <nav className="flex bg-cyan-800 h-14 items-center gap-x-60">
            <Link className="text-2xl ml-6 text-sky-100" to="/"> Invictuss </Link>
                <ul className="flex gap-x-14">
                    <li>
                        <Link to="/services"> Services </Link>
                    </li>
                    <li>
                        <Link to="/careers"> Career </Link>
                    </li>
                    <li>
                    <Link to="/about"> About Us </Link>
                        </li>
                    <li>
                        <Link to="/contact"> Contact Us </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}