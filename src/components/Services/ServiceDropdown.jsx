import { useState, React } from 'react';


const ServiceDropdown = (props) => {
  const { service, description, d } = props;

  //      bool      func        useState hook
  const [visible, setVisible] = useState(false);

  // Toggle selected state when card is clicked
  const handleCardSelect = () => {
    setSelected(!selected);
    
  };
  
  return (
    <div className="text-sm md:text-m lg:text-lg font-medium justify-center text-center pr-4 pl-4 pt-8 pb-8 rounded-lg border-2 w-1/3 md:w-1/4  border-white">
      <div className="stroke-white text-white hover:text-light-blue hover:stroke-light-blue " onClick={() => {setVisible(!visible)}}>
        <svg fill="none" className="mx-auto" strokeWidth="1.5" viewBox="0 0 24 24" width="20%" height="20%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d={d}></path>
        </svg>
        {/* Button is equal to the service param and hides/unhides the description */}
        <button className="mx-auto">{service}</button>
      </div>
      <div className={`${visible ? "max-h-96" : "max-h-0"} text-white transition-all duration-300 text-xs md:text-sm lg:text-sm mt-3 overflow-hidden`}>{visible && description}</div>
    </div>
  );
 };
 export default ServiceDropdown;