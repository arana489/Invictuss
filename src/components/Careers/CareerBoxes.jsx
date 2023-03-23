import React from 'react';
import CareerBox from './CareerBox';
import json from "../../dictionary.json"

const CareerBoxes = () => {
  const careers = json.Careers.CareerBoxes.careers

  return (
<div class="flex justify-center">
  <div class="">
    <div class='flex-above gap-6'>
      {careers.map((career) => (
        <div key={career.title}>
          <CareerBox title={career.title} description={career.description} />
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default CareerBoxes;
