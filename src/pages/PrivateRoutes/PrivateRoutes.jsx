import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();



    if (loading) {
        return <div className="flex flex-col justify-center items-center">
            <RotatingLines
                visible={true}
                height="100"
                width="200"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
};

export default PrivateRoutes;