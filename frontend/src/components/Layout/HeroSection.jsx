import React from 'react';
import Text from '../ui/Text';
import Button from '../ui/Button';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/hero-img.png" 
                    alt="Hero Background" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Gradient Overlay Layer */}
            <div className="absolute inset-0 z-10">
                <img 
                    src="/images/gradient.png"
                    alt="Gradient Overlay"
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-20 max-w-[1200px] mx-auto px-4 text-center">
                <Text 
                    as="h1" 
                    className="font-['Zen_Dots'] text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
                >
                    Generate with AI,<br />
                    Scan, Mint, Sell<br />
                    & Trade
                </Text>

                <Text 
                    className="text-white/80 max-w-[600px] mx-auto mb-8 text-lg md:text-xl"
                    weight="light"
                >
                    Explore 3dotlink, where Web3 meets cultural legacy, and AI breathes life into NFTs
                </Text>

                <Button 
                    size="lg"
                    className="px-8 py-3"
                >
                    Buy NFT'S
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
