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

const ACCENT = "#1A2A80" as const;
const TEXT = "#1F2937" as const;
const PURPLE_NEON = "#5B4AE8" as const;

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
            "תחזוקה על פי דרישות התקן הישראלי ת\"י 5437 למתקני חניה מכניים",
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
            "יזמים וקבלנים בפרויקטים חדשים ותמ\"א 38 או פינוי בינוי",
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
        "relative rounded-2xl border bg-white/92 backdrop-blur-sm flex flex-col shadow-sm";
    const desktopSizing = isCenter
        ? "h-full px-5 py-6 md:px-6 md:py-7 md:scale-[1.05]"
        : "h-full px-4 py-4 md:px-4 md:py-4 md:scale-[0.92]";
    const mobileSizing = isCenter
        ? "w-full px-4 py-5 scale-[1.05]"
        : "w-full px-3 py-3.5 scale-[0.9]";

    const sizingClasses = mode === "desktop" ? desktopSizing : mobileSizing;

    const borderColor = isCenter
        ? "rgba(91,74,232,0.95)"
        : "rgba(26,42,128,0.48)";
    const boxShadow =
        mode === "desktop"
            ? isCenter
                ? "0 0 0 1px rgba(91,74,232,0.6), 0 0 26px rgba(91,74,232,0.7)"
                : "0 0 0 1px rgba(26,42,128,0.14), 0 14px 28px rgba(15,23,42,0.18)"
            : isCenter
                ? "0 0 0 1px rgba(91,74,232,0.6), 0 0 22px rgba(91,74,232,0.7)"
                : "0 0 0 1px rgba(26,42,128,0.12), 0 10px 22px rgba(15,23,42,0.18)";

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
                    <p className="text-[0.8rem] md:text-xs font-semibold text-brand-muted tracking-wide">
                        {column.label}
                    </p>
                    <h3
                        className="text-base md:text-lg font-semibold mt-0.5"
                        style={{ color: isCenter ? PURPLE_NEON : ACCENT }}
                    >
                        {column.subtitle}
                    </h3>
                </div>

                <ul className="space-y-1.5 text-sm md:text-[0.95rem] leading-relaxed text-slate-800">
                    {column.items.map((item, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="mt-2 inline-block h-[6px] w-[6px] rounded-full bg-brand-soft" />
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
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    className="mb-6 md:mb-8 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.35 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h2
                        className="text-xl md:text-2xl font-semibold mb-3"
                        style={{ color: ACCENT }}
                        variants={fadeUp}
                        custom={0}
                    >
                        מה אנחנו עושים ולמי זה מתאים
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
                        סיכום ברור של שירותי התחזוקה, העמידה בתקנים והלקוחות שאנחנו מלווים ביום יום.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="hidden md:grid gap-5 md:gap-6 md:grid-cols-3 items-stretch"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.35 }}
                    variants={fadeUp}
                    custom={1}
                >
                    {COLUMNS.map((col, index) => (
                        <ServicesColumn
                            key={col.id}
                            column={col}
                            index={index}
                            mode="desktop"
                        />
                    ))}
                </motion.div>

                <motion.div
                    className="mt-6 md:hidden flex justify-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.35 }}
                    variants={fadeUp}
                    custom={1}
                >
                    <div className="flex items-stretch gap-3 max-w-xl w-full">
                        <div className="flex flex-col items-center pt-3 pb-3">
                            <div className="relative h-full w-[3px]">
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(180deg, rgba(91,74,232,0.1), rgba(91,74,232,0.9), rgba(91,74,232,0.1))",
                                        backgroundSize: "100% 200%",
                                    }}
                                    animate={{
                                        backgroundPositionY: ["0%", "100%", "0%"],
                                    }}
                                    transition={{
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                <span className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-white border border-brand-soft shadow-sm" />
                                <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-brand-soft shadow-sm" />
                                <span className="absolute -left-1 bottom-2 w-2 h-2 rounded-full bg-white border border-brand-soft shadow-sm" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 flex-1">
                            {COLUMNS.map((col, index) => (
                                <ServicesColumn
                                    key={`${col.id}-mobile`}
                                    column={col}
                                    index={index}
                                    mode="mobile"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-6 hidden md:flex flex-col items-center gap-2"
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
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(91,74,232,0.1), rgba(91,74,232,0.9), rgba(91,74,232,0.1))",
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
                        <span className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-white border border-brand-soft shadow-sm" />
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white border border-brand-soft shadow-sm" />
                        <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-white border border-brand-soft shadow-sm" />
                    </div>

                    <div className="flex justify-between w-full max-w-md text-[0.75rem] text-brand-muted">
                        <span>עמידה בתקנים</span>
                        <span>השירותים שלנו</span>
                        <span>למי זה מתאים</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
