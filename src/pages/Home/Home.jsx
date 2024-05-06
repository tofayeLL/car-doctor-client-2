import Banner from "./Banner/Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div>
          
            <div className="my-10">
                <Banner></Banner>
            </div>
            <div className="my-10">
               <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;