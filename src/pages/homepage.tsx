import React from 'react';
import PrivatePage from '../components/privatePage';
import HeroSection from '../components/hero';
import DescriptionSection from '../components/descriptionSection';
import GallerySection from '../components/gallery';

const HomePage: React.FC = () => {
  return (
    <PrivatePage>
      <HeroSection />
      <DescriptionSection />
      <GallerySection />
    </PrivatePage>
  );
};

export default HomePage;
