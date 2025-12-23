import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

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

const ACCENT = "#1A2A80" as const;
const TEXT = "#1F2937" as const;
const WHATSAPP_NUMBER = "972500000000";

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
    hidden: { opacity: 0, y: 16, scale: 0.97 },
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
                    "מערכת אנכית שבה הרכבים מסתדרים אחד מעל השני ומסתובבים כמו קרוסלה. התחזוקה מתמקדת במנועים, שרשראות, מנגנוני עצירה ומערכות בקרה כדי שהעלאה והורדה יהיו מדויקות ובטוחות.",
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
            className="rounded-3xl bg-gradient-to-b from-slate-50/95 via-white to-slate-50/80 border border-slate-200/75 px-4 py-5 md:px-6 md:py-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
        >
            <div className="flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-8">
                <div className="md:w-[34%] flex flex-col mb-4 md:mb-0">
                    <div className="inline-flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-2xl bg-brand-soft/20 border border-brand-soft/60 flex items-center justify-center text-[0.7rem] font-semibold text-brand-dark shadow-[0_0_12px_rgba(26,42,128,0.38)]">
                            {index + 1}
                        </span>
                        <span className="text-[0.8rem] text-brand-muted">
                            סוג מערכת חניה
                        </span>
                    </div>
                    <h2
                        className="text-base md:text-lg font-semibold mb-1"
                        style={{ color: ACCENT }}
                    >
                        {category.title}
                    </h2>
                    <p className="text-[0.85rem] md:text-sm text-slate-700">
                        {category.subtitle}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                        <motion.span
                            className="h-[3px] w-20 md:w-24 rounded-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(26,42,128,0), rgba(91,74,232,0.9), rgba(41,98,255,0.9), rgba(26,42,128,0))",
                                backgroundSize: "220% 100%",
                            }}
                            animate={{
                                backgroundPositionX: ["0%", "100%", "0%"],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                    </div>
                </div>

                <div className="md:w-[66%] grid gap-3.5 md:gap-4">
                    {category.items.map((item, i) => (
                        <motion.article
                            key={item.label}
                            variants={cardVariants}
                            custom={index + i + 0.5}
                            className="rounded-2xl border bg-white/98 px-4 py-3.5 md:px-4.5 md:py-4 shadow-[0_14px_30px_rgba(15,23,42,0.12)]"
                            style={{
                                borderColor: "rgba(26,42,128,0.22)",
                            }}
                        >
                            <h3
                                className="text-sm md:text-[0.95rem] font-semibold mb-1.5"
                                style={{ color: ACCENT }}
                            >
                                {item.label}
                            </h3>
                            <p className="text-[0.8rem] md:text-sm leading-relaxed text-slate-800">
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
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <motion.header
                    className="mb-8 md:mb-10 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h1
                        className="text-xl md:text-2xl font-semibold mb-3"
                        style={{ color: ACCENT }}
                        variants={fadeUp}
                        custom={0}
                    >
                        מוצרי פתרונות החניה שאנחנו מתחזקים
                    </motion.h1>

                    <motion.div
                        className="flex items-center justify-center gap-2 mb-3"
                        variants={fadeUp}
                        custom={1}
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                        <motion.span
                            className="h-[3px] w-28 md:w-32 rounded-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(90deg, rgba(26,42,128,0), rgba(26,42,128,0.95), rgba(26,42,128,0))",
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
                        className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed"
                        style={{ color: TEXT }}
                        variants={fadeUp}
                        custom={2}
                    >
                        הצוות שלנו מתמחה בתחזוקה ותיקון של מגוון מתקני חניה, מכניים, חצי אוטומטיים
                        ואוטומטיים, כולל המוצרים של מעולה פתרונות החניה ומתקנים נוספים הקיימים בשוק
                        הישראלי.
                    </motion.p>
                </motion.header>

                {/* Categories */}
                <div className="space-y-6 md:space-y-7 mb-9 md:mb-11">
                    {CATEGORIES.map((category, index) => (
                        <CategoryCard key={category.title} category={category} index={index} />
                    ))}
                </div>

                {/* Button to reopen floating CTA */}
                <section className="flex justify-center mb-4 md:mb-6">
                    <motion.button
                        type="button"
                        onClick={() => setShowFloatingCta(true)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[0.85rem] font-semibold bg-white text-brand-dark hover:bg-slate-50 shadow-md shadow-slate-900/30 border border-slate-200/80 transition"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <FaWhatsapp className="text-base" />
                        <span>פתחו שוב את הודעת זיהוי המתקן</span>
                    </motion.button>
                </section>
            </div>

            {/* Floating CTA like MaintenancePage */}
            {showFloatingCta && (
                <motion.div
                    className="fixed bottom-4 right-4 z-40 max-w-xs w-[320px]"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: easeCurve }}
                >
                    <div className="relative rounded-3xl bg-gradient-to-r from-brand-dark/95 via-brand to-brand/90 px-5 py-4 text-white shadow-[0_22px_45px_rgba(15,23,42,0.6)] flex flex-col items-center text-center">
                        <button
                            type="button"
                            onClick={() => setShowFloatingCta(false)}
                            className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white/90 text-[0.8rem] text-brand-dark flex items-center justify-center shadow-md hover:bg-slate-100"
                            aria-label="סגירת הודעה"
                        >
                            ✕
                        </button>

                        <h2 className="text-sm md:text-[0.95rem] font-semibold mb-1.5">
                            לא בטוחים איזה מתקן יש אצלכם?
                        </h2>

                        <p className="text-[0.78rem] text-white/90 mb-3">
                            שלחו לנו תמונות מהחניון או תכנית חניה, ונזהה יחד את סוג המערכת ונבנה עבורה
                            תוכנית תחזוקה מתאימה.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[0.8rem] font-semibold bg-white hover:bg-slate-50 shadow-md transition"
                            style={{ color: ACCENT }}
                        >
                            <FaWhatsapp className="text-base" />
                            <span>שלחו לנו תמונות או תכנית חניה</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </main>
    );
}
