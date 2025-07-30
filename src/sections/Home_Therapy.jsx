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
                        title="Traditional Massage"
                        description="Traditional massage is a healing practice rooted in age-old methods, combining deep pressure, stretching, and rhythmic motions to ease muscle tension, enhance blood flow, and rebalance the body. It supports physical recovery while soothing the mind and helping you reconnect with your body’s natural flow." 
                        price="Starting from PHP. 350 - 1hr"
                    />
                    <Therapy_Cards 
                        number="02" 
                        title="Head Massage"
                        description="Head massage is a relaxing and therapeutic technique that focuses on the scalp, neck, and shoulders. It helps relieve stress, reduce tension headaches, stimulate blood circulation, and promote relaxation. By targeting pressure points and improving energy flow, head massage can also enhance mental clarity and support overall well-being."
                        price="Starting from PHP. 450 - 1hr"
                    />
                    <Therapy_Cards 
                        number="03" 
                        title="Thai Massage"
                        description="Thai massage is a traditional healing system that combines acupressure, assisted yoga stretches, and deep rhythmic compressions to release tension, increase flexibility, and restore the body’s energy flow. Performed fully clothed on a mat, it promotes physical alignment, mental clarity, and a deep sense of renewal." 
                        price="Starting from PHP. 350 - 1hr"
                    />
                    <Therapy_Cards 
                        number="04" 
                        title="Stone Massage"
                        description="Stone massage is a soothing therapy that uses smooth, heated stones placed on key points of the body or used in gentle strokes. The warmth of the stones helps relax muscles, improve circulation, and ease tension more deeply than traditional massage alone. This treatment promotes both physical and emotional relaxation, making it ideal for relieving stress and restoring balance." 
                        price="Starting from PHP. 600 - 1hr"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home_Therapy;
