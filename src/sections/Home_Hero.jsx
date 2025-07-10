import Button from '../buttons/Appointment_Btn.jsx'

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
            <Button/>
        </div>
    </section>

  );
}

export default Home_Hero;
