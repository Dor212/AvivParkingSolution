import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

type MaintenancePageProps = {
    className?: string;
};

type ProcessStep = {
    title: string;
    text: string;
};

type ChecklistItem = {
    text: string;
};

type BenefitItem = {
    title: string;
    text: string;
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
    hidden: { opacity: 0, y: 18, scale: 0.96 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            delay: 0.08 * i,
            ease: easeCurve,
        },
    }),
};

const PROCESS_STEPS: ProcessStep[] = [
    {
        title: "מיפוי ובדיקה ראשונית",
        text: "טכנאי מגיע לאתר, עובר על כל המתקנים, בודק את מצבם ומפיק דוח פתיחה עם המלצות על תדירות הטיפולים הדרושה.",
    },
    {
        title: "בניית תוכנית תחזוקה",
        text: "ביחד איתכם נבנית תוכנית ביקורות שנתית או רבעונית לפי סוג המתקנים, נפח השימוש ודרישות הביטוח והתקן.",
    },
    {
        title: "ביקורים תקופתיים קבועים",
        text: "בכל ביקור מבוצע צ'ק ליסט מסודר עם בדיקות מכניות, הידראוליות, חשמל, בקרה, עיגונים, ניקוז ועוד.",
    },
    {
        title: "דוחות וסיכום",
        text: "אחרי כל טיפול מתקבל דוח מסודר שמסביר מה בוצע, מה נמצא ומה מומלץ לטפל בו בהמשך אם נדרש.",
    },
    {
        title: "זמינות לתקלות בין הטיפולים",
        text: "לקוחות תחזוקה שוטפת נהנים מזמינות גבוהה יותר ומעדיפות בטיפול בתקלות פתאומיות לאורך השנה.",
    },
];

const CHECKLIST: ChecklistItem[] = [
    { text: "בדיקת שרשראות או כבלים והידוק עיגונים." },
    { text: "בדיקת בוכנות הידראוליות, מפלס שמן ואטימות." },
    { text: "בדיקת מפסקי גבול, גלאי בטיחות ומערכות עצירה." },
    { text: "שימון חלקים נעים לפי המלצות היצרן." },
    { text: "בדיקת פילוס פלטפורמות והתאמת גבהים." },
    { text: "בדיקת תעלות ניקוז, משאבות ובידוד מפני מים במתקנים טמונים." },
    { text: "בדיקת לוחות חשמל והידוק חיבורים." },
];

const BENEFITS: BenefitItem[] = [
    {
        title: "פחות תקלות חירום",
        text: "טיפול בבלאי לפני שהוא הופך לתקלה חוסך עצירות פתאומיות והשבתות מתמשכות של החניון.",
    },
    {
        title: "פחות עצבים ותלונות",
        text: "דיירים ומשתמשים חווים פחות עיכובים בדרך לעבודה ופחות הפתעות ביציאה או בכניסה לחניון.",
    },
    {
        title: "יותר בטיחות ושקט נפשי",
        text: "מתקן מתוחזק היטב מקטין סיכונים בטיחותיים ויוצר תחושת ביטחון אצל כל מי שנוסע עליו.",
    },
    {
        title: "עמידה קלה מול ביטוח ורשויות",
        text: "דוחות מסודרים ותיעוד טיפולים מקלים על התנהלות מול חברות ביטוח, בודקים מוסמכים וגופי פיקוח.",
    },
    {
        title: "תכנון עלויות במקום הפתעות",
        text: "תחזוקה שוטפת מאפשרת לתכנן תקציב מראש במקום להתמודד עם עלויות חירום גבוהות ולא מתוכננות.",
    },
];

function ProcessStepBubble({
    step,
    index,
    positionClass,
}: {
    step: ProcessStep;
    index: number;
    positionClass: string;
}) {
    return (
        <motion.div
            variants={cardVariants}
            custom={index}
            className={`absolute ${positionClass} w-[190px] max-w-[210px]`}
        >
            <div className="rounded-2xl bg-white/96 border border-slate-200/80 px-4 py-3.5 shadow-[0_14px_32px_rgba(15,23,42,0.16)] backdrop-blur-sm">
                <h3
                    className="text-sm md:text-[0.95rem] font-semibold mb-1.5 text-center"
                    style={{ color: ACCENT }}
                >
                    {step.title}
                </h3>
                <p className="text-[0.78rem] md:text-[0.8rem] leading-relaxed text-slate-800 text-center">
                    {step.text}
                </p>
            </div>
        </motion.div>
    );
}

function ChecklistItemRow({ item, index }: { item: ChecklistItem; index: number }) {
    return (
        <motion.li
            variants={cardVariants}
            custom={index}
            className="flex items-start gap-2.5"
        >
            <span
                className="mt-1 block w-2.5 h-2.5 rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, #9F86FF 0%, #7C6BFF 45%, #5B4AE8 75%, #1A2A80 100%)",
                    boxShadow: "0 0 14px rgba(91,74,232,0.9)",
                }}
            />
            <span className="text-sm md:text-[0.95rem] leading-relaxed text-slate-800">
                {item.text}
            </span>
        </motion.li>
    );
}

function BenefitCard({ benefit, index }: { benefit: BenefitItem; index: number }) {
    return (
        <motion.li
            variants={cardVariants}
            custom={index}
            className="flex-1 min-w-[210px] max-w-[230px] flex justify-center"
        >
            <div className="w-full rounded-2xl bg-white/95 border border-slate-200/80 px-4 py-4 shadow-[0_14px_30px_rgba(15,23,42,0.14)] text-right">
                <h3
                    className="text-sm md:text-[0.95rem] font-semibold mb-1.5"
                    style={{ color: ACCENT }}
                >
                    {benefit.title}
                </h3>
                <p className="text-[0.8rem] md:text-sm leading-relaxed text-slate-800">
                    {benefit.text}
                </p>
            </div>
        </motion.li>
    );
}

export default function MaintenancePage({ className = "" }: MaintenancePageProps) {
    const [showFloatingCta, setShowFloatingCta] = useState(true);

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "שלום, אשמח לקבל פרטים על תוכנית תחזוקה שוטפת למתקני החניה."
    )}`;

    const processPositions = [
        "top-2 left-1/2 -translate-x-1/2 -translate-y-1",
        "top-1/2 right-2 translate-x-1 -translate-y-1/2",
        "bottom-4 right-10 translate-x-1",
        "bottom-4 left-10 -translate-x-1",
        "top-1/2 left-2 -translate-x-1 -translate-y-1/2",
    ];

    return (
        <main dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl mx-auto px-4">
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
                        תחזוקה שוטפת שמונעת תקלות ולא רק מטפלת בהן
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
                        במקום לחכות שהמתקן יתקע, אנחנו בונים תוכנית תחזוקה שוטפת שמטפלת בבלאי לפני שהוא
                        הופך לבעיה. כל ביקור אצלכם מתועד, מצולם ומלווה בהמלצות ברורות כדי שתדעו שכל
                        מתקן חניה מטופל ומפוקח.
                    </motion.p>
                </motion.header>

                <section className="mb-8 md:mb-10">
                    <motion.div
                        className="mb-4 md:mb-5 text-right"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h2
                            className="text-base md:text-lg font-semibold"
                            style={{ color: ACCENT }}
                        >
                            תהליך תחזוקה שוטפת בתנועה מעגלית רציפה
                        </h2>
                    </motion.div>

                    <motion.div
                        className="rounded-3xl bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 border border-slate-200/70 px-3 py-4 md:px-6 md:py-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.35 }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <div className="hidden md:block">
                            <div className="relative mx-auto max-w-3xl aspect-square">
                                <motion.div
                                    className="absolute inset-8 rounded-full border border-slate-200/90"
                                    style={{
                                        boxShadow:
                                            "0 0 28px rgba(91,74,232,0.35), inset 0 0 18px rgba(148,163,184,0.35)",
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-14 rounded-full"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 30% 0%, rgba(91,74,232,0.25), transparent 55%)",
                                    }}
                                />
                                <motion.div
                                    className="absolute inset-[28%] rounded-full border border-dashed border-brand-soft flex items-center justify-center px-6 text-center"
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(255,255,255,0.98), rgba(241,245,249,0.96))",
                                        boxShadow: "0 18px 40px rgba(15,23,42,0.18)",
                                    }}
                                >
                                    <div>
                                        <p className="text-[0.8rem] text-brand-muted mb-1.5">
                                            תחזוקה שוטפת למתקני חניה
                                        </p>
                                        <p
                                            className="text-sm md:text-[0.95rem] font-semibold"
                                            style={{ color: ACCENT }}
                                        >
                                            תהליך מחזורי שחוזר על עצמו ומונע תקלות לפני שהן מפריעות
                                            לשגרה.
                                        </p>
                                    </div>
                                </motion.div>

                                {PROCESS_STEPS.map((step, index) => (
                                    <ProcessStepBubble
                                        key={step.title}
                                        step={step}
                                        index={index}
                                        positionClass={processPositions[index]}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="md:hidden">
                            <div className="mb-3 flex items-center justify-center">
                                <motion.div
                                    className="h-[3px] w-40 rounded-full"
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
                            </div>
                            <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                                {PROCESS_STEPS.map((step, index) => (
                                    <motion.div
                                        key={step.title}
                                        variants={cardVariants}
                                        custom={index}
                                        className="min-w-[230px]"
                                    >
                                        <div className="rounded-2xl bg-white/96 border border-slate-200/80 px-4 py-3.5 shadow-[0_14px_32px_rgba(15,23,42,0.16)]">
                                            <h3
                                                className="text-sm font-semibold mb-1.5 text-center"
                                                style={{ color: ACCENT }}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="text-[0.8rem] leading-relaxed text-slate-800 text-center">
                                                {step.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section className="mb-8 md:mb-10">
                    <motion.div
                        className="mb-4 md:mb-5 text-right"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h2
                            className="text-base md:text-lg font-semibold"
                            style={{ color: ACCENT }}
                        >
                            מה אנחנו בודקים בכל ביקור תחזוקה
                        </h2>
                    </motion.div>

                    <motion.div
                        className="rounded-3xl bg-white/95 border border-slate-200/80 px-4 py-4 md:px-6 md:py-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <motion.ul
                            className="grid gap-2.5 md:gap-3 md:grid-cols-2"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.4 }}
                            variants={fadeUp}
                            custom={2}
                        >
                            {CHECKLIST.map((item, index) => (
                                <ChecklistItemRow key={index} item={item} index={index} />
                            ))}
                        </motion.ul>
                    </motion.div>
                </section>

                <section className="mb-9 md:mb-11">
                    <motion.div
                        className="mb-4 md:mb-5 text-right"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h2
                            className="text-base md:text-lg font-semibold"
                            style={{ color: ACCENT }}
                        >
                            יתרונות תחזוקה שוטפת ללקוח
                        </h2>
                    </motion.div>

                    <motion.ul
                        className="flex flex-wrap justify-center gap-4 md:gap-5"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.45 }}
                        variants={fadeUp}
                        custom={1}
                    >
                        {BENEFITS.map((benefit, index) => (
                            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
                        ))}
                    </motion.ul>
                </section>

                <section className="flex justify-center">
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
                        <span>פתחו שוב את הודעת התחזוקה השוטפת</span>
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
                            צריכים תוכנית תחזוקה מסודרת למתקני החניה?
                        </h2>

                        <p className="text-[0.78rem] text-white/90 mb-3">
                            שלחו לנו הודעה בוואטסאפ ונחזור אליכם עם הצעה שמותאמת למתקנים, לבניין ולשימוש
                            אצלכם.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-[0.8rem] font-semibold bg-white hover:bg-slate-50 shadow-md transition"
                            style={{ color: ACCENT }}
                        >
                            <FaWhatsapp className="text-base" />
                            <span>דברו איתנו על תחזוקה שוטפת</span>
                        </a>
                    </div>
                </motion.div>

            )}
        </main>
    );
}
