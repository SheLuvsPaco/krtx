import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import BathroomDemolition from './pages/BathroomDemolition';
import WallDemolition from './pages/WallDemolition';
import FloorDemolition from './pages/FloorDemolition';
import ConcreteDemolition from './pages/ConcreteDemolition';
import BuildingDemolition from './pages/BuildingDemolition';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bathroom-demolition" element={<BathroomDemolition />} />
          <Route path="/wall-demolition" element={<WallDemolition />} />
          <Route path="/floor-demolition" element={<FloorDemolition />} />
          <Route path="/concrete-demolition" element={<ConcreteDemolition />} />
          <Route path="/building-demolition" element={<BuildingDemolition />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;