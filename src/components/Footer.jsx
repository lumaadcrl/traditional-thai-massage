import { Link } from 'react-router-dom';

function Footer(){

    return(
        <footer className="bg-[#205C4A]">
            <div className="p-6 text-white max-w-7xl mx-auto">
                <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                    <div className="md:w-1/4">
                        <Link to="/home">
                           <img src="/new-logo.png" alt="logo"  className='w-[80px]'/>
                        </Link>
                        <p>Relax your body, calm your mind, and renew your
                        spirit with treatments tailored for your total well-being.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-semibold py-2.5">Services</h3>
                        <p className="py-1">Traditional Massage</p>
                        <p className="py-1">Head Massage</p>
                        <p className="py-1">Thai Massage</p>
                        <p className="py-1">Stone Massage</p>
                        <p className="py-1">Shiatsu Massage</p>
                        <p className="py-1">Neuromuscular Massage</p>
                        <p className="py-1">Foot Massage</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-serif font-semibold py-2.5">About</h3>
                        <Link to="/about" className="py-1">Our Story</Link>
                        <Link to="/services" className="py-1">Pricing</Link>
                        <Link to="/contact" className="py-1">Contact Us</Link>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-semibold py-2.5">Get in touch</h3>
                        <p className="py-1">Cebu City, 6000 Cebu</p>
                        <p className="py-1">Cebu, Lapu-Lapu City</p>
                        <p className="py-1">0927-123-4567</p>
                        <p className="py-1">example@gmail.com</p>
                    </div>
                </div>
                <hr className="mt-6 mb-6"/>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="mb-3 md:mb-0">
                        <p>Copyright @ {new Date().getFullYear()} Spa Massage Website Template.</p>
                    </div>
                    <div>
                        <a href="#" className="bx bxl-instagram px-2.5"></a>
                        <a href="#" className="bx bxl-facebook px-2.5"></a>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer