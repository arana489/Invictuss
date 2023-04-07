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
              <CareerBox title={career.title} p1={career.p1} p2={career.p2} p3={career.p3} p4={career.p3} p5={career.p1} p6={career.p1}/>
            </div>
          ))}
        </div>
    </div>
  );
};
export default CareerBoxes;
