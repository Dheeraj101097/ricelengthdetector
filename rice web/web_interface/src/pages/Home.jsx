import React from "react";
import Hero from "../components/Hero";
import ImageUpload from "../components/ImageUpload";
import FeaturesAccuracy from "../components/FeaturesAccuracy";
import AdvantagesDisadvantages from "../components/AdvantagesDisadvantages";
import ScreenshotGallery from "../components/ScreenshotGallery";
import ContactForm from "../components/ContactForm";

const HomePage = ({ formData, setFormData, formStatus, setFormStatus }) => {
  return (
    <>
      <Hero />
      <ImageUpload />
      <FeaturesAccuracy />
      <AdvantagesDisadvantages />
      <ScreenshotGallery />
      <ContactForm
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        setFormStatus={setFormStatus}
      />
    </>
  );
};

export default HomePage;
