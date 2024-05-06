import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Nav from "../pages/Shared/Nav";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;