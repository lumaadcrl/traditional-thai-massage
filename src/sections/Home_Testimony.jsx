function Home_Testimony() {
    return (
        <section className="bg-[#E0F2F1] py-20 px-4 flex justify-center">
            <div className="max-w-3xl text-center text-[#004D40] flex flex-col items-center">
                <i className="bx bxs-quote-alt-left text-4xl md:text-5xl mb-4"></i>
                
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                    Nice place, affordable prices, not too crowded when I went. 
                    There was also a cute dog there when I visited. 
                    Went for a pedicure and was satisfied with the service. 
                    I actually went to Tina Hair, which is just right beside Tina Massage.
                </p>

                <div className="mt-8 flex flex-col items-center">
                    <img
                        src="/review-img.png"
                        alt="review-profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="mt-3 font-semibold uppercase tracking-wide text-sm">Dannea Moneva</p>
                    <p className="text-sm text-gray-700">Cebu City</p>
                </div>
            </div>
        </section>
    );
}

export default Home_Testimony;
