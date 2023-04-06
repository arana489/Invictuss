import React from 'react';
import { useState } from 'react';
import Box from './textBoxes';
import './Button.css'

const CareerBox = (props) => {
  const { title, p1, p2, p3, p4, p5, p6 } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        // CHANGE BACK TO TRUE 
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setExpanded(false);
      }}
      className="my-10" // Add margin to top and bottom of container
      style={{ position: 'relative' }} // Add position relative to parent div
    >
      {expanded ? (
        // Expanded 
        <div className="h-auto p-5 border-t-2 border-white">
          <h2 className="text-white text-left text-lg">{title}</h2>
          <ul className="text-white list-disc list-inside p-5">
                    <li>{p1}</li>
                    <li>{p2}</li>
                    <li>{p3}</li>
                    <li>{p4}</li>
                    <li>{p5}</li>
                    <li>{p6}</li>
                  </ul>
          <Box></Box>
          <div style={{ position: "absolute", bottom: "20px", right: "30px" }}>
            <button className="text-white border border-white rounded-full flex items-center w-32 h-10" id='button_col'>
              <img src="src/assets/Arrow.svg" alt="Arrow" class="h-6 w-6 ml-5" />
              <a className = "flex-grow text-right mr-6" href="mailto:cv@invictuss.io"> Apply</a>
            </button>
          </div>
        </div>

      ) : (
        // Collapsed
<div className="h-64 p-5 border-t-2 border-white">
  <h2 className="text-white text-left text-lg">{title}</h2>
  <ul className="text-white list-disc list-inside p-5">
            <li>{p1}</li>
            <li>{p2}</li>
            <li>{p3}</li>
          </ul>
  <Box></Box>
  <div style={{ position: "absolute", bottom: "20px", right: "30px" }}>
    <button className="text-white border border-white rounded-full flex items-center w-32 h-10" id='button_col'>
      <img src="src/assets/Arrow.svg" alt="Arrow" class="h-6 w-6 ml-5" />
      <a className = "flex-grow text-right mr-6" href="mailto:cv@invictuss.io"> Apply</a>
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default CareerBox;
