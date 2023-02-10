import { useState, React } from 'react';

const ServiceDropdown = (props) => {
  const { service, description } = props;

  //      bool      func        useState hook
  const [visible, setVisible] = useState(false);
  return (
    <div className="text-4xl pl-10 pt-10 text-center sm:text-left sm:pl-16 sm:pt-16">
      <button onClick={() => {setVisible(!visible)}}>{service}</button>
      {visible ? <p className="text-2xl">{description}</p> : <></>}
    </div>
  );
 };
 export default ServiceDropdown;