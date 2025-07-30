import ErrorBoundary from '../components/ErrorBoundary.jsx';
import Header from '../components/Header.jsx';
import Home_Contact from '../sections/Home_Contact.jsx';
import Footer from '../components/Footer.jsx';

function Contact() {
  return (
    <>
      <Header />
      <div className="bg-[#CDA78E] min-h-screen flex justify-center items-center text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-center">
            <h5 className="text-md font-bold font-serif mb-4 uppercase">Get in touch</h5>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif leading-tight mb-6">
                Contact us
            </h1>
        </div>
      </div>

      <Home_Contact />

      <div className="h-[100vh] flex justify-center">
        <ErrorBoundary>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125626.31423041529!2d123.9222655650462!3d10.275896055477476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999fed973c41b%3A0x1ae9af03b1a02e2c!2sLapu-Lapu%2C%20Cebu!5e0!3m2!1sen!2sph!4v1753864835196!5m2!1sen!2sph"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ocean Green Massage Location"
            />
        </ErrorBoundary>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
