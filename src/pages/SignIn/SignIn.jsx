// import { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
// import { AuthContext } from '../../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SignIn = () => {

    // const { signInUser } = useContext(AuthContext);
    const {signInUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // sign in user
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
                alert("Login Successfully");
                e.target.reset();


                // const user = { email }

                // access get token
             /*    axios.post('https://car-doctor-server-2-eight.vercel.app/jwt', user, {withCredentials: true})
                    .then(data => {
                        console.log(data.data);
                        if (data.data.success) {
                            navigate(location?.state ? location.state : '/');
                            alert("Login Successfully");

                        }
                    }) */



            })
            .catch((error) => {
                console.log(error.message);
            })

    }





    return (
        <div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="text-center lg:text-left flex-1">
                        <img src={login} alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 flex-1">
                        <h1 className="text-3xl font-bold p-6">Sign In now!</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SignIn;