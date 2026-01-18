import { useCallback, useMemo, useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaShieldAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type ContactPageProps = {
    className?: string;
};

type ContactStatus = "maintenance" | "fault" | "newProject" | null;

type ContactFormState = {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    systemType: string;
    message: string;
};

const SILVER = "#cfd2d6" as const;
const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

const TEXT = "rgba(255,255,255,0.78)" as const;
const MUTED = "rgba(207,210,214,0.72)" as const;

const WHATSAPP_NUMBER = "972500000000";
const PHONE_DISPLAY = "03-XXXXXXX";
const EMAIL = "info@example.com";

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

const INPUT_BASE =
    "w-full rounded-xl border bg-transparent px-3 py-2.5 text-sm md:text-[0.9rem] outline-none transition shadow-inner";
const INPUT_FOCUS =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.22)]";

const PRIMARY_BTN =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[0.85rem] font-semibold border transition";

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
    return (
        <label htmlFor={htmlFor} className="text-[0.8rem] md:text-[0.85rem] font-medium">
            {children}
        </label>
    );
}

function IconTile({ children }: { children: React.ReactNode }) {
    return (
        <span
            className="flex items-center justify-center w-8 h-8 border rounded-2xl"
            style={{
                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.70), rgba(30,31,36,0.44))",
                borderColor: "rgba(233,211,126,0.20)",
                boxShadow: "0 12px 22px rgba(0,0,0,0.40)",
                color: "rgba(255,255,255,0.92)",
            }}
        >
            {children}
        </span>
    );
}

function StatusChip({
    active,
    onClick,
    children,
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-3.5 py-1.5 rounded-full text-[0.78rem] md:text-[0.8rem] border transition"
            style={{
                backgroundImage: active
                    ? `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`
                    : "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.30))",
                borderColor: active ? "rgba(233,211,126,0.26)" : "rgba(207,210,214,0.16)",
                color: active ? "rgba(0,0,0,0.86)" : "rgba(255,255,255,0.86)",
                boxShadow: active ? "0 14px 28px rgba(0,0,0,0.45)" : "0 10px 20px rgba(0,0,0,0.34)",
            }}
        >
            {children}
        </button>
    );
}

export default function ContactPage({ className = "" }: ContactPageProps) {
    const [status, setStatus] = useState<ContactStatus>(null);
    const [form, setForm] = useState<ContactFormState>({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        systemType: "",
        message: "",
    });

    const formRef = useRef<HTMLFormElement | null>(null);

    const setField = useCallback(
        (key: keyof ContactFormState) =>
            (
                e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
                    | React.ChangeEvent<HTMLSelectElement>
            ) => {
                setForm((p) => ({ ...p, [key]: e.target.value }));
            },
        []
    );

    const toggleStatus = useCallback((next: Exclude<ContactStatus, null>) => {
        setStatus((prev) => (prev === next ? null : next));
    }, []);

    const statusLabel = useCallback((s: ContactStatus) => {
        if (s === "maintenance") return "צריך תחזוקה שוטפת";
        if (s === "fault") return "תקלה במתקן קיים";
        if (s === "newProject") return "פרויקט חדש או תכנון חניה";
        return "לא צוין";
    }, []);

    const whatsappLink = useMemo(() => {
        const summary = [
            `שם: ${form.fullName || "—"}`,
            `טלפון: ${form.phone || "—"}`,
            `אימייל: ${form.email || "—"}`,
            `כתובת/עיר: ${form.address || "—"}`,
            `סוג מתקן: ${form.systemType || "—"}`,
            `סטטוס: ${statusLabel(status)}`,
            `הודעה: ${form.message || "—"}`,
        ].join("\n");

        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `שלום, אשמח לקבל מענה לגבי מתקן חניה:\n\n${summary}`
        )}`;
    }, [form, status, statusLabel]);

    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            window.open(whatsappLink, "_blank", "noopener,noreferrer");
        },
        [whatsappLink]
    );

    const headerLine = useMemo(
        () => (
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
        ),
        []
    );

    return (
        <main dir="rtl" className={`relative py-10 md:py-14 ${className}`}>
            <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 18%, rgba(233,211,126,0.18), rgba(233,186,108,0.10), rgba(30,31,36,0) 62%)",
                        opacity: 0.95,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl px-4 mx-auto">
                <motion.header
                    className="mb-8 text-center md:mb-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={0}
                >
                    <motion.h1
                        className="mb-3 text-xl font-semibold md:text-2xl"
                        style={{ color: SILVER }}
                        variants={fadeUp}
                        custom={0}
                    >
                        יש לכם מתקן חניה שצריך טיפול? בואו נדבר
                    </motion.h1>

                    {headerLine}

                    <motion.p
                        className="max-w-3xl mx-auto text-sm leading-relaxed md:text-base"
                        style={{ color: TEXT }}
                        variants={fadeUp}
                        custom={2}
                    >
                        השאירו פרטים או צרו קשר ישיר, ונחזור אליכם עם מענה מהיר לגבי תחזוקה שוטפת, טיפול בתקלות או שדרוג המתקן
                        שלכם.
                    </motion.p>

                    <motion.p className="mt-2 text-[0.8rem]" style={{ color: MUTED }} variants={fadeUp} custom={3}>
                        תיאום מהיר. סיכום ברור. תיעוד מסודר.
                    </motion.p>
                </motion.header>

                <motion.section
                    className="grid gap-6 md:gap-7 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] items-start"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.35 }}
                    variants={fadeUp}
                    custom={1}
                >
                    <motion.aside
                        variants={cardVariants}
                        custom={0}
                        className="relative px-4 py-5 overflow-hidden border rounded-3xl md:px-5 md:py-6 backdrop-blur-md"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.62), rgba(30,31,36,0.38))",
                            borderColor: "rgba(233,211,126,0.18)",
                            boxShadow: "0 18px 40px rgba(0,0,0,0.42)",
                        }}
                    >
                        <div aria-hidden className="absolute inset-0 pointer-events-none">
                            <div
                                className="absolute -top-14 left-1/2 -translate-x-1/2 h-44 w-[360px] rounded-full blur-3xl opacity-70"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 35%, rgba(233,211,126,0.16), rgba(233,186,108,0.10), transparent 70%)",
                                }}
                            />
                        </div>

                        <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                                <span
                                    className="inline-flex items-center justify-center border w-9 h-9 rounded-2xl"
                                    style={{
                                        backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.76), rgba(30,31,36,0.46))",
                                        borderColor: "rgba(233,211,126,0.22)",
                                        boxShadow: "0 0 18px rgba(233,211,126,0.12)",
                                        color: "rgba(255,255,255,0.92)",
                                    }}
                                >
                                    <FaShieldAlt className="text-[14px]" />
                                </span>

                                <h2 className="text-base font-semibold md:text-lg" style={{ color: SILVER }}>
                                    פרטי יצירת קשר
                                </h2>
                            </div>

                            <p className="text-[0.85rem] md:text-sm mb-4" style={{ color: TEXT }}>
                                אפשר ליצור קשר בטלפון, בוואטסאפ או במייל.
                            </p>

                            <div className="space-y-3.5 md:space-y-4">
                                <div className="flex items-center gap-2.5">
                                    <IconTile>
                                        <FaPhoneAlt className="text-[0.9rem]" />
                                    </IconTile>

                                    <div className="flex-1">
                                        <p className="text-[0.78rem] mb-1" style={{ color: MUTED }}>
                                            טלפון
                                        </p>
                                        <input
                                            readOnly
                                            value={PHONE_DISPLAY}
                                            onFocus={(e) => e.currentTarget.select()}
                                            className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                            style={{
                                                borderColor: "rgba(207,210,214,0.18)",
                                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.60), rgba(30,31,36,0.38))",
                                                color: "rgba(255,255,255,0.92)",
                                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <IconTile>
                                        <FaWhatsapp className="text-[1rem]" />
                                    </IconTile>

                                    <div className="flex-1">
                                        <p className="text-[0.78rem] mb-1" style={{ color: MUTED }}>
                                            וואטסאפ
                                        </p>
                                        <input
                                            readOnly
                                            value={`0${WHATSAPP_NUMBER.slice(3)}`}
                                            onFocus={(e) => e.currentTarget.select()}
                                            className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                            style={{
                                                borderColor: "rgba(207,210,214,0.18)",
                                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.60), rgba(30,31,36,0.38))",
                                                color: "rgba(255,255,255,0.92)",
                                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center gap-2.5">
                                    <IconTile>
                                        <MdEmail className="text-[1rem]" />
                                    </IconTile>

                                    <div className="flex-1">
                                        <p className="text-[0.78rem] mb-1" style={{ color: MUTED }}>
                                            מייל
                                        </p>
                                        <input
                                            readOnly
                                            value={EMAIL}
                                            onFocus={(e) => e.currentTarget.select()}
                                            className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                            style={{
                                                borderColor: "rgba(207,210,214,0.18)",
                                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.60), rgba(30,31,36,0.38))",
                                                color: "rgba(255,255,255,0.92)",
                                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center pt-1">
                                    <button
                                        type="button"
                                        onClick={() => formRef.current?.requestSubmit()}
                                        className={PRIMARY_BTN}
                                        style={{
                                            color: "rgba(0,0,0,0.86)",
                                            borderColor: "rgba(233,211,126,0.22)",
                                            backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                                            boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
                                        }}
                                    >
                                        <FaWhatsapp className="text-base" />
                                        <span>שלחו את הפרטים</span>
                                    </button>
                                </div>

                                <div className="pt-3 border-t" style={{ borderColor: "rgba(207,210,214,0.14)" }}>
                                    <p className="text-[0.78rem] mb-1" style={{ color: MUTED }}>
                                        אזורי שירות
                                    </p>
                                    <p className="text-sm md:text-[0.95rem]" style={{ color: TEXT }}>
                                        מרכז, שרון, שפלה ואזורים נוספים בתיאום.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.aside>

                    <motion.section
                        variants={cardVariants}
                        custom={0.5}
                        className="relative px-4 py-5 overflow-hidden border rounded-3xl md:px-6 md:py-6 backdrop-blur-md"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.62), rgba(30,31,36,0.40))",
                            borderColor: "rgba(207,210,214,0.16)",
                            boxShadow: "0 20px 45px rgba(0,0,0,0.42)",
                        }}
                    >
                        <div aria-hidden className="absolute inset-0 pointer-events-none">
                            <div
                                className="absolute -top-16 left-1/2 -translate-x-1/2 h-52 w-[min(760px,92vw)] rounded-full blur-3xl opacity-55"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 20%, rgba(233,211,126,0.14), rgba(233,186,108,0.10), transparent 70%)",
                                }}
                            />
                            <div
                                className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-56 w-[min(760px,92vw)] rounded-full blur-3xl opacity-40"
                                style={{
                                    background:
                                        "radial-gradient(circle at 50% 70%, rgba(207,210,214,0.10), rgba(184,130,72,0.08), transparent 70%)",
                                }}
                            />
                        </div>

                        <div className="relative">
                            <div className="mb-4 md:mb-5">
                                <h2 className="mb-1 text-base font-semibold md:text-lg" style={{ color: SILVER }}>
                                    השאירו פרטים ונחזור אליכם עם פתרון
                                </h2>
                                <p className="text-[0.85rem] md:text-sm" style={{ color: TEXT }}>
                                    ספרו לנו בקצרה איזה מתקן יש אצלכם ומה אתם מחפשים, ונחזור אליכם עם הצעה מותאמת.
                                </p>
                            </div>

                            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="flex flex-col gap-1.5">
                                        <FieldLabel htmlFor="fullName">
                                            <span style={{ color: "rgba(255,255,255,0.86)" }}>שם מלא</span>
                                        </FieldLabel>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            required
                                            value={form.fullName}
                                            onChange={setField("fullName")}
                                            placeholder="לדוגמה: ישראל ישראלי"
                                            className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                            style={{
                                                borderColor: "rgba(207,210,214,0.16)",
                                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.34))",
                                                color: "rgba(255,255,255,0.92)",
                                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <FieldLabel htmlFor="phone">
                                            <span style={{ color: "rgba(255,255,255,0.86)" }}>טלפון</span>
                                        </FieldLabel>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={setField("phone")}
                                            placeholder="לדוגמה: 05XXXXXXXX"
                                            className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                            style={{
                                                borderColor: "rgba(207,210,214,0.16)",
                                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.34))",
                                                color: "rgba(255,255,255,0.92)",
                                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="flex flex-col gap-1.5">
                                        <FieldLabel htmlFor="email">
                                            <span style={{ color: "rgba(255,255,255,0.86)" }}>אימייל</span>
                                        </FieldLabel>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={setField("email")}
                                            placeholder="לדוגמה: name@mail.com"
                                            className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                            style={{
                                                borderColor: "rgba(207,210,214,0.16)",
                                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.34))",
                                                color: "rgba(255,255,255,0.92)",
                                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1.5">
                                        <FieldLabel htmlFor="address">
                                            <span style={{ color: "rgba(255,255,255,0.86)" }}>כתובת או עיר</span>
                                        </FieldLabel>
                                        <input
                                            id="address"
                                            name="address"
                                            type="text"
                                            value={form.address}
                                            onChange={setField("address")}
                                            placeholder="לדוגמה: תל אביב"
                                            className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                            style={{
                                                borderColor: "rgba(207,210,214,0.16)",
                                                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.34))",
                                                color: "rgba(255,255,255,0.92)",
                                                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <FieldLabel htmlFor="systemType">
                                        <span style={{ color: "rgba(255,255,255,0.86)" }}>סוג המתקן אם ידוע</span>
                                    </FieldLabel>
                                    <select
                                        id="systemType"
                                        name="systemType"
                                        value={form.systemType}
                                        onChange={setField("systemType")}
                                        className={`${INPUT_BASE} ${INPUT_FOCUS}`}
                                        style={{
                                            borderColor: "rgba(207,210,214,0.16)",
                                            backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.34))",
                                            color: "rgba(255,255,255,0.92)",
                                            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                        }}
                                    >
                                        <option value="" disabled>
                                            בחרו סוג מתקן
                                        </option>
                                        <option value="multipliers">מכפיל</option>
                                        <option value="embedded">מתקן טמון</option>
                                        <option value="puzzle">פאזל</option>
                                        <option value="automatic">אוטומטי</option>
                                        <option value="notSure">לא בטוח</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <p className="text-[0.8rem] md:text-[0.85rem] font-medium" style={{ color: "rgba(255,255,255,0.86)" }}>
                                        מה המצב היום?
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        <StatusChip active={status === "maintenance"} onClick={() => toggleStatus("maintenance")}>
                                            צריך תחזוקה שוטפת
                                        </StatusChip>

                                        <StatusChip active={status === "fault"} onClick={() => toggleStatus("fault")}>
                                            תקלה במתקן קיים
                                        </StatusChip>

                                        <StatusChip active={status === "newProject"} onClick={() => toggleStatus("newProject")}>
                                            פרויקט חדש או תכנון חניה
                                        </StatusChip>
                                    </div>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={setField("message")}
                                        placeholder="ספרו לנו בקצרה מה קורה בשטח או מה אתם מחפשים..."
                                        className={`${INPUT_BASE} ${INPUT_FOCUS} resize-y`}
                                        style={{
                                            borderColor: "rgba(207,210,214,0.16)",
                                            backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.55), rgba(30,31,36,0.34))",
                                            color: "rgba(255,255,255,0.92)",
                                            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col gap-2 pt-1 md:flex-row md:items-center md:justify-between">
                                    <button
                                        type="submit"
                                        className={PRIMARY_BTN}
                                        style={{
                                            color: "rgba(0,0,0,0.86)",
                                            borderColor: "rgba(233,211,126,0.22)",
                                            backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                                            boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
                                        }}
                                    >
                                        <FaWhatsapp className="text-base" />
                                        <span>שלחו את הפרטים</span>
                                    </button>

                                    <p className="text-[0.78rem] md:text-[0.8rem] max-w-xs md:text-right" style={{ color: MUTED }}>
                                        לא אוהבים טפסים? אפשר גם לשלוח לנו תמונה של המתקן בוואטסאפ, ונחזור אליכם עם תשובות.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.section>
                </motion.section>
            </div>
        </main>
    );
}
