import { motion } from "framer-motion";
import { FaRedoAlt } from "react-icons/fa";
import type { ProcessStep } from "./maintenance.data";
import { cardVariants, fadeUp, GOLD_1, GOLD_2, GOLD_3, MUTED, PROCESS_POSITIONS, SILVER, TEXT } from "./maintenance.constants";

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
        <motion.div variants={cardVariants} custom={index} className={`absolute ${positionClass} w-[198px] max-w-[220px]`}>
            <div
                className="relative rounded-2xl border px-4 py-3.5 shadow-[0_14px_32px_rgba(0,0,0,0.42)] backdrop-blur-md"
                style={{
                    backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.72), rgba(30,31,36,0.50))",
                    borderColor: "rgba(233,211,126,0.20)",
                }}
            >
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    <span
                        className="inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold"
                        style={{
                            backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                            color: "rgba(0,0,0,0.86)",
                            boxShadow: "0 10px 20px rgba(0,0,0,0.45)",
                        }}
                    >
                        שלב {index + 1}
                    </span>
                </div>

                <h3 className="mt-2 text-sm md:text-[0.95rem] font-semibold mb-1.5 text-center" style={{ color: SILVER }}>
                    {step.title}
                </h3>

                <p className="text-[0.78rem] md:text-[0.8rem] leading-relaxed text-center" style={{ color: TEXT }}>
                    {step.text}
                </p>
            </div>
        </motion.div>
    );
}

function MobileProcessStepper({ steps }: { steps: ProcessStep[] }) {
    return (
        <div className="relative md:hidden">
            <div className="mb-4 text-center">
                <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.55)" }} />
                    <motion.span
                        className="h-[3px] w-44 rounded-full"
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

                <p className="mt-2 text-[0.82rem]" style={{ color: MUTED }}>
                    תהליך מחזורי שחוזר על עצמו.
                    <br />
                    כל שלב מתועד.
                    <br />
                    הכול נשאר בשליטה.
                </p>
            </div>

            <div className="relative">
                <div className="absolute right-[10px] top-0 bottom-0 w-[2px] overflow-hidden rounded-full">
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(180deg, rgba(184,130,72,0.10), rgba(233,211,126,0.55), rgba(233,186,108,0.22), rgba(184,130,72,0.10))",
                            backgroundSize: "100% 200%",
                        }}
                        animate={{ backgroundPositionY: ["0%", "100%", "0%"] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                <ul className="space-y-3.5 pr-8">
                    {steps.map((s, i) => (
                        <motion.li key={s.title} variants={cardVariants} custom={i} className="relative">
                            <div className="absolute right-[2px] top-4">
                                <span
                                    className="relative inline-flex items-center justify-center w-5 h-5 border rounded-full"
                                    style={{
                                        backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.86), rgba(30,31,36,0.55))",
                                        borderColor: "rgba(233,211,126,0.22)",
                                        boxShadow: "0 0 18px rgba(233,211,126,0.14)",
                                    }}
                                >
                                    <span
                                        className="h-2.5 w-2.5 rounded-full"
                                        style={{ backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})` }}
                                    />
                                </span>
                            </div>

                            <div
                                className="relative rounded-2xl border px-4 py-3.5 backdrop-blur-md"
                                style={{
                                    backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.66), rgba(30,31,36,0.42))",
                                    borderColor: "rgba(207,210,214,0.16)",
                                    boxShadow: "0 14px 28px rgba(0,0,0,0.38)",
                                }}
                            >
                                <div className="flex items-center justify-between gap-3 mb-1.5">
                                    <h3 className="text-[0.9rem] font-semibold" style={{ color: SILVER }}>
                                        {s.title}
                                    </h3>

                                    <span
                                        className="inline-flex items-center justify-center rounded-full px-2 py-1 text-[0.72rem] font-semibold border"
                                        style={{
                                            color: "rgba(0,0,0,0.86)",
                                            borderColor: "rgba(233,211,126,0.18)",
                                            backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                                            boxShadow: "0 10px 18px rgba(0,0,0,0.40)",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        שלב {i + 1}
                                    </span>
                                </div>

                                <p className="text-[0.82rem] leading-relaxed" style={{ color: TEXT }}>
                                    {s.text}
                                </p>
                            </div>
                        </motion.li>
                    ))}

                    <motion.li variants={cardVariants} custom={steps.length} className="relative">
                        <div className="absolute right-[2px] top-4">
                            <span
                                className="relative inline-flex items-center justify-center w-5 h-5 border rounded-full"
                                style={{
                                    backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.86), rgba(30,31,36,0.55))",
                                    borderColor: "rgba(233,211,126,0.22)",
                                    boxShadow: "0 0 18px rgba(233,211,126,0.14)",
                                }}
                            >
                                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.75)" }} />
                            </span>
                        </div>

                        <div
                            className="relative rounded-2xl border px-4 py-3.5 backdrop-blur-md"
                            style={{
                                backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                                borderColor: "rgba(233,211,126,0.20)",
                                boxShadow: "0 14px 28px rgba(0,0,0,0.38)",
                            }}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <p className="text-[0.82rem] font-semibold" style={{ color: SILVER }}>
                                    ואז חוזרים להתחלה.
                                    <br />
                                    זה בדיוק מה שמונע הפתעות.
                                </p>

                                <span
                                    className="inline-flex items-center justify-center border h-9 w-9 rounded-xl"
                                    style={{
                                        backgroundImage: "linear-gradient(135deg, rgba(233,211,126,0.20), rgba(233,186,108,0.10))",
                                        borderColor: "rgba(233,211,126,0.22)",
                                        boxShadow: "0 0 18px rgba(233,211,126,0.14)",
                                        color: "rgba(255,255,255,0.92)",
                                    }}
                                >
                                    <FaRedoAlt className="text-[14px]" />
                                </span>
                            </div>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </div>
    );
}

export function ProcessSection({ steps }: { steps: ProcessStep[] }) {
    return (
        <section className="mb-8 md:mb-10">
            <motion.div
                className="mb-4 text-right md:mb-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeUp}
                custom={0}
            >
                <h2 className="text-base font-semibold md:text-lg" style={{ color: SILVER }}>
                    תהליך תחזוקה שוטפת בתנועה מעגלית רציפה
                </h2>
            </motion.div>

            <motion.div
                className="relative px-3 py-4 border rounded-3xl md:px-6 md:py-6 backdrop-blur-md"
                style={{
                    backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.60), rgba(30,31,36,0.38))",
                    borderColor: "rgba(233,211,126,0.18)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.42)",
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
                variants={fadeUp}
                custom={1}
            >
                <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                    <div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 h-52 w-[min(720px,92vw)] rounded-full blur-3xl opacity-70"
                        style={{
                            background: "radial-gradient(circle at 50% 20%, rgba(233,211,126,0.18), rgba(233,186,108,0.10), transparent 70%)",
                        }}
                    />
                    <div
                        className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-[min(760px,92vw)] rounded-full blur-3xl opacity-55"
                        style={{
                            background: "radial-gradient(circle at 50% 70%, rgba(207,210,214,0.10), rgba(184,130,72,0.08), transparent 70%)",
                        }}
                    />
                </div>

                <div className="relative hidden md:block">
                    <div className="relative max-w-3xl mx-auto aspect-square">
                        <motion.div
                            className="absolute border rounded-full inset-8"
                            style={{
                                borderColor: "rgba(207,210,214,0.20)",
                                boxShadow: "0 0 26px rgba(233,211,126,0.14), inset 0 0 18px rgba(207,210,214,0.10)",
                            }}
                        />

                        <motion.div
                            className="absolute border border-dashed rounded-full inset-12"
                            style={{
                                borderColor: "rgba(233,211,126,0.22)",
                                boxShadow: "inset 0 0 0 1px rgba(233,211,126,0.06)",
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                        />

                        <motion.div
                            className="absolute rounded-full inset-14"
                            style={{
                                background: "radial-gradient(circle at 30% 0%, rgba(233,211,126,0.14), transparent 58%)",
                            }}
                        />

                        <motion.div
                            className="absolute inset-[28%] rounded-full border border-dashed flex items-center justify-center px-6 text-center"
                            style={{
                                borderColor: "rgba(233,211,126,0.26)",
                                backgroundImage: "radial-gradient(circle, rgba(30,31,36,0.86), rgba(30,31,36,0.62))",
                                boxShadow: "0 18px 40px rgba(0,0,0,0.48)",
                            }}
                        >
                            <div>
                                <p className="text-[0.8rem] mb-1.5" style={{ color: MUTED }}>
                                    תחזוקה שוטפת למתקני חניה
                                </p>
                                <p className="text-sm md:text-[0.95rem] font-semibold" style={{ color: SILVER }}>
                                    תהליך מחזורי שחוזר על עצמו ומונע תקלות לפני שהן מפריעות לשגרה.
                                </p>
                            </div>
                        </motion.div>

                        {steps.map((step, index) => (
                            <ProcessStepBubble key={step.title} step={step} index={index} positionClass={PROCESS_POSITIONS[index]} />
                        ))}
                    </div>
                </div>

                <MobileProcessStepper steps={steps} />
            </motion.div>
        </section>
    );
}
