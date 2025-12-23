import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type WhyMaintenanceSectionProps = {
    id?: string;
    className?: string;
};

type Reason = {
    title: string;
    lines: string[];
    iconSrc: string;
};

const ACCENT = "#1A2A80" as const;
const TEXT = "#1F2937" as const;

const easeCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
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

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.95 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.08 * i,
            ease: easeCurve,
        },
    }),
};

const REASONS: Reason[] = [
    {
        title: "בטיחות לפני הכול",
        lines: [
            "בלאי בשרשראות, בוכנות, ברגים ומערכות בקרה יכול להוביל למצב מסוכן.",
            "ירידות לא מבוקרות, תקיעה של רכב או סיכון לנפילת רכב ומטען.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/security-configuration.png`,
    },
    {
        title: "חובה לעמוד בתקנים",
        lines: [
            "מתקני חניה מכניים צריכים לעמוד בדרישות התקן הישראלי ת״י 5437 והנחיות משרד התחבורה לחניונים.",
            "תחזוקה מסודרת עם בודק מוסמך שומרת עליכם מול הרשויות, הביטוח וכל גורמי הפיקוח.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/list.png`,
    },
    {
        title: "מניעת תקלות יקרות",
        lines: [
            "טיפול יזום במערכת ההידראולית, בחשמל ובמנגנוני הנעילה זול משמעותית מתיקון חירום.",
            "תחזוקה נכונה מצמצמת קריסות, השבתות ותיקונים גדולים בזמן הכי לא מתאים.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/bank-building.png`,
    },
    {
        title: "שקט מדיירים ומשתמשים",
        lines: [
            "אף אחד לא אוהב להיתקע בשש בבוקר כשהוא ממהר לעבודה.",
            "תחזוקה נכונה מפחיתה עצבים, תלונות וטיפול במקרי קצה מול דיירים ומשתמשים.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/blue-heart.png`,
    },
    {
        title: "שמירה על ערך הנכס",
        lines: [
            "חניון עם מתקנים עובדים, מתוחזקים ומתועדים משפר את ערך הדירות והנכס כולו.",
            "קל יותר להשכיר, למכור ולנהל נכס שבו החניה עובדת כמו שצריך ומגובה בדוחות תחזוקה מסודרים.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/money-bag.png`,
    },
];

type ReasonCardProps = {
    reason: Reason;
    index: number;
    className?: string;
};

function ReasonCard({ reason, index, className = "" }: ReasonCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const isBottomRow = index >= 3;

    return (
        <motion.li
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className={`h-full flex justify-center ${isBottomRow ? "md:mt-4" : ""} ${className}`}
        >
            <motion.div
                className="rounded-3xl p-[1.5px]"
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, rgba(26,42,128,0.1), rgba(91,74,232,0.85), rgba(41,98,255,0.9), rgba(26,42,128,0.1))",
                    backgroundSize: "250% 250%",
                }}
                animate={{
                    backgroundPositionX: ["0%", "100%", "0%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    aria-expanded={isOpen}
                    className={`group relative w-[210px] md:w-[230px] min-h-[210px] rounded-[1.35rem] border bg-white/95 px-4 py-4 md:px-5 md:py-5 text-right flex flex-col items-center backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(15,23,42,0.28)] ${isOpen ? "opacity-100" : "opacity-80"
                        }`}
                    style={{
                        borderColor: "rgba(226,232,240,0.9)",
                        boxShadow:
                            "0 0 0 1px rgba(148,163,184,0.3), 0 16px 32px rgba(15,23,42,0.18)",
                    }}
                >
                    <div className="flex flex-col items-center text-center w-full flex-1 justify-center">
                        <div className="mb-3 flex items-center justify-center">
                            <img
                                src={reason.iconSrc}
                                alt={reason.title}
                                className="w-11 h-11 object-contain"
                                loading="lazy"
                            />
                        </div>

                        <h3
                            className="text-sm md:text-base font-semibold mb-1.5"
                            style={{ color: ACCENT }}
                        >
                            {reason.title}
                        </h3>

                        <div className="flex items-center justify-center gap-1.5 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-soft" />
                            <span className="w-8 h-[3px] rounded-full bg-gradient-to-r from-brand-dark via-brand-soft to-brand" />
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-soft" />
                        </div>

                        {!isOpen && (
                            <p className="mt-1 text-[0.75rem] text-brand-muted md:hidden animate-pulse">
                                לחצו עלי לפירוט
                            </p>
                        )}
                    </div>

                    <motion.div
                        initial={false}
                        animate={isOpen ? "open" : "collapsed"}
                        variants={{
                            open: { opacity: 1, height: "auto", marginTop: 8 },
                            collapsed: { opacity: 0, height: 0, marginTop: 0 },
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden w-full"
                    >
                        <div className="text-xs md:text-sm leading-snug text-slate-700">
                            {reason.lines.map((line, i) => (
                                <span key={i} className="block mb-1.5 last:mb-0">
                                    {line}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </button>
            </motion.div>
        </motion.li>
    );
}

export default function WhyMaintenanceSection({
    id = "why-maintenance",
    className = "",
}: WhyMaintenanceSectionProps) {
    return (
        <section id={id} dir="rtl" className={`py-10 md:py-12 ${className}`}>
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    className="mb-6 text-center md:mb-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h2
                        className="text-xl md:text-2xl font-semibold mb-2"
                        style={{ color: ACCENT }}
                        variants={fadeUp}
                        custom={0}
                    >
                        למה חייבים תחזוקה שוטפת למתקני החניה?
                    </motion.h2>

                    <motion.div
                        className="flex items-center justify-center gap-2 mb-2"
                        variants={fadeUp}
                        custom={1}
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                        <motion.span
                            className="h-[3px] w-24 rounded-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(26,42,128,0), rgba(26,42,128,0.95), rgba(26,42,128,0))",
                                backgroundSize: "200% 100%",
                            }}
                            animate={{
                                backgroundPositionX: ["0%", "100%", "0%"],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                    </motion.div>

                    <motion.p
                        className="mt-1 text-sm md:text-base leading-snug max-w-2xl mx-auto"
                        style={{ color: TEXT }}
                        variants={fadeUp}
                        custom={2}
                    >
                        <span className="block">
                            מתקני חניה הם ציוד מכני שמרים ומוריד רכבים במשקלים גבוהים, בתוך חללים צפופים ועמוסים.
                        </span>
                        <span className="block">
                            בלי תחזוקה נכונה זה לא רק תקלה מעצבנת.
                        </span>
                        <span className="block">
                            זה גם עניין של בטיחות, אחריות וביטוח.
                        </span>
                    </motion.p>
                </motion.div>

                <motion.ul
                    className="flex md:hidden gap-4 overflow-x-auto overflow-y-hidden pb-1 -mx-4 px-4 snap-x snap-mandatory"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.35 }}
                    variants={fadeUp}
                    custom={2}
                >
                    {REASONS.map((reason, index) => (
                        <ReasonCard
                            key={reason.title}
                            reason={reason}
                            index={index}
                            className="snap-center flex-shrink-0"
                        />
                    ))}
                </motion.ul>

                <motion.ul
                    className="hidden md:flex flex-wrap justify-center gap-5 max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={3}
                >
                    {REASONS.map((reason, index) => (
                        <ReasonCard key={reason.title} reason={reason} index={index} />
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
