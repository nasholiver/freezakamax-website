import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RoadmapSection from '../components/RoadmapSection';
import TeamSection from '../components/TeamSection'
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <RoadmapSection />
            <TeamSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;
