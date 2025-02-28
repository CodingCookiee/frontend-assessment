import React from 'react';
import { Header, FeaturesGrid, HeroSection, PopularNFTs, RoadMap, FAQ } from '../components/Layout';

const HomePage = () => {
    return (
        <div className="min-h-screen ">
            <Header />
            <div className="pt-24">
                <HeroSection />
                <FeaturesGrid />
                <PopularNFTs />
                <RoadMap />
                <FAQ />
            </div>
        </div>
    );
}

export default HomePage;
