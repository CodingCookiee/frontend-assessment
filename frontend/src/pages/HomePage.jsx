import React from 'react';
import { Header, FeaturesGrid, Hero, PopularNFTs, RoadMap, FAQ } from '../components/Layout';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturesGrid />
            <PopularNFTs />
            <RoadMap />
            <FAQ />
        </div>
    );
}

export default HomePage;