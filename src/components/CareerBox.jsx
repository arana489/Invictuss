import React from 'react'
import { useState } from 'react';

const CareerBox = (props) => {

  const {title, description} = props;

  const [expanded, setExpanded] = useState(false);

  return (
    <div>
        {
            expanded ? 
            // Collapsed
            <div className="shadow-2xl bg-bright-blue rounded-t-md w-64 h-12">
                <div className=""></div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div> 
            :
            // Expanded
            <div className="shadow-2xl bg-bright-blue rounded-t-md w-64 h-64">
                <div className=""></div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        }
        <button className='bg-bright-blue w-full rounded-b-md' onClick={() => {setExpanded(!expanded)}}>{expanded ? <>Read more</> : <>Read less</>}</button>

    </div>
  )
}

export default CareerBox