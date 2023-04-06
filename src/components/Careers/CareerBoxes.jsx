import React from 'react';
import CareerBox from './CareerBox';
const CareerBoxes = () => {
  const careers = [
    {
      title: 'Application Security Expert',
      p1:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p2:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p3:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p4:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p5:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p6:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
    },
    {
      title: 'Junior DevOps',
      p1:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p2:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p3:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p4:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p5:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p6:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
    },
    {
      title: 'Senior DevOps Engineer',
      p1:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p2:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p3:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p4:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p5:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
      p6:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
    }
    ];
  return (
    <div className="flex justify-center w-full">
        <div className='flex-above gap-6 w-full h-screen'>
          {careers.map((career) => (
            <div key={career.title}>
              <CareerBox title={career.title} p1={career.p1} p2={career.p2} p3={career.p3} p4={career.p3} p5={career.p1} p6={career.p1}/>
            </div>
          ))}
        </div>
    </div>
  );
};
export default CareerBoxes;
