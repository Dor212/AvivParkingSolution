import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BENEFITS, CHECKLIST, PROCESS_STEPS } from "./components/maintenance.data";
import { fadeUp } from "./components/maintenance.constants";
import { useScrollProgress } from "./components/useScrollProgress";
import { MaintenanceHeader } from "./components/MaintenanceHeader";
import { ProcessSection } from "./components/ProcessSection";
import { ChecklistSection } from "./components/ChecklistSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { FloatingCta } from "./components/FloatingCta";

type MaintenancePageProps = {
    className?: string;
};

export default function MaintenancePage({ className = "" }: MaintenancePageProps) {
    const [dismissed, setDismissed] = useState(false);
    const [forceOpen, setForceOpen] = useState(false);

    const scrollProgress = useScrollProgress();
    const showFloatingCta = !dismissed && (forceOpen || scrollProgress > 0.3);

    return (
        <main dir="rtl" className={`py-10 md:py-14 ${className}`}>
            <div className="max-w-5xl px-4 mx-auto">
                <MaintenanceHeader />

                <ProcessSection steps={PROCESS_STEPS} />
                <ChecklistSection items={CHECKLIST} />
                <BenefitsSection items={BENEFITS} />

                <section className="flex justify-center">
                    <motion.button
                        type="button"
                        onClick={() => {
                            setDismissed(false);
                            setForceOpen(true);
                        }}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[0.85rem] font-semibold border backdrop-blur-md transition"
                        style={{
                            color: "rgba(255,255,255,0.92)",
                            borderColor: "rgba(233,211,126,0.24)",
                            backgroundImage: "linear-gradient(90deg, rgba(30,31,36,0.55), rgba(30,31,36,0.30))",
                            boxShadow: "0 16px 34px rgba(0,0,0,0.40)",
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeUp}
                        custom={0}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FaWhatsapp className="text-base" />
                        <span>שלחו הודעה לתוכנית תחזוקה</span>
                    </motion.button>
                </section>
            </div>

            {showFloatingCta && (
                <FloatingCta
                    onClose={() => {
                        setDismissed(true);
                        setForceOpen(false);
                    }}
                />
            )}
        </main>
    );
}
