import Therapy_Cards from "../components/Therapy_Cards";

function Home_Therapy() {
    return (
        <section className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/therapy_bg.png')] bg-cover bg-center min-h-screen mt-[100px]">
            <div className="text-white px-4 py-16 sm:px-6 lg:px-16">
                <div className="flex flex-col items-center text-center mb-10">
                    <h6 className="uppercase font-serif text-sm tracking-wider py-2">have a look at our</h6>
                    <h1 className="font-serif font-bold text-3xl sm:text-4xl py-2.5">Massage Therapy Center</h1>
                    <p className="font-sans text-sm sm:text-base max-w-xl">
                        Take a break that matters. Our massages help you feel lighter, calmer, and more energized.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Therapy_Cards 
                        number="01" 
                        title="Tradition Massage"
                        description="Traditional massage is a therapeutic practice that uses time-honored techniques such as deep pressure, stretching, and rhythmic movements to relieve muscle tension, improve circulation, and restore the body’s natural balance. It promotes physical healing while calming the mind and reconnecting you with your body’s natural rhythm." 
                        price="Starting from PHP. 300 - 1hr"
                    />
                    <Therapy_Cards 
                        number="02" 
                        title="Aroma Massage"
                        description="Aroma massage combines gentle massage techniques with the healing power of essential oils to calm the mind, relax the body, and uplift the spirit. Each session is tailored with specific scents to relieve stress, enhance mood, and promote overall well-being through the therapeutic benefits of touch and aroma."
                        price="Starting from PHP. 400 - 1hr"
                    />
                    <Therapy_Cards 
                        number="03" 
                        title="Thai Massage"
                        description="Thai massage is a traditional healing system that combines acupressure, assisted yoga stretches, and deep rhythmic compressions to release tension, increase flexibility, and restore the body’s energy flow. Performed fully clothed on a mat, it promotes physical alignment, mental clarity, and a deep sense of renewal." 
                        price="Starting from PHP. 350 - 1hr"
                    />
                    <Therapy_Cards 
                        number="04" 
                        title="Stone & Herbal Massage"
                        description="Stone and Herbal Massage blends the soothing warmth of heated stones with the healing properties of natural herbal compresses. This deeply therapeutic treatment melts away muscle tension, improves circulation, and infuses the body with calming herbal essences — promoting total relaxation, detoxification, and inner balance." 
                        price="Starting from PHP. 500 - 1hr"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home_Therapy;
