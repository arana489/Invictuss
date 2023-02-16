import { useState, React } from 'react';


const ServiceDropdown = (props) => {
  const { service, description } = props;

  //      bool      func        useState hook
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-4xl sm:text-left sm:pl-8 sm:pt-8 sm:pr-8 sm:pb-8 rounded-lg border-2 w-1/4 text-justify border-dark-blue">
      {/* Button is equal to the service param and hides/unhides the description */}
      <button class="hover:text-light-blue" onClick={() => {setVisible(!visible)}}>{service}</button>
      {visible ? <p className="text-2xl">{description}</p> : <></>}
    </div>
  );
 };
 export default ServiceDropdown;