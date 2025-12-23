import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "972500000000";

const HeroSection: React.FC = () => {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "שלום, אשמח לקבל פרטים לגבי תחזוקה שוטפת או טיפול חד-פעמי למתקן החניה."
    )}`;

    return (
        <section className="relative py-10 md:py-14">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/BGHero.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-brand/45" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
                <div className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,1.9fr)_minmax(0,1.1fr)] items-stretch">
                    <div className="bg-white/80 border border-brand-soft/80 shadow-lg shadow-brand-soft/40 rounded-2xl px-5 py-6 md:px-7 md:py-7 flex flex-col justify-center items-center backdrop-blur-sm">
                        <div className="w-full max-w-xl text-center">
                            <p className="text-xs md:text-sm font-medium text-brand-muted mb-2">
                                אביב פתרונות חניה · תחזוקה, מכירה ותיקון מתקנים
                            </p>

                            <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-brand-dark">
                                תחזוקה בראש שקט למתקני החניה שלכם
                            </h1>

                            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                                <span className="block">
                                    אנחנו דואגים למתקנים. אתם דואגים לדיירים.
                                </span>
                                <span className="block">
                                    שירותי תחזוקה, בדיקות ותיקונים לכל סוגי מתקני החניה.
                                </span>
                                <span className="block">
                                    עם עמידה מלאה בתקנים ותגובה מהירה לתקלות.
                                </span>
                            </p>

                            <ul className="text-sm md:text-[0.95rem] text-slate-800 space-y-1.5 mb-6">
                                <li>
                                    ✔ ליווי ותחזוקה לכל מתקני פתרונות החניה ויצרנים נוספים
                                </li>
                                <li>
                                    ✔ תוכנית תחזוקה מותאמת לבנייני מגורים, משרדים וחניונים פרטיים
                                </li>
                                <li>
                                    ✔ דוחות מסודרים לביטוח, לוועד הבית ולחברת הניהול
                                </li>
                                <li>
                                    ✔ זמינות גבוהה לטיפול בתקלות ושחרור רכבים תקועים
                                </li>
                            </ul>

                            <div className="flex flex-col items-center gap-2">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[0.85rem] font-semibold !text-white bg-brand hover:bg-brand-dark shadow-md shadow-brand-soft/60 transition"
                                >
                                    <FaWhatsapp className="text-white text-lg" />
                                    <span className="text-white">טיפול למתקן החניה שלי</span>
                                </a>
                                <p className="text-[0.78rem] md:text-xs text-brand-muted">
                                    משאירים פרטים. חוזרים אליכם עם הצעה לתחזוקה שוטפת או טיפול חד־פעמי.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:justify-end">
                        <div className="relative w-full max-w-[280px] h-40 md:h-48">
                            <div className="absolute inset-0 rounded-2xl border-[1.5px] border-brand-muted shadow-md shadow-brand-soft/40 bg-white/80 backdrop-blur-sm" />

                            <div className="relative flex h-full items-center justify-center">
                                <div className="rounded-xl bg-gradient-to-r from-brand-dark to-brand text-white/95 px-4 py-2 text-center text-xs md:text-sm">
                                    <p className="leading-snug">
                                        כאן יופיע הלוגו של
                                        <br />
                                        <span className="font-semibold">
                                            אביב פתרונות חניה
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
