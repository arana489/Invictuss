import React from 'react'
import json from "../../dictionary.json"

const Box = () => {
    const careers = json.Careers.testBoxes.careers

    return (
        <div className='flex flex-row gap-x-6'>
            {careers.map((career) => (
                <div className= "flex-row"> 
                <div key={career.title}>
                    <div className="text-white border border-white rounded-full flex items-center w-24 h-8">
                    <img src={career.icon.src} alt={career.icon.alt} class={career.icon.class} />
                    <span className = "flex-grow text-xs text-right mr-2">{career.title}</span>
                    </div>
                </div>
                </div>
            ))}
          </div>

    )
}
export default Box


