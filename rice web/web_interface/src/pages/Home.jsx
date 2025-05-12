import React from "react";
import Hero from "../components/Hero";
import ImageUpload from "../components/ImageUpload";
import FeaturesAccuracy from "../components/FeaturesAccuracy";
import AdvantagesDisadvantages from "../components/AdvantagesDisadvantages";
import ScreenshotGallery from "../components/ScreenshotGallery";

const HomePage = ({ formData, setFormData, formStatus, setFormStatus }) => {
  return (
    <>
      <Hero />
      <ImageUpload />
      <FeaturesAccuracy />
      <AdvantagesDisadvantages />
      <ScreenshotGallery />
    </>
  );
};

export default HomePage;
