import React from "react";
import { useEffect, useState } from "react";



export default function Contact(){

    const[info,setInfo]=useState({name: "", email: "", services:"", company:""})
    const[submitted,setSubmitted]=useState([])


    useEffect(() => {
        console.log(submitted);
        console.log(info);
      },[info, submitted]);

    function submit(){
        const temp = info
        setInfo({name: "", email: "", services:"", company:""})
        setSubmitted(x=>x.concat(temp))
    }


    return(
    
        <div>
            <h1 className="text-xl"> Get in Touch!</h1>

            <div className="flex">
                <div>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                </div>
                <div className="ml-64">
                    <form>
                        <label for="name"> Name</label><br></br>
                            <input type="text" value={info.name} id="name" className="border" onChange={e=>setInfo((x)=>({...x, name:e.target.value}))}></input><br></br>
                        <label for="email">Email</label><br></br>
                            <input type="text" value={info.email} id="email" className="border" onChange={e=>setInfo((x)=>({...x, email:e.target.value}))}></input><br></br>
                        <label for="services">Services</label><br></br>
                            <select type="text" value={info.services} id="phone" className="border" onChange={e=>setInfo((x)=>({...x, services:e.target.value}))}>  
                                <option value="service 1">service 1</option>
                                <option value="service 2">service 2</option>
                                <option value="service 3">service 3</option>
                                <option value="service 4 ">service 4</option>  
                            </select><br></br>
                        <label for="company">Company</label><br></br>
                            <input type="text" id="company" value={info.company} className="border" onChange={e=>setInfo((x)=>({...x, company:e.target.value}))}></input><br></br>
                        <button type="button" id ="submit" onClick ={submit} className="border mt-4"> Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )

}   
