import React from 'react'
import CareerBox from './CareerBox';

const CareerBoxes = () => {
    const careers = [
        {
            title: "Application Security Expert",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du."
        },
        {
            title: "Junior DevOps",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du."
        },
        {
            title: "Senior DevOps Engineer",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du."
        },
    ];
    return (
        <div className='flex-above gap-6'>
            {careers.map((career) => (
                <div key={career.title}>
                    <CareerBox title={career.title} description={career.description} />
                </div>
            ))}
        </div>
    )
}
export default CareerBoxes