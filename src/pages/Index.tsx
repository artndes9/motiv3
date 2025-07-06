
import React from "react";
import Hero from "@/components/Hero";
import PropertyDetails from "@/components/PropertyDetails";
import InvestmentSection from "@/components/InvestmentSection";
import FloorPlans from "@/components/FloorPlans";
import LocationAdvantages from "@/components/LocationAdvantages";
import Infrastructure from "@/components/Infrastructure";
import ApartmentFormats from "@/components/ApartmentFormats";
import PreviousProjects from "@/components/PreviousProjects";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="bg-background text-foreground">
        <PropertyDetails />
        <InvestmentSection />
        <FloorPlans />
        <LocationAdvantages />
        <Infrastructure />
        <ApartmentFormats />
        <PreviousProjects />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
