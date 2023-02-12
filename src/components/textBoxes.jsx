import React from 'react'
const Box = () => {
    const careers = [
        {
            title: "text1",
            description: "Description 1",
            placement: "flex justify-start p-5"
        },

        {
          title: "text1",
          description: "Description 1",
          placement: "flex justify-end p-5"
      },


    ];
    return (
      <div class= ' ${career.placement}'> 
        <div className='flex flex-row gap-x-6'>
            {careers.map((career) => (
                <div key={career.title}>
                    <div className="card shadow-2xl bg-light-gray opacity-50 rounded-xl w-80 h-40">
                    <div className="card body p-2"></div>
                        <h2 class= "font-sans text-sm font-bold p-4">{career.title}</h2>
                        <p class= "font-sans text-xs p-4">
                            {career.description}
                        </p>
                    </div>
                </div>
            ))}
          </div>
        </div>
    )
}
export default Box



