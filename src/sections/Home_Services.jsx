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
                        title="Thai Massage"
                        description="Thai massage is a traditional healing system that combines acupressure, assisted yoga stretches, and deep rhythmic compressions to release tension, increase flexibility, and restore the body’s energy flow. Performed fully clothed on a mat, it promotes physical alignment, mental clarity, and a deep sense of renewal."
                    />
                    <hr className='bg-gray-300'/>
                    <Treatment_Item
                        number="2"
                        title="Traditional Massage"
                        description="Traditional massage is a healing practice rooted in age-old methods, combining deep pressure, stretching, and rhythmic motions to ease muscle tension, enhance blood flow, and rebalance the body. It supports physical recovery while soothing the mind and helping you reconnect with your body’s natural flow."
                    />                      
                </div>
            </div>
        </section>
    );
}

export default Home_Services