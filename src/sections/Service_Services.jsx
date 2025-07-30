import Service_Card from "./Service_ServiceCard.jsx";

function Service_Services(){

    return(
        <section className="mt-[100px]">
            <div className="px-4 py-16 sm:px-6 lg:px-16">
                <div className="flex flex-col items-center text-center mb-[100px]">
                    <div className='bg-[#205C4A] w-[100px] h-[2px] my-4'></div>
                    <h6 className="uppercase font-serif text-sm tracking-wider py-2 text-[#205C4A]">have a look at our</h6>
                    <h1 className="font-serif font-bold text-3xl sm:text-4xl py-2.5 text-[#205C4A]">Massage Therapy Center</h1>
                    <p className="text-gray-600 font-sans sm:text-base max-w-xl">
                        Browse through our range of massages designed to help you relax, recharge,
                        and restore balance. Whether you're looking to ease tension, improve circulation,
                        or simply unwind, we have a treatment tailored for you. Take a break that truly matters, feel lighter, 
                        calmer, and more energized with every session.
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
                        title="Traditional Massage"
                        description="Traditional massage is a healing practice rooted in age-old methods, combining deep pressure, stretching, and rhythmic motions to ease muscle tension, enhance blood flow, and rebalance the body. It supports physical recovery while soothing the mind and helping you reconnect with your body’s natural flow."
                        price="Starting at PHP 350 - 1hr"
                        />
                    </div>
                </div>

                {/* Aroma Massage (Text First on Mobile) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="order-2 md:order-1 md:w-1/2">
                        <Service_Card
                        title="Head Massage"
                        description="Head massage is a relaxing and therapeutic technique that focuses on the scalp, neck, and shoulders. It helps relieve stress, reduce tension headaches, stimulate blood circulation, and promote relaxation. By targeting pressure points and improving energy flow, head massage can also enhance mental clarity and support overall well-being."
                        price="Starting at PHP 450 - 1hr"
                        />
                    </div>
                    <div className="order-1 md:order-2 md:w-1/2">
                        <img
                        src="head-massage.jpg"
                        alt="head massage"
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
                        description="Stone massage is a soothing therapy that uses smooth, heated stones placed on key points of the body or used in gentle strokes. The warmth of the stones helps relax muscles, improve circulation, and ease tension more deeply than traditional massage alone. This treatment promotes both physical and emotional relaxation, making it ideal for relieving stress and restoring balance."
                        price="Starting at PHP 600 - 1hr"
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
                        src="/shiatsu-massage.jpg"
                        alt="shiatsu massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Service_Card
                        title="Shiatsu Massage"
                        description="Shiatsu massage is a traditional Japanese therapy that uses finger pressure, stretches, and joint manipulations to restore energy flow and balance within the body. Focused on specific pressure points along the body’s meridians, shiatsu helps relieve tension, reduce stress, and improve circulation. This holistic approach not only addresses physical discomfort but also supports overall mental and emotional well-being."
                        price="Starting at PHP 550 - 1hr"
                        />
                    </div>
                </div>

                {/* Ventosa Massage (Text First on Mobile) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="order-2 md:order-1 md:w-1/2">
                        <Service_Card
                        title="Neuromuscular Massage"
                        description="Neuromuscular massage is a specialized form of deep tissue therapy that targets the root causes of muscle pain by focusing on trigger points, nerve pathways, and muscular imbalances. Using precise pressure and techniques, it helps release chronic tension, improve blood flow, and correct postural issues. Ideal for those with persistent pain or injury, this therapy promotes long-term healing and restores optimal muscle function."
                        price="Starting at PHP 500 - 1hr"
                        />
                    </div>
                    <div className="order-1 md:order-2 md:w-1/2">
                        <img
                        src="/neuro-massage.jpg"
                        alt="neuromuscular massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                </div>

                {/* Four Season Massage (Image First) */}
                <div className="mt-[50px] flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="md:w-1/2">
                        <img
                        src="/foot-massage.jpg"
                        alt="foot massage"
                        className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <Service_Card
                        title="Foot Massage"
                        description="Foot massage is a relaxing and therapeutic treatment that focuses on the feet to relieve tension, improve circulation, and promote overall well-being. By applying pressure to specific points, it can help reduce stress, ease fatigue, and support better balance throughout the body. Whether for pure relaxation or targeted relief, foot massage offers a soothing escape that revitalizes both body and mind."
                        price="Starting at PHP 300 - 1hr"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service_Services