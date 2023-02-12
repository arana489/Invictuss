import React from 'react'
import CareerBox from './CareerBox';

const CareerBoxes = () => {

    const careers = [
        {
            title: "Career 1",
            description: "Description 1"
        },
        {
            title: "Career 2",
            description: "Description 2"
        },
        {
            title: "KRISSSS!!!!",
            description: "Description 1232323232"
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

