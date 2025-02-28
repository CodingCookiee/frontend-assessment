import React from 'react';
import { Header, FeaturesGrid, HeroSection, PopularNFTs, RoadMap, FAQ, SectionBreak } from '../components/Layout';

const HomePage = () => {
    return (
        <div className="min-h-screen ">
            <Header />
            <div className="pt-24">
                <HeroSection />
                <FeaturesGrid />
                <SectionBreak />
                <PopularNFTs />
                <RoadMap />
                <FAQ />
            </div>
        </div>
    );
}

export default HomePage;
