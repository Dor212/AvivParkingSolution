import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
    { to: "/", label: "דף הבית" },
    { to: "/services", label: "כלל השירותים" },
    { to: "/maintenance", label: "תחזוקה שוטפת" },
    { to: "/products", label: "מוצרי פתרונות חניה" },
    { to: "/contact", label: "יצירת קשר" },
];

const SILVER = "#CCCCCC";
const GOLD_SOFT = "#e9d37e";
const GOLD_GRADIENT = "bg-[linear-gradient(90deg,#b88248,#e9ba6c,#e9d37e,#b88248)]";
const BLACK_GRADIENT = "bg-[linear-gradient(180deg,#1e1f24,#6e6c6d,#1e1f24)]";

const SiteHeader: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const closeMobile = useCallback(() => setMobileOpen(false), []);
    const toggleMobile = useCallback(() => setMobileOpen((p) => !p), []);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === "undefined") return;
            setIsScrolled(window.scrollY > 10);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        closeMobile();
    }, [location.pathname, closeMobile]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMobile();
        };
        if (mobileOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [mobileOpen, closeMobile]);

    useEffect(() => {
        const root = document.documentElement;
        const prev = root.style.overflow;
        if (mobileOpen) root.style.overflow = "hidden";
        return () => {
            root.style.overflow = prev;
        };
    }, [mobileOpen]);

    const linkBase =
        "relative group inline-flex items-center pb-1 text-[0.9rem] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1f24] rounded-sm";

    const underlineBase =
        `pointer-events-none absolute right-0 left-0 -bottom-0.5 h-[2px] rounded-full origin-center ${GOLD_GRADIENT} transition-transform duration-300`;

    const mobileId = useMemo(() => "mobile-nav", []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                        ? "backdrop-blur-xl bg-[#1e1f24]/75 border-b border-white/10 shadow-[0_14px_34px_rgba(0,0,0,0.55)]"
                        : "bg-[#1e1f24]/40 border-b border-transparent"
                    }`}
            >
                <div className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto">
                    <Link
                        to="/"
                        onClick={closeMobile}
                        className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1f24] rounded-md"
                        aria-label="אביב פתרונות חניה"
                    >
                        <img
                            src="/Logos/LOGOUri.png"
                            alt="אביב פתרונות חניה"
                            draggable={false}
                            className="w-auto select-none h-9"
                        />
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex gap-6 text-sm">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        end={item.to === "/"}
                                        onClick={closeMobile}
                                        className={({ isActive }) => `${linkBase} ${isActive ? "font-medium" : ""}`}
                                        style={({ isActive }) => ({ color: isActive ? GOLD_SOFT : SILVER })}
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span className="px-0.5">{item.label}</span>
                                                <span
                                                    className={`${underlineBase} ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                        }`}
                                                />
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1f24] active:scale-[0.98]"
                        onClick={toggleMobile}
                        aria-label="תפריט"
                        aria-expanded={mobileOpen}
                        aria-controls={mobileId}
                    >
                        <span className="relative block h-[16px] w-[20px]">
                            <span
                                className={`absolute left-0 top-0 h-[2px] w-full rounded transition-transform duration-200 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""
                                    }`}
                                style={{ backgroundColor: SILVER }}
                            />
                            <span
                                className={`absolute left-0 top-[7px] h-[2px] w-full rounded transition-opacity duration-200 ${mobileOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                style={{ backgroundColor: SILVER }}
                            />
                            <span
                                className={`absolute left-0 bottom-0 h-[2px] w-full rounded transition-transform duration-200 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                                    }`}
                                style={{ backgroundColor: SILVER }}
                            />
                        </span>
                    </button>
                </div>
            </header>

            <div
                className={`md:hidden fixed inset-0 z-50 ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                <button
                    type="button"
                    className={`absolute inset-0 transition-opacity duration-200 ${mobileOpen ? "opacity-100" : "opacity-0"
                        } bg-black/60`}
                    onClick={closeMobile}
                    aria-label="סגור תפריט"
                    tabIndex={mobileOpen ? 0 : -1}
                />

                <aside
                    id={mobileId}
                    className={`absolute right-0 top-0 h-full w-[84vw] max-w-[360px] border-l border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.75)] transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="absolute inset-0 bg-[#1e1f24]" aria-hidden="true" />
                    <div className={`absolute inset-0 ${BLACK_GRADIENT}`} aria-hidden="true" />
                    <div
                        className="absolute inset-0"
                        aria-hidden="true"
                        style={{
                            background:
                                "radial-gradient(circle at 70% 10%, rgba(233,211,126,0.12), rgba(0,0,0,0) 55%), radial-gradient(circle at 20% 35%, rgba(184,130,72,0.10), rgba(0,0,0,0) 60%)",
                        }}
                    />
                    <div className="absolute inset-0 border border-white/5" aria-hidden="true" />

                    <div className="relative h-full">
                        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10 bg-[#1e1f24]">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/LOGOUri.png"
                                    alt="אביב פתרונות חניה"
                                    draggable={false}
                                    className="w-auto select-none h-9"
                                />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm font-semibold" style={{ color: SILVER }}>
                                        אביב פתרונות חניה
                                    </span>
                                    <span className="text-[0.78rem] opacity-80" style={{ color: SILVER }}>
                                        פתרונות. תחזוקה. אמינות.
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={closeMobile}
                                className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1f24] active:scale-[0.98]"
                                aria-label="סגור"
                            >
                                <span className="relative block h-[18px] w-[18px] mx-auto">
                                    <span
                                        className="absolute inset-x-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 rounded"
                                        style={{ backgroundColor: SILVER }}
                                    />
                                    <span
                                        className="absolute inset-x-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 rounded"
                                        style={{ backgroundColor: SILVER }}
                                    />
                                </span>
                            </button>
                        </div>

                        <div className="px-4 py-4">
                            <div className={`h-[2px] w-full rounded-full ${GOLD_GRADIENT} opacity-70 mb-5`} aria-hidden="true" />

                            <ul className="flex flex-col gap-2 text-sm">
                                {navItems.map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            end={item.to === "/"}
                                            onClick={closeMobile}
                                            className="block rounded-2xl px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1f24]"
                                            style={({ isActive }) => ({
                                                color: isActive ? GOLD_SOFT : SILVER,
                                                backgroundColor: isActive ? "rgba(233,211,126,0.10)" : "rgba(255,255,255,0.05)",
                                                border: isActive ? "1px solid rgba(233,211,126,0.35)" : "1px solid rgba(255,255,255,0.10)",
                                            })}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{item.label}</span>
                                                <span
                                                    className="h-[10px] w-[10px] rounded-full"
                                                    style={{
                                                        background:
                                                            item.to === "/"
                                                                ? "linear-gradient(90deg,#b88248,#e9ba6c,#e9d37e,#b88248)"
                                                                : "rgba(204,204,204,0.45)",
                                                        opacity: 0.9,
                                                    }}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-4 mt-6 border rounded-2xl border-white/10 bg-white/6 backdrop-blur-md">
                                <div className="mb-2 text-xs" style={{ color: SILVER, opacity: 0.9 }}>
                                    צריכים הצעת מחיר או ייעוץ מהיר?
                                </div>
                                <Link
                                    to="/contact"
                                    onClick={closeMobile}
                                    className="block text-center rounded-xl px-4 py-2.5 text-sm font-semibold text-[#1e1f24] shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(233,211,126,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1e1f24]"
                                    style={{
                                        background: "linear-gradient(90deg,#b88248,#e9ba6c,#e9d37e,#b88248)",
                                    }}
                                >
                                    ליצירת קשר
                                </Link>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default SiteHeader;
