import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

type FloatingContactButtonsProps = {
    whatsappNumber: string; // "9725XXXXXXXX"
    phoneNumber: string; // "03XXXXXXX" or "9723XXXXXXX"
    whatsappMessage?: string;
};

const FloatingContactButtons: React.FC<FloatingContactButtonsProps> = ({
    whatsappNumber,
    phoneNumber,
    whatsappMessage = "שלום, אשמח לקבל פרטים לגבי תחזוקה שוטפת או טיפול חד-פעמי למתקן החניה.",
}) => {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    const phoneLink = `tel:${phoneNumber}`;

    return (
        <div className="fixed z-[999] left-4 bottom-[25vh] sm:left-6 flex flex-col gap-3">
            {/* WhatsApp */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="שליחה בוואטסאפ"
                title="וואטסאפ"
                className="relative group"
            >
                {/* Neon aura */}
                <span className="absolute transition rounded-full pointer-events-none -inset-2 blur-xl opacity-70 group-hover:opacity-100 bg-gradient-to-br from-fuchsia-500 via-blue-500 to-pink-500 motion-safe:animate-pulse" />
                {/* Glass button */}
                <span className="relative grid place-items-center w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full border border-white/15 bg-black/35 backdrop-blur-xl shadow-lg shadow-black/40">
                    {/* Gradient rim */}
                    <span className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/10" />
                    <span className="pointer-events-none absolute inset-[1px] rounded-full border border-transparent bg-gradient-to-br from-fuchsia-500/30 via-blue-500/25 to-pink-500/30" />
                    <span className="relative grid w-full h-full rounded-full place-items-center">
                        <FaWhatsapp className="text-white text-[20px] drop-shadow" />
                    </span>
                </span>
            </a>

            {/* Phone */}
            <a
                href={phoneLink}
                aria-label="שיחה טלפונית"
                title="שיחה"
                className="relative group"
            >
                <span className="absolute transition rounded-full pointer-events-none -inset-2 blur-xl opacity-55 group-hover:opacity-90 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-pink-500 motion-safe:animate-pulse" />
                <span className="relative grid place-items-center w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full border border-white/15 bg-black/35 backdrop-blur-xl shadow-lg shadow-black/40">
                    <span className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-white/10" />
                    <span className="pointer-events-none absolute inset-[1px] rounded-full border border-transparent bg-gradient-to-br from-blue-500/30 via-fuchsia-500/25 to-pink-500/30" />
                    <span className="relative grid w-full h-full rounded-full place-items-center">
                        <FaPhoneAlt className="text-white text-[18px] drop-shadow" />
                    </span>
                </span>
            </a>
        </div>
    );
};

export default FloatingContactButtons;