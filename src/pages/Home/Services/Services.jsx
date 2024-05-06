// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";
// import axios from "axios";



const Services = () => {
    // user custom hooks
    const services = useServices();
    console.log(services);


    /*  const [services, setServices] = useState([]);
     
     
 
     useEffect(() => {
 
         // use axios
         axios.get('http://localhost:5000/services',  { withCredentials: true })
             .then(data => {
                 setServices(data.data);
 
             })
  */

    //  use  normal fetch

    /*  fetch('http://localhost:5000/services')
     .then(res => res.json())
     .then(data => {
         console.log(data);
         setServices(data);
     }) */
// }, [])


return (
    <div>
        <h1>services:{services.length}</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {
                services.map(service => <ServiceCard
                    service={service}
                    key={service._id}>

                </ServiceCard>)
            }
        </div>

    </div>
);
};

export default Services;