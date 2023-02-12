import React from "react";

export default function Customers(props) {
    return (
        <div className="text-white text-6xl mt-72">
            <h1 className="animate-pulse text-center text-white">
                Our Customers
            </h1>
            <div className="flex space-x-20">
                <div className="w-1/2 pl-15">
                    <p className="md:text 4xl pr-20 text-center text-white">
                        Customer 1 here
                    </p>
                </div>
                <div className="w-1/2 pr-15">
                    <p className="md:text 4xl pr-20 text-right text-white">
                        Customer 2 here
                    </p>
                </div>

            </div>
            <div className="flex space-x-20 mt-36">
                <div className="w-1/2 pl-15">
                    <p className="md:text 4xl pr-20 text-center text-white">
                        Customer 3 here
                    </p>
                </div>
                <div className="w-1/2 pr-15">
                    <p className="md:text 4xl pr-20 text-right text-white">
                        Customer 4 here
                    </p>
                </div>

            </div>

        </div>
    )
}