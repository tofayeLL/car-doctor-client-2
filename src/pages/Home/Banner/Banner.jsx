import image1 from '../../../assets/images/banner/1.jpg';
import image2 from '../../../assets/images/banner/2.jpg';
import image3 from '../../../assets/images/banner/3.jpg';
import image4 from '../../../assets/images/banner/4.jpg';


const Banner = () => {
    return (
        <div className=' '>



            <div className="carousel w-full lg:h-[80vh] object-cover object-center rounded-lg bg-blend-darken z-0">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full object-cover object-center" />

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>





                <div className='absolute w-[30%]  flex flex-col justify-secter items-center  text-white top-[30%] left-[20%] '>
                    <div className=' space-y-10 bg-gradient-to-r from-slate-300 via-slate-500 p-8'> 
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex items-center gap-4'>
                            <button className='btn  bg-red-500 text-white outline-red-500'>Discover More</button>
                            <button className='btn btn-outline text-white'>Latest Projec</button>
                        </div>
                        </div>
                </div>

               




            </div>





        </div>
    );
};

export default Banner;