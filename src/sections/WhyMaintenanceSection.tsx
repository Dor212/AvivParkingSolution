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

const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

const SILVER = "#cfd2d6" as const;

const easeCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: 0.12 * i, ease: easeCurve },
    }),
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.965 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, delay: 0.08 * i, ease: easeCurve },
    }),
};

const REASONS: Reason[] = [
    {
        title: "בטיחות לפני הכול",
        lines: [
            "בלאי בשרשראות, בוכנות, ברגים ומערכות בקרה יכול להוביל למצב מסוכן.",
            "ירידות לא מבוקרות, תקיעה של רכב או סיכון לנפילת רכב ומטען.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/safety.svg`,
    },
    {
        title: "חובה לעמוד בתקנים",
        lines: [
            "מתקני חניה מכניים צריכים לעמוד בדרישות התקן הישראלי ת״י 5437 והנחיות משרד התחבורה לחניונים.",
            "תחזוקה מסודרת עם בודק מוסמך שומרת עליכם מול הרשויות, הביטוח וכל גורמי הפיקוח.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/standards.svg`,
    },
    {
        title: "מניעת תקלות יקרות",
        lines: [
            "טיפול יזום במערכת ההידראולית, בחשמל ובמנגנוני הנעילה זול משמעותית מתיקון חירום.",
            "תחזוקה נכונה מצמצמת קריסות, השבתות ותיקונים גדולים בזמן הכי לא מתאים.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/cost.svg`,
    },
    {
        title: "שקט מדיירים ומשתמשים",
        lines: [
            "אף אחד לא אוהב להיתקע בשש בבוקר כשהוא ממהר לעבודה.",
            "תחזוקה נכונה מפחיתה עצבים, תלונות וטיפול במקרי קצה מול דיירים ומשתמשים.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/quiet.svg`,
    },
    {
        title: "שמירה על ערך הנכס",
        lines: [
            "חניון עם מתקנים עובדים, מתוחזקים ומתועדים משפר את ערך הדירות והנכס כולו.",
            "קל יותר להשכיר, למכור ולנהל נכס שבו החניה עובדת כמו שצריך ומגובה בדוחות תחזוקה מסודרים.",
        ],
        iconSrc: `${import.meta.env.BASE_URL}icons/value.svg`,
    },
];

type ReasonCardProps = {
    reason: Reason;
    index: number;
    className?: string;
};

function ReasonCard({ reason, index, className = "" }: ReasonCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.li
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.45 }}
            className={`h-full flex justify-center ${className}`}
        >
            <motion.div
                className="rounded-3xl p-[1.25px] will-change-transform w-full max-w-[520px] md:max-w-none"
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, rgba(184,130,72,0.06), rgba(233,186,108,0.22), rgba(233,211,126,0.22), rgba(184,130,72,0.06))",
                    backgroundSize: "220% 220%",
                }}
                animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen((p) => !p)}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    aria-expanded={isOpen}
                    className={`group relative w-full min-h-[200px] md:w-[250px] md:min-h-[220px] rounded-[1.35rem] border px-4 py-4 md:px-5 md:py-5 text-right flex flex-col items-center backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] ${isOpen ? "opacity-100" : "opacity-[0.94]"
                        }`}
                    style={{
                        borderColor: "rgba(255,255,255,0.10)",
                        backgroundImage:
                            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.035), rgba(255,255,255,0.045))",
                        boxShadow:
                            "0 0 0 1px rgba(255,255,255,0.06), 0 18px 38px rgba(0,0,0,0.22)",
                    }}
                >
                    <span
                        className="pointer-events-none absolute inset-0 rounded-[1.35rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background:
                                "radial-gradient(260px 160px at 50% 0%, rgba(233,211,126,0.08), rgba(0,0,0,0) 60%)",
                        }}
                    />

                    <div className="relative flex flex-col items-center justify-center flex-1 w-full text-center">
                        <div className="flex items-center justify-center mb-3">
                            <span
                                className="grid p-2 border place-items-center rounded-2xl"
                                style={{
                                    borderColor: "rgba(255,255,255,0.08)",
                                    backgroundImage:
                                        "linear-gradient(135deg, rgba(30,31,36,0.22), rgba(255,255,255,0.05))",
                                    boxShadow: "0 10px 26px rgba(0,0,0,0.16)",
                                }}
                            >
                                <img
                                    src={reason.iconSrc}
                                    alt={reason.title}
                                    className="w-10 h-10 object-contain opacity-[0.9]"
                                    loading="lazy"
                                />
                            </span>
                        </div>

                        <h3
                            className="text-[0.98rem] md:text-[1.02rem] font-semibold mb-2 leading-tight"
                            style={{ color: SILVER }}
                        >
                            {reason.title}
                        </h3>

                        <div className="flex items-center justify-center gap-2 mb-2.5">
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: "rgba(233,211,126,0.40)" }}
                            />
                            <span
                                className="w-16 h-[3px] rounded-full"
                                style={{
                                    backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                                    opacity: 0.7,
                                }}
                            />
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: "rgba(233,211,126,0.40)" }}
                            />
                        </div>

                        {!isOpen && (
                            <p className="mt-1 text-[0.78rem] opacity-80 md:hidden">
                                <span style={{ color: "rgba(207,210,214,0.68)" }}>לחצו לפירוט</span>
                            </p>
                        )}
                    </div>

                    <motion.div
                        initial={false}
                        animate={isOpen ? "open" : "collapsed"}
                        variants={{
                            open: { opacity: 1, height: "auto", marginTop: 10 },
                            collapsed: { opacity: 0, height: 0, marginTop: 0 },
                        }}
                        transition={{ duration: 0.26, ease: "easeOut" }}
                        className="w-full overflow-hidden"
                    >
                        <div className="text-xs leading-snug md:text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                            {reason.lines.map((line, i) => (
                                <span key={i} className="block mb-2 last:mb-0">
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
        <section id={id} dir="rtl" className={`py-12 md:py-16 ${className}`}>
            <div className="max-w-6xl px-4 mx-auto">
                <motion.div
                    className="mb-8 text-center md:mb-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.35 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.p
                        className="mb-2 text-xs font-medium tracking-wide md:text-sm"
                        style={{ color: "rgba(207,210,214,0.72)" }}
                        variants={fadeUp}
                        custom={0}
                    >
                        למה זה חשוב באמת
                    </motion.p>

                    <motion.h2
                        className="text-2xl font-semibold leading-tight md:text-4xl"
                        style={{
                            color: SILVER,
                            textShadow: "0 12px 40px rgba(0,0,0,0.30)",
                        }}
                        variants={fadeUp}
                        custom={1}
                    >
                        למה חייבים תחזוקה שוטפת למתקני החניה?
                    </motion.h2>

                    <motion.div
                        className="flex items-center justify-center gap-2 mt-3"
                        variants={fadeUp}
                        custom={2}
                    >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.38)" }} />
                        <motion.span
                            className="h-[3px] w-28 md:w-36 rounded-full"
                            style={{
                                backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                                backgroundSize: "200% 100%",
                                opacity: 0.72,
                            }}
                            animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.38)" }} />
                    </motion.div>

                    <motion.p
                        className="max-w-2xl mx-auto mt-4 text-sm leading-relaxed md:text-base"
                        style={{ color: "rgba(255,255,255,0.76)" }}
                        variants={fadeUp}
                        custom={3}
                    >
                        מתקני חניה הם ציוד מכני שמרים ומוריד רכבים במשקלים גבוהים.
                        בלי תחזוקה נכונה זו לא רק תקלה מעצבנת, זה גם עניין של בטיחות, אחריות וביטוח.
                    </motion.p>
                </motion.div>

                <motion.ul
                    className="grid grid-cols-1 gap-4 md:hidden"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeUp}
                    custom={4}
                >
                    {REASONS.map((reason, index) => (
                        <ReasonCard key={reason.title} reason={reason} index={index} />
                    ))}
                </motion.ul>

                <motion.ul
                    className="flex-wrap justify-center hidden max-w-4xl gap-6 mx-auto md:flex"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.35 }}
                    variants={fadeUp}
                    custom={5}
                >
                    {REASONS.map((reason, index) => (
                        <ReasonCard key={reason.title} reason={reason} index={index} />
                    ))}
                </motion.ul>

                <div className="flex justify-center mt-8 md:mt-10">
                    <div
                        className="h-[1px] w-44 md:w-56"
                        style={{
                            backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), rgba(233,211,126,0.22), rgba(184,130,72,0))`,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
