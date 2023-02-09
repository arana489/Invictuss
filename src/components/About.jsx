import React from "react";
import {useRef} from "react"; 
import "/src/App.css";

export default function About(props) {
    const whoWeAre = useRef(null);
    const whyWorkWithUs = useRef(null);
    const meetTheTeam = useRef(null);

    const scrollComponent = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop, 
            behavior: 'smooth',         
        })
    }

    return(
        <div>
        <div class="rotate">
            <ul>
                <li onClick={() => scrollComponent(whoWeAre)} className = "link">Who we are</li>
                <li onClick={() => scrollComponent(meetTheTeam)} className = "link">Meet the team</li>
                <li onClick={() => scrollComponent(whyWorkWithUs)} className = "link">Why Invictus</li>
            </ul>      
        <div ref={whoWeAre} className="whoWeAre">
        </div>
        <div ref={meetTheTeam} className="meetTheTeam">
        </div>
        <div ref={whyWorkWithUs} className="whyWorkWithUs">
        </div>
        </div>  
        </div>
    );
}