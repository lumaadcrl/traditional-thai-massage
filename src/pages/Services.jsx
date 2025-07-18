import Header from '../components/Header.jsx'
import Contact from "../sections/Home_Contact.jsx"
import Service from '../sections/Service_Services.jsx';
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom';

function Services(){

    return(
        <>
            <Header/>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/service-hero.jpg')] bg-cover bg-center min-h-screen flex justify-center items-center text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="flex flex-col items-center text-center">
                    <h5 className="text-md font-bold font-serif uppercase">our services</h5>
                    <h1 className="text-4xl sm:text-7xl md:text-7xl font-extrabold font-serif leading-tight py-6">
                        Spa Center
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mb-6">
                        Pamper yourself with various treatments that can maintain <br />
                        the health of your body and mind.
                    </p>
                </div>
            </div>
            <Service/>
            <section
                className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/offer-hero.jpg')" }}
                >
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                <div className="relative z-10 text-center px-4">
                    <p className="uppercase tracking-widest text-sm mb-2">Your Sanctuary for Wellness</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                        Relax. Refresh. Renew.
                    </h2>
                    <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-200 mb-6">
                        We provide professional, personalized massage therapies in a peaceful environment, where your comfort comes first.
                    </p>
                </div>
            </section>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Services