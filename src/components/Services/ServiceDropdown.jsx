import { useState, React } from 'react';


const ServiceDropdown = (props) => {
  const { service, description, d } = props;

  //      bool      func        useState hook
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-sm md:text-m lg:text-lg font-semibold justify-center text-center pr-4 pl-4 pt-8 pb-8 rounded-lg border-2 w-1/3 md:w-1/4  border-white">
      <div class="stroke-white text-white hover:text-light-blue hover:stroke-light-blue" onClick={() => {setVisible(!visible)}}>
        <svg fill="none"  className="mx-auto" stroke-width="1.5" viewBox="0 0 24 24" width="30%" height="30%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d={d}></path>
        </svg>
        {/* Button is equal to the service param and hides/unhides the description */}
        <button class="mx-auto">{service}</button>
      </div>
      <div class={`${visible ? "max-h-96" : "max-h-0"} text-white transition-all duration-300 text-xs md:text-sm lg:text-sm mt-3 overflow-hidden`}>{visible && description}</div>
    </div>
  );
 };
 export default ServiceDropdown;