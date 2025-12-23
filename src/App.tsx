import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import MaintenancePage from "./pages/MaintenancePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import SiteHeader from "./sections/Layout/SiteHeader";
import SiteFooter from "./sections/Layout/SiteFooter";
import FloatingContactButtons from "./components/ui/FloatingContactButtons";
import LegalPage from "./pages/legal/LegalPage";
import CookieConsentBanner from "./components/legal/CookieConsent";

const WHATSAPP_NUMBER = "972500000000";
const PHONE_NUMBER = "03XXXXXXX";

const App: React.FC = () => {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[9999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
      >
        דלג לתוכן
      </a>

      <CookieConsentBanner />

      <div className="relative flex flex-col min-h-screen">
        <div
          className="fixed inset-0 bg-fixed bg-center bg-cover -z-10"
          style={{
            backgroundImage: "url('/BGA.png')",
          }}
        />
        <div className="fixed inset-0 -z-10 bg-white/60" />

        <SiteHeader />

        <main id="main" className="flex-1 pt-20 md:pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/privacy" element={<Navigate to="/legal#privacy" replace />} />
            <Route path="/cookies" element={<Navigate to="/legal#cookies" replace />} />
            <Route path="/terms" element={<Navigate to="/legal#terms" replace />} />
          </Routes>

          <FloatingContactButtons
            whatsappNumber={WHATSAPP_NUMBER}
            phoneNumber={PHONE_NUMBER}
            whatsappMessage="שלום, אשמח לקבל פרטים לגבי תחזוקה שוטפת או טיפול חד-פעמי למתקן החניה."
          />
        </main>

        <SiteFooter />
      </div>
    </>
  );
};

export default App;
