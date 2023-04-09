import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const CareerBadges = () => {
    const careers = [
        {
            title: "Full-time",
            icon: <img src="/Clock.svg" alt="Arrow" class="h-4 w-4 ml-2" />
        },

        {
            title: "Part-time",
            icon: <img src="/Clock.svg" alt="Arrow" class="h-4 w-4 ml-2" />
        },


        {
          title: "Freelance",
          icon: <img src="/Head.svg" alt="Arrow" class="h-4 w-4 ml-2" />
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
            <div className='ml-auto'>
                <button className="text-white border border-white rounded-full flex items-center w-32 h-10 hover:border-orange hover:scale-110 hover:bg-orange duration-200">
                    <HiArrowNarrowRight size={25} className="ml-5" />
                    <a className="flex-grow text-right mr-6" href="mailto:sales@invictuss.io"> Apply</a>
                </button>
            </div>
          </div>

    )
}
export default CareerBadges


