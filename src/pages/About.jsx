import Header from '../components/Header.jsx'
import Testimony from '../sections/Home_Testimony.jsx'
import Expertise_Card from "../components/Expertise_Card";
import Footer from '../components/Footer.jsx'

function About(){

    return(
        <>
            <Header/>
            <div className="bg-[#CDA78E] min-h-screen flex justify-center items-center text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="flex flex-col items-center">
                    <h5 className="text-md font-bold font-serif mb-4 uppercase">know more</h5>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif leading-tight mb-6">
                        About Us
                    </h1>
                </div>
            </div>
            <div className='flex flex-col items-center mt-[100px] py-16 px-4 sm:px-8 md:px-16 lg:px-24'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div>
                        <p className='font-serif font-semibold text-[#205C4A] py-4 uppercase md:tex-sm'>spa massage</p>
                        <p className='font-serif font-semibold text-[#205C4A] py-4 md:text-4xl'>Where you can relax and enjoy life</p>
                        <div className='py-4'>
                            <i className="bx bxs-quote-alt-left md:text-2xl  text-[#205C4A]"></i>
                            
                            <p className="text-lg md:text-sm leading-relaxed text-gray-700">
                                Clean and relaxing environment with reasonable prices.
                                The place wasn’t crowded during my visit, making it a peaceful experience.
                                I went in for a massage and was pleased with the service and overall atmosphere.
                                Conveniently located and a good option for some self-care time.
                            </p>
                        </div>
                        <div className="py-2.5 flex items-center gap-3">
                            <img
                                src="/review-img.jpg"
                                alt="review-profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="mt-3 font-semibold uppercase tracking-wide text-sm">Allison Madison</p>
                                <p className="text-sm text-gray-700">Cebu City</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <img
                            src="/services.webp"
                            alt="Massage"
                            className="w-full h-auto object-cover rounded-md"
                        /> 
                    </div>
                    <div className='text-md text-gray-600'>
                        <p>At Spa Massage, we offer more than just a typical spa visit — we provide a tranquil escape designed to renew your body and mind. Discover a range of massage therapies, from traditional massage and specialized treatments to targeted techniques that ease muscle tension and melt away stress. Every session is personalized to meet your needs, leaving you feeling refreshed, balanced, and fully relaxed.
                        <br /><br />
                        What makes us different is our dedication to quality and care. Each massage is performed by skilled therapists who bring genuine passion and precision to every treatment. At Spa Massage, your comfort, well-being, and satisfaction are always at the heart of what we do.
                        </p> 
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="text-gray-600 grid grid-cols-1 text-center sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Expertise_Card
                    icon="/beauty_icon.png"
                    title="Beauty"
                    description="Reveal your radiance with personalized skincare and beauty treatments that nourish your skin and uplift your spirit."
                    />

                    <Expertise_Card 
                    icon="/wellness_icon.png" 
                    title="Wellness"
                    description="Promote balance, reduce stress, and support your overall well-being with massage treatments designed to restore both body and mind."
                    />
                    
                    <Expertise_Card
                    icon="/massage_icon.png"
                    title="Massage"
                    description="Release stress and tension through expert massage techniques that heal, relax, and revitalize."
                    />
                </div>

                <div className="py-7">
                    <img src="/massage-room.webp" alt="expertise-image" className="rounded-md w-full max-w-6xl mx-auto" />
                </div>

                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-20 max-w-6xl mx-auto text-center">
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">20</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Experts</p>
                    </div>
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">500+</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Happy Clients</p>
                    </div>
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">7</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Offers</p>
                    </div>
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">15+</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Private Rooms</p>
                    </div>
                </div>
            </div>
            <Testimony/>
            <Footer/>
        </>
    );
}

export default About