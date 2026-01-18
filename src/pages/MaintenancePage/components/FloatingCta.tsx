import { motion } from "framer-motion";
import { FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import { easeCurve, GOLD_1, GOLD_2, GOLD_3, MUTED, TEXT, WHATSAPP_NUMBER } from "./maintenance.constants";

type Props = {
    onClose: () => void;
};

export function FloatingCta({ onClose }: Props) {
    return (
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
                            background: "radial-gradient(circle at 50% 35%, rgba(233,211,126,0.20), rgba(233,186,108,0.12), transparent 70%)",
                        }}
                    />
                    <div
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 h-40 w-[320px] rounded-full blur-3xl opacity-55"
                        style={{
                            background: "radial-gradient(circle at 50% 65%, rgba(207,210,214,0.10), rgba(184,130,72,0.08), transparent 72%)",
                        }}
                    />
                </div>

                <button
                    type="button"
                    onClick={onClose}
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
                        צריכים תוכנית תחזוקה מסודרת?
                    </h2>
                </div>

                <p className="relative text-[0.78rem] mb-3" style={{ color: TEXT }}>
                    שלחו הודעה בוואטסאפ ונחזור אליכם עם הצעה שמותאמת למתקנים, לבניין ולשימוש אצלכם.
                </p>

                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        "שלום, אשמח לקבל פרטים על תוכנית תחזוקה שוטפת למתקני החניה."
                    )}`}
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
                    <span>שלחו הודעה</span>
                </a>

                <p className="relative mt-2 text-[0.72rem]" style={{ color: MUTED }}>
                    זמינות גבוהה ללקוחות תחזוקה שוטפת
                </p>
            </div>
        </motion.div>
    );
}
