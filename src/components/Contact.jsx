import React from "react";



export default function Contact(){
    return(
    
        <div>
    
            <h1>Contact</h1>
                <div >
                <form>
                    <label for="fname"> Name</label><br></br>
                    <input type="text" id="name"></input><br></br>
                    <label for="lname">Email</label><br></br>
                    <input type="text" id="email"></input><br></br>
                    <label for="lname">Services</label><br></br>
                    <input type="text" id="phone"></input><br></br>    
                    <label for="lname">Message</label><br></br>
                    <input type="text" id="msg"></input><br></br>
                    <button type="button" id ="submit ">Submit</button>
                </form>
                </div>
        </div>

    )

}   