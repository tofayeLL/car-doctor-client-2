import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Nav = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const navItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/signUP'}>SignUP</Link></li>
        <li><Link to={'/signIn'}>SignIn</Link></li>


    </>


    const handleLogout = () => {
        logOutUser()
            .then(() => {
                alert("Logout Successfully");

            })
            .catch((error) => {
                alert(error.message);

            })
    }










    return (
        <div className='my-6 mb-20'>



            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-error">appointment</a>
                    <div>
                        {
                            user &&
                            <li className="font-medium"><button onClick={handleLogout} className='btn'>logout</button></li>
                        }
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Nav;