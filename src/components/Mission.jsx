import React from "react";
import CallToAction from "./CallToAction";

export default function Mission(props) {
    return (
        <div className="flex flex-col">
            <CallToAction> </CallToAction>
            <h1 className="text-4xl md:text-8xl pr-20 text-right text-white "> Our Mission </h1>
            <div className="flex space-x-20 ">
                <div className="w-1/2 pl-15">
                    <img
                        src="https://via.placeholder.com/400x400"
                        alt="Placeholder Image"
                        className="h-64 w-full object-cover pl-20 ml-15"
                    />
                </div>
                <p className="w-1/2 flex-col md:text-2xl pr-20 text-left text-white">
                    Invictuss is a CyberSecurity company that offers a unique focused,
                    yet 360, strategy that includes securing architecture, infrastructure,
                    integration and development process by design and in a end-to-end
                    continuous manner throughout the customers lifecycle.
                    We offer a preventive "Shift-Left" approach, ensuring organizations
                    fix security issues/design vulnerabilities as early as possible in the
                    process of delivery, saving valuable time and money related to security flaws.
                </p>
            </div>

        </div>
    )
}