import React from 'react';
import Hero from '../components/Hero';
import ImageUpload from '../components/ImageUpload';
import FeaturesAccuracy from '../components/FeaturesAccuracy';
import AdvantagesDisadvantages from '../components/AdvantagesDisadvantages';
import ScreenshotGallery from '../components/ScreenshotGallery';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImageUpload />
      <FeaturesAccuracy />
      <AdvantagesDisadvantages />
      <ScreenshotGallery />
      <ContactForm />
    </>
  );
};

export default HomePage;