import React from "react";
import Employee from "./Employee"
import dictionary from '../../dictionary.json'
import { RiDoubleQuotesL } from 'react-icons/ri'

export default function About(props) {
    const ab=dictionary.About
    const employees = ab.MeetOurTeam.employees

    const employeeList= employees.map(x=><Employee className=""imageSrc={x.image} eName={x.name} title= {x.role} description={x.description}></Employee>)

    return(
        <div className="mx-[11.5rem]">
            <img className="absolute top-[4.7rem] right-0 w-10/12" src="/hexes.svg" />
            <div className="relative flex mt-16 h-[30rem] items-center">
                <div className="w-7/12">
                    <h1 className="text-orange text-xl font-bold mb-16 animate-slide-up">
                        {ab.OurApproach.header}
                    </h1>

                    <h3 className="text-white text-m animate-slide-up" >
                        {ab.OurApproach.info}
                    </h3>
                </div>
                <img className="ml-auto -translate-x-12 translate-y-3 w-[18rem] animate-slide-in-right" src="/AboutPage.svg" />
            </div>

            <div className="relative my-16 w-full h-[2px] bg-white"></div>
            
            <h1 className="text-white text-lg font-bold flex justify-center mt-16">Meet Our Team</h1>
            <div className="flex gap-x-24 justify-center mt-16">
                {employeeList}
            </div>

            <div className="relative my-16 w-full h-[2px] bg-white"></div>

            <h1 className="text-white font-bold text-lg mx-20 mt-16">{ab.MessageFromOurCEO.header}</h1>
            <div className="flex mx-20 items-center flex-col mt-14 mb-24">
                <div className="flex flex-col text-white ">
                    <RiDoubleQuotesL size={30} className="absolute -translate-y-2 " />
                    <p className="text-m mx-9">
                        {ab.MessageFromOurCEO.quote}
                    </p>
                    <div className="pt-6 mx-9">
                        <p className="text-[20px]">{ab.MessageFromOurCEO.name}</p>
                        <p className="text-[14px] text-[#76798d] font-mono">{ab.MessageFromOurCEO.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}