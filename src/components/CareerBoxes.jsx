import React from 'react'
import CareerBox from './CareerBox';

const CareerBoxes = () => {

    const careers = [
        {
            title: "Doctor ",
            description: "lots of money, fixes bones"
        },
        {
            title: "Coder",
            description: "spends a lot of time making really cool website for company"
        },
        {
            title: "Bartender",
            description: "makes non alchoholic drinks for people"
        },  
    ];

    return (
        <div className='flex flex-row gap-x-6'>
            {careers.map((career) => (
                <div key={career.title}>
                    <CareerBox title={career.title} description={career.description} />
                </div>
            ))}
        </div>
    )
}

export default CareerBoxes

