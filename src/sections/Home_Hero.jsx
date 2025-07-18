import { Link } from 'react-router-dom';

function Home_Hero() {

  return (
    <section className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/hero.jpg')] bg-cover bg-center min-h-screen flex items-center text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl text-left">
            <h6 className="text-md font-bold font-serif uppercase">
              Welcome to Ocean Green Massage
            </h6>
            <p className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-serif leading-tight mb-6">
              Rejunevated <br className="hidden sm:block" /> Body & Soul
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6">
              Relax your body, calm your mind, and renew your <br /> spirit with
              treatments tailored for your total well-being.
            </p>
          <Link to="/contact"className="uppercase text-black px-6 py-2 text-[16px] sm:text-[18px] bg-white hover:bg-[#205C4A] hover:text-white duration-200">
              call an appointment  ➔
          </Link> 
        </div>
    </section>

  );
}

export default Home_Hero;
