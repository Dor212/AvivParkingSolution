import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type ServicesSectionProps = {
    id?: string;
    className?: string;
};

type Column = {
    id: string;
    label: string;
    subtitle: string;
    items: string[];
};

const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

const TEXT_SILVER = "#cfd2d6" as const;

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

const COLUMNS: Column[] = [
    {
        id: "standards",
        label: "עמידה בתקנים",
        subtitle: "בטיחות, תקינה ותיעוד",
        items: [
            'תחזוקה על פי דרישות התקן הישראלי ת"י 5437 למתקני חניה מכניים',
            "תחזוקה למערכות של פרומוט מתקני חניה ויצרנים נוספים",
            "הכנת המתקן לבדיקה על ידי בודק מוסמך או מהנדס בטיחות",
            "דוחות ביקורת מסודרים לאחר כל ביקור, עם ממצאים, תמונות והמלצות",
            "ליווי מול חברות הביטוח והגורמים המקצועיים כשצריך",
        ],
    },
    {
        id: "services",
        label: "השירותים שלנו",
        subtitle: "שירותי התחזוקה והטיפול",
        items: [
            "ביקורות תקופתיות מתוכננות לכל המתקנים",
            "טיפולים למערכות הידראוליות, שרשראות, בוכנות וחלקים נעים",
            "כיוון ויישור פלטפורמות ומפלסים",
            "טיפול בחשמל, גלאים, מפסקי גבול ולוחות בקרה",
            "תיקונים נקודתיים ותיקוני חירום",
            "שדרוג מערכות ישנות והחלפת רכיבים שהסתיים להם אורך החיים",
        ],
    },
    {
        id: "who",
        label: "למי זה מתאים",
        subtitle: "לקוחות שאנחנו מלווים ביום יום",
        items: [
            "בנייני מגורים עם מכפילי חניה או מתקנים טמונים",
            "חניונים של משרדים, מרכזים מסחריים ובנייני חברות",
            'יזמים וקבלנים בפרויקטים חדשים ותמ"א 38 או פינוי בינוי',
            "חברות ניהול נכסים ווועדי בתים שמחפשים כתובת אחת לכל נושא תחזוקת החניה",
        ],
    },
];

function ServicesColumn({
    column,
    index,
    mode,
}: {
    column: Column;
    index: number;
    mode: "desktop" | "mobile";
}) {
    const isCenter = index === 1;

    const baseClasses =
        "relative rounded-2xl border bg-white/8 backdrop-blur-md flex flex-col shadow-sm";
    const desktopSizing = isCenter
        ? "h-full px-5 py-6 md:px-6 md:py-7 md:scale-[1.05]"
        : "h-full px-4 py-4 md:px-4 md:py-4 md:scale-[0.92]";
    const mobileSizing = isCenter
        ? "w-full px-4 py-5 scale-[1.05]"
        : "w-full px-3 py-3.5 scale-[0.9]";

    const sizingClasses = mode === "desktop" ? desktopSizing : mobileSizing;

    const borderColor = isCenter ? "rgba(233,211,126,0.70)" : "rgba(255,255,255,0.14)";
    const boxShadow =
        mode === "desktop"
            ? isCenter
                ? "0 0 0 1px rgba(233,211,126,0.30), 0 0 26px rgba(233,211,126,0.22)"
                : "0 0 0 1px rgba(255,255,255,0.07), 0 14px 28px rgba(0,0,0,0.22)"
            : isCenter
                ? "0 0 0 1px rgba(233,211,126,0.30), 0 0 22px rgba(233,211,126,0.22)"
                : "0 0 0 1px rgba(255,255,255,0.07), 0 10px 22px rgba(0,0,0,0.22)";

    return (
        <motion.article variants={fadeUp} custom={index + 1} className="h-full">
            <div
                className={`${baseClasses} ${sizingClasses}`}
                style={{
                    borderColor,
                    boxShadow,
                }}
            >
                <div className="mb-3">
                    <p className="text-[0.8rem] md:text-xs font-semibold tracking-wide" style={{ color: "rgba(207,210,214,0.72)" }}>
                        {column.label}
                    </p>
                    <h3
                        className="text-base md:text-lg font-semibold mt-0.5"
                        style={{ color: isCenter ? GOLD_2 : TEXT_SILVER }}
                    >
                        {column.subtitle}
                    </h3>
                </div>

                <ul className="space-y-1.5 text-sm md:text-[0.95rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                    {column.items.map((item, i) => (
                        <li key={i} className="flex gap-2">
                            <span
                                className="mt-2 inline-block h-[6px] w-[6px] rounded-full"
                                style={{ backgroundColor: "rgba(233,211,126,0.55)" }}
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}

export default function ServicesSection({
    id = "services",
    className = "",
}: ServicesSectionProps) {
    return (
        <section id={id} dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl px-4 mx-auto">
                <motion.div
                    className="mb-6 text-center md:mb-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.35 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h2
                        className="mb-3 text-xl font-semibold md:text-2xl"
                        style={{ color: TEXT_SILVER }}
                        variants={fadeUp}
                        custom={0}
                    >
                        מה אנחנו עושים ולמי זה מתאים
                    </motion.h2>

                    <motion.div className="flex items-center justify-center gap-2 mb-2" variants={fadeUp} custom={1}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.45)" }} />
                        <motion.div
                            className="h-[3px] w-32 md:w-40 rounded-full"
                            style={{
                                backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                                backgroundSize: "200% 100%",
                                opacity: 0.8,
                            }}
                            animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.45)" }} />
                    </motion.div>

                    <motion.p
                        className="max-w-2xl mx-auto mt-1 text-sm md:text-base"
                        style={{ color: "rgba(255,255,255,0.76)" }}
                        variants={fadeUp}
                        custom={2}
                    >
                        סיכום ברור של שירותי התחזוקה, העמידה בתקנים והלקוחות שאנחנו מלווים ביום יום.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="items-stretch hidden gap-5 md:grid md:gap-6 md:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.35 }}
                    variants={fadeUp}
                    custom={1}
                >
                    {COLUMNS.map((col, index) => (
                        <ServicesColumn key={col.id} column={col} index={index} mode="desktop" />
                    ))}
                </motion.div>

                <motion.div
                    className="flex justify-center mt-6 md:hidden"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.35 }}
                    variants={fadeUp}
                    custom={1}
                >
                    <div className="flex items-stretch w-full max-w-xl gap-3">
                        <div className="flex flex-col items-center pt-3 pb-3">
                            <div className="relative h-full w-[3px]">
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        backgroundImage: `linear-gradient(180deg, rgba(184,130,72,0.10), rgba(233,211,126,0.75), rgba(184,130,72,0.10))`,
                                        backgroundSize: "100% 200%",
                                        opacity: 0.9,
                                    }}
                                    animate={{ backgroundPositionY: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                                />
                                <span className="absolute w-2 h-2 border rounded-full shadow-sm -left-1 top-2 bg-white/90" style={{ borderColor: "rgba(233,211,126,0.45)" }} />
                                <span className="absolute w-2 h-2 -translate-y-1/2 border rounded-full shadow-sm -left-1 top-1/2 bg-white/90" style={{ borderColor: "rgba(233,211,126,0.45)" }} />
                                <span className="absolute w-2 h-2 border rounded-full shadow-sm -left-1 bottom-2 bg-white/90" style={{ borderColor: "rgba(233,211,126,0.45)" }} />
                            </div>
                        </div>

                        <div className="flex flex-col flex-1 gap-4">
                            {COLUMNS.map((col, index) => (
                                <ServicesColumn key={`${col.id}-mobile`} column={col} index={index} mode="mobile" />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-col items-center hidden gap-2 mt-6 md:flex"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.35 }}
                    variants={fadeUp}
                    custom={2}
                >
                    <div className="relative h-[3px] w-full max-w-md">
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0.10), rgba(233,211,126,0.85), rgba(184,130,72,0.10))`,
                                backgroundSize: "200% 100%",
                                opacity: 0.9,
                            }}
                            animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="absolute left-0 w-2 h-2 border rounded-full shadow-sm -top-1 bg-white/90" style={{ borderColor: "rgba(233,211,126,0.45)" }} />
                        <span className="absolute w-2 h-2 -translate-x-1/2 border rounded-full shadow-sm -top-1 left-1/2 bg-white/90" style={{ borderColor: "rgba(233,211,126,0.45)" }} />
                        <span className="absolute right-0 w-2 h-2 border rounded-full shadow-sm -top-1 bg-white/90" style={{ borderColor: "rgba(233,211,126,0.45)" }} />
                    </div>

                    <div className="flex justify-between w-full max-w-md text-[0.75rem]" style={{ color: "rgba(207,210,214,0.72)" }}>
                        <span>עמידה בתקנים</span>
                        <span>השירותים שלנו</span>
                        <span>למי זה מתאים</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
