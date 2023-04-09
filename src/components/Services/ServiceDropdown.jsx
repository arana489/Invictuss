import { useState, React } from 'react';


const ServiceDropdown = (props) => {
  const { service, short_desc, long_desc, d } = props;

  //      bool      func        useState hook
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-sm md:text-m lg:text-lg font-semibold justify-center text-center pr-4 pl-4 pt-8 pb-8 rounded-lg border-2 w-3/4 md:w-1/4  border-white">
      <div className="stroke-white text-white  hover:text-light-blue hover:stroke-light-blue hover:fill-light-blue fill-white" onClick={() => {setVisible(!visible)}}>
        <img className="mx-auto" width="30%" height="30%" src ={d}></img>
        {/* Button is equal to the service param and hides/unhides the description */}
        <button className="mx-auto">{service}</button>
      </div>
      {/* Both short and long descriptions */}
      <div className={`${visible ? "max-h-96" : "max-h-0"} text-white transition-all duration-300 font-normal text-xs md:text-sm lg:text-sm mt-3 overflow-hidden`}>{visible && short_desc}</div>
      <div className={`${visible ? "max-h-96" : "max-h-0"} text-white transition-all duration-300 font-normal text-xs md:text-sm lg:text-sm mt-3 overflow-hidden`}>{visible && long_desc}</div>
    </div>
  );
 };
 export default ServiceDropdown;