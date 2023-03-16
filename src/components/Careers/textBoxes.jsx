import React from 'react'
const Box = () => {
    const careers = [
        {
            title: "Full-time"
        },

        {
            title: "Part-time"
        },


        {
          title: "Freelance"
      },


    ];
    return (
        <div className='flex flex-row gap-x-6'>
            {careers.map((career) => (
                <div className= "flex-row"> 
                <div key={career.title}>
                    <div className="bg-light-gray opacity-50 rounded-full w-24 h-8">
                    <div className="card body"></div>
                        <h2 class= "font-sans text-xs font-bold text-right pr-2 ">{career.title}</h2>
                    </div>
                </div>
                </div>
            ))}
          </div>

    )
}
export default Box


