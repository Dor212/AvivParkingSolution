import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type ServicesPageProps = {
    className?: string;
};

type ServiceBlock = {
    id: string;
    title: string;
    kicker: string;
    tags: string[];
    paragraphs: string[];
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

const SERVICE_BLOCKS: ServiceBlock[] = [
    {
        id: "planned-maintenance",
        title: "תחזוקה שוטפת ומתוכננת",
        kicker: "תוכנית תחזוקה מסודרת שמותאמת למתקנים, לעומסים ולשימוש היומיומי.",
        tags: ["תוכנית שנתית / רבעונית", "ביקורות קבועות", "דוחות מסודרים"],
        paragraphs: [
            "אנחנו בונים יחד איתכם תוכנית תחזוקה שנתית או רבעונית, שמותאמת לסוג המתקנים, כמות הרכבים והאופי של החניון. לכל ביקור יש צ'ק־ליסט מסודר, כך ששום פריט חשוב לא נשאר מאחור.",
            "אחרי כל ביקורת אתם מקבלים סיכום ברור – עם תמונות, סטטוס של כל מתקן והמלצות להמשך טיפול. בנוסף, אנחנו שומרים היסטוריית טיפולים לכל מתקן, כדי שתמיד תוכלו לדעת מה נעשה ומתי.",
        ],
    },
    {
        id: "repairs",
        title: "תיקונים ותקלות",
        kicker: "כשהמתקן לא עובד – יש מי שמגיע, מאבחן ומחזיר אותו לעבודה בצורה בטוחה.",
        tags: ["טיפול חירום", "שחרור רכבים תקועים", "החלפת חלקים"],
        paragraphs: [
            "כשמתקן החניה לא עולה, לא יורד או פשוט מסרב להגיב – אנחנו נכנסים לפעולה. הטכנאים שלנו יודעים לשחרר רכבים תקועים בצורה בטוחה, לאבחן במהירות את מקור התקלה ולהחליף את החלקים הבעייתיים.",
            "במקום “לחכות שזה יקרוס”, אנחנו מחזירים גם מתקנים ותיקים לעבודה תקינה, ובמקרים רבים חוסכים את הצורך בהחלפה מלאה של המערכת.",
        ],
    },
    {
        id: "safety",
        title: "הכנה לבדיקות ובטיחות",
        kicker: "דואגים שהמתקנים יהיו מוכנים לבדיקות, לעמידה בתקן ולדרישות גורמי הפיקוח.",
        tags: ["הכנה לבודק מוסמך", "טיפול בליקויים", "בדיקות יזומות"],
        paragraphs: [
            "אנחנו מכינים את המתקנים לבדיקות של בודק מוסמך או מהנדס בטיחות, כדי שיגיעו לבדיקה כשהכול מדויק ומוכן. ליקויים שעלו בביקורות קודמות מטופלים מראש, יחד עם התאמה לדרישות התקן והיצרן.",
            "בנוסף, ניתן לבצע בדיקות בטיחות יזומות בהתאם להנחיות הגופים הרלוונטיים. המטרה: שלא תופתעו בבדיקה, ולא תישארו עם מתקן שלא עומד בדרישות.",
        ],
    },
    {
        id: "upgrades",
        title: "שדרוגים ושיפורים",
        kicker: "מערכות ותיקות יכולות לעבוד כמו חדשות – עם שדרוגים נכונים במקום החלפה מלאה.",
        tags: ["שדרוג בקרה", "חוויית משתמש", "התאמה לעומסים חדשים"],
        paragraphs: [
            "במקום להחליף את כל המערכת, אפשר לעדכן רק את מה שבאמת צריך. אנחנו משדרגים מערכות בקרה ישנות לדגמים חדשים ונוחים יותר, משפרים את חוויית המשתמש באמצעות שילוט, תאורה ולחצני הפעלה ברורים.",
            "במידת הצורך, המערכת מותאמת לשינויים בשימוש – יותר רכבים, כניסה של רכבי SUV וחשמליים, או שינוי אופי החניון. השדרוגים האלו מאריכים את חיי המתקן ומפחיתים תקלות קדימה.",
        ],
    },
    {
        id: "projects",
        title: "ליווי מקצועי בפרויקטים חדשים",
        kicker: "משלב התכנון ועד יום המסירה – יש לכם כתובת אחת מקצועית למתקני החניה.",
        tags: ["ייעוץ תכנון", "תיאום בין גורמים", "העברה לתחזוקה שוטפת"],
        paragraphs: [
            "אנחנו נכנסים לתמונה כבר בשלב התכנון: מסייעים לבחור את סוגי המתקנים שמתאימים למגרש, לתכנון האדריכלי ולצרכים העתידיים של הבניין או החניון.",
            "לאורך הדרך אנחנו מתאמים בין האדריכל, היזם וספק המתקנים, מלווים את ההרכבה וההרצה, ובסיום הפרויקט מעבירים את האתר למצב של תחזוקה שוטפת – עם נהלי עבודה והעברת מקל מסודרת.",
        ],
    },
    {
        id: "training",
        title: "הדרכה ושגרות שימוש",
        kicker: "כשמשתמשים נכון במתקן – הוא עובד יותר טוב, ליותר זמן, עם פחות תקלות.",
        tags: ["הדרכת ועד / ניהול", "נהלי שימוש", "שילוט למשתמשים"],
        paragraphs: [
            "אנחנו מדריכים את ועד הבית או חברת הניהול על שימוש נכון ובטוח במתקני החניה: מה מותר, מה אסור, ומה עושים כשמשהו מרגיש לא תקין.",
            "יחד בונים נהלי שימוש למשתמשים – כולל טיפים, 'עשה ואל תעשה' ונהלי חירום בסיסיים. אפשר לשלב גם שירות של עיצוב שילוט ברור לחניון, כדי שכל משתמש יבין איך להשתמש במערכת כבר בניסיון הראשון.",
        ],
    },
];

type ServiceCardProps = {
    block: ServiceBlock;
    index: number;
};

function ServiceCard({ block, index }: ServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.li
            id={block.id}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-center"
        >
            <motion.div
                className="rounded-3xl p-[1.5px]"
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, rgba(26,42,128,0.08), rgba(91,74,232,0.9), rgba(41,98,255,0.9), rgba(26,42,128,0.12))",
                    backgroundSize: "260% 260%",
                }}
                animate={{
                    backgroundPositionX: ["0%", "100%", "0%"],
                }}
                transition={{
                    duration: 10,
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
                    className="group relative w-[220px] md:w-[230px] min-h-[220px] rounded-[1.35rem] border bg-white/95 px-4 py-4 md:px-5 md:py-5 text-right flex flex-col items-center backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(15,23,42,0.28)]"
                    style={{
                        borderColor: "rgba(226,232,240,0.9)",
                        boxShadow:
                            "0 0 0 1px rgba(148,163,184,0.3), 0 16px 32px rgba(15,23,42,0.18)",
                    }}
                >
                    <div className="flex flex-col items-center text-center w-full flex-1 justify-start">
                        <h3
                            className="text-sm md:text-base font-semibold mb-1.5"
                            style={{ color: ACCENT }}
                        >
                            {block.title}
                        </h3>

                        <p className="text-[0.75rem] md:text-[0.8rem] text-brand-muted mb-2.5">
                            {block.kicker}
                        </p>

                        <div className="flex flex-wrap justify-center gap-1.5 mb-2">
                            {block.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center justify-center text-center rounded-2xl px-2 py-1"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(26,42,128,0.04), rgba(91,74,232,0.09))",
                                        border: "1px solid rgba(91,74,232,0.35)",
                                        boxShadow: "0 0 12px rgba(91,74,232,0.2)",
                                    }}
                                >
                                    <span className="text-[0.7rem] text-slate-800">{tag}</span>
                                </span>
                            ))}
                        </div>

                        {!isOpen && (
                            <p className="mt-1 text-[0.72rem] text-brand-muted md:hidden animate-pulse">
                                לחצו לפירוט
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
                        className="overflow-hidden w-full text-right"
                    >
                        <div className="text-[0.75rem] md:text-xs leading-relaxed text-slate-800">
                            {block.paragraphs.map((text, i) => (
                                <p key={i} className="mb-1.5 last:mb-0">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </button>
            </motion.div>
        </motion.li>
    );
}

export default function ServicesPage({ className = "" }: ServicesPageProps) {
    return (
        <main dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl mx-auto px-4">
                <motion.header
                    className="mb-7 md:mb-9 text-center"
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
                        שירותי תחזוקה מקיפים למתקני חניה
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
                        חברת התחזוקה מתמחה בליווי מלא של מתקני החניה – מהקמה וכניסה לפעולה ועד תחזוקה
                        שוטפת ושדרוגים לאורך השנים. אנחנו עובדים לפי תוכנית עבודה ברורה, עם שקיפות מלאה,
                        דוחות מסודרים ומענה מהיר לתקלות, כדי לאפשר לכם חניה בטוחה ויציבה לאורך זמן.
                    </motion.p>

                    <motion.p
                        className="mt-2 text-[0.8rem] text-brand-muted"
                        variants={fadeUp}
                        custom={3}
                    >
                        בחרו שירות כדי לראות את הפירוט המלא.
                    </motion.p>
                </motion.header>

                <section className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
                    {SERVICE_BLOCKS.map((block, index) => (
                        <ServiceCard key={block.id} block={block} index={index} />
                    ))}
                </section>
            </div>
        </main>
    );
}
