function Home_Testimony() {
    return (
        <section className="bg-[#E0F2F1] py-20 px-4 flex justify-center">
            <div className="max-w-3xl text-center text-[#004D40] flex flex-col items-center">
                <i className="bx bxs-quote-alt-left text-4xl md:text-5xl mb-4"></i>
                
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                    Clean and relaxing environment with reasonable prices. 
                    The place wasn’t crowded during my visit, making it a peaceful experience.
                    I went in for a massage and was pleased with the service and overall atmosphere. 
                    Conveniently located and a good option for some self-care time.
                </p>

                <div className="mt-8 flex flex-col items-center">
                    <img
                        src="/review-img.jpg"
                        alt="review-profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="mt-3 font-semibold uppercase tracking-wide text-sm">Allison Madison</p>
                    <p className="text-sm text-gray-700">Cebu City</p>
                </div>
            </div>
        </section>
    );
}

export default Home_Testimony;
