import React from "react";
import Employee from "./Employee"
import dictionary from '../../dictionary.json'


export default function About(props) {
    const ab=dictionary.About
    const employees = ab.MeetOurTeam.employees

    const employeeList= employees.map(x=><Employee className=""imageSrc={x.image} eName={x.name} title= {x.role} description={x.description}></Employee>)


return(

    <div className="h-500% ">
    <h1 className="text-white text-lg ml-16 mt-10">{ab.OurApproach.header}</h1>
            {/* our approach section */}
            <div className="flex items-center ml-14 mt-10 ">
                    <div className="flex gap">
                        <p className="text-center tracking-tight mr-[10%] lg:w-[60%] text-white font-xs md:text-m lg:text-m">
                            {ab.OurApproach.info}
                        </p>
                        <img class="object-scale-down w-[0rem]  lg:w-[20rem] mt-[-5%] lg:mr-14" src="/CareersPage.svg" alt="jake.jpg"></img>
                    </div>
            </div>
            <hr class="h-px ml-16 mr-16 my-8 text-white border-t-2 "></hr>
            {/* meet our team section */}
        <div>
            <h1 className="text-white text-lg ml-16 mt-10">Meet Our Team</h1>
            <div className="flex s:flex-col s:items-center md:flex lg:flex gap-x-24 justify-center mt-8">
                {employeeList}
            </div>


        </div>
        <hr class="h-px ml-16 mr-16 my-8 text-white border-t-2 "></hr>
            
        <div>
            <h1 className="text-white text-lg ml-16 mt-10">{ab.MessageFromOurCEO.header}</h1>
            <div className="flex text-left">
                <div className="mt-8 mb-8 px-20">
                    <p className="tracking-tight text-white text-m md:text-lg  lg:text-m">
                    {ab.MessageFromOurCEO.quote}
                    </p>
                    <div className="text-white py-6">
          <p className="text-white text-md">{ab.MessageFromOurCEO.name}</p>
          <p className="text-md text-light-gray">{ab.MessageFromOurCEO.role}</p>
        </div>
                </div>
    </div>
    </div>
    </div>
    );
}