import React from "react";
import CallToAction from "./CallToAction";
import Expertise from "./Expertise";

export default function Home(props) {
    return (
        <div className="overflow-y-auto flex-auto overflow-hidden w-full h-screen bg-[#04142A]">
            <CallToAction></CallToAction>

            <Expertise></Expertise>
            <div>
                <h1 className="text-white mt-36"> Our Customers </h1>
            </div>


            <div>
                <h1 className="text-white"> Company Values </h1>
            </div>
        </div >


    )
}