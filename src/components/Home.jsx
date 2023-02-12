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














// export default function Home(props) {
//   return (
//     // sets parent container to take the full height of the screen
//     <div className="flex-auto h-screen" style={{ backgroundColor: "#04142A"}}>
//       <h1 className="text-8xl text-white pl-10 pt-10 text-center sm:text-left sm:pl-16 sm:pt-16">
//         Professional Cyber 
//         <br />
//         <span className="text-blue-500" style={{ color: "#5AAFD8" }}>Security </span>
//         with
//         <br />
//         <span className="text-orange-500" style={{ color: "#E9993F" }}>Reliable </span>
//          Service
//       </h1>
//     </div>
//   );
// }

