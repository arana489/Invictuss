import { useState, React } from 'react';


const ServiceDropdown = (props) => {
  const { service, description, d } = props;

  //      bool      func        useState hook
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-2xl font-semibold text-clip overflow-hidden justify-center sm:text-center sm:pr-4 sm:pl-4 sm:pt-8 sm:pb-8 rounded-lg border-2 w-1/4 text-justify border-dark-blue">
      <div class="hover:text-light-blue hover:stroke-light-blue" onClick={() => {setVisible(!visible)}}>
        <svg fill="none" className="stroke-darkest-blue" stroke-width="1.5" viewBox="0 0 24 24" width="25%" height="25%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d={d}></path>
        </svg>
        {/* Button is equal to the service param and hides/unhides the description */}
        <button>{service}</button>
      </div>
      {visible ? <p className="text-xl font-normal"><br></br>{description}</p> : <></>}
    </div>
  );
 };
 export default ServiceDropdown;