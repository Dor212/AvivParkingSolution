const BUSINESS = {
    name: "אביב פתרונות חניה",
    phone: "03-XXXXXXX",
    email: "info@example.com",
    lastUpdated: "23/12/2025",
};

const SILVER = "#cfd2d6" as const;
const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

const TEXT = "rgba(255,255,255,0.78)" as const;
const MUTED = "rgba(207,210,214,0.72)" as const;

const cardStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.62), rgba(30,31,36,0.40))",
    borderColor: "rgba(233,211,126,0.18)",
    boxShadow: "0 20px 55px rgba(0,0,0,0.48)",
};

const dividerCls = "h-px bg-gradient-to-r from-transparent via-white/10 to-transparent";

function ChipLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="px-4 py-2 text-sm transition border rounded-full backdrop-blur-md"
            style={{
                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.58), rgba(30,31,36,0.34))",
                borderColor: "rgba(207,210,214,0.16)",
                color: "rgba(255,255,255,0.86)",
                boxShadow: "0 14px 30px rgba(0,0,0,0.36)",
            }}
        >
            {children}
        </a>
    );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center mb-4">
            <span className="h-[1px] w-16" style={{ backgroundColor: "rgba(207,210,214,0.16)" }} />
            <span className="mx-3 text-xs font-semibold" style={{ color: MUTED }}>
                {children}
            </span>
            <span className="h-[1px] w-16" style={{ backgroundColor: "rgba(207,210,214,0.16)" }} />
        </div>
    );
}

function InfoBox({
    tone,
    title,
    children,
}: {
    tone: "dark" | "soft";
    title: string;
    children: React.ReactNode;
}) {
    const isSoft = tone === "soft";
    return (
        <div
            className="p-4 text-right border rounded-2xl backdrop-blur-md"
            style={{
                backgroundImage: isSoft
                    ? "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))"
                    : "linear-gradient(180deg, rgba(30,31,36,0.58), rgba(30,31,36,0.36))",
                borderColor: isSoft ? "rgba(207,210,214,0.16)" : "rgba(233,211,126,0.18)",
                boxShadow: "0 14px 30px rgba(0,0,0,0.34)",
            }}
        >
            <h3 className="mb-2 text-base font-semibold" style={{ color: SILVER }}>
                {title}
            </h3>
            <div className="text-sm md:text-[0.95rem] leading-relaxed" style={{ color: TEXT }}>
                {children}
            </div>
        </div>
    );
}

function TopGradientLine() {
    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.45)" }} />
            <span
                className="h-[3px] w-28 md:w-32 rounded-full"
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                    backgroundSize: "200% 100%",
                    opacity: 0.9,
                }}
            />
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(233,211,126,0.45)" }} />
        </div>
    );
}

export default function LegalPage() {
    return (
        <main dir="rtl" className="py-10 md:py-14">
            <div className="max-w-5xl px-4 mx-auto">
                <section className="relative overflow-hidden border rounded-3xl backdrop-blur-md" style={cardStyle}>
                    <div aria-hidden className="absolute inset-0 pointer-events-none">
                        <div
                            className="absolute -top-16 left-1/2 -translate-x-1/2 h-56 w-[min(900px,92vw)] rounded-full blur-3xl opacity-70"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 30%, rgba(233,211,126,0.18), rgba(233,186,108,0.10), rgba(184,130,72,0.06), transparent 70%)",
                            }}
                        />
                        <div
                            className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[min(940px,92vw)] rounded-full blur-3xl opacity-55"
                            style={{
                                background:
                                    "radial-gradient(circle at 50% 70%, rgba(207,210,214,0.10), rgba(184,130,72,0.08), transparent 70%)",
                            }}
                        />
                    </div>

                    <div className="relative px-5 py-6 text-center md:px-8 md:py-8">
                        <p className="text-[0.8rem] md:text-sm" style={{ color: MUTED }}>
                            עודכן לאחרונה: {BUSINESS.lastUpdated}
                        </p>

                        <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl" style={{ color: SILVER }}>
                            מידע משפטי באתר
                        </h1>

                        <TopGradientLine />

                        <p className="max-w-2xl mx-auto mt-3 text-sm leading-relaxed md:text-base" style={{ color: TEXT }}>
                            כאן תמצאו מדיניות פרטיות, מדיניות קוקיז ותנאי שימוש עבור אתר {BUSINESS.name}.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                            <ChipLink href="#privacy">מדיניות פרטיות</ChipLink>
                            <ChipLink href="#cookies">מדיניות קוקיז</ChipLink>
                            <ChipLink href="#terms">תנאי שימוש</ChipLink>
                        </div>
                    </div>

                    <div className={dividerCls} />

                    <div className="relative px-5 py-6 md:px-8 md:py-8">
                        <div className="max-w-3xl mx-auto">
                            <section id="privacy" className="scroll-mt-24">
                                <SectionBadge>מדיניות פרטיות</SectionBadge>

                                <h2 className="mb-3 text-xl font-semibold text-center md:text-2xl" style={{ color: SILVER }}>
                                    מדיניות פרטיות
                                </h2>

                                <div className="space-y-3 text-sm leading-relaxed text-center md:text-base" style={{ color: TEXT }}>
                                    <p>מסמך זה מסביר כיצד {BUSINESS.name} אוספת ומשתמשת במידע בעת שימוש באתר.</p>

                                    <InfoBox tone="dark" title="איזה מידע נאסף">
                                        <ul className="list-disc pr-6 space-y-1.5">
                                            <li>
                                                מידע שאתם מזינים בטפסים: שם, טלפון, אימייל (אופציונלי), עיר/כתובת, סוג מתקן ותוכן ההודעה.
                                            </li>
                                            <li>מידע טכני בסיסי לתפעול ואבטחה: כתובת IP, סוג דפדפן, זמני גישה ושגיאות (ככל שנאסף).</li>
                                            <li>אם יופעלו בעתיד כלי מדידה/פרסום, הם יעבדו מידע רק לאחר הסכמה בקוקיז.</li>
                                        </ul>
                                    </InfoBox>

                                    <InfoBox tone="soft" title="למה משתמשים במידע">
                                        <ul className="list-disc pr-6 space-y-1.5">
                                            <li>מענה לפניות, תיאום שירות וטיפול בתקלות.</li>
                                            <li>שיפור השירות וחוויית המשתמש.</li>
                                            <li>אבטחה ותפעול תקין של האתר.</li>
                                        </ul>
                                    </InfoBox>

                                    <InfoBox tone="dark" title="העברת מידע לצדדים שלישיים">
                                        <ul className="list-disc pr-6 space-y-1.5">
                                            <li>
                                                אם אתם בוחרים לשלוח פנייה דרך WhatsApp, תוכן ההודעה והפרטים עוברים ל־WhatsApp/Meta לצורך פתיחת
                                                שיחה.
                                            </li>
                                            <li>ספקי תשתית (אחסון/CDN/אבטחה) עשויים לעבד מידע טכני לצורך תפעול והגנה.</li>
                                        </ul>
                                    </InfoBox>

                                    <InfoBox tone="soft" title="יצירת קשר בנושא פרטיות">
                                        <p>
                                            אימייל:{" "}
                                            <a className="font-semibold hover:opacity-90" href={`mailto:${BUSINESS.email}`} style={{ color: SILVER }}>
                                                {BUSINESS.email}
                                            </a>
                                            <br />
                                            טלפון:{" "}
                                            <a className="font-semibold hover:opacity-90" href={`tel:${BUSINESS.phone}`} style={{ color: SILVER }}>
                                                {BUSINESS.phone}
                                            </a>
                                        </p>
                                    </InfoBox>
                                </div>
                            </section>

                            <div className="h-px my-10 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section id="cookies" className="scroll-mt-24">
                                <SectionBadge>מדיניות קוקיז</SectionBadge>

                                <h2 className="mb-3 text-xl font-semibold text-center md:text-2xl" style={{ color: SILVER }}>
                                    מדיניות קוקיז
                                </h2>

                                <div className="space-y-3 text-sm leading-relaxed text-center md:text-base" style={{ color: TEXT }}>
                                    <p className="max-w-2xl mx-auto">
                                        האתר משתמש בעוגיות הכרחיות לתפעול ולשמירת העדפות. ניתן לבחור אם לאשר גם עוגיות אנליטיקס/שיווק דרך
                                        באנר הקוקיז.
                                    </p>

                                    <div className="grid gap-3 text-right md:grid-cols-3">
                                        <InfoBox tone="soft" title="הכרחיות">
                                            <p>תפעול בסיסי ושמירת העדפות.</p>
                                        </InfoBox>
                                        <InfoBox tone="dark" title="אנליטיקס">
                                            <p>מדידה ושיפור ביצועים (אם תאשרו).</p>
                                        </InfoBox>
                                        <InfoBox tone="soft" title="שיווק">
                                            <p>מדידה/פרסום (אם תאשרו).</p>
                                        </InfoBox>
                                    </div>
                                </div>
                            </section>

                            <div className="h-px my-10 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            <section id="terms" className="scroll-mt-24">
                                <SectionBadge>תנאי שימוש</SectionBadge>

                                <h2 className="mb-3 text-xl font-semibold text-center md:text-2xl" style={{ color: SILVER }}>
                                    תנאי שימוש
                                </h2>

                                <div className="space-y-3 text-sm leading-relaxed text-center md:text-base" style={{ color: TEXT }}>
                                    <p>
                                        שימוש באתר מהווה הסכמה לתנאים אלו. האתר נועד להציג מידע וערוץ ליצירת קשר לגבי שירותי תחזוקה/תיקון/שדרוג
                                        מתקני חניה.
                                    </p>

                                    <InfoBox tone="soft" title="פניות דרך האתר">
                                        <p>
                                            שליחת פנייה אינה מהווה התחייבות לזמני הגעה או למחיר. תיאום וזמינות ייקבעו בשיחה מול {BUSINESS.name}.
                                        </p>
                                    </InfoBox>

                                    <InfoBox tone="dark" title="אחריות">
                                        <p>
                                            התוכן באתר הוא מידע כללי. ייתכנו טעויות או שינויים. {BUSINESS.name} אינה אחראית לנזק עקיף הנובע משימוש
                                            באתר.
                                        </p>
                                    </InfoBox>

                                    <InfoBox tone="soft" title="דין וסמכות שיפוט">
                                        <p>על תנאים אלו יחולו דיני מדינת ישראל.</p>
                                    </InfoBox>
                                </div>
                            </section>

                            <div className="flex items-center justify-center mt-10">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border transition"
                                    style={{
                                        color: "rgba(0,0,0,0.86)",
                                        borderColor: "rgba(233,211,126,0.22)",
                                        backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                                        boxShadow: "0 14px 30px rgba(0,0,0,0.45)",
                                    }}
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
