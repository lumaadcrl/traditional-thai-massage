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
                        <p className='font-serif font-semibold text-[#205C4A] py-4 uppercase md:tex-sm'>Ocean green massage</p>
                        <p className='font-serif font-semibold text-[#205C4A] py-4 md:text-4xl'>Where you can relax and enjoy life</p>
                        <div className='py-4'>
                            <i className="bx bxs-quote-alt-left md:text-2xl  text-[#205C4A]"></i>
                            
                            <p className="text-lg md:text-sm leading-relaxed text-gray-700">
                                Nice place, affordable prices, not too crowded when I went. 
                                There was also a cute dog there when I visited. 
                                Went for a pedicure and was satisfied with the service. 
                                I actually went to Tina Hair, which is just right beside Tina Massage.
                            </p>
                        </div>
                        <div className="py-2.5 flex items-center gap-3">
                            <img
                                src="/review-img.png"
                                alt="review-profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="mt-3 font-semibold uppercase tracking-wide text-sm">Dannea Moneva</p>
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
                        <p>At Ocean Green Massage, we offer more than just a typical spa experience we provide a sanctuary 
                        where you can truly unwind. Explore our wide variety of massage services, from tradition massage and
                        aroma massages to specialized treatments designed to target muscle tension and stress. Each session 
                        is thoughtfully tailored to your needs, ensuring you leave feeling refreshed, rebalanced, and deeply cared for.
                        <br /><br />
                        What sets us apart is the expertise behind every touch. Our team of highly trained and experienced 
                        therapists led by the owner himself brings years of knowledge, skill, and passion to every treatment. 
                        We’re committed to delivering not just relief, but a luxurious and restorative experience that elevates
                        your well-being. At Ocean Green Massage, your comfort, care, and satisfaction are always our priority.</p> 
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
                    <img src="/massage_room4.jpg" alt="expertise-image" className="rounded-md w-full max-w-6xl mx-auto" />
                </div>

                <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-20 max-w-6xl mx-auto text-center">
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">16</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Experts</p>
                    </div>
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">100+</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Happy Clients</p>
                    </div>
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">7</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Offers</p>
                    </div>
                    <div className="px-4 sm:px-6 md:px-10">
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#205C4A] py-2">10+</h1>
                        <p className="uppercase text-sm sm:text-base text-gray-700">Private Rooms</p>
                    </div>
                </div>
            </div>
            {/*
            <div className="flex flex-col items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 mb-[100px]">
                <div className="flex flex-col items-center text-center py-4 max-w-4xl">
                    <div className="bg-[#205C4A] w-[50px] h-[2px] mb-2"></div>
                    <h1 className="text-[#205C4A] font-serif font-semibold text-2xl md:text-4xl py-3.5">
                    Meet the Owner
                    </h1>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-6xl w-full gap-8 mt-8">
                    <div className="w-full lg:w-1/2 text-gray-600 text-base md:text-lg text-justify">
                        <p>
                            Ocean Green Massage is proudly operated by Mr. Clint Henry, a licensed Physical Therapist and Registered Nurse.
                            With a strong background in healthcare and wellness, Mr. Henry not only manages the spa but also plays an active
                            role in overseeing daily operations. In addition to his medical credentials, he is a trained and licensed Massage
                            Therapist who personally supervises and mentors the team to ensure the highest standards of care and service.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <img
                            src="/four-season.webp"
                            alt="owner image"
                            className="w-full h-auto rounded-md shadow-md object-cover"
                        />
                    </div>
                </div>
            </div>
            */}
            <Testimony/>
            <Footer/>
        </>
    );
}

export default About