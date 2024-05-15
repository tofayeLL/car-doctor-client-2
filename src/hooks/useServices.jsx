import axios from "axios";
import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
       axios.get('https://car-doctor-server-2-eight.vercel.app/services', {withCredentials:true})
       .then(data => {
        setServices(data.data);
       })
    }, [])

    return services;

};

export default useServices;