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
        transition: {
            duration: 0.6,
            ease: easeCurve,
        },
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
        transition: {
            duration: 0.6,
            ease: easeCurve,
        },
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
    const isEven = index % 2 === 0;
    const stripeBgClass = isEven ? "bg-white/95" : "bg-brand-soft/10";
    const imgDir = isEven ? 1 : -1;
    const contentDir = isEven ? -1 : 1;

    return (
        <motion.div
            variants={stripeContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.45, once: false }}
            custom={index}
            className={`rounded-3xl ${stripeBgClass}`}
        >
            <div
                className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"
                    } items-stretch`}
            >
                <motion.div
                    className="md:w-5/12 flex items-stretch"
                    variants={imageVariants}
                    custom={imgDir}
                >
                    <div className="w-full h-40 md:h-48 lg:h-56 flex items-center justify-center px-4 md:px-6 py-4 md:py-5">
                        <div
                            className="w-full h-full max-w-xs mx-auto rounded-2xl border overflow-hidden bg-black/5"
                            style={{
                                borderColor: PURPLE_NEON,
                                boxShadow: "0 0 26px rgba(91,74,232,0.75)",
                            }}
                        >
                            <img
                                src={type.imageSrc}
                                alt={type.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-7/12 px-4 py-4 md:px-6 md:py-6 flex items-center"
                    variants={contentVariants}
                    custom={contentDir}
                >
                    <div className="w-full max-w-xl mx-auto text-right">
                        <p className="text-[0.8rem] md:text-xs font-semibold text-brand-muted mb-1.5 text-center md:text-right">
                            {type.label}
                        </p>

                        <h3
                            className="text-sm md:text-base font-semibold mb-2 text-center md:text-right"
                            style={{ color: ACCENT }}
                        >
                            {type.title}
                        </h3>

                        <p className="text-sm md:text-[0.95rem] text-slate-800 leading-relaxed mb-3 text-center md:text-right">
                            {type.description}
                        </p>

                        <p className="text-[0.78rem] md:text-xs text-brand-muted text-center md:text-right">
                            {type.note}
                        </p>
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
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    className="mb-6 md:mb-8 text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.4, once: false }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h2
                        className="text-xl md:text-2xl font-semibold mb-3"
                        style={{ color: ACCENT }}
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
                        הצוות שלנו מכיר לעומק את המוצרים של מעולה פתרונות החניה ושל יצרנים נוספים בשוק.
                        אנחנו מטפלים במגוון רחב של מתקנים, משני מקומות חניה בבניין קטן ועד מערכות רובוטיות מתקדמות.
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
