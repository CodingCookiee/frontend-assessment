import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../../constants';
import FeatureCard from '../ui/FeatureCard';
import Text from '../ui/Text';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const FeaturesGrid = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center !mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/features-img.png" 
          alt="Features Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <Text 
              as="h2"
              className="font-['Zen_Dots'] !text-white !text-4xl md:!text-5xl lg:!text-6xl !mb-6 !mt-5 text-center"
            >
              Our Features
            </Text>
            <Text 
              className="!text-white/80 !max-w-2xl mx-auto !text-lg md:!text-xl !mb-6 text-center"
              weight="light"
            >
              Discover the unique features that make our platform stand out
            </Text>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-[1200px] mx-auto place-items-center"
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id} 
                variants={item}
                className="w-full max-w-[400px]"
              >
                <FeatureCard 
                  title={feature.title}
                  image={feature.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Additional Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
};

export default FeaturesGrid;
