import React from 'react';
import { motion } from 'framer-motion';
import { popularNFTs } from '../../constants';
import Text from '../ui/Text';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const PopularNFTs = () => {
  return (
    <section className="relative w-full min-h-screen py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Header Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center mb-20"
        >
          <Text 
            as="h2"
            className="font-['Zen_Dots'] !text-white !text-4xl md:!text-5xl lg:!text-6xl !mb-8 !mt-8 text-center max-w-4xl"
          >
            Popular NFTs generated by Artists
          </Text>
          <Text 
            className="!text-white/80 !text-base md:!text-lg text-center !mb-8"
            weight="light"
          >
            3dotlink&apos;s AI integration is a game-changer in the NFT art world. It offers a powerful canvas for artists to redefine art creation and innovation while preserving cultural art in an entirely new format. With this platform, the convergence of human ingenuity and AI technology is set to redefine the boundaries of artistic expression and creative possibilities, ushering in a digital art renaissance.
          </Text>
        </motion.div>

        {/* NFT Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-3 gap-3 max-w-[1000px] mx-auto"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            <motion.div variants={fadeInUp}>
              <img 
                src={popularNFTs.firstRow[0].image} 
                alt="NFT" 
                className="w-full h-[200px] object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img 
                src={popularNFTs.secondRow[0].image} 
                alt="NFT" 
                className="w-full h-[70vh] object-cover"
              />
            </motion.div>
          </div>
          
          {/* Center Column */}
          <div className="flex flex-col gap-3">
            <motion.div variants={fadeInUp}>
              <img 
                src={popularNFTs.center.image} 
                alt="Center NFT" 
                className="w-full h-[70vh] object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img 
                src={popularNFTs.thirdRow[0].image} 
                alt="NFT" 
                className="w-full h-[200px] object-cover"
              />
            </motion.div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-3">
            <motion.div variants={fadeInUp}>
              <img 
                src={popularNFTs.firstRow[1].image} 
                alt="NFT" 
                className="w-full h-[200px] object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img 
                src={popularNFTs.secondRow[1].image} 
                alt="NFT" 
                className="w-full h-[332px] object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img 
                src={popularNFTs.thirdRow[1].image} 
                alt="NFT" 
                className="w-full h-[200px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularNFTs;
