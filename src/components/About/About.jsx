import React from "react";
import Employee from "./Employee"
export default function About(props) {
return(
    <div className="h-500% ">
    <h1 className="text-white text-lg ml-16 mt-10">Our Approach</h1>
            {/* our approach section */}
            <div className="flex items-center ml-14 mt-10 ">
                    <div className="flex gap">
                        <p className="text-center tracking-tight mr-[10%] lg:w-[60%] text-white font-xs md:text-m lg:text-m">
                            Invictuss is a CyberSecurity company with a unique 360 approach. We offer a "Shift-Left" approach to prevent security issues and design vulnerabilities. Our strategy reduces incidents and maximizes early detection, optimizing resources spent on security. We have almost 40 years of experience securing highly-sensitive information environments, Operation Technology (OT), cyber defense systems, and software development. Our experience covers strategy, architecture, integration, DevOps, and automation.
                        </p>
                        <img class="object-scale-down w-[0rem]  lg:w-[20rem] mt-[-5%] lg:mr-14" src="/CareersPage.svg" alt="jake.jpg"></img>
                    </div>
            </div>
            <hr class="h-px ml-16 mr-16 my-8 text-white border-t-2 "></hr>
            {/* meet our team section */}
        <div>
            <h1 className="text-white text-lg ml-16 mt-10">Meet Our Team</h1>
            <div className="flex s:flex-col s:items-center md:flex lg:flex gap-x-24 justify-center mt-8">
                <Employee className=""imageSrc="/Marom.jpg" eName="Marom" title= "Cheif Executive Officer" description="My name is Marom, and I bring to the table DevSecOps expertise and vast IT knowledge, which allows me to bring a unique perspective to our team."></Employee>
                <Employee className=""imageSrc="/Liran.jpg" eName="Liran" title= "Cheif Operations Officer" description="I am proud to be part of a team that is dedicated to providing best cyber services to all of our customers. My expertise lies in information security and networking protocols, as well as Operational Technology"></Employee>
            </div>


        </div>
        <hr class="h-px ml-16 mr-16 my-8 text-white border-t-2 "></hr>
            
        <div>
            <h1 className="text-white text-lg ml-16 mt-10">Meet From Our CEO</h1>
            <div className="flex text-left">
                <div className="mt-8 mb-8 px-20">
                    <p className="tracking-tight text-white text-m md:text-lg  lg:text-m">
                    &ldquo;Invictuss provided exceptional service in securing our cloud
                    infrastructure. Their team of experts were able to identify and
                    mitigate several vulnerabilities that could have resulted in a
                    major security breach. They were also able to provide practical
                    solutions that were easy to implement and maintain. We highly
                    recommend their services to any company looking to secure their
                    cloud infrastructure&rdquo;
                    </p>
                    <div className="text-white py-6">
          <p className="text-white text-md">Marom</p>
          <p className="text-md text-light-gray">Cheif Executive Officer</p>
        </div>
                </div>
    </div>
    </div>
    </div>
    );
}