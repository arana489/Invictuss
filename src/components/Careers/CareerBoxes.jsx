import React from 'react';
import CareerBox from './CareerBox';

const CareerBoxes = () => {
  const careers = [
    {
      title: 'Application Security Expert',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
    },
    {
      title: 'Junior DevOps',
      description:
        'The ideal candidate will have meaningful experience in an IT Infrastructure role and knowledge of the following: Can read/write code in at least one programming/scripting language and open to learning more /n 2+ years of experience delivering application security projects/services or equivalent industry experience in related fields such as software engineering/programming, cloud, quality assurance, etc.'

},
    {
      title: 'Senior DevOps Engineer',
      description:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du. Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.',
    },
  ];
  return (
    <div className="flex justify-center w-full">
        <div className='flex-above gap-6 w-full h-screen'>
        
          {careers.map((career) => (
            <div key={career.title}>
              <CareerBox title={career.title} description={career.description} />
            </div>
          ))}
        </div>
    </div>

  );
};

export default CareerBoxes;
