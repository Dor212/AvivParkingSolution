import { motion } from "framer-motion";
import { fadeUp, GOLD_1, GOLD_2, GOLD_3, MUTED, SILVER, TEXT } from "./maintenance.constants";

export function MaintenanceHeader() {
    return (
        <motion.header
            className="relative mb-8 text-center md:mb-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
            custom={0}
        >
            <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div
                    className="h-44 w-[min(760px,92vw)] rounded-full blur-3xl opacity-70"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 45%, rgba(233,211,126,0.22), rgba(233,186,108,0.12), rgba(184,130,72,0.06), transparent 70%)",
                    }}
                />
            </div>

            <motion.h1
                className="mb-3 text-xl font-semibold md:text-2xl"
                style={{ color: SILVER }}
                variants={fadeUp}
                custom={0}
            >
                תחזוקה שוטפת שמונעת תקלות ולא רק מטפלת בהן
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

            <motion.p
                className="max-w-3xl mx-auto text-sm leading-relaxed md:text-base"
                style={{ color: TEXT }}
                variants={fadeUp}
                custom={2}
            >
                במקום לחכות שהמתקן יתקע, אנחנו בונים תוכנית תחזוקה שוטפת שמטפלת בבלאי לפני שהוא הופך לבעיה.
                <br />
                כל ביקור אצלכם מתועד, מצולם ומלווה בהמלצות ברורות כדי שתדעו שכל מתקן חניה מטופל ומפוקח.
            </motion.p>

            <motion.p className="mt-2 text-[0.8rem]" style={{ color: MUTED }} variants={fadeUp} custom={3}>
                תהליך מסודר. תיעוד מלא. שקט לאורך זמן.
            </motion.p>
        </motion.header>
    );
}
