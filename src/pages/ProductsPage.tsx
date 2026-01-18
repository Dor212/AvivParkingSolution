import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

type ProductsPageProps = {
    className?: string;
};

type ProductItem = {
    label: string;
    description: string;
};

type ProductCategory = {
    title: string;
    subtitle: string;
    items: ProductItem[];
};

const SILVER = "#cfd2d6" as const;
const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

const TEXT = "rgba(255,255,255,0.78)" as const;
const MUTED = "rgba(207,210,214,0.72)" as const;

const WHATSAPP_NUMBER = "972500000000";

const easeCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.12 * i, ease: easeCurve },
    }),
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.97 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, delay: 0.08 * i, ease: easeCurve },
    }),
};

const CATEGORIES: ProductCategory[] = [
    {
        title: "מתקנים מכניים",
        subtitle: "מכפילי חניה ומתקנים טמונים",
        items: [
            {
                label: "מכפילי חניה תלויים וקונזוליים",
                description:
                    "מתקנים שמוסיפים מקום חניה אחד או שניים בתוך חניון קיים או בחוץ. אנחנו מטפלים בשרשראות, ברגים, פלטפורמות ומערכות בטיחות כדי שההרמה וההורדה יעבדו חלק ובצורה בטוחה.",
            },
            {
                label: "מתקנים טמונים מתחת לפני הקרקע",
                description:
                    "מערכות שיכולות להכיל עד שלושה מפלסי חניה מתחת למפלס הרחוב. תחזוקה כוללת טיפול במנועים, שרשראות או בוכנות, ניקוז ואטימות כדי למנוע תקלות עקב רטיבות או הצפות.",
            },
        ],
    },
    {
        title: "מתקנים חצי אוטומטיים",
        subtitle: "מערכות פאזל מתקדמות",
        items: [
            {
                label: "מערכות פאזל",
                description:
                    "מערכות חניה שבהן הרכבים נעים על גבי מסילות במישור אופקי ואנכי, ומייצרות הרבה מקומות חניה בשטח קטן. אנחנו דואגים לכיול חיישנים, מנועים, מסילות ומערכת הבקרה כדי שהמערכת תישאר מדויקת ואמינה גם בעומסים גבוהים.",
            },
        ],
    },
    {
        title: "מתקנים אוטומטיים ורובוטיים",
        subtitle: "חניוני קרוסלה, מגדל וכוורת",
        items: [
            {
                label: "חניון קרוסלה רוטרי",
                description:
                    "מערכת אנכית שבה הרכבים מסתדרים אחד מעל השני ומסתובבים כמו קרוסלה. התחזוקה מתמקדת במנועים, שרשראות, מנגנוני עצירה ומערכות בקרה כדי שהעלאה וההורדה יהיו מדויקות ובטוחות.",
            },
            {
                label: "חניוני מגדל או כוורת רובוטית",
                description:
                    "מערכות מתקדמות שמעבירות רכבים מהמעלית אל תאי חניה שונים. אנחנו מטפלים בממשקי המעלית, מסועים, מערכות בקרה וחיישני בטיחות כדי לשמור על רצף עבודה חלק ואמין.",
            },
        ],
    },
];

function CategoryCard({ category, index }: { category: ProductCategory; index: number }) {
    return (
        <motion.section
            variants={cardVariants}
            custom={index}
            className="relative px-4 py-5 overflow-hidden border rounded-3xl md:px-6 md:py-6 backdrop-blur-md"
            style={{
                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.62), rgba(30,31,36,0.38))",
                borderColor: "rgba(233,211,126,0.18)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.42)",
            }}
        >
            <div aria-hidden className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 h-52 w-[min(760px,92vw)] rounded-full blur-3xl opacity-60"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 20%, rgba(233,211,126,0.16), rgba(233,186,108,0.10), transparent 70%)",
                    }}
                />
                <div
                    className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-56 w-[min(760px,92vw)] rounded-full blur-3xl opacity-45"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 70%, rgba(207,210,214,0.10), rgba(184,130,72,0.08), transparent 70%)",
                    }}
                />
            </div>

            <div className="relative flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-8">
                <div className="md:w-[34%] flex flex-col mb-4 md:mb-0">
                    <div className="inline-flex items-center gap-2 mb-2">
                        <span
                            className="w-7 h-7 rounded-2xl border flex items-center justify-center text-[0.7rem] font-semibold"
                            style={{
                                backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                                borderColor: "rgba(233,211,126,0.18)",
                                color: "rgba(0,0,0,0.86)",
                                boxShadow: "0 10px 20px rgba(0,0,0,0.40)",
                            }}
                        >
                            {index + 1}
                        </span>
                        <span className="text-[0.8rem]" style={{ color: MUTED }}>
                            סוג מערכת חניה
                        </span>
                    </div>

                    <h2 className="mb-1 text-base font-semibold md:text-lg" style={{ color: SILVER }}>
                        {category.title}
                    </h2>

                    <p className="text-[0.85rem] md:text-sm" style={{ color: TEXT }}>
                        {category.subtitle}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.55)" }} />
                        <motion.span
                            className="h-[3px] w-20 md:w-24 rounded-full"
                            style={{
                                backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                                backgroundSize: "220% 100%",
                                opacity: 0.9,
                            }}
                            animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.55)" }} />
                    </div>

                    <div className="mt-3">
                        <span
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.74rem] border"
                            style={{
                                color: MUTED,
                                borderColor: "rgba(207,210,214,0.16)",
                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.30))",
                            }}
                        >
                            תחזוקה + תיקון + התאמה
                        </span>
                    </div>
                </div>

                <div className="md:w-[66%] grid gap-3.5 md:gap-4">
                    {category.items.map((item, i) => (
                        <motion.article
                            key={item.label}
                            variants={cardVariants}
                            custom={index + i + 0.5}
                            className="rounded-2xl border px-4 py-3.5 md:px-4.5 md:py-4 backdrop-blur-md"
                            style={{
                                backgroundImage:
                                    i % 2 === 0
                                        ? "linear-gradient(180deg, rgba(30,31,36,0.66), rgba(30,31,36,0.42))"
                                        : "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                                borderColor: i % 2 === 0 ? "rgba(233,211,126,0.20)" : "rgba(207,210,214,0.16)",
                                boxShadow: "0 14px 30px rgba(0,0,0,0.38)",
                            }}
                        >
                            <h3 className="text-sm md:text-[0.95rem] font-semibold mb-1.5" style={{ color: SILVER }}>
                                {item.label}
                            </h3>
                            <p className="text-[0.8rem] md:text-sm leading-relaxed" style={{ color: TEXT }}>
                                {item.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default function ProductsPage({ className = "" }: ProductsPageProps) {
    const [showFloatingCta, setShowFloatingCta] = useState(true);

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "שלום, אשמח לשלוח תמונות / תכנית חניה כדי לזהות את סוג המתקן ולבנות עבורו תוכנית תחזוקה."
    )}`;

    return (
        <main dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl px-4 mx-auto">
                <motion.header
                    className="relative mb-8 text-center md:mb-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        <div
                            className="h-44 w-[min(760px,92vw)] rounded-full blur-3xl opacity-70"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 45%, rgba(233,211,126,0.22), rgba(233,186,108,0.12), rgba(184,130,72,0.06), transparent 70%)",
                            }}
                        />
                    </div>

                    <motion.h1
                        className="mb-3 text-xl font-semibold md:text-2xl"
                        style={{ color: SILVER }}
                        variants={fadeUp}
                        custom={0}
                    >
                        מוצרי פתרונות החניה שאנחנו מתחזקים
                    </motion.h1>

                    <motion.div className="flex items-center justify-center gap-2 mb-3" variants={fadeUp} custom={1}>
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.45)" }} />
                        <motion.span
                            className="h-[3px] w-28 md:w-32 rounded-full"
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
                        className="max-w-3xl mx-auto text-sm leading-relaxed md:text-base"
                        style={{ color: TEXT }}
                        variants={fadeUp}
                        custom={2}
                    >
                        הצוות שלנו מתמחה בתחזוקה ותיקון של מגוון מתקני חניה, מכניים, חצי אוטומטיים ואוטומטיים, כולל המוצרים של
                        מעולה פתרונות החניה ומתקנים נוספים הקיימים בשוק הישראלי.
                    </motion.p>

                    <motion.p className="mt-2 text-[0.8rem]" style={{ color: MUTED }} variants={fadeUp} custom={3}>
                        זיהוי מהיר. התאמה נכונה. שקט תפעולי.
                    </motion.p>
                </motion.header>

                <motion.div
                    className="space-y-6 md:space-y-7 mb-9 md:mb-11"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeUp}
                    custom={0}
                >
                    {CATEGORIES.map((category, index) => (
                        <CategoryCard key={category.title} category={category} index={index} />
                    ))}
                </motion.div>

                <section className="flex justify-center mb-4 md:mb-6">
                    <motion.button
                        type="button"
                        onClick={() => setShowFloatingCta(true)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[0.85rem] font-semibold border backdrop-blur-md transition"
                        style={{
                            color: "rgba(255,255,255,0.92)",
                            borderColor: "rgba(233,211,126,0.24)",
                            backgroundImage: "linear-gradient(90deg, rgba(30,31,36,0.55), rgba(30,31,36,0.30))",
                            boxShadow: "0 16px 34px rgba(0,0,0,0.40)",
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeUp}
                        custom={0}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaWhatsapp className="text-base" />
                        <span>פתחו שוב את הודעת זיהוי המתקן</span>
                    </motion.button>
                </section>
            </div>

            {showFloatingCta && (
                <motion.div
                    className="fixed bottom-4 right-4 z-40 max-w-xs w-[320px]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: easeCurve }}
                >
                    <div
                        className="relative rounded-3xl border px-5 py-4 text-white shadow-[0_22px_45px_rgba(0,0,0,0.70)] flex flex-col items-center text-center backdrop-blur-md overflow-hidden"
                        style={{
                            backgroundImage: "linear-gradient(135deg, rgba(30,31,36,0.78), rgba(30,31,36,0.52))",
                            borderColor: "rgba(233,211,126,0.26)",
                        }}
                    >
                        <div aria-hidden className="absolute inset-0 pointer-events-none">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-[340px] rounded-full blur-3xl opacity-75"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 35%, rgba(233,211,126,0.20), rgba(233,186,108,0.12), transparent 70%)",
                                }}
                            />
                            <div
                                className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-40 w-[320px] rounded-full blur-3xl opacity-55"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 65%, rgba(207,210,214,0.10), rgba(184,130,72,0.08), transparent 72%)",
                                }}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowFloatingCta(false)}
                            className="absolute top-3 left-3 z-20 h-9 w-9 rounded-full border text-[0.95rem] flex items-center justify-center shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.35)]"
                            style={{
                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.85), rgba(30,31,36,0.55))",
                                borderColor: "rgba(233,211,126,0.22)",
                                color: "rgba(255,255,255,0.92)",
                                boxShadow: "0 12px 22px rgba(0,0,0,0.45)",
                            }}
                            aria-label="סגירת הודעה"
                        >
                            ✕
                        </button>

                        <div className="relative inline-flex items-center gap-2 mb-2">
                            <span
                                className="inline-flex items-center justify-center w-8 h-8 border rounded-xl"
                                style={{
                                    backgroundImage: "linear-gradient(135deg, rgba(233,211,126,0.20), rgba(233,186,108,0.10))",
                                    borderColor: "rgba(233,211,126,0.22)",
                                    boxShadow: "0 0 18px rgba(233,211,126,0.14)",
                                }}
                            >
                                <FaShieldAlt className="text-[14px]" />
                            </span>

                            <h2 className="text-sm md:text-[0.95rem] font-semibold" style={{ color: "rgba(255,255,255,0.94)" }}>
                                לא בטוחים איזה מתקן יש אצלכם?
                            </h2>
                        </div>

                        <p className="relative text-[0.78rem] mb-3" style={{ color: TEXT }}>
                            שלחו לנו תמונות מהחניון או תכנית חניה, ונזהה יחד את סוג המערכת ונבנה עבורה תוכנית תחזוקה מתאימה.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[0.8rem] font-semibold border transition"
                            style={{
                                color: "rgba(0,0,0,0.86)",
                                borderColor: "rgba(233,211,126,0.22)",
                                backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                                boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
                            }}
                        >
                            <FaWhatsapp className="text-base" />
                            <span>שלחו לנו תמונות או תכנית חניה</span>
                        </a>

                        <p className="relative mt-2 text-[0.72rem]" style={{ color: MUTED }}>
                            נחזור אליכם עם זיהוי + המלצה
                        </p>
                    </div>
                </motion.div>
            )}
        </main>
    );
}
