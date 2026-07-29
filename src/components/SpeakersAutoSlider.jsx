import { useEffect, useRef } from "react";
import speakers from "../data/speakers.json"; // path adjust करा

export default function SpeakersAutoSlider() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let scrollAmount = 0;
        const step = 220;

        const interval = setInterval(() => {
            scrollAmount += step;

            if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0;
            }

            slider.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#fbf2ee] py-14">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#0a2a66] mb-10">
                    Speakers at Jadhavar Yuva Sansad
                </h2>

                <div
                    ref={sliderRef}
                    className="flex gap-5 overflow-x-hidden scroll-smooth pb-4"
                >
                    {speakers.map((speaker) => (
                        <div
                            key={speaker.id}
                            className="min-w-[190px] md:min-w-[210px]"
                        >
                            <div className="bg-white rounded-md overflow-hidden shadow-sm">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-[210px] object-cover object-top"
                                    loading="lazy"
                                />
                                <div className="p-3 text-center">
                                    <h3 className="text-[14px] font-semibold text-[#0a2a66]">
                                        {speaker.name}
                                    </h3>
                                    <p className="text-[12px] text-gray-600 mt-1">
                                        {speaker.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
