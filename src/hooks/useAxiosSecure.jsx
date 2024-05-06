import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import {  useNavigate } from "react-router-dom";

const axiosSecure = axios.create(
    {
        baseURL: 'http://localhost:5000',
        withCredentials: true
    }
)

const useAxiosSecure = () => {
    const { logOutUser } = useAuth();
   const navigate = useNavigate();

    // by use axios interceptors
    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.log('error tracked from axios interceptor:', error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log('logout the user');
                    logOutUser()
                        .then(() => {
                            // alert("Logout Successfully");
                            navigate('/signIn');


                        })
                        .catch((error) => {
                            alert(error.message);

                        })
                }

            }
        )
    }, [])



    return axiosSecure;
};

export default useAxiosSecure;