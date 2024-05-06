import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData();
    const {  title, img, price  } = service;
    console.log(service);

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
       
        const message = form.message.value;
        const order = { firstName, lastName, phone, email, message }
        console.log(order);
    }

    return (
        <div>

            <div>
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{price}</p>
            </div>

















            <div className="max-w-3xl mx-auto  bg-[#f4f3f0]">


                <form onSubmit={handleOrder} className="card-body" >
                    {/* <h1 className="text-2xl font-bold text-[#d2b48c]">Add New Coffee</h1> */}

                    <div className="grid grid-cols-2 gap-6 ">

                        {/* left side form */}
                        <div>
                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">FirstName</span>
                                </label>
                                <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            {/* 2 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Phone</span>
                                </label>
                                <input type="text" name="phone" placeholder="Your phone" className="input input-bordered" required />
                            </div>
                           

                        </div>


                        {/* right side  */}
                        <div>


                            {/* 1 */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Last Name</span>
                                </label>
                                <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                            </div>
                            {/* 2*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                          


                        </div>



                    </div>

                    {/* photo url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Message</span>
                        </label>
                        <textarea name="message" placeholder="message.." className="textarea textarea-bordered textarea-sm w-full " ></textarea>
                    </div>


                    <div className="form-control mt-6">
                        <input type="submit" value="Order Now" className="btn bg-[#d2b48c] outline-none" />
                    </div>


                </form>


            </div>


        </div>
    );
};

export default CheckOut;