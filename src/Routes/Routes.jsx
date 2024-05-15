import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import CheckOut from "../pages/CheckOut/CheckOut";
import PrivateRoutes from "../pages/PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/signIn',
                element: <SignIn></SignIn>
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoutes> <CheckOut></CheckOut></PrivateRoutes>,
                loader:({params}) => fetch(`https://car-doctor-server-2-eight.vercel.app/services/${params.id}`)
            },
        ]
    },
]);


export default router;