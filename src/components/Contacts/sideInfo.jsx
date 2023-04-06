import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const sideInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-[2rem] mb-[3rem]  ">
                    <div className="flex flex-col gap-[2rem]">
                        <div>
                            <label className="text-light-blue text-sm" htmlFor="name" > Name</label><br></br>
                            <input type="text" value={info.name} id="name" className=" border border-light-blue focus:outline-none text-white  my-2 p-2.5 text-l h-[45px] w-[180px] md:w-[230px] lg:[230px rounded-xl placeholder-light-gray placeholder-opacity-25 bg-blue-bg" placeholder="John Doe" onChange={e=>setInfo((x)=>({...x, name:e.target.value}))} autoComplete='off'></input><br></br>
                        </div>

                        <div>
                            <label className="text-light-blue text-sm" htmlFor="email">Email</label><br></br>
                            <input type="text" value={info.email} id="email" className="text-white border border-light-blue focus:outline-none my-2 p-2.5 text-sm  h-[45px] w-[180px] md:w-[230px] lg:[230px] rounded-xl placeholder-light-gray placeholder-opacity-25 bg-blue-bg" placeholder="JohnDoe@gmail.com" onChange={e=>setInfo((x)=>({...x, email:e.target.value}))} autoComplete='off'></input><br></br>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[29px]">
                        <div >
                            <label className="text-light-blue text-sm" htmlFor="services">Services</label><br></br>
                            <div>
                            <select type="text" value={info.services} id="phone" className="text-white border border-light-blue focus:outline-none my-2 p-2 text-sm  h-[45px] w-[180px] md:w-[230px] lg:w-[230px] rounded-xl bg-blue-bg" onChange={e=>setInfo((x)=>({...x, services:e.target.value}))}>  
                                <option value="" disabled selected hidden>   </option>
                                <option value="service 2">service 2</option>
                                <option value="service 3">service 3</option>
                                <option value="service 4 ">service 4</option>  
                            </select><br></br>
                            </div>
                        </div>
                        <div className="">
                            <label className="text-light-blue text-sm" htmlFor="company">Company</label><br></br>
                            <input type="text" id="company" value={info.company} className="text-white border border-light-blue focus:outline-none my-2 p-2.5 text-sm  h-[45px] w-[180px] md:w-[230px] lg:[230px] rounded-xl placeholder-light-gray placeholder-opacity-25 bg-blue-bg" placeholder="Company" onChange={e=>setInfo((x)=>({...x, company:e.target.value}))} autoComplete='off'></input><br></br>
                        </div>
                    </div>
                </div>
                <div className="mb-[29px]">
                    <label className="text-light-blue text-sm" htmlFor="message">Message</label><br></br>
                    <textarea name="message" form="contactform" value={info.message} className="text-white border border-light-blue focus:outline-none my-2 p-2.5 text-sm h-[128.64px] md:w-[490.56px] lg:md:w-[490.56px] w-[400px] rounded-xl placeholder-light-gray placeholder-opacity-25 bg-blue-bg" placeholder="Leave a message..." onChange={e => setInfo((x) => ({ ...x, message: e.target.value }))}></textarea><br></br>
                </div>
                <div>
                    <button type="button" id ="submit" onClick ={submit} className="border border-light-blue p-2.5 text-s mt-4 h-[45px] w-[160px] rounded-xl bg-blue-bg hover:bg-darkest-blue text-light-blue "> Send Message</button>
                </div>
  )
}

