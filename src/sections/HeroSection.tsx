import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "972500000000";

const HeroSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const wasInViewRef = useRef(false);
    const [logoAnimKey, setLogoAnimKey] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (typeof window === "undefined") return;
            if (window.scrollY > 10) setHasScrolled(true);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!wasInViewRef.current && hasScrolled) setLogoAnimKey((k) => k + 1);
                    wasInViewRef.current = true;
                } else {
                    wasInViewRef.current = false;
                }
            },
            { threshold: 0.35, rootMargin: "0px 0px -15% 0px" }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [hasScrolled]);

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "שלום, אשמח לקבל פרטים לגבי תחזוקה שוטפת או טיפול חד-פעמי למתקן החניה."
    )}`;

    return (
        <section ref={sectionRef} className="relative py-10 overflow-hidden md:py-14">
            <style>
                {`
          @keyframes logoRiseNatural {
            0% { opacity: 0; transform: translate3d(0, 38px, 0) scale(0.992); filter: blur(3px); }
            55% { opacity: 1; transform: translate3d(0, -3px, 0) scale(1); filter: blur(0); }
            100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
          }
          @keyframes cardIn {
            0% { opacity: 0; transform: translate3d(0, 10px, 0); }
            100% { opacity: 1; transform: translate3d(0, 0, 0); }
          }
        `}
            </style>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_18%,rgba(233,211,126,0.10),rgba(0,0,0,0)_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_20%_85%,rgba(204,204,204,0.07),rgba(0,0,0,0)_60%)]" />
            </div>

            <div className="relative max-w-6xl px-4 mx-auto">
                <div className="grid items-center gap-10 justify-items-center md:gap-16 md:grid-cols-2">
                    <div className="flex justify-center order-2 w-full md:order-1">
                        <div
                            className="relative w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/7 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.22)]"
                            style={{ animation: "cardIn 520ms ease-out both" }}
                        >
                            <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(184,130,72,0),#b88248,#e9ba6c,#e9d37e,#b88248,rgba(184,130,72,0))] opacity-70" />
                            <div className="px-4 py-4 text-center md:px-6 md:py-5">
                                <p className="mb-1.5 text-xs md:text-sm font-medium text-white/75">
                                    אביב פתרונות חניה
                                    <span className="mx-2 opacity-40">•</span>
                                    תחזוקה ותיקון מתקנים
                                </p>

                                <h1 className="mb-2 text-2xl md:text-[2.15rem] font-semibold leading-[1.05] text-white">
                                    תחזוקה למתקני
                                    <br />
                                    <span className="bg-[linear-gradient(90deg,#b88248,#e9ba6c,#e9d37e,#b88248)] bg-clip-text text-transparent">
                                        חניה בלי כאב ראש
                                    </span>
                                </h1>

                                <p className="mb-3.5 text-sm md:text-[0.98rem] leading-[1.48] text-white/80">
                                    טיפול מהיר, עבודה נקייה, ועדכון מסודר בסוף.
                                    <br className="hidden md:block" />
                                    מתאים לבניינים, משרדים וחניונים פרטיים.
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {["מענה מהיר", "שקיפות", "עמידה בתקנים"].map((t) => (
                                        <span
                                            key={t}
                                            className="inline-flex items-center rounded-full px-3 py-1 text-[0.82rem] border border-white/12 bg-white/7 text-white/85"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3 rounded-2xl text-[0.95rem] font-semibold text-[#1e1f24] shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition hover:shadow-[0_18px_40px_rgba(0,0,0,0.32)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                                        style={{
                                            background: "linear-gradient(90deg,#b88248,#e9ba6c,#e9d37e,#b88248)",
                                        }}
                                    >
                                        <FaWhatsapp className="text-lg" />
                                        <span>דברו איתי בוואטסאפ</span>
                                    </a>

                                    <p className="text-[0.78rem] md:text-xs text-white/65">
                                        הודעה קצרה, חוזרים אליכם עם פתרון.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center order-1 w-full md:order-2">
                        <div className="w-full max-w-[520px] md:max-w-[560px]">
                            <img
                                key={logoAnimKey}
                                src="/LOGOUri2.png"
                                alt="אביב פתרונות חניה"
                                draggable={false}
                                className="w-full h-auto select-none drop-shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
                                style={{
                                    animation:
                                        hasScrolled && logoAnimKey > 0
                                            ? "logoRiseNatural 900ms cubic-bezier(.18,.9,.22,1) both"
                                            : undefined,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
