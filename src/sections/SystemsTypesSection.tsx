import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type SystemsTypesSectionProps = {
    id?: string;
    className?: string;
};

type SystemType = {
    id: string;
    label: string;
    title: string;
    description: string;
    note: string;
    imageSrc: string;
};

const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

const SILVER = "#cfd2d6" as const;

const easeCurve = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: 0.12 * i, ease: easeCurve },
    }),
};

const stripeContainer: Variants = {
    hidden: { opacity: 0, y: 26 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: easeCurve,
            when: "beforeChildren",
            staggerChildren: 0.12,
        },
    },
};

const imageVariants: Variants = {
    hidden: (dir: number = 1) => ({
        opacity: 0,
        x: 26 * dir,
        scale: 0.9,
    }),
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.6, ease: easeCurve },
    },
};

const contentVariants: Variants = {
    hidden: (dir: number = -1) => ({
        opacity: 0,
        x: 18 * dir,
        y: 10,
    }),
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: easeCurve },
    },
};

const TYPES: SystemType[] = [
    {
        id: "mechanical",
        label: "מתקנים מכניים",
        title: "מכפילי חניה ומערכות מכניות",
        description:
            "מכפילי חניה תלויים, קונזוליים, מתקנים טמונים ומערכות מבוססות שרשראות. טיפול שוטף בשרשראות, בצירים, במיסבים, בעיגונים ובמערכות האיזון.",
        note: "מתלבטים איזה מתקן יש אצלכם? שלחו לנו תמונה או תכנית ואנחנו נכוון אתכם.",
        imageSrc: `${import.meta.env.BASE_URL}images/installations/mechanical.jpg`,
    },
    {
        id: "hydraulic",
        label: "מתקנים הידראוליים טמונים",
        title: "מערכות עם בוכנות מתחת למפלס הקרקע",
        description:
            "מערכות שמבוססות על בוכנות הידראוליות ותאי משאבה מתחת למפלס החניה. בדיקות לחץ, אטמים, שמנים, מנגנוני בטיחות ותעלות ניקוז כדי לשמור על עבודה רציפה.",
        note: "מתלבטים איזה מתקן יש אצלכם? שלחו לנו תמונה או תכנית ואנחנו נכוון אתכם.",
        imageSrc: `${import.meta.env.BASE_URL}images/installations/hydraulic.jpg`,
    },
    {
        id: "semi-auto",
        label: "מערכות חצי אוטומטיות",
        title: "פאזל ומערכות חניה מודולריות",
        description:
            "מערכות שבהן הרכבים נעים אופקית ואנכית על גבי מסילות ושרשראות. דגש על כיול חיישנים, מנועים, עצירות קצה ומערכות הבקרה שמנהלות את כל התנועה.",
        note: "מתלבטים איזה מתקן יש אצלכם? שלחו לנו תמונה או תכנית ואנחנו נכוון אתכם.",
        imageSrc: `${import.meta.env.BASE_URL}images/installations/semi-auto.jpg`,
    },
    {
        id: "robotic",
        label: "מערכות אוטומטיות ורובוטיות",
        title: "קרוסלות, מגדלי חניה וכוורות רובוטיות",
        description:
            "חניוני קרוסלה, מגדלי חניה ומערכות רובוטיות מלאות. תחזוקה לממשקי הנעה, בקרה, בטיחות ואינטגרציה למערכות ניהול החניון ומערכות הבניין.",
        note: "מתלבטים איזה מתקן יש אצלכם? שלחו לנו תמונה או תכנית ואנחנו נכוון אתכם.",
        imageSrc: `${import.meta.env.BASE_URL}images/installations/robotic.jpg`,
    },
];

function TypeStripe({ type, index }: { type: SystemType; index: number }) {
    const isEvenLayout = index % 2 === 0;
    const imgDir = isEvenLayout ? 1 : -1;
    const contentDir = isEvenLayout ? -1 : 1;

    const isNegative = index % 2 === 1;

    const stripeBgClass = isNegative ? "bg-white/5" : "bg-white/8";

    const stripeStyle: React.CSSProperties = isNegative
        ? {
            borderColor: "rgba(233,211,126,0.18)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
            backgroundImage:
                "linear-gradient(180deg, rgba(184,130,72,0.07), rgba(0,0,0,0) 62%)," +
                "radial-gradient(520px 240px at 82% 10%, rgba(233,211,126,0.09), rgba(0,0,0,0) 60%)",
        }
        : {
            borderColor: "rgba(207,210,214,0.16)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
            backgroundImage:
                "linear-gradient(180deg, rgba(207,210,214,0.06), rgba(0,0,0,0) 62%)," +
                "radial-gradient(520px 240px at 18% 18%, rgba(207,210,214,0.08), rgba(0,0,0,0) 60%)",
        };

    const labelColor = isNegative ? "rgba(233,211,126,0.86)" : "rgba(207,210,214,0.76)";
    const titleColor = isNegative ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.90)";
    const descColor = isNegative ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.76)";
    const noteColor = isNegative ? "rgba(207,210,214,0.72)" : "rgba(233,211,126,0.76)";

    const dividerStyle: React.CSSProperties = isNegative
        ? {
            backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0), rgba(207,210,214,0.44), rgba(255,255,255,0))",
            opacity: 0.85,
        }
        : {
            backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
            opacity: 0.88,
        };

    const imageFrameStyle: React.CSSProperties = isNegative
        ? {
            borderColor: "rgba(233,211,126,0.28)",
            backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02), rgba(255,255,255,0.038))",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 0 26px rgba(233,211,126,0.14)",
        }
        : {
            borderColor: "rgba(207,210,214,0.22)",
            backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02), rgba(255,255,255,0.038))",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 44px rgba(0,0,0,0.26)",
        };

    return (
        <motion.div
            variants={stripeContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.45, once: false }}
            custom={index}
            className={`rounded-3xl border backdrop-blur-md relative overflow-hidden ${stripeBgClass}`}
            style={stripeStyle}
        >
            <span
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: isNegative
                        ? "linear-gradient(180deg, rgba(233,211,126,0.028), rgba(0,0,0,0))"
                        : "linear-gradient(180deg, rgba(207,210,214,0.026), rgba(0,0,0,0))",
                    opacity: 0.85,
                }}
            />

            <div
                className={`relative flex flex-col md:flex-row ${isEvenLayout ? "" : "md:flex-row-reverse"
                    } items-stretch`}
            >
                <motion.div
                    className="flex items-stretch md:w-5/12"
                    variants={imageVariants}
                    custom={imgDir}
                >
                    <div className="flex items-center justify-center w-full h-40 px-4 py-4 md:h-48 lg:h-56 md:px-6 md:py-5">
                        <div
                            className="w-full h-full max-w-xs mx-auto overflow-hidden border rounded-2xl"
                            style={imageFrameStyle}
                        >
                            <img
                                src={type.imageSrc}
                                alt={type.title}
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex items-center px-4 py-4 md:w-7/12 md:px-6 md:py-6"
                    variants={contentVariants}
                    custom={contentDir}
                >
                    <div className="w-full max-w-xl mx-auto text-right">
                        <p
                            className="text-[0.8rem] md:text-xs font-semibold mb-1.5 text-center md:text-right tracking-wide"
                            style={{ color: labelColor }}
                        >
                            {type.label}
                        </p>

                        <h3
                            className="mb-2 text-sm font-semibold text-center md:text-base md:text-right"
                            style={{ color: titleColor }}
                        >
                            {type.title}
                        </h3>

                        <p
                            className="text-sm md:text-[0.95rem] leading-relaxed mb-3 text-center md:text-right"
                            style={{ color: descColor }}
                        >
                            {type.description}
                        </p>

                        <p
                            className="text-[0.78rem] md:text-xs text-center md:text-right"
                            style={{ color: noteColor }}
                        >
                            {type.note}
                        </p>

                        <div className="flex justify-center mt-4 md:justify-start">
                            <div className="h-[3px] w-24 rounded-full" style={dividerStyle} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function SystemsTypesSection({
    id = "systems-types",
    className = "",
}: SystemsTypesSectionProps) {
    return (
        <section id={id} dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl px-4 mx-auto">
                <motion.div
                    className="mb-6 text-center md:mb-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.4, once: false }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h2
                        className="mb-3 text-xl font-semibold md:text-2xl"
                        style={{ color: SILVER }}
                        variants={fadeUp}
                        custom={0}
                    >
                        תחזוקה לכל סוגי מתקני החניה
                    </motion.h2>

                    <motion.div
                        className="flex items-center justify-center gap-2 mb-2"
                        variants={fadeUp}
                        custom={1}
                    >
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "rgba(233,211,126,0.45)" }}
                        />
                        <motion.div
                            className="h-[3px] w-32 md:w-40 rounded-full"
                            style={{
                                backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                                backgroundSize: "200% 100%",
                                opacity: 0.85,
                            }}
                            animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                        />
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "rgba(233,211,126,0.45)" }}
                        />
                    </motion.div>

                    <motion.p
                        className="max-w-2xl mx-auto mt-1 text-sm md:text-base"
                        style={{ color: "rgba(255,255,255,0.76)" }}
                        variants={fadeUp}
                        custom={2}
                    >
                        הצוות שלנו מכיר לעומק את המוצרים של מעולה פתרונות החניה ושל יצרנים נוספים בשוק. אנחנו מטפלים במגוון רחב של
                        מתקנים, משני מקומות חניה בבניין קטן ועד מערכות רובוטיות מתקדמות.
                    </motion.p>
                </motion.div>

                <div className="space-y-5 md:space-y-6">
                    {TYPES.map((t, index) => (
                        <TypeStripe key={t.id} type={t} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
