import React from "react";
import Mission from "./Mission";
import CEOMessage from "./CEOMessage";

export default function Home(props) {
    return (
        <div className="overflow-y-auto flex-auto w-full h-screen bg-[#04142A]">
            <Mission></Mission>
            <CEOMessage > </CEOMessage>
        </div>


    )
}