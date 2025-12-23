import React from "react";

const BUSINESS = {
    name: "אביב פתרונות חניה",
    phone: "03-XXXXXXX",
    email: "info@example.com",
    lastUpdated: "23/12/2025",
};

const ACCENT = "#1A2A80" as const;

export default function LegalPage() {
    return (
        <main dir="rtl" className="py-10 md:py-14">
            <div className="max-w-5xl px-4 mx-auto">
                <section className="rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_20px_55px_rgba(15,23,42,0.12)] overflow-hidden">
                    <div className="px-5 py-6 text-center md:px-8 md:py-8">
                        <p className="text-[0.8rem] md:text-sm text-slate-500">
                            עודכן לאחרונה: {BUSINESS.lastUpdated}
                        </p>

                        <h1
                            className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl"
                            style={{ color: ACCENT }}
                        >
                            מידע משפטי באתר
                        </h1>

                        <p className="max-w-2xl mx-auto mt-3 text-sm leading-relaxed md:text-base text-slate-700">
                            כאן תמצאו מדיניות פרטיות, מדיניות קוקיז ותנאי שימוש עבור אתר {BUSINESS.name}.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                            <a
                                className="px-4 py-2 text-sm transition bg-white border rounded-full border-slate-200 hover:bg-slate-50 text-slate-700"
                                href="#privacy"
                            >
                                מדיניות פרטיות
                            </a>
                            <a
                                className="px-4 py-2 text-sm transition bg-white border rounded-full border-slate-200 hover:bg-slate-50 text-slate-700"
                                href="#cookies"
                            >
                                מדיניות קוקיז
                            </a>
                            <a
                                className="px-4 py-2 text-sm transition bg-white border rounded-full border-slate-200 hover:bg-slate-50 text-slate-700"
                                href="#terms"
                            >
                                תנאי שימוש
                            </a>
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />

                    <div className="px-5 py-6 md:px-8 md:py-8">
                        <div className="max-w-3xl mx-auto">
                            <section id="privacy" className="scroll-mt-24">
                                <div className="flex items-center justify-center mb-4">
                                    <span className="h-[1px] w-16 bg-slate-200/90" />
                                    <span className="mx-3 text-xs font-semibold text-slate-500">
                                        מדיניות פרטיות
                                    </span>
                                    <span className="h-[1px] w-16 bg-slate-200/90" />
                                </div>

                                <h2 className="mb-3 text-xl font-semibold text-center md:text-2xl text-slate-900">
                                    מדיניות פרטיות
                                </h2>

                                <div className="space-y-3 text-sm leading-relaxed text-center text-slate-800 md:text-base">
                                    <p>
                                        מסמך זה מסביר כיצד {BUSINESS.name} אוספת ומשתמשת במידע בעת שימוש באתר.
                                    </p>

                                    <div className="p-4 text-right border rounded-2xl border-slate-200/80 bg-slate-50/70">
                                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                                            איזה מידע נאסף
                                        </h3>
                                        <ul className="list-disc pr-6 space-y-1.5 text-sm md:text-[0.95rem] text-slate-800">
                                            <li>
                                                מידע שאתם מזינים בטפסים: שם, טלפון, אימייל (אופציונלי), עיר/כתובת, סוג מתקן ותוכן ההודעה.
                                            </li>
                                            <li>
                                                מידע טכני בסיסי לתפעול ואבטחה: כתובת IP, סוג דפדפן, זמני גישה ושגיאות (ככל שנאסף).
                                            </li>
                                            <li>
                                                אם יופעלו בעתיד כלי מדידה/פרסום, הם יעבדו מידע רק לאחר הסכמה בקוקיז.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-4 text-right bg-white border rounded-2xl border-slate-200/80">
                                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                                            למה משתמשים במידע
                                        </h3>
                                        <ul className="list-disc pr-6 space-y-1.5 text-sm md:text-[0.95rem] text-slate-800">
                                            <li>מענה לפניות, תיאום שירות וטיפול בתקלות.</li>
                                            <li>שיפור השירות וחוויית המשתמש.</li>
                                            <li>אבטחה ותפעול תקין של האתר.</li>
                                        </ul>
                                    </div>

                                    <div className="p-4 text-right border rounded-2xl border-slate-200/80 bg-slate-50/70">
                                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                                            העברת מידע לצדדים שלישיים
                                        </h3>
                                        <ul className="list-disc pr-6 space-y-1.5 text-sm md:text-[0.95rem] text-slate-800">
                                            <li>
                                                אם אתם בוחרים לשלוח פנייה דרך WhatsApp, תוכן ההודעה והפרטים עוברים ל־WhatsApp/Meta לצורך פתיחת שיחה.
                                            </li>
                                            <li>
                                                ספקי תשתית (אחסון/CDN/אבטחה) עשויים לעבד מידע טכני לצורך תפעול והגנה.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="p-4 text-right bg-white border rounded-2xl border-slate-200/80">
                                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                                            יצירת קשר בנושא פרטיות
                                        </h3>
                                        <p className="text-sm md:text-[0.95rem] text-slate-800">
                                            אימייל:{" "}
                                            <a className="font-semibold hover:underline" href={`mailto:${BUSINESS.email}`}>
                                                {BUSINESS.email}
                                            </a>
                                            <br />
                                            טלפון:{" "}
                                            <a className="font-semibold hover:underline" href={`tel:${BUSINESS.phone}`}>
                                                {BUSINESS.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <div className="h-px my-10 bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />

                            <section id="cookies" className="scroll-mt-24">
                                <div className="flex items-center justify-center mb-4">
                                    <span className="h-[1px] w-16 bg-slate-200/90" />
                                    <span className="mx-3 text-xs font-semibold text-slate-500">
                                        מדיניות קוקיז
                                    </span>
                                    <span className="h-[1px] w-16 bg-slate-200/90" />
                                </div>

                                <h2 className="mb-3 text-xl font-semibold text-center md:text-2xl text-slate-900">
                                    מדיניות קוקיז
                                </h2>

                                <div className="space-y-3 text-sm leading-relaxed text-center text-slate-800 md:text-base">
                                    <p className="max-w-2xl mx-auto">
                                        האתר משתמש בעוגיות הכרחיות לתפעול ולשמירת העדפות. ניתן לבחור אם לאשר גם עוגיות אנליטיקס/שיווק דרך באנר הקוקיז.
                                    </p>

                                    <div className="grid gap-3 text-right md:grid-cols-3">
                                        <div className="p-4 bg-white border rounded-2xl border-slate-200/80">
                                            <p className="mb-1 text-xs font-semibold text-slate-500">הכרחיות</p>
                                            <p className="text-sm text-slate-800">
                                                תפעול בסיסי ושמירת העדפות.
                                            </p>
                                        </div>
                                        <div className="p-4 border rounded-2xl border-slate-200/80 bg-slate-50/70">
                                            <p className="mb-1 text-xs font-semibold text-slate-500">אנליטיקס</p>
                                            <p className="text-sm text-slate-800">
                                                מדידה ושיפור ביצועים (אם תאשרו).
                                            </p>
                                        </div>
                                        <div className="p-4 bg-white border rounded-2xl border-slate-200/80">
                                            <p className="mb-1 text-xs font-semibold text-slate-500">שיווק</p>
                                            <p className="text-sm text-slate-800">
                                                מדידה/פרסום (אם תאשרו).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="h-px my-10 bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />

                            <section id="terms" className="scroll-mt-24">
                                <div className="flex items-center justify-center mb-4">
                                    <span className="h-[1px] w-16 bg-slate-200/90" />
                                    <span className="mx-3 text-xs font-semibold text-slate-500">
                                        תנאי שימוש
                                    </span>
                                    <span className="h-[1px] w-16 bg-slate-200/90" />
                                </div>

                                <h2 className="mb-3 text-xl font-semibold text-center md:text-2xl text-slate-900">
                                    תנאי שימוש
                                </h2>

                                <div className="space-y-3 text-sm leading-relaxed text-center text-slate-800 md:text-base">
                                    <p>
                                        שימוש באתר מהווה הסכמה לתנאים אלו. האתר נועד להציג מידע וערוץ ליצירת קשר לגבי שירותי תחזוקה/תיקון/שדרוג מתקני חניה.
                                    </p>

                                    <div className="p-4 text-right bg-white border rounded-2xl border-slate-200/80">
                                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                                            פניות דרך האתר
                                        </h3>
                                        <p className="text-sm md:text-[0.95rem] text-slate-800">
                                            שליחת פנייה אינה מהווה התחייבות לזמני הגעה או למחיר. תיאום וזמינות ייקבעו בשיחה מול {BUSINESS.name}.
                                        </p>
                                    </div>

                                    <div className="p-4 text-right border rounded-2xl border-slate-200/80 bg-slate-50/70">
                                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                                            אחריות
                                        </h3>
                                        <p className="text-sm md:text-[0.95rem] text-slate-800">
                                            התוכן באתר הוא מידע כללי. ייתכנו טעויות או שינויים. {BUSINESS.name} אינה אחראית לנזק עקיף הנובע משימוש באתר.
                                        </p>
                                    </div>

                                    <div className="p-4 text-right bg-white border rounded-2xl border-slate-200/80">
                                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                                            דין וסמכות שיפוט
                                        </h3>
                                        <p className="text-sm md:text-[0.95rem] text-slate-800">
                                            על תנאים אלו יחולו דיני מדינת ישראל.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <div className="flex items-center justify-center mt-10">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-sm text-slate-700 transition"
                                >
                                    חזרה למעלה
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
