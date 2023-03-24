import React from 'react'
const Box = () => {
    const careers = [
        {
            title: "Full-time",
            icon: <img src="../../../public/Clock.svg" alt="Arrow" class="h-4 w-4 ml-2" />
        },

        {
            title: "Part-time",
            icon: <img src="../../../public/Clock.svg" alt="Arrow" class="h-4 w-4 ml-2" />
        },


        {
          title: "Freelance",
            icon: <img src="../../../public/Head.svg" alt="Arrow" class="h-4 w-4 ml-2" />
      },


    ];
    return (
        <div className='flex flex-row gap-x-6'>
            {careers.map((career) => (
                <div className= "flex-row"> 
                <div key={career.title}>
                    <div className="text-white border border-white rounded-full flex items-center w-24 h-8">
                    {career.icon}
                    <span className = "flex-grow text-xs text-right mr-2">{career.title}</span>
                    </div>
                </div>
                </div>
            ))}
          </div>

    )
}
export default Box


