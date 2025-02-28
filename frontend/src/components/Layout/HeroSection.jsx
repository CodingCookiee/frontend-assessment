import React from 'react';
import Text from '../ui/Text';
import Button from '../ui/Button';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center">
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
            <div className=" relative z-50 !ml-8 container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
                <div className="flex flex-col gap-4 max-w-[600px]">
                    <Text 
                        as="h1" 
                        className="font-['Zen_Dots'] text-white !text-3xl sm:!text-4xl md:!text-5xl !leading-tight"
                    >
                        Generate with AI,<br />
                        Scan, Mint, Sell<br />
                        & Trade
                    </Text>

                    <Text 
                        className="!text-white/80 !mb-2.5 !text-base sm:!text-lg md:!text-xl lg:!text-2xl"
                        weight="light"
                    >
                        Explore 3dotlink, where Web3 meets cultural legacy, and AI breathes life into NFTs
                    </Text>

                    <Button 
                        size="md"
                        className="!text-lg !px-8 !py-3 !w-fit hover:bg-[#FD1640] hover:bg-opacity-90"
                    >
                        Buy NFTs
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
