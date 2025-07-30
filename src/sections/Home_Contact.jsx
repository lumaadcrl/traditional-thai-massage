import Contact_Infos from "../components/Contact_Infos";

function Home_Contact() {

    return (
        <section className="min-h-screen flex items-center px-6 py-12 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 w-full">
                <div className="flex-2">
                    <div className="flex flex-col">
                        <h6 className="text-md font-bold font-serif mb-4 text-[#205C4A]  uppercase tracking-widest">
                        What are you waiting for...
                        </h6>
                        <h1 className="font-bold font-serif text-[#205C4A]  text-3xl sm:text-4xl md:text-5xl leading-snug py-3">
                        Make an appointment
                        </h1>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Let your stress melt away and your energy return. Book your massage today and experience the care your body has been craving.
                        </p>
                    </div>
                    <div className="py-6">
                        <Contact_Infos 
                        icon="bx bx-map"
                        title="Our Location"
                        description="Cebu City, 6000 Cebu, Lapu-Lapu City"
                        />
                        <hr className="text-gray-300 my-4" />
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Contact_Infos 
                                icon="bx bxs-hourglass"
                                title="Opening Hours"
                                description="24hrs: Sunday - Saturday"
                            />
                            <Contact_Infos 
                                icon="bx bxs-store"
                                title="Contact"
                                description="Phone: 0927-123-4567"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center sm:flex">
                        <div className="space-y-6">
                            <p className="flex items-center gap-3">
                                <a href="#" className="bx bxl-facebook text-[#205C4A]  border-2 border-[#205C4A] p-2 rounded-md text-2xl"></a>
                                <span className="text-lg font-medium text-gray-700">Contact us on Facebook</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <a href="#" className="bx bxl-instagram text-[#205C4A]  border-2 border-[#205C4A] p-2 rounded-md text-2xl"></a>
                                <span className="text-lg font-medium text-gray-700">Follow us on Instagram</span>
                            </p>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Home_Contact;
