import React from 'react'
import { useState } from 'react';
const CareerBox = (props) => {
  const {title, description} = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <div onMouseEnter={() => {setExpanded(!expanded)}} onMouseLeave={() => {setExpanded(!expanded)}}>
        {
            expanded ?
            // Expanded
            <div className="shadow-2xl bg-bright-blue rounded-md w-64 h-64">
                <div className=""></div>
                <h2 class="text-center">{title}</h2>
                <p>{description}</p>
            </div>
            :
            // Collapsed
            <div className="shadow-2xl bg-bright-blue rounded-md w-64 h-12">
                <div className=""></div>
                <h2 class="text-center">{title}</h2>
            </div>
        }
    </div>
  )
}
export default CareerBox