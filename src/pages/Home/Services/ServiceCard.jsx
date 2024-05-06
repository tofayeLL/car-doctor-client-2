import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id,title, img, price } = service
    return (
        <div>
            {/* card 1 */}
            <div className="rounded-md shadow-sm my-6 border-[1px] border-[#e0e0e2] " data-aos="fade-down">

                <div className="" >
                    <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8" data-aos="fade-up">
                    <div className="space-y-2" >
                        <h2 className="text-xl font-semibold tracking-wide text-violet-800 ">{title}</h2>
                        <p className="text-lg font-semibold text-red-500">Price: {price}</p>
                       
                    </div>
                    <Link to={`/checkout/${_id}`}> <button type="" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400  text-white">Book Now</button></Link>
                </div>

            </div>


        </div>
    );
};

export default ServiceCard;