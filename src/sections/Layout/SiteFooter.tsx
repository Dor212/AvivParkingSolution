import React from "react";
import { Link } from "react-router-dom";
import * as CookieConsentLib from "vanilla-cookieconsent";

const ACCENT = "#1A2A80" as const;

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
        <footer className="mt-10 border-t border-slate-200/80 bg-white/95">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center text-center gap-3 text-[0.78rem] md:text-xs text-slate-500">
                <div className="flex items-center gap-2">
                    <span
                        className="h-[2px] w-10 rounded-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgba(26,42,128,0), rgba(91,74,232,0.9), rgba(26,42,128,0))",
                        }}
                    />
                    <span>© {year} אביב פתרונות חניה · כל הזכויות שמורות</span>
                </div>

                <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                    <Link
                        to="/legal#terms"
                        className="transition-colors hover:text-brand-dark"
                        style={{ color: ACCENT }}
                    >
                        תנאי שימוש
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link
                        to="/legal#privacy"
                        className="transition-colors hover:text-brand-dark"
                        style={{ color: ACCENT }}
                    >
                        מדיניות פרטיות
                    </Link>
                    <span className="text-slate-300">|</span>
                    <Link
                        to="/legal#cookies"
                        className="transition-colors hover:text-brand-dark"
                        style={{ color: ACCENT }}
                    >
                        מדיניות קוקיז
                    </Link>
                    <span className="text-slate-300">|</span>
                    <button
                        type="button"
                        onClick={openCookiePreferences}
                        className="font-medium transition-colors hover:text-brand-dark"
                        style={{ color: ACCENT }}
                    >
                        ניהול העדפות קוקיז
                    </button>
                </nav>

                <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">בניית אתר:</span>
                    <a
                        href="https://yma.co.il"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium transition-colors hover:text-brand-dark"
                        style={{ color: ACCENT }}
                    >
                        YMA
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
