import { useEffect, useRef } from "react";
import * as CookieConsentLib from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

type ConsentCategory = "necessary" | "analytics" | "marketing";

type CookieConsentGuiOptions = {
    consentModal?: { layout?: string; position?: string };
    preferencesModal?: { layout?: string; position?: string };
};

type CookieConsentConfig = {
    autoShow?: boolean;
    disablePageInteraction?: boolean;
    cookie?: { name?: string };
    guiOptions?: CookieConsentGuiOptions;
    categories: Record<string, { readOnly?: boolean }>;
    language: {
        default: string;
        translations: Record<
            string,
            {
                consentModal: {
                    title: string;
                    description: string;
                    acceptAllBtn: string;
                    acceptNecessaryBtn: string;
                    showPreferencesBtn: string;
                    footer?: string;
                };
                preferencesModal: {
                    title: string;
                    acceptAllBtn: string;
                    acceptNecessaryBtn: string;
                    savePreferencesBtn: string;
                    closeIconLabel: string;
                    sections: Array<{
                        title: string;
                        description?: string;
                        linkedCategory?: string;
                    }>;
                };
            }
        >;
    };
    onFirstConsent?: () => void;
    onConsent?: () => void;
    onChange?: () => void;
};

type CookieConsentApi = {
    run: (config: CookieConsentConfig) => void;
    showPreferences?: () => void;
    acceptedCategory?: (category: ConsentCategory) => boolean;
};

type CookieConsentModuleWrapped = {
    CookieConsent: CookieConsentApi;
};

function isCookieConsentApi(value: unknown): value is CookieConsentApi {
    return (
        typeof value === "object" &&
        value !== null &&
        "run" in value &&
        typeof (value as { run?: unknown }).run === "function"
    );
}

function isWrappedModule(value: unknown): value is CookieConsentModuleWrapped {
    return (
        typeof value === "object" &&
        value !== null &&
        "CookieConsent" in value &&
        isCookieConsentApi((value as { CookieConsent?: unknown }).CookieConsent)
    );
}

function getCookieConsentApi(lib: unknown): CookieConsentApi | null {
    if (isWrappedModule(lib)) return lib.CookieConsent;
    if (isCookieConsentApi(lib)) return lib;
    return null;
}

export default function CookieConsentBanner() {
    const didInit = useRef(false);

    useEffect(() => {
        if (didInit.current) return;
        didInit.current = true;

        const api = getCookieConsentApi(CookieConsentLib as unknown);
        if (!api) return;

        const config: CookieConsentConfig = {
            autoShow: true,
            disablePageInteraction: false,
            cookie: { name: "cc_consent" },
            guiOptions: {
                consentModal: { layout: "cloud", position: "bottom center" },
                preferencesModal: { layout: "box", position: "center" },
            },
            categories: {
                necessary: { readOnly: true },
                analytics: {},
                marketing: {},
            },
            language: {
                default: "he",
                translations: {
                    he: {
                        consentModal: {
                            title: "עוגיות באתר",
                            description:
                                "אנחנו משתמשים בעוגיות הכרחיות לתפעול האתר. עוגיות אנליטיקס/שיווק (אם מופעלות) עוזרות למדידה ושיפור. תוכלו לבחור מה לאשר.",
                            acceptAllBtn: "אישור הכל",
                            acceptNecessaryBtn: "רק הכרחיות",
                            showPreferencesBtn: "הגדרות",
                            footer: `
                <a href="/legal#privacy">מדיניות פרטיות</a>
                <span style="padding:0 10px">•</span>
                <a href="/legal#cookies">מדיניות קוקיז</a>
                <span style="padding:0 10px">•</span>
                <a href="/legal#terms">תנאי שימוש</a>
              `,
                        },
                        preferencesModal: {
                            title: "העדפות עוגיות",
                            acceptAllBtn: "אישור הכל",
                            acceptNecessaryBtn: "רק הכרחיות",
                            savePreferencesBtn: "שמירה",
                            closeIconLabel: "סגירה",
                            sections: [
                                {
                                    title: "במה לבחור?",
                                    description:
                                        "הכרחיות נדרשות לתפעול. אנליטיקס ושיווק מופעלות רק אם תאשרו.",
                                },
                                {
                                    title: "הכרחיות",
                                    description: "נדרשות לתפעול האתר ושמירת העדפות.",
                                    linkedCategory: "necessary",
                                },
                                {
                                    title: "אנליטיקס",
                                    description: "מדידה ושיפור ביצועים (אם תאשרו).",
                                    linkedCategory: "analytics",
                                },
                                {
                                    title: "שיווק",
                                    description: "מדידה/פרסום (אם תאשרו).",
                                    linkedCategory: "marketing",
                                },
                            ],
                        },
                    },
                },
            },
        };

        api.run(config);
    }, []);

    return null;
}
