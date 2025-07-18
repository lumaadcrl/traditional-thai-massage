import Expertise_Card from "../components/Expertise_Card";

function Home_Expertise(){

    return(
        <>
            <div className="flex flex-col items-center mt-[100px] py-16 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="flex flex-col items-center text-center">
                    <h4 className="font-bold font-serif text-[#205C4A]  uppercase py-3">Expertise Areas</h4>
                    <h1 className="font-bold font-serif text-[#205C4A]  text-2xl sm:text-3xl md:text-5xl leading-snug py-3">Allow your body, mind and soul <br /> sense a haven of tranquility</h1>
                </div>
                <div className="py-7">
                    <img src="/massage_room4.jpg" alt="expertise-image" className="rounded-md w-full max-w-6xl mx-auto"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-600">
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
            </div>  
        </>
    );

}

export default Home_Expertise