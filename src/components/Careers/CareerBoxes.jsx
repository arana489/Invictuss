import React from 'react';
import CareerBox from './CareerBox';
import dictionary from '../../dictionary.json'

const CareerBoxes = () => {

  const careers =dictionary.Careers.CareerBoxes.careers

  return (
    <div className="flex justify-center w-full">
        <div className='flex-above gap-6 w-full h-screen'>
          {careers.map((career) => (
            <div key={career.title}>
              <CareerBox title={career.title} requiredSkills={career.requiredSkills} recommendedSkills={career.recommendedSkills}  />
            </div>
          ))}
        </div>
    </div>
  );
};
export default CareerBoxes;
