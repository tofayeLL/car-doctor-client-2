import { useEffect, useState } from "react";
// import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";
// import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const Services = () => {
    // user custom hooks
    /*  const services = useServices();
     console.log(services); */

    const [services, setServices] = useState([]);

    // for price hight to low button 
    const [asc, setAsc] = useState(true);




    // custom hook for axios
    const axiosSecure = useAxiosSecure();


    useEffect(() => {

        // use axios
        axiosSecure.get('/services')
            .then(data => {
                setServices(data.data);

            })
    }, [axiosSecure])


    //  use  normal fetch

    /*  fetch('https://car-doctor-server-2-eight.vercel.app/services')
     .then(res => res.json())
     .then(data => {
         console.log(data);
         setServices(data);
     }) */
    // }, [])


    return (
        <div>
            <h1>services:{services.length}</h1>
            <button onClick={() => setAsc(!asc)} className="btn btn-secondary">

                {
                    asc ? "Price high to low" : 'Price low to high'
                }
            </button>
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