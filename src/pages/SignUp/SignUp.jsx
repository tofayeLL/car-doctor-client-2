import { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUP = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // create user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
              
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
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold p-6">Sign up now!</h1>
                        <form onSubmit={handleSignUP} className="card-body">
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
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default SignUp;