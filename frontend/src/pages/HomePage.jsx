import React from 'react';
import { Header, FeaturesGrid, Hero, PopularNFTs, RoadMap, FAQ } from '../components/Layout';

const HomePage = () => {
    return (
        <div className="min-h-screen ">
            <Header />
            <div className="pt-24">
                <Hero />
                <FeaturesGrid />
                <PopularNFTs />
                <RoadMap />
                <FAQ />
            </div>
        </div>
    );
}

export default HomePage;
