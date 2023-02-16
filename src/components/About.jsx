import React from "react";

export default function About(props) {
    const whoWeAre = useRef(null);
    const whyWorkWithUs = useRef(null);
    const meetTheTeam = useRef(null);

    function handleClick () {
        document.getElementById("test").style.color = "orange";
    }

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
                <li onClick={() => {scrollComponent(whoWeAre); handleClick();}} className = "link" id ="test">Who we are</li>
                <li onClick={() => {scrollComponent(meetTheTeam); handleClick();}} className = "link" id="test1">Meet the team</li>
                <li onClick={() => {scrollComponent(whyWorkWithUs); handleClick();}} className = "link" id="test2">Why Invictus</li>
            </ul>
            </div>      
        <div ref={whoWeAre} className="whoWeAre">
        </div>
        <div ref={meetTheTeam} className="meetTheTeam">
        </div>
        <div ref={whyWorkWithUs} className="whyWorkWithUs">
        </div>
        </div>  
    );
}