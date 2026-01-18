import { motion } from "framer-motion";
import { FaFileAlt, FaShieldAlt, FaSmile, FaTools, FaWallet } from "react-icons/fa";
import type { BenefitItem } from "./maintenance.data";
import { cardVariants, fadeUp, SILVER, TEXT } from "./maintenance.constants";

function benefitIcon(kind: BenefitItem["icon"]) {
    const cls = "text-[14px]";
    if (kind === "tools") return <FaTools className={cls} />;
    if (kind === "smile") return <FaSmile className={cls} />;
    if (kind === "shield") return <FaShieldAlt className={cls} />;
    if (kind === "file") return <FaFileAlt className={cls} />;
    return <FaWallet className={cls} />;
}

function BenefitCard({ benefit, index }: { benefit: BenefitItem; index: number }) {
    const isAlt = index % 2 === 1;

    return (
        <motion.li variants={cardVariants} custom={index} className="flex-1 min-w-[210px] max-w-[250px] flex justify-center">
            <div
                className="relative w-full px-4 py-4 overflow-hidden text-right border rounded-2xl backdrop-blur-md"
                style={{
                    backgroundImage: isAlt
                        ? "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                        : "linear-gradient(180deg, rgba(30,31,36,0.66), rgba(30,31,36,0.45))",
                    borderColor: isAlt ? "rgba(207,210,214,0.18)" : "rgba(233,211,126,0.20)",
                    boxShadow: "0 14px 30px rgba(0,0,0,0.38)",
                }}
            >
                <div aria-hidden className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute w-32 h-32 rounded-full -top-12 -left-10 blur-3xl opacity-60"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(233,211,126,0.18), rgba(233,186,108,0.10), transparent 70%)",
                        }}
                    />
                </div>

                <div className="relative flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-sm md:text-[0.95rem] font-semibold mb-1.5" style={{ color: SILVER }}>
                            {benefit.title}
                        </h3>
                        <p className="text-[0.8rem] md:text-sm leading-relaxed" style={{ color: TEXT }}>
                            {benefit.text}
                        </p>
                    </div>

                    <span
                        className="inline-flex items-center justify-center border shrink-0 h-9 w-9 rounded-xl"
                        style={{
                            backgroundImage: "linear-gradient(135deg, rgba(233,211,126,0.20), rgba(233,186,108,0.12))",
                            borderColor: "rgba(233,211,126,0.22)",
                            color: "rgba(255,255,255,0.92)",
                            boxShadow: "0 0 18px rgba(233,211,126,0.14)",
                        }}
                    >
                        {benefitIcon(benefit.icon)}
                    </span>
                </div>
            </div>
        </motion.li>
    );
}

export function BenefitsSection({ items }: { items: BenefitItem[] }) {
    return (
        <section className="mb-9 md:mb-11">
            <motion.div
                className="mb-4 text-right md:mb-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeUp}
                custom={0}
            >
                <h2 className="text-base font-semibold md:text-lg" style={{ color: SILVER }}>
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
                {items.map((benefit, index) => (
                    <BenefitCard key={benefit.title} benefit={benefit} index={index} />
                ))}
            </motion.ul>
        </section>
    );
}
