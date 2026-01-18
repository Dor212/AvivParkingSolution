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

const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

const SILVER = "#cfd2d6" as const;
const TEXT = "rgba(255,255,255,0.78)" as const;

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

function SentenceLines({
    text,
    className = "",
    style,
}: {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}) {
    const cleaned = text
        .replaceAll("–", ".")
        .replaceAll("—", ".")
        .replaceAll("־", "")
        .replaceAll("-", " ")
        .replace(/\s+/g, " ")
        .trim();

    const endsWithDot = cleaned.endsWith(".");
    const parts = cleaned
        .split(".")
        .map((s) => s.trim())
        .filter(Boolean);

    return (
        <p className={className} style={style}>
            {parts.map((s, i) => {
                const isLast = i === parts.length - 1;
                const dot = !isLast || endsWithDot ? "." : "";
                return (
                    <span key={i} className="block">
                        {s}
                        {dot}
                    </span>
                );
            })}
        </p>
    );
}

const SERVICE_BLOCKS: ServiceBlock[] = [
    {
        id: "planned-maintenance",
        title: "תחזוקה שוטפת ומתוכננת",
        kicker: "תוכנית תחזוקה מסודרת שמותאמת למתקנים. לעומסים. ולשימוש היומיומי.",
        tags: ["תוכנית שנתית / רבעונית", "ביקורות קבועות", "דוחות מסודרים"],
        paragraphs: [
            "אנחנו בונים יחד איתכם תוכנית תחזוקה שנתית או רבעונית, שמותאמת לסוג המתקנים, כמות הרכבים והאופי של החניון. לכל ביקור יש צ'קליסט מסודר, כך ששום פריט חשוב לא נשאר מאחור.",
            "אחרי כל ביקורת אתם מקבלים סיכום ברור. עם תמונות, סטטוס של כל מתקן והמלצות להמשך טיפול. בנוסף, אנחנו שומרים היסטוריית טיפולים לכל מתקן. כדי שתמיד תוכלו לדעת מה נעשה ומתי.",
        ],
    },
    {
        id: "repairs",
        title: "תיקונים ותקלות",
        kicker: "כשהמתקן לא עובד. יש מי שמגיע, מאבחן ומחזיר אותו לעבודה בצורה בטוחה.",
        tags: ["טיפול חירום", "שחרור רכבים תקועים", "החלפת חלקים"],
        paragraphs: [
            "כשמתקן החניה לא עולה, לא יורד או פשוט מסרב להגיב. אנחנו נכנסים לפעולה. הטכנאים שלנו יודעים לשחרר רכבים תקועים בצורה בטוחה, לאבחן במהירות את מקור התקלה ולהחליף את החלקים הבעייתיים.",
            "במקום לחכות שזה יקרוס. אנחנו מחזירים גם מתקנים ותיקים לעבודה תקינה. ובמקרים רבים חוסכים את הצורך בהחלפה מלאה של המערכת.",
        ],
    },
    {
        id: "safety",
        title: "הכנה לבדיקות ובטיחות",
        kicker: "דואגים שהמתקנים יהיו מוכנים לבדיקות. לעמידה בתקן. ולדרישות גורמי הפיקוח.",
        tags: ["הכנה לבודק מוסמך", "טיפול בליקויים", "בדיקות יזומות"],
        paragraphs: [
            "אנחנו מכינים את המתקנים לבדיקות של בודק מוסמך או מהנדס בטיחות. כדי שיגיעו לבדיקה כשהכול מדויק ומוכן. ליקויים שעלו בביקורות קודמות מטופלים מראש. יחד עם התאמה לדרישות התקן והיצרן.",
            "בנוסף, ניתן לבצע בדיקות בטיחות יזומות בהתאם להנחיות הגופים הרלוונטיים. המטרה. שלא תופתעו בבדיקה. ולא תישארו עם מתקן שלא עומד בדרישות.",
        ],
    },
    {
        id: "upgrades",
        title: "שדרוגים ושיפורים",
        kicker: "מערכות ותיקות יכולות לעבוד כמו חדשות. עם שדרוגים נכונים במקום החלפה מלאה.",
        tags: ["שדרוג בקרה", "חוויית משתמש", "התאמה לעומסים חדשים"],
        paragraphs: [
            "במקום להחליף את כל המערכת, אפשר לעדכן רק את מה שבאמת צריך. אנחנו משדרגים מערכות בקרה ישנות לדגמים חדשים ונוחים יותר. משפרים את חוויית המשתמש באמצעות שילוט, תאורה ולחצני הפעלה ברורים.",
            "במידת הצורך, המערכת מותאמת לשינויים בשימוש. יותר רכבים, כניסה של רכבי SUV וחשמליים, או שינוי אופי החניון. השדרוגים האלו מאריכים את חיי המתקן ומפחיתים תקלות קדימה.",
        ],
    },
    {
        id: "projects",
        title: "ליווי מקצועי בפרויקטים חדשים",
        kicker: "משלב התכנון ועד יום המסירה. יש לכם כתובת אחת מקצועית למתקני החניה.",
        tags: ["ייעוץ תכנון", "תיאום בין גורמים", "העברה לתחזוקה שוטפת"],
        paragraphs: [
            "אנחנו נכנסים לתמונה כבר בשלב התכנון. מסייעים לבחור את סוגי המתקנים שמתאימים למגרש, לתכנון האדריכלי ולצרכים העתידיים של הבניין או החניון.",
            "לאורך הדרך אנחנו מתאמים בין האדריכל, היזם וספק המתקנים. מלווים את ההרכבה וההרצה. ובסיום הפרויקט מעבירים את האתר למצב של תחזוקה שוטפת. עם נהלי עבודה והעברת מקל מסודרת.",
        ],
    },
    {
        id: "training",
        title: "הדרכה ושגרות שימוש",
        kicker: "כשמשתמשים נכון במתקן. הוא עובד יותר טוב, ליותר זמן, עם פחות תקלות.",
        tags: ["הדרכת ועד / ניהול", "נהלי שימוש", "שילוט למשתמשים"],
        paragraphs: [
            "אנחנו מדריכים את ועד הבית או חברת הניהול על שימוש נכון ובטוח במתקני החניה. מה מותר, מה אסור, ומה עושים כשמשהו מרגיש לא תקין.",
            "יחד בונים נהלי שימוש למשתמשים. כולל טיפים, עשה ואל תעשה ונהלי חירום בסיסיים. אפשר לשלב גם שירות של עיצוב שילוט ברור לחניון. כדי שכל משתמש יבין איך להשתמש במערכת כבר בניסיון הראשון.",
        ],
    },
];

type ServiceCardProps = {
    block: ServiceBlock;
    index: number;
};

function ServiceCard({ block, index }: ServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const isNegative = index % 2 === 1;

    const ringGradient = isNegative
        ? `linear-gradient(135deg, rgba(233,211,126,0.10), rgba(233,211,126,0.55), rgba(207,210,214,0.18), rgba(233,211,126,0.10))`
        : `linear-gradient(135deg, rgba(207,210,214,0.10), rgba(184,130,72,0.55), rgba(233,186,108,0.50), rgba(207,210,214,0.10))`;

    const cardBg = isNegative
        ? "linear-gradient(180deg, rgba(30,31,36,0.66), rgba(30,31,36,0.42))"
        : "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))";

    const borderColor = isNegative
        ? "rgba(233,211,126,0.22)"
        : "rgba(207,210,214,0.18)";

    const titleColor = isNegative ? "rgba(255,255,255,0.92)" : SILVER;

    const tagBorder = isNegative
        ? "rgba(207,210,214,0.20)"
        : "rgba(233,211,126,0.26)";

    const tagBg = isNegative
        ? "linear-gradient(135deg, rgba(207,210,214,0.06), rgba(233,211,126,0.06))"
        : "linear-gradient(135deg, rgba(233,211,126,0.07), rgba(184,130,72,0.05))";

    const tagGlow = isNegative
        ? "0 0 16px rgba(207,210,214,0.10)"
        : "0 0 16px rgba(233,211,126,0.12)";

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
                style={{ backgroundImage: ringGradient, backgroundSize: "260% 260%" }}
                animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    aria-expanded={isOpen}
                    className="group relative w-[220px] md:w-[240px] min-h-[220px] rounded-[1.35rem] border px-4 py-4 md:px-5 md:py-5 text-right flex flex-col items-center backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03]"
                    style={{
                        backgroundImage: cardBg,
                        borderColor,
                        boxShadow: isNegative
                            ? "0 0 0 1px rgba(233,211,126,0.10), 0 18px 36px rgba(0,0,0,0.34)"
                            : "0 0 0 1px rgba(207,210,214,0.08), 0 18px 36px rgba(0,0,0,0.32)",
                    }}
                >
                    <div className="flex flex-col items-center justify-start flex-1 w-full text-center">
                        <h3 className="text-sm md:text-base font-semibold mb-1.5" style={{ color: titleColor }}>
                            {block.title}
                        </h3>

                        <SentenceLines
                            text={block.kicker}
                            className="text-[0.75rem] md:text-[0.8rem] mb-2.5"
                            style={{ color: "rgba(207,210,214,0.74)" }}
                        />

                        <div className="flex flex-wrap justify-center gap-1.5 mb-2">
                            {block.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center justify-center px-2 py-1 text-center border rounded-2xl"
                                    style={{
                                        backgroundImage: tagBg,
                                        borderColor: tagBorder,
                                        boxShadow: tagGlow,
                                    }}
                                >
                                    <span className="text-[0.7rem]" style={{ color: "rgba(255,255,255,0.84)" }}>
                                        {tag.replaceAll("־", "").replaceAll("-", " ")}
                                    </span>
                                </span>
                            ))}
                        </div>

                        {!isOpen && (
                            <p className="mt-1 text-[0.72rem] md:hidden animate-pulse" style={{ color: "rgba(207,210,214,0.72)" }}>
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
                        className="w-full overflow-hidden text-right"
                    >
                        <div className="text-[0.75rem] md:text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                            {block.paragraphs.map((text, i) => (
                                <SentenceLines key={i} text={text} className="mb-1.5 last:mb-0" style={{ color: "rgba(255,255,255,0.80)" }} />
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
            <div className="max-w-5xl px-4 mx-auto">
                <motion.header
                    className="relative text-center mb-7 md:mb-9"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                        <div
                            className="h-44 w-[min(700px,92vw)] rounded-full blur-3xl opacity-70"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 45%, rgba(233,211,126,0.22), rgba(233,186,108,0.14), rgba(184,130,72,0.06), transparent 70%)",
                            }}
                        />
                    </div>

                    <div aria-hidden className="absolute -translate-x-1/2 pointer-events-none -top-6 left-1/2 -z-10">
                        <div
                            className="h-16 w-[min(520px,88vw)] rounded-full blur-2xl opacity-60"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 50%, rgba(233,211,126,0.18), rgba(207,210,214,0.07), transparent 70%)",
                            }}
                        />
                    </div>

                    <motion.h1
                        className="mb-3 text-xl font-semibold md:text-2xl"
                        style={{ color: SILVER }}
                        variants={fadeUp}
                        custom={0}
                    >
                        שירותי תחזוקה מקיפים למתקני חניה
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

                    <SentenceLines
                        text={
                            "חברת התחזוקה מתמחה בליווי מלא של מתקני החניה. מהקמה וכניסה לפעולה ועד תחזוקה שוטפת ושדרוגים לאורך השנים. אנחנו עובדים לפי תוכנית עבודה ברורה. עם שקיפות מלאה, דוחות מסודרים ומענה מהיר לתקלות. כדי לאפשר לכם חניה בטוחה ויציבה לאורך זמן."
                        }
                        className="max-w-3xl mx-auto text-sm leading-relaxed md:text-base"
                        style={{ color: TEXT }}
                    />

                    <motion.p
                        className="mt-2 text-[0.8rem]"
                        style={{ color: "rgba(207,210,214,0.72)" }}
                        variants={fadeUp}
                        custom={3}
                    >
                        בחרו שירות כדי לראות את הפירוט המלא.
                    </motion.p>
                </motion.header>

                <section className="flex flex-wrap justify-center max-w-4xl gap-4 mx-auto md:gap-5">
                    {SERVICE_BLOCKS.map((block, index) => (
                        <ServiceCard key={block.id} block={block} index={index} />
                    ))}
                </section>
            </div>
        </main>
    );
}
