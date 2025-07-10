import Service_Card from "./Service_Card";

function Service_Services(){

    return(
        <section className="mt-[100px]">
            <div className="px-4 py-16 sm:px-6 lg:px-16">
                <div className="flex flex-col items-center text-center mb-[100px]">
                    <div className='bg-[#205C4A] w-[100px] h-[2px] my-4'></div>
                    <h6 className="uppercase font-serif text-sm tracking-wider py-2 text-[#205C4A]">have a look at our</h6>
                    <h1 className="font-serif font-bold text-3xl sm:text-4xl py-2.5 text-[#205C4A]">Massage Therapy Center</h1>
                    <p className="font-sans text-sm sm:text-base max-w-xl">
                        Take a break that matters. Our massages help you feel lighter, calmer, and more energized.
                    </p>
                </div>
                {/* Body Massage (Image First on Mobile) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="md:w-1/2">
                        <img
                        src="/body-massage.webp"
                        alt="body massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Service_Card
                        title="Tradition Massage"
                        description="Traditional massage is a therapeutic practice that uses time-honored techniques such as deep pressure, stretching, and rhythmic movements to relieve muscle tension, improve circulation, and restore the body’s natural balance. It promotes physical healing while calming the mind and reconnecting you with your body’s natural rhythm."
                        price="Starting at PHP 300 - 1hr"
                        />
                    </div>
                </div>

                {/* Aroma Massage (Text First on Mobile) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="order-2 md:order-1 md:w-1/2">
                        <Service_Card
                        title="Aroma Massage"
                        description="Aroma therapy is the art of using natural essential oils to calm the mind, ease the body, and lift the spirit. Through gentle inhalation and massage, each session brings you deep relaxation and holistic healing."
                        price="Starting at PHP 400 - 1hr"
                        />
                    </div>
                    <div className="order-1 md:order-2 md:w-1/2">
                        <img
                        src="aroma-massage.jpg"
                        alt="aroma massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>

                {/* Thai Massage (Image First) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="md:w-1/2">
                        <img
                        src="/thai-massage.jpg"
                        alt="thai massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Service_Card
                        title="Thai Massage"
                        description="Thai massage is a traditional healing system that combines acupressure, assisted yoga stretches, and deep rhythmic compressions to release tension, increase flexibility, and restore the body’s energy flow. Performed fully clothed on a mat, it promotes physical alignment, mental clarity, and a deep sense of renewal."
                        price="Starting at PHP 350 - 1hr"
                        />
                    </div>
                </div>

                {/* Stone Massage (Text First on Mobile) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="order-2 md:order-1 md:w-1/2">
                        <Service_Card
                        title="Stone Massage"
                        description="Stone massage is a deeply relaxing therapy that uses smooth, heated stones to ease muscle tension, improve circulation, and calm the nervous system. The warmth of the stones penetrates deep into the muscles, allowing for a more effective and soothing massage experience that promotes total body and mind relaxation."
                        price="Starting at PHP 500 - 1hr"
                        />
                    </div>
                    <div className="order-1 md:order-2 md:w-1/2">
                        <img
                        src="/stone-massage.webp"
                        alt="stone massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>

                {/* Herbal Massage (Image First) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="md:w-1/2">
                        <img
                        src="/herbal-massage.jpg"
                        alt="herbal massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Service_Card
                        title="Herbal Massage"
                        description="Herbal massage is a traditional healing therapy that uses warm herbal compresses filled with natural ingredients such as lemongrass, ginger, and turmeric. The heat and herbal properties work together to relieve muscle tension, reduce inflammation, and promote deep relaxation, while the soothing aroma calms the mind and rejuvenates the body."
                        price="Starting at PHP 500 - 1hr"
                        />
                    </div>
                </div>

                {/* Ventosa Massage (Text First on Mobile) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="order-2 md:order-1 md:w-1/2">
                        <Service_Card
                        title="Ventosa Massage"
                        description="Ventosa, also known as cupping therapy, is an ancient healing technique that uses suction cups to stimulate blood flow, release muscle tension, and remove toxins from the body. This therapy promotes natural healing, reduces pain, and restores balance by drawing out deep-seated tension and improving energy circulation."
                        price="Starting at PHP 500 - 1hr"
                        />
                    </div>
                    <div className="order-1 md:order-2 md:w-1/2">
                        <img
                        src="/ventosa.jpg"
                        alt="ventosa massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>

                {/* Four Season Massage (Image First) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="md:w-1/2">
                        <img
                        src="/four-season.webp"
                        alt="four season massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Service_Card
                        title="Four Season Massage"
                        description="The Four Seasons Massage is a signature therapy inspired by the changing elements of nature. Each treatment is tailored to reflect the energy and needs of the seasons — from the refreshing renewal of spring to the deep relaxation of winter. Using seasonal oils, techniques, and rhythms, this massage nurtures your body, calms your mind, and restores inner balance all year round."
                        price="Starting at PHP 600 - 1hr"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service_Services