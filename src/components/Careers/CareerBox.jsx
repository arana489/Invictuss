import React from 'react';
import { useState } from 'react';
import Box from './textBoxes';

const CareerBox = (props) => {
  const { title, description } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        // CHANGE BACK TO TRUE 
        setExpanded(false);
      }}
      onMouseLeave={() => {
        setExpanded(false);
      }}
      className="my-10" // Add margin to top and bottom of container
      style={{ position: 'relative' }} // Add position relative to parent div
    >
      {expanded ? (
        // Expanded
        <div className="h-64 border-t-2 border-white">
          <h2 className="text-white text-left text-lg">{title}</h2>
          <p className='text-white text-left p-5 w-3/4'>{description}</p>
          <Box></Box>
          <div style={{ position: 'absolute', bottom: '20px', right: '30px'}}> {/* Add absolute positioning to child div */}
          <button className="text-white border border-white rounded-full flex items-center w-32 h-10">
      <img src="src/assets/Arrow.svg" alt="Arrow" class="h-6 w-6 ml-5" />
      <span className = "flex-grow text-right mr-6">Apply</span>
              </button>
              </div>
        </div>
      ) : (
        // Collapsed
<div className="h-64 p-5 border-t-2 border-white">
  <h2 className="text-white text-left text-lg">{title}</h2>
  <p className="text-white text-left p-5 w-3/4">{description}</p>
  <Box></Box>
  <div style={{ position: "absolute", bottom: "20px", right: "30px" }}>
    <button className="text-white border border-white rounded-full flex items-center w-32 h-10">
      <img src="src/assets/Arrow.svg" alt="Arrow" class="h-6 w-6 ml-5" />
      <span className = "flex-grow text-right mr-6">Apply</span>
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default CareerBox;
