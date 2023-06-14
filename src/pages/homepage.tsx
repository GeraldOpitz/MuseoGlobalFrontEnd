import React from 'react';
import HeroSection from '../components/hero';
import DescriptionSection from '../components/descriptionSection';
import GallerySection from '../components/gallery';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <GallerySection />
    </>
  );
};

export default HomePage;
