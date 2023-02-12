import React from "react";
import {useRef} from "react"; 
import "/src/App.css";

export default function About(props) {
    const landingPage = useRef(null);
    const whoWeAre = useRef(null);
    const whyWorkWithUs = useRef(null);
    const meetTheTeam = useRef(null);
    const scrollTop = useRef(null);

    const[currPage,setCurrPage] = React.useState(false)

    const scrollComponent = (elementRef,s) => {
        setCurrPage(s);
        console.log(s)
        window.scrollTo({
            top: elementRef.current.offsetTop, 
            behavior: 'smooth',         
        })
    }
    
    const styles1 = {
        color: currPage=="whoWeAre" ? "orange" : "black"
    }

    const styles2 = {
        color: currPage=="meetTheTeam" ? "orange" : "black"
    }

    const styles3 = {
        color: currPage=="whyWorkWithUs" ? "orange" : "black"
    }

return(
          <div> 
            <div class="rotate">
             <ul>
                <li onClick={() => {scrollComponent(whoWeAre,"whoWeAre")}} className = "link" style={styles1}>Who we are</li>
                <li onClick={() => {scrollComponent(meetTheTeam,"meetTheTeam")}}  className = "link" style={styles2}>Meet the Team</li>
                <li onClick={() => {scrollComponent(whyWorkWithUs,"whyWorkWithUs")}} className = "link" id="test2" style={styles3}>Why Invictus</li>
             </ul>
            </div>
             <div ref={landingPage} className="landingPage">
            <div>
                <body>
                    <p><center><font size="400px">About Us</font></center></p>
                </body>
            </div>
        <div ref={whoWeAre} className="whoWeAre"></div>
        <div ref={meetTheTeam} className="meetTheTeam"></div>
        <div ref={whyWorkWithUs} className="whyWorkWithUs"></div>
        <div className="static text-right list-none">
            <li onClick={() => {scrollComponent(whoWeAre); handleClick();}} id ="test">Back To Top</li>         
        </div>     
        </div>
        </div>
    );
}