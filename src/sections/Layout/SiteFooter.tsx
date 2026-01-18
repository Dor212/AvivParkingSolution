import React from "react";
import { Link } from "react-router-dom";
import * as CookieConsentLib from "vanilla-cookieconsent";

const SILVER = "#cfd2d6" as const;
const GOLD_1 = "#b88248" as const;
const GOLD_2 = "#e9ba6c" as const;
const GOLD_3 = "#e9d37e" as const;

type CookieConsentApi = {
    showPreferences?: () => void;
};

type CookieConsentModule = {
    CookieConsent: CookieConsentApi;
};

function isCookieConsentModule(value: unknown): value is CookieConsentModule {
    return typeof value === "object" && value !== null && "CookieConsent" in value;
}

function openCookiePreferences() {
    const libUnknown: unknown = CookieConsentLib;
    if (!isCookieConsentModule(libUnknown)) return;

    const api = libUnknown.CookieConsent;
    if (typeof api.showPreferences === "function") {
        api.showPreferences();
    }
}

const SiteFooter: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            className="mt-10 border-t backdrop-blur-md"
            style={{
                borderColor: "rgba(233,211,126,0.18)",
                backgroundImage: "linear-gradient(180deg, rgba(30,31,36,0.72), rgba(30,31,36,0.48))",
            }}
        >
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center text-center gap-3 text-[0.78rem] md:text-xs">
                <div className="flex items-center gap-2">
                    <span
                        className="h-[2px] w-10 rounded-full"
                        style={{
                            backgroundImage: `linear-gradient(90deg, rgba(184,130,72,0), ${GOLD_1}, ${GOLD_2}, ${GOLD_3}, rgba(184,130,72,0))`,
                            opacity: 0.9,
                        }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.70)" }}>
                        © {year} אביב פתרונות חניה · כל הזכויות שמורות
                    </span>
                </div>

                <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    <Link
                        to="/legal#terms"
                        className="transition-colors hover:opacity-90"
                        style={{ color: SILVER }}
                    >
                        תנאי שימוש
                    </Link>
                    <span style={{ color: "rgba(255,255,255,0.22)" }}>|</span>

                    <Link
                        to="/legal#privacy"
                        className="transition-colors hover:opacity-90"
                        style={{ color: SILVER }}
                    >
                        מדיניות פרטיות
                    </Link>
                    <span style={{ color: "rgba(255,255,255,0.22)" }}>|</span>

                    <Link
                        to="/legal#cookies"
                        className="transition-colors hover:opacity-90"
                        style={{ color: SILVER }}
                    >
                        מדיניות קוקיז
                    </Link>
                    <span style={{ color: "rgba(255,255,255,0.22)" }}>|</span>

                    <button
                        type="button"
                        onClick={openCookiePreferences}
                        className="font-medium transition hover:opacity-90"
                        style={{
                            color: "rgba(0,0,0,0.86)",
                            backgroundImage: `linear-gradient(90deg, ${GOLD_1}, ${GOLD_2}, ${GOLD_3})`,
                            borderRadius: "9999px",
                            padding: "6px 12px",
                            boxShadow: "0 10px 22px rgba(0,0,0,0.35)",
                            border: "1px solid rgba(233,211,126,0.22)",
                        }}
                    >
                        ניהול העדפות קוקיז
                    </button>
                </nav>

                <div className="flex items-center gap-1.5">
                    <span style={{ color: "rgba(255,255,255,0.55)" }}>בניית אתר:</span>
                    <a
                        href="https://yma.co.il"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium transition hover:opacity-90"
                        style={{ color: SILVER }}
                    >
                        YMA
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
