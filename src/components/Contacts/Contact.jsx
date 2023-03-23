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
    
    

        <div className="p-16 ">
    
            

            <div className="lg:flex justify-evenly">
                <div className="text-center lg:text-left mb-10 text-white">
                    <h1 className="text-lg font-bold mb-10 mt-10">Get In Touch Today</h1>
                    <h2 className="text-m mb-5">Interested in hearing more?</h2>
                    <h2 className="text-m mb-5 ">We provide free consultation for new customers!</h2>
                    <h2 className="text-m mb-5">sales@invictuss.io</h2>
                    <h2 className="text-m mb-5 ">479-324-1235</h2>

                </div>


                <div className="bg-contactBlue lg:m-0 m-auto w-[30rem] md:w-[35rem] lg:w-[35rem] h-[38rem] rounded-3xl flex items-center justify-center">
                    <form id="contactform">
                        <div className="grid grid-cols-2 gap-[2rem] mb-[3rem]  ">
                            <div className="flex flex-col gap-[2rem]">
                                <div>
                                    <label className="text-bright-orange text-sm" htmlFor="name" > Name</label><br></br>
                                    <input type="text" value={info.name} id="name" className="my-2 placeholder-gray-500 p-2.5 text-l h-[45px] w-[180px] md:w-[230px] lg:[230px rounded-full" onChange={e=>setInfo((x)=>({...x, name:e.target.value}))}></input><br></br>
                                </div>

                                <div>
                                    <label className="text-bright-orange text-sm" htmlFor="email">Email</label><br></br>
                                    <input type="text" value={info.email} id="email" className="my-2 p-2.5 text-sm  h-[45px] w-[180px] md:w-[230px] lg:[230px rounded-full" onChange={e=>setInfo((x)=>({...x, email:e.target.value}))}></input><br></br>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[29px]">
                                <div>
                                    <label className="text-bright-orange text-sm" htmlFor="services">Services</label><br></br>
                                    <select type="text" value={info.services} id="phone" className="my-2 p-2.5 text-sm  h-[45px] w-[180px] md:w-[230px] lg:[230px rounded-full" onChange={e=>setInfo((x)=>({...x, services:e.target.value}))}>  
                                        <option value="service 1">service 1</option>
                                        <option value="service 2">service 2</option>
                                        <option value="service 3">service 3</option>
                                        <option value="service 4 ">service 4</option>  
                                    </select><br></br>
                                </div>
                                <div className="">
                                    <label className="text-bright-orange text-sm" htmlFor="company">Company</label><br></br>
                                    <input type="text" id="company" value={info.company} className="my-2 p-2.5 text-sm  h-[45px] w-[180px] md:w-[230px] lg:[230px] rounded-full" onChange={e=>setInfo((x)=>({...x, company:e.target.value}))}></input><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[29px]">
                            <label className="text-bright-orange text-sm" htmlFor="message">Message</label><br></br>
                            <textarea name="message" form="contactform" value={info.message} className="my-2 p-2.5 text-sm h-[128.64px] md:w-[482.56px] lg:md:w-[482.56px] w-[400px] rounded-2xl " onChange={e => setInfo((x) => ({ ...x, message: e.target.value }))}></textarea><br></br>
                        </div>
                        <div>
                            <button type="button" id ="submit" onClick ={submit} className="p-2.5 text-s mt-4 h-[45px] w-[160px] rounded-full bg-orange"> Send Message</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )

}   