import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type GallerySectionProps = {
    id?: string;
    className?: string;
};

type Shot = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
};

const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;
/* 
const BLACK_1 = "#1e1f24" as const;
const BLACK_2 = "#6e6c6d" as const;
const BLACK_3 = "#1e1f24" as const; */

const SILVER = "#cfd2d6" as const;

const TEXT = "rgba(255,255,255,0.78)" as const;

const easeCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.12 * i,
            ease: easeCurve,
        },
    }),
};

const SHOTS: Shot[] = [
    {
        id: "mechanical-exterior",
        title: "מכפילי חניה חיצוניים",
        subtitle: "בדיקת שרשראות ומתיחת מתקן מכני חיצוני",
        description:
            "בדיקת שרשראות, מתיחה וכיוון במתקן חניה מכני חיצוני, לפני שמחזירים אותו לעבודה יומיומית.",
        imageSrc: `${import.meta.env.BASE_URL}images/gallery/chain-check.jpg`,
    },
    {
        id: "embedded-building",
        title: "מתקנים טמונים בבנייני מגורים",
        subtitle: "טיפול שוטף במתקן טמון",
        description:
            "בדיקות שמן, אטמים ותעלות ניקוז במתקן טמון, יחד עם בדיקות בטיחות תקופתיות למערכת ההרמה והבקרה.",
        imageSrc: `${import.meta.env.BASE_URL}images/gallery/embedded-service.jpg`,
    },
    {
        id: "leveling-anchors",
        title: "כיוון מפלסים ועיגונים",
        subtitle: "כיוון מפלסים והידוק עיגונים",
        description:
            "כיוון מפלסים, בדיקת עיגונים ומנגנוני נעילה במכפילי חניה, כדי למנוע רעידות ושחיקה מואצת.",
        imageSrc: `${import.meta.env.BASE_URL}images/gallery/leveling.jpg`,
    },
    {
        id: "complex-system",
        title: "מערכות חניה מורכבות",
        subtitle: "תחזוקה למערכות מורכבות",
        description:
            "טיפול בחיישנים, לוחות בקרה וממשקי הנעה במערכות חניה מורכבות, עם דגש על עבודה רציפה וללא השבתות.",
        imageSrc: `${import.meta.env.BASE_URL}images/gallery/complex-system.jpg`,
    },
];

export default function GallerySection({
    id = "gallery",
    className = "",
}: GallerySectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SHOTS.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const activeShot = SHOTS[activeIndex];

    const goNext = () => setActiveIndex((prev) => (prev + 1) % SHOTS.length);
    const goPrev = () => setActiveIndex((prev) => (prev - 1 + SHOTS.length) % SHOTS.length);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = null;
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current == null || touchEndX.current == null) return;
        const deltaX = touchStartX.current - touchEndX.current;
        const threshold = 40;
        if (Math.abs(deltaX) > threshold) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            deltaX > 0 ? goNext() : goPrev();
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section id={id} dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl px-4 mx-auto">
                <motion.div
                    className="mb-6 text-center md:mb-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h2
                        className="mb-3 text-xl font-semibold md:text-2xl"
                        style={{ color: SILVER }}
                        variants={fadeUp}
                        custom={0}
                    >
                        מהשטח – מתקנים שאנחנו מלווים
                    </motion.h2>

                    <motion.div
                        className="flex items-center justify-center gap-2 mb-2"
                        variants={fadeUp}
                        custom={1}
                    >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.45)" }} />
                        <motion.div
                            className="h-[3px] w-32 md:w-40 rounded-full"
                            style={{
                                backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                                backgroundSize: "200% 100%",
                                opacity: 0.9,
                            }}
                            animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.45)" }} />
                    </motion.div>

                    <motion.p
                        className="max-w-2xl mx-auto mt-1 text-sm md:text-base"
                        style={{ color: TEXT }}
                        variants={fadeUp}
                        custom={2}
                    >
                        צילומים אמיתיים מהאתרים שאנחנו מתחזקים: מכפילי חניה, מתקנים טמונים, מתקנים חיצוניים ומערכות מורכבות. התחזוקה
                        שלנו מתמקדת בפרטים הקטנים – כדי שאתם לא תצטרכו לחשוב על זה בכלל.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center gap-5 md:gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeUp}
                    custom={3}
                >
                    <div
                        className="relative w-full max-w-xl aspect-[4/3]"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="pointer-events-none absolute inset-0 rounded-[2rem]"
                            style={{
                                background:
                                    `radial-gradient(circle at 50% 0%, rgba(233,211,126,0.22), rgba(207,210,214,0.10), transparent 62%)`,
                                opacity: 0.95,
                            }}
                        />

                        <div
                            className="absolute pointer-events-none -inset-4 blur-2xl opacity-60"
                            style={{
                                backgroundImage: `radial-gradient(520px 280px at 50% 18%, rgba(233,211,126,0.18), rgba(0,0,0,0) 62%)`,
                            }}
                        />

                        <div className="absolute inset-0">
                            {SHOTS.map((shot, index) => {
                                const total = SHOTS.length;
                                const relative = (index - activeIndex + total) % total;

                                if (relative !== 0 && relative !== 1 && relative !== total - 1) return null;

                                const isActive = relative === 0;
                                const isNext = relative === 1;
                                const isPrev = relative === total - 1;

                                let x = 0;
                                let y = 0;
                                let scale = 1;
                                let rotate = 0;
                                let opacity = 1;
                                let zIndex = 30;

                                if (isNext) {
                                    x = -22;
                                    y = 18;
                                    scale = 0.94;
                                    rotate = -5;
                                    opacity = 0.75;
                                    zIndex = 20;
                                } else if (isPrev) {
                                    x = 22;
                                    y = 18;
                                    scale = 0.94;
                                    rotate = 5;
                                    opacity = 0.75;
                                    zIndex = 20;
                                }

                                return (
                                    <motion.div
                                        key={shot.id}
                                        className="absolute inset-0 flex items-center justify-center"
                                        style={{ zIndex }}
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity, scale, x, y, rotate }}
                                        transition={{ duration: 0.6, ease: easeCurve }}
                                        whileHover={
                                            isActive
                                                ? { y: -4, transition: { duration: 0.25 } }
                                                : undefined
                                        }
                                    >
                                        <div
                                            className="w-full h-full rounded-[1.75rem] overflow-hidden border backdrop-blur-sm"
                                            style={{
                                                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))`,
                                                borderColor: isActive
                                                    ? "rgba(233,211,126,0.55)"
                                                    : "rgba(207,210,214,0.22)",
                                                boxShadow: isActive
                                                    ? "0 0 36px rgba(233,211,126,0.22), 0 22px 45px rgba(0,0,0,0.40)"
                                                    : "0 18px 36px rgba(0,0,0,0.34)",
                                            }}
                                        >
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={shot.imageSrc}
                                                    alt={shot.title}
                                                    className="object-cover w-full h-full"
                                                    loading="lazy"
                                                />
                                                <div
                                                    className="absolute inset-0 pointer-events-none"
                                                    style={{
                                                        backgroundImage:
                                                            "linear-gradient(180deg, rgba(0,0,0,0.10), rgba(0,0,0,0.08), rgba(0,0,0,0.48))",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="absolute inset-0 flex items-center justify-between px-1.5 md:px-3">
                            <motion.button
                                type="button"
                                onClick={goNext}
                                className="flex items-center justify-center w-8 h-8 text-sm transition border rounded-full shadow-md backdrop-blur-md"
                                style={{
                                    borderColor: "rgba(233,211,126,0.38)",
                                    backgroundImage: `linear-gradient(180deg, rgba(30,31,36,0.35), rgba(30,31,36,0.18))`,
                                    color: "rgba(255,255,255,0.92)",
                                    boxShadow: "0 10px 22px rgba(0,0,0,0.35)",
                                }}
                                aria-label="תמונה הבאה"
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.35, ease: easeCurve }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ‹
                            </motion.button>

                            <motion.button
                                type="button"
                                onClick={goPrev}
                                className="flex items-center justify-center w-8 h-8 text-sm transition border rounded-full shadow-md backdrop-blur-md"
                                style={{
                                    borderColor: "rgba(233,211,126,0.38)",
                                    backgroundImage: `linear-gradient(180deg, rgba(30,31,36,0.35), rgba(30,31,36,0.18))`,
                                    color: "rgba(255,255,255,0.92)",
                                    boxShadow: "0 10px 22px rgba(0,0,0,0.35)",
                                }}
                                aria-label="תמונה קודמת"
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                viewport={{ once: false, amount: 0.6 }}
                                transition={{ duration: 0.35, ease: easeCurve }}
                                whileTap={{ scale: 0.9 }}
                            >
                                ›
                            </motion.button>
                        </div>
                    </div>

                    <motion.div
                        className="max-w-xl text-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        custom={4}
                        key={activeShot.id}
                    >
                        <p
                            className="text-[0.8rem] md:text-xs font-semibold mb-1.5"
                            style={{ color: "rgba(207,210,214,0.78)" }}
                        >
                            {activeShot.title}
                        </p>
                        <h3
                            className="text-sm md:text-base font-semibold mb-1.5"
                            style={{ color: SILVER }}
                        >
                            {activeShot.subtitle}
                        </h3>
                        <p
                            className="text-xs md:text-[0.95rem] leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.80)" }}
                        >
                            {activeShot.description}
                        </p>

                        <div className="flex items-center justify-center gap-2 mt-3">
                            {SHOTS.map((shot, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button
                                        key={shot.id}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className="relative h-1.5 w-4 rounded-full overflow-hidden"
                                        style={{ backgroundColor: "rgba(207,210,214,0.22)" }}
                                    >
                                        <span
                                            className="absolute inset-y-0 transition-all rounded-full"
                                            style={{
                                                right: isActive ? 0 : "50%",
                                                width: isActive ? "100%" : 0,
                                                backgroundImage: isActive
                                                    ? `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`
                                                    : `linear-gradient(90deg, rgba(233,211,126,0.55), rgba(233,211,126,0.0))`,
                                            }}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
