import type { Variants } from "framer-motion";

export const SILVER = "#cfd2d6" as const;
export const GOLD_1 = "#b88248" as const;
export const GOLD_2 = "#e9ba6c" as const;
export const GOLD_3 = "#e9d37e" as const;

export const TEXT = "rgba(255,255,255,0.78)" as const;
export const MUTED = "rgba(207,210,214,0.72)" as const;

export const WHATSAPP_NUMBER = "972500000000";

export const easeCurve = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.12 * i, ease: easeCurve },
  }),
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 0.08 * i, ease: easeCurve },
  }),
};

export const PROCESS_POSITIONS = [
  "top-2 left-1/2 -translate-x-1/2 -translate-y-1",
  "top-1/2 right-2 translate-x-1 -translate-y-1/2",
  "bottom-4 right-10 translate-x-1",
  "bottom-4 left-10 -translate-x-1",
  "top-1/2 left-2 -translate-x-1 -translate-y-1/2",
] as const;
