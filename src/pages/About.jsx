import Header from '../components/Header.jsx'
import TeamCards from '../components/TeamCards.jsx';
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
                            
                            <p className="text-lg md:text-sm leading-relaxed">
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
                    <div className='text-md'>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident 
                        cupiditate magnam inventore sapiente dolor temporibus amet
                         explicabo beatae quisquam architecto quo, a asperiores excepturi atque, 
                         numquam culpa. Eligendi, omnis adipisci?</p> 
                         <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident 
                        cupiditate magnam inventore sapiente dolor temporibus amet
                         explicabo beatae quisquam architecto quo, a asperiores excepturi atque, 
                         numquam culpa. Eligendi, omnis adipisci?</p>
                         <br />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident 
                        cupiditate magnam inventore sapiente dolor</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Expertise_Card
                    icon="/beauty_icon.png"
                    title="Beauty"
                    description="Reveal your radiance with personalized skincare and beauty treatments that nourish your skin and uplift your spirit."
                    />

                    <Expertise_Card 
                    icon="/wellness_icon.png" 
                    title="Wellness"
                    description="Promote balance, reduce stress, and support your overall well-being with massage treatments designed to restore both body and mind."/>
                    
                    <Expertise_Card
                    icon="/massage_icon.png"
                    title="Massage"
                    description="Release stress and tension through expert massage techniques that heal, relax, and revitalize."/>
                </div>
                <div className="py-7">
                    <img src="/massage_room4.jpg" alt="expertise-image" className="rounded-md w-full max-w-6xl mx-auto"/>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div className='px-20'>
                        <h1 className='font-bold text-4xl text-[#205C4A] py-4 sm:text-5x1'>24</h1>
                        <p className='uppercase'>Experts</p>
                    </div>
                    <div className='px-20'>
                        <h1 className='font-bold text-4xl text-[#205C4A] py-4 sm:text-5x1'>400+</h1>
                        <p className='uppercase'>Happy clients</p>
                    </div>
                    <div className='px-20'>
                        <h1 className='font-bold text-4xl text-[#205C4A] py-4 sm:text-5x1'>20+</h1>
                        <p className='uppercase'>offers</p>
                    </div>
                    <div className='px-20'>
                        <h1 className='font-bold text-4xl text-[#205C4A] py-4 sm:text-5x1'>15</h1>
                        <p className='uppercase'>private rooms</p>
                    </div>
                </div>
            </div>  
            <div className='flex flex-col items-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 mb-[100px]'>
                <div className='flex flex-col items-center text-center py-4'>
                    <div className='bg-[#205C4A] w-[50px] h-[2px]'></div>
                    <h1 className='text-[#205C4A] font-serif font-semibold md:text-4xl py-3.5'>Meet our team</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                     Inventore repellendus facilis,
                    omnis unde veritatis</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-6xl mx-auto'>
                    <TeamCards
                    img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    name="Therapist 1"
                    infos="This is where the therepist skills and experience are placed with."
                    />
                    <TeamCards
                    img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    name="Therapist 2"
                    infos="This is where the therepist skills and experience are placed with."
                    />
                    <TeamCards
                    img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    name="Therapist 3"
                    infos="This is where the therepist skills and experience are placed with."
                    />
                </div>
            </div>
            <Testimony/>
            <Footer/>
        </>
    );
}

export default About