import App_btn from '../buttons/Appointment_Btn.jsx'

function Home_Appointment(){

    return(
        <section className="flex flex-col items-center mt-[100px] px-26 sm:px-8">
            <div className='flex flex-col items-center text-center'>
                <h6 className='font-bold font-serif text-[#205C4A] uppercase py-3 sm:text-sm'>appointment</h6>
                <h1 className='font-bold font-serif text-[#205C4A] text-2xl sm:text-5xl md:text-5xl leading-snug py-3'>Want to Make booking or <br /> have a queston?</h1>
                <p className='text-sm sm:text-base md:text-sm mb-6'>Call us on 0927-116-781 or simply call an appointment.</p>
                <App_btn name="call an appointment"/>
            </div>
        </section>
    );
}

export default Home_Appointment