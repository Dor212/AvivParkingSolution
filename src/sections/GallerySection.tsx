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

const ACCENT = "#1A2A80" as const;
const TEXT = "#1F2937" as const;

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

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % SHOTS.length);
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + SHOTS.length) % SHOTS.length);
    };

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
            if (deltaX > 0) {
                goNext();
            } else {
                goPrev();
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section id={id} dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    className="mb-6 md:mb-8 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h2
                        className="text-xl md:text-2xl font-semibold mb-3"
                        style={{ color: ACCENT }}
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
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                        <motion.div
                            className="h-[3px] w-32 md:w-40 rounded-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(91,74,232,0), rgba(91,74,232,0.95), rgba(91,74,232,0))",
                                backgroundSize: "200% 100%",
                            }}
                            animate={{
                                backgroundPositionX: ["0%", "100%", "0%"],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                    </motion.div>

                    <motion.p
                        className="mt-1 text-sm md:text-base max-w-2xl mx-auto"
                        style={{ color: TEXT }}
                        variants={fadeUp}
                        custom={2}
                    >
                        צילומים אמיתיים מהאתרים שאנחנו מתחזקים: מכפילי חניה, מתקנים טמונים, מתקנים חיצוניים
                        ומערכות מורכבות. התחזוקה שלנו מתמקדת בפרטים הקטנים – כדי שאתם לא תצטרכו לחשוב על זה בכלל.
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
                                    "radial-gradient(circle at 50% 0%, rgba(91,74,232,0.35), transparent 60%)",
                                opacity: 0.9,
                            }}
                        />

                        <div className="absolute inset-0">
                            {SHOTS.map((shot, index) => {
                                const total = SHOTS.length;
                                const relative =
                                    (index - activeIndex + total) % total;

                                if (relative !== 0 && relative !== 1 && relative !== total - 1) {
                                    return null;
                                }

                                const isActive = relative === 0;
                                const isNext = relative === 1;
                                const isPrev = relative === total - 1;

                                let x = 0;
                                let y = 0;
                                let scale = 1;
                                let rotate = 0;
                                let opacity = 1;
                                let zIndex = 30;

                                if (isActive) {
                                    x = 0;
                                    y = 0;
                                    scale = 1;
                                    rotate = 0;
                                    opacity = 1;
                                    zIndex = 30;
                                } else if (isNext) {
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
                                        transition={{
                                            duration: 0.6,
                                            ease: easeCurve,
                                        }}
                                        whileHover={
                                            isActive
                                                ? {
                                                    y: -4,
                                                    transition: {
                                                        duration: 0.25,
                                                    },
                                                }
                                                : undefined
                                        }
                                    >
                                        <div
                                            className="w-full h-full rounded-[1.75rem] overflow-hidden bg-white/90 border shadow-[0_22px_45px_rgba(15,23,42,0.32)]"
                                            style={{
                                                borderColor: isActive
                                                    ? "rgba(91,74,232,0.9)"
                                                    : "rgba(148,163,184,0.9)",
                                                boxShadow: isActive
                                                    ? "0 0 32px rgba(91,74,232,0.7), 0 22px 45px rgba(15,23,42,0.35)"
                                                    : "0 18px 36px rgba(15,23,42,0.28)",
                                            }}
                                        >
                                            <div className="relative w-full h-full">
                                                <img
                                                    src={shot.imageSrc}
                                                    alt={shot.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
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
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85 border border-brand-soft/70 text-sm shadow-md hover:bg-white hover:shadow-lg transition"
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
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85 border border-brand-soft/70 text-sm shadow-md hover:bg-white hover:shadow-lg transition"
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
                        className="text-center max-w-xl"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        custom={4}
                        key={activeShot.id}
                    >
                        <p className="text-[0.8rem] md:text-xs font-semibold text-brand-muted mb-1.5">
                            {activeShot.title}
                        </p>
                        <h3
                            className="text-sm md:text-base font-semibold mb-1.5"
                            style={{ color: ACCENT }}
                        >
                            {activeShot.subtitle}
                        </h3>
                        <p className="text-xs md:text-[0.95rem] leading-relaxed text-slate-800">
                            {activeShot.description}
                        </p>

                        <div className="mt-3 flex items-center justify-center gap-2">
                            {SHOTS.map((shot, index) => (
                                <button
                                    key={shot.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className="relative h-1.5 w-4 rounded-full overflow-hidden bg-slate-200"
                                >
                                    <span
                                        className={`absolute inset-y-0 rounded-full transition-all ${index === activeIndex
                                                ? "right-0 w-full bg-gradient-to-l from-brand-dark via-brand-soft to-brand"
                                                : "right-1/2 w-0 bg-brand-soft"
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
