import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const navItems = [
    { to: "/", label: "דף הבית" },
    { to: "/services", label: "כלל השירותים" },
    { to: "/maintenance", label: "תחזוקה שוטפת" },
    { to: "/products", label: "מוצרי פתרונות חניה" },
    { to: "/contact", label: "יצירת קשר" },
];

const SiteHeader: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === "undefined") return;
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobile = () => setMobileOpen(false);

    const linkBase =
        "relative group inline-flex items-center pb-1 text-[0.9rem] transition-colors";

    const underlineBase =
        "pointer-events-none absolute right-0 left-0 -bottom-0.5 h-[2px] rounded-full origin-center bg-gradient-to-l from-[#B59CFF] via-[#8E7BFF] to-[#1A2A80] transition-transform duration-300";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? "bg-white/55 border-b border-slate-200/80 shadow-[0_12px_30px_rgba(15,23,42,0.22)] backdrop-blur-lg"
                    : "bg-white border-b border-transparent"
                }`}
        >
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    to="/"
                    onClick={closeMobile}
                    className="font-semibold text-[1.05rem] tracking-wide text-slate-900"
                >
                    אביב פתרונות חניה
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex gap-6 text-sm">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.to === "/"}
                                    onClick={closeMobile}
                                    className={({ isActive }) =>
                                        `${linkBase} ${isActive
                                            ? "text-brand-dark"
                                            : "text-slate-700 hover:text-slate-900"
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span className="px-0.5">{item.label}</span>
                                            <span
                                                className={`${underlineBase} ${isActive
                                                        ? "scale-x-100"
                                                        : "scale-x-0 group-hover:scale-x-100"
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
                    className="md:hidden flex flex-col gap-[3px] p-1"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="תפריט"
                >
                    <span
                        className={`h-[2px] w-5 rounded bg-slate-900 transition-transform ${mobileOpen ? "translate-y-[5px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-[2px] w-5 rounded bg-slate-900 transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`h-[2px] w-5 rounded bg-slate-900 transition-transform ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {mobileOpen && (
                <nav className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-md">
                    <ul className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
                        {navItems.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.to === "/"}
                                    onClick={closeMobile}
                                    className={({ isActive }) =>
                                        `block py-1.5 ${isActive
                                            ? "text-brand-dark font-medium"
                                            : "text-slate-700"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default SiteHeader;
