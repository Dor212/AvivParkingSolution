import React from "react";
import HeroSection from "../sections/HeroSection";
import WhyMaintenanceSection from "../sections/WhyMaintenanceSection";
import ServicesSection from "../sections/ServicesSection";
import SystemsTypesSection from "../sections/SystemsTypesSection";
import GallerySection from "../sections/GallerySection";

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <WhyMaintenanceSection />
            <ServicesSection />
            <SystemsTypesSection />
            <GallerySection />
        </>
    );
};

export default HomePage;
