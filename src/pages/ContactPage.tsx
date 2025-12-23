import { useMemo, useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
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

const ACCENT = "#1A2A80" as const;
const TEXT = "#1F2937" as const;

const WHATSAPP_NUMBER = "972500000000";
const PHONE_DISPLAY = "03-XXXXXXX";
const EMAIL = "info@example.com";

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

const PRIMARY_BTN =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[0.85rem] font-semibold text-white bg-brand hover:bg-brand-dark shadow-md shadow-brand-soft/60 transition";

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

    useMemo(() => {
        // keep memo for future extensions if needed
    }, []);

    const setField =
        (key: keyof ContactFormState) =>
            (
                e:
                    | React.ChangeEvent<HTMLInputElement>
                    | React.ChangeEvent<HTMLTextAreaElement>
                    | React.ChangeEvent<HTMLSelectElement>
            ) => {
                setForm((p) => ({ ...p, [key]: e.target.value }));
            };

    const statusLabel = (s: ContactStatus) => {
        if (s === "maintenance") return "צריך תחזוקה שוטפת";
        if (s === "fault") return "תקלה במתקן קיים";
        if (s === "newProject") return "פרויקט חדש או תכנון חניה";
        return "לא צוין";
    };

    const openWhatsAppWithSummary = () => {
        const summary = [
            `שם: ${form.fullName || "—"}`,
            `טלפון: ${form.phone || "—"}`,
            `אימייל: ${form.email || "—"}`,
            `כתובת/עיר: ${form.address || "—"}`,
            `סוג מתקן: ${form.systemType || "—"}`,
            `סטטוס: ${statusLabel(status)}`,
            `הודעה: ${form.message || "—"}`,
        ].join("\n");

        const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `שלום, אשמח לקבל מענה לגבי מתקן חניה:\n\n${summary}`
        )}`;

        window.open(link, "_blank", "noopener,noreferrer");
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        openWhatsAppWithSummary();
    };

    return (
        <main dir="rtl" className={`relative py-10 md:py-14 ${className}`}>
            <div className="absolute inset-0 pointer-events-none -z-10" />

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
                        style={{ color: ACCENT }}
                        variants={fadeUp}
                        custom={0}
                    >
                        יש לכם מתקן חניה שצריך טיפול? בואו נדבר
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
                            animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="w-2 h-2 rounded-full bg-brand-soft" />
                    </motion.div>

                    <motion.p
                        className="max-w-3xl mx-auto text-sm leading-relaxed md:text-base"
                        style={{ color: TEXT }}
                        variants={fadeUp}
                        custom={2}
                    >
                        השאירו פרטים או צרו קשר ישיר, ונחזור אליכם עם מענה מהיר לגבי תחזוקה שוטפת,
                        טיפול בתקלות או שדרוג המתקן שלכם.
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
                        className="rounded-3xl bg-gradient-to-b from-slate-50/90 via-white to-slate-50/80 border border-slate-200/80 px-4 py-5 md:px-5 md:py-6 shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
                    >
                        <h2 className="mb-2 text-base font-semibold md:text-lg" style={{ color: ACCENT }}>
                            פרטי יצירת קשר
                        </h2>

                        <p className="text-[0.85rem] md:text-sm text-slate-700 mb-4">
                            אפשר ליצור קשר בטלפון, בוואטסאפ או במייל.
                        </p>

                        <div className="space-y-3.5 md:space-y-4">
                            <div className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white shadow-[0_6px_16px_rgba(15,23,42,0.18)] border border-slate-200/80">
                                    <FaPhoneAlt className="text-[0.9rem]" style={{ color: ACCENT }} />
                                </span>

                                <div className="flex-1">
                                    <p className="text-[0.78rem] text-brand-muted mb-1">טלפון</p>
                                    <input
                                        readOnly
                                        value={PHONE_DISPLAY}
                                        onFocus={(e) => e.currentTarget.select()}
                                        className="w-full px-3 py-2 text-sm bg-white border shadow-inner outline-none rounded-xl border-slate-200/80 text-slate-900 shadow-slate-200/30 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white shadow-[0_6px_16px_rgba(15,23,42,0.18)] border border-slate-200/80">
                                    <FaWhatsapp className="text-[1rem] text-[#25D366]" />
                                </span>

                                <div className="flex-1">
                                    <p className="text-[0.78rem] text-brand-muted mb-1">וואטסאפ</p>
                                    <input
                                        readOnly
                                        value={`0${WHATSAPP_NUMBER.slice(3)}`}
                                        onFocus={(e) => e.currentTarget.select()}
                                        className="w-full px-3 py-2 text-sm bg-white border shadow-inner outline-none rounded-xl border-slate-200/80 text-slate-900 shadow-slate-200/30 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white shadow-[0_6px_16px_rgba(15,23,42,0.18)] border border-slate-200/80">
                                    <MdEmail className="text-[1rem]" style={{ color: ACCENT }} />
                                </span>

                                <div className="flex-1">
                                    <p className="text-[0.78rem] text-brand-muted mb-1">מייל</p>
                                    <input
                                        readOnly
                                        value={EMAIL}
                                        onFocus={(e) => e.currentTarget.select()}
                                        className="w-full px-3 py-2 text-sm bg-white border shadow-inner outline-none rounded-xl border-slate-200/80 text-slate-900 shadow-slate-200/30 focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
                                    />
                                </div>
                            </div>

                            {/* centered button */}
                            <div className="flex justify-center pt-1">
                                <button
                                    type="button"
                                    onClick={() => formRef.current?.requestSubmit()}
                                    className={PRIMARY_BTN}
                                >
                                    <FaWhatsapp className="text-base" />
                                    <span>שלחו את הפרטים</span>
                                </button>
                            </div>

                            <div className="pt-3 border-t border-slate-200/70">
                                <p className="text-[0.78rem] text-brand-muted mb-1">אזורי שירות</p>
                                <p className="text-sm md:text-[0.95rem] text-slate-800">
                                    מרכז, שרון, שפלה ואזורים נוספים בתיאום.
                                </p>
                            </div>
                        </div>
                    </motion.aside>

                    <motion.section
                        variants={cardVariants}
                        custom={0.5}
                        className="rounded-3xl bg-white/98 border border-slate-200/80 px-4 py-5 md:px-6 md:py-6 shadow-[0_20px_45px_rgba(15,23,42,0.16)]"
                    >
                        <div className="mb-4 md:mb-5">
                            <h2 className="mb-1 text-base font-semibold md:text-lg" style={{ color: ACCENT }}>
                                השאירו פרטים ונחזור אליכם עם פתרון
                            </h2>
                            <p className="text-[0.85rem] md:text-sm text-slate-700">
                                ספרו לנו בקצרה איזה מתקן יש אצלכם ומה אתם מחפשים, ונחזור אליכם עם הצעה מותאמת.
                            </p>
                        </div>

                        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="fullName"
                                        className="text-[0.8rem] md:text-[0.85rem] font-medium text-slate-800"
                                    >
                                        שם מלא
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        value={form.fullName}
                                        onChange={setField("fullName")}
                                        placeholder="לדוגמה: ישראל ישראלי"
                                        className="rounded-xl border border-slate-200/80 bg-slate-50/40 px-3 py-2.5 text-sm md:text-[0.9rem] text-slate-900 shadow-inner shadow-slate-200/40 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="phone"
                                        className="text-[0.8rem] md:text-[0.85rem] font-medium text-slate-800"
                                    >
                                        טלפון
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        value={form.phone}
                                        onChange={setField("phone")}
                                        placeholder="לדוגמה: 05XXXXXXXX"
                                        className="rounded-xl border border-slate-200/80 bg-slate-50/40 px-3 py-2.5 text-sm md:text-[0.9rem] text-slate-900 shadow-inner shadow-slate-200/40 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="email"
                                        className="text-[0.8rem] md:text-[0.85rem] font-medium text-slate-800"
                                    >
                                        אימייל
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={setField("email")}
                                        placeholder="לדוגמה: name@mail.com"
                                        className="rounded-xl border border-slate-200/80 bg-slate-50/40 px-3 py-2.5 text-sm md:text-[0.9rem] text-slate-900 shadow-inner shadow-slate-200/40 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="address"
                                        className="text-[0.8rem] md:text-[0.85rem] font-medium text-slate-800"
                                    >
                                        כתובת או עיר
                                    </label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        value={form.address}
                                        onChange={setField("address")}
                                        placeholder="לדוגמה: תל אביב"
                                        className="rounded-xl border border-slate-200/80 bg-slate-50/40 px-3 py-2.5 text-sm md:text-[0.9rem] text-slate-900 shadow-inner shadow-slate-200/40 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="systemType"
                                    className="text-[0.8rem] md:text-[0.85rem] font-medium text-slate-800"
                                >
                                    סוג המתקן אם ידוע
                                </label>
                                <select
                                    id="systemType"
                                    name="systemType"
                                    value={form.systemType}
                                    onChange={setField("systemType")}
                                    className="rounded-xl border border-slate-200/80 bg-slate-50/60 px-3 py-2.5 text-sm md:text-[0.9rem] text-slate-900 shadow-inner shadow-slate-200/40 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70"
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
                                <p className="text-[0.8rem] md:text-[0.85rem] font-medium text-slate-800">
                                    מה המצב היום?
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setStatus((prev) => (prev === "maintenance" ? null : "maintenance"))
                                        }
                                        className={`px-3.5 py-1.5 rounded-full text-[0.78rem] md:text-[0.8rem] border transition ${status === "maintenance"
                                                ? "bg-brand-dark text-white border-brand-dark shadow-[0_10px_25px_rgba(15,23,42,0.4)]"
                                                : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                                            }`}
                                    >
                                        צריך תחזוקה שוטפת
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setStatus((prev) => (prev === "fault" ? null : "fault"))}
                                        className={`px-3.5 py-1.5 rounded-full text-[0.78rem] md:text-[0.8rem] border transition ${status === "fault"
                                                ? "bg-brand-dark text-white border-brand-dark shadow-[0_10px_25px_rgba(15,23,42,0.4)]"
                                                : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                                            }`}
                                    >
                                        תקלה במתקן קיים
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setStatus((prev) => (prev === "newProject" ? null : "newProject"))
                                        }
                                        className={`px-3.5 py-1.5 rounded-full text-[0.78rem] md:text-[0.8rem] border transition ${status === "newProject"
                                                ? "bg-brand-dark text-white border-brand-dark shadow-[0_10px_25px_rgba(15,23,42,0.4)]"
                                                : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
                                            }`}
                                    >
                                        פרויקט חדש או תכנון חניה
                                    </button>
                                </div>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={setField("message")}
                                    placeholder="ספרו לנו בקצרה מה קורה בשטח או מה אתם מחפשים..."
                                    className="mt-1 rounded-xl border border-slate-200/80 bg-slate-50/40 px-3 py-2.5 text-sm md:text-[0.9rem] text-slate-900 shadow-inner shadow-slate-200/40 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark/70 resize-y"
                                />
                            </div>

                            <div className="flex flex-col gap-2 pt-1 md:flex-row md:items-center md:justify-between">
                                <button type="submit" className={PRIMARY_BTN}>
                                    <FaWhatsapp className="text-base" />
                                    <span>שלחו את הפרטים</span>
                                </button>

                                <p className="text-[0.78rem] md:text-[0.8rem] text-brand-muted max-w-xs md:text-right">
                                    לא אוהבים טפסים? אפשר גם לשלוח לנו תמונה של המתקן בוואטסאפ, ונחזור אליכם עם תשובות.
                                </p>
                            </div>
                        </form>
                    </motion.section>
                </motion.section>
            </div>
        </main>
    );
}
