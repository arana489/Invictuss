import React from "react";
import { useEffect, useState } from "react";




export default function Contact(){

    const[info,setInfo]=useState({name: "", email: "", services:"", company:"", message:""})
    const[submitted,setSubmitted]=useState([])


    useEffect(() => {
        console.log(submitted);
        console.log(info);
      },[info, submitted]);

    function submit(){
        const temp = info
        setInfo({name: "", email: "", services:"", company:"", message:""})
        setSubmitted(x=>x.concat(temp))
    }


    return(
    
    

        <div>
            <h1 className="text-[18px]"> CONTACT US</h1>

            <div className="flex justify-evenly">
                <div className="bg-light-gray">
                    <h2 className="text-gray-500"></h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                    <h2>Random Info</h2>
                </div>


                <div className="ml-80 bg-dark-blue w-[554.58px] h-[614px] rounded-3xl flex items-center justify-center">
                    <div>
                    <form>
                        <div className="grid grid-cols-2 gap-[21.61px] mb-[29px]  ">

                            <div className="flex flex-col gap-[29px]">
                                <div>
                                    <label className="text-bright-orange text-[16.2px]" for="name" > Name</label><br></br>
                                        <input type="text" value={info.name} id="name" className="placeholder-gray-500 p-2.5 text-l h-[45px] w-[230px] rounded-full" onChange={e=>setInfo((x)=>({...x, name:e.target.value}))}></input><br></br>
                                </div>

                                <div>
                                    <label className="text-bright-orange text-[16.2px]" for="email">Email</label><br></br>
                                        <input type="text" value={info.email} id="email" className="p-2.5 text-xl  h-[45px] w-[230px]  rounded-full" onChange={e=>setInfo((x)=>({...x, email:e.target.value}))}></input><br></br>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[29px]">
                                <div>
                                    <label className="text-bright-orange text-[16.2px]" for="services">Services</label><br></br>
                                        <select type="text" value={info.services} id="phone" className="p-2.5 text-xl  h-[45px] w-[230px]  rounded-full" onChange={e=>setInfo((x)=>({...x, services:e.target.value}))}>  
                                            <option value="service 1">service 1</option>
                                            <option value="service 2">service 2</option>
                                            <option value="service 3">service 3</option>
                                            <option value="service 4 ">service 4</option>  
                                        </select><br></br>
                                </div>
                                <div className="">
                                    <label className="text-bright-orange text-[16.2px]" for="company">Company</label><br></br>
                                        <input type="text" id="company" value={info.company} className="p-2.5 text-xl  h-[45px] w-[230px]  rounded-full" onChange={e=>setInfo((x)=>({...x, company:e.target.value}))}></input><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[29px]">
                            <label className="text-bright-orange text-[16.2px]" for="message">Message</label><br></br>
                                <input type="text" id="message" value={info.message} className="p-2.5 text-xl h-[128.64px] w-[482.56px] rounded-2xl " onChange={e=>setInfo((x)=>({...x, message:e.target.value}))}></input><br></br>
                        </div>
                        <div>
                            <button type="button" id ="submit" onClick ={submit} className="p-2.5 text-xl mt-4 h-[45px] w-[160px] rounded-full bg-orange"> Send Message</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )

}   