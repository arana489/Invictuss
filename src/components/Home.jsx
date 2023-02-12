import React from "react";
import CEOMessage from "./CEOMessage";
import Expertise from "./Expertise";
import Mission from "./Mission";
import Goal from "./Goal";

export default function Home(props) {
    return (
        <div className="overflow-y-auto flex-auto overflow-hidden w-full h-screen bg-[#04142A]">
            <Mission> </Mission>
            <Expertise></Expertise>
            <Goal></Goal>
            <CEOMessage></CEOMessage>
        </div >


    )
}