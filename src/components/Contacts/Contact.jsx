import React from "react";
import { useEffect, useState } from "react";
import dictionary from '../../dictionary.json'
import emailjs from '@emailjs/browser';




export default function Contact(){

    const cont=dictionary.Contact
    const[info,setInfo]=useState({name: "", email: "", services:"", company:"", message:""})
    const[submitted,setSubmitted]=useState([])


    useEffect(() => {
        console.log(submitted);
        console.log(info);
      },[info, submitted]);


      useEffect(() => {
        console.log(submitted);
        console.log(info);
        if(info.services!=""){
            const tempMess = "Hi I'd like to learn more about the " +info.services + " service"
            setInfo((x)=>({...x, message:tempMess}))
        }
        else{
            setInfo((x)=>({...x, message:""}))

        }
      },[info.services]);

      function submit(){
        const temp = info

        if(temp.name==""|| temp.email==""){
            alert("missing name or email")
            return;
        }
        setInfo({name: "", email: "", services:"", company:"", message:""})
        //setSubmitted(x=>x.concat(temp))
        emailjs.send('service_key_test', 'template_key_test', info, 'Xe-GzRGFE7-UHda0d')
            .then(response => {
                console.log('SUCCESS!', response);
                setSubmitted({
                    name: "", 
                    email: "", 
                    services:"", 
                    company:"", 
                    message:""
                });
            }, error => {
                console.log('FAILED...', error);
            });
    }


    const y= cont.services
    console.log(cont);

    console.log(y);
    const optionList=y.map(x=><option value={x}>{x}</option>)
    console.log(optionList);
    return(
    
    

        <div className="p-16 2xl:h-[1525px]">
            <div className="lg:flex justify-evenly">
                <div className="text-center lg:text-left md:mb-10 lg:mb-10 mt-16 text-white">
                    <h1 className="text-lg font-bold mb-10 mt-10">{cont.header}</h1>
                    <h2 className="text-m mb-5">{cont.message1}</h2>
                    <h2 className="text-m mb-5 ">{cont.message2}</h2>                    
                    <a href="mailto:sales@invictuss.io"><h2 className="text-m mb-5 flex gap-x-4"><img src="/CareersEmail.svg"></img>{cont.email}</h2></a>
                    <a href="https://api.whatsapp.com/send?phone=972505156080&text=Hi"><h2 className="text-m mb-5 flex gap-x-4"><img src="/CareersPhone.svg"></img>{cont.number}</h2></a>
                    <img class="bg-none w-0 lg:w-100 md:w-100 h-80" src="cust_service.png"></img>

                </div>


                <div className="border border-light-blue bg-contactBlue lg:m-0 m-auto w-[30rem] md:w-[35rem] lg:w-[35rem] h-[38rem] rounded-xl flex mt-[-40%] lg:mt-12 md:mt-12 items-center justify-center">
                    <form id="contactform">
                        <div className="grid grid-cols-2 gap-[2rem] mb-[3rem]  ">
                            <div className="flex flex-col gap-[2rem]">
                                <div>
                                    <label className="text-light-blue text-sm"  htmlFor="name" >Name <span className="text-[#f75252]">*</span></label><br></br>
                                    <input type="text" value={info.name} id="name" className=" border border-light-blue focus:outline-none text-white  my-2 p-2.5 text-l h-[45px] w-[180px] md:w-[230px] lg:[230px rounded-xl placeholder-light-gray placeholder-opacity-25 bg-blue-bg" onChange={e=>setInfo((x)=>({...x, name:e.target.value}))}></input><br></br>
                                </div>

                                <div>
                                    <label className="text-light-blue text-sm" htmlFor="email">Email <span className="text-[#f75252]">*</span></label><br></br>
                                    <input type="text" value={info.email} id="email" className="text-white border border-light-blue focus:outline-none my-2 p-2.5 text-sm  h-[45px] w-[180px] md:w-[230px] lg:[230px] rounded-xl placeholder-light-gray placeholder-opacity-25 bg-blue-bg" onChange={e=>setInfo((x)=>({...x, email:e.target.value}))}></input><br></br>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[29px]">
                                <div>
                                    <label className="text-light-blue text-sm" htmlFor="services">Services</label><br></br>
                                    <select type="text" value={info.services} id="phone" className="text-white border border-light-blue focus:outline-none my-2 p-2 text-sm  h-[45px] w-[180px] md:w-[230px] lg:w-[230px] rounded-xl bg-blue-bg" onChange={e=>setInfo((x)=>({...x, services:e.target.value}))}>  
                                        <option value="">{""}</option>
                                        {optionList}
                                    </select>
                                    <br></br>
                                </div>
                                <div className="">
                                    <label className="text-light-blue text-sm" htmlFor="company">Company</label><br></br>
                                    <input type="text" id="company" value={info.company} className="text-white border border-light-blue focus:outline-none my-2 p-2 text-sm  h-[45px] w-[180px] md:w-[230px] lg:w-[230px] rounded-xl bg-blue-bg" onChange={e=>setInfo((x)=>({...x, company:e.target.value}))}></input><br></br>
                                </div>
                            </div>
                        </div>
                        <div className="mb-[29px]">
                            <label className="text-light-blue text-sm" htmlFor="message">Message</label><br></br>
                            <textarea name="message" form="contactform" value={info.message} className="text-white border border-light-blue resize-none focus:outline-none my-2 p-2 text-sm  h-[100px] w-[400px] md:w-[490px] lg:w-[490px] rounded-xl bg-blue-bg" onChange={e => setInfo((x) => ({ ...x, message: e.target.value }))}></textarea><br></br>
                        </div>
                        <div class="flex overflow-hidden">
                            <div>
                                <button type="button" id ="submit" onClick ={submit} className="border border-light-blue p-2.5 text-s mt-4 h-[45px] w-[160px] rounded-xl bg-blue-bg hover:bg-darkest-blue text-light-blue "> Send Message</button>
                            </div>
                            <div>
                                <img class="ml-[250%]" src="/contact_us_1.png"></img>
			                </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )

}   