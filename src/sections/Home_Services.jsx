import { Link } from 'react-router-dom';
import Treatment_Item from '../components/Treatment_Items.jsx'

function Home_Services(){

    return(
        <section className="mt-[100px] py-16 px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                    <h2 className="font-bold font-serif text-[#205C4A] text-2xl sm:text-3xl md:text-5xl leading-snug py-3">
                        The best of our services
                    </h2>
                    <p className="text-gray-600 py-6 font-sans">
                        Discover our signature treatments designed to relax your body, ease your mind, and restore your natural balance. 
                        From full-body therapy to targeted relief, we offer the care your wellness deserves.
                    </p>
                    <Link to="/contact" className="flex gap-3.5 w-fit items-center uppercase font-bold bg-[#205C4A] text-white px-8 py-4 duration-200 tracking-wider text-sm">
                        call now
                        <i class='bx bx-right-arrow-alt text-2xl'></i>
                    </Link>
                </div>

                <div className="lg:col-span-1">
                    <img
                        src="/service-img.webp"
                        alt="Massage"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>
                <div className="lg:col-span-1 bg-[#f1f8f6] rounded-lg p-6 mb-4 shadow-sm text-gray-600">
                    <Treatment_Item
                        number="1"
                        title="Four Seasons"
                        description="Reconnect with yourself and the world around you through this immersive experience. The Four Seasons Massage 
                        harmonizes body and mind with techniques that change just as nature does — calming, revitalizing, and deeply restorative."
                    />
                    <hr className='bg-gray-300'/>
                    <Treatment_Item
                        number="2"
                        title="Aroma Therapy"
                        description="Aroma therapy is the art of using natural essential oils to calm the mind, ease the body, and lift the spirit. 
                        Through gentle inhalation and massage, each session brings you deep relaxation and holistic healing."
                    />                      
                </div>
            </div>
        </section>
    );
}

export default Home_Services