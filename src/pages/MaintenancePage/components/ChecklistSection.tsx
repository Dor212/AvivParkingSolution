import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import type { ChecklistItem } from "./maintenance.data";
import { cardVariants, fadeUp, SILVER } from "./maintenance.constants";

function ChecklistPill({ item, index }: { item: ChecklistItem; index: number }) {
    return (
        <motion.li variants={cardVariants} custom={index} className="flex">
            <div
                className="w-full rounded-2xl border px-3.5 py-3 backdrop-blur-md"
                style={{
                    backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.58), rgba(30,31,36,0.38))",
                    borderColor: "rgba(207,210,214,0.16)",
                    boxShadow: "0 12px 26px rgba(0,0,0,0.38)",
                }}
            >
                <div className="flex items-start gap-2.5">
                    <span
                        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                        style={{
                            backgroundImage: "linear-gradient(135deg, rgba(233,211,126,0.20), rgba(233,186,108,0.12))",
                            borderColor: "rgba(233,211,126,0.22)",
                            color: "rgba(255,255,255,0.88)",
                            boxShadow: "0 0 18px rgba(233,211,126,0.12)",
                        }}
                    >
                        <FaCheckCircle className="text-[12px]" />
                    </span>

                    <span className="text-sm md:text-[0.95rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.84)" }}>
                        {item.text}
                    </span>
                </div>
            </div>
        </motion.li>
    );
}

export function ChecklistSection({ items }: { items: ChecklistItem[] }) {
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
                    מה אנחנו בודקים בכל ביקור תחזוקה
                </h2>
            </motion.div>

            <motion.div
                className="px-4 py-4 border rounded-3xl md:px-6 md:py-5 backdrop-blur-md"
                style={{
                    backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.62), rgba(30,31,36,0.40))",
                    borderColor: "rgba(207,210,214,0.16)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.40)",
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeUp}
                custom={1}
            >
                <motion.ul
                    className="grid gap-3 md:gap-3.5 md:grid-cols-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={fadeUp}
                    custom={2}
                >
                    {items.map((item, index) => (
                        <ChecklistPill key={index} item={item} index={index} />
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
}
