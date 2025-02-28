import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FeatureCard = ({ title, image }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-8 rounded-2xl cursor-pointer group min-h-[300px] flex items-center justify-center"
        >
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FD1640] via-[#FD1640]/50 to-[#FD1640] opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Inner Background with Blur */}
            <div className="absolute inset-[1px] rounded-2xl bg-black/40 backdrop-blur-xl" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-10 !py-6 !px-5 w-full">
                <div className="relative flex justify-center w-full">
                    {/* Image Container with Glow Effect */}
                    <div className="w-16 h-16 md:w-20 md:h-20 relative z-10 flex items-center justify-center">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(253,22,64,0.5)]"
                        />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[#FD1640]/20 rounded-full filter blur-xl transform scale-150" />
                </div>
                
                <h3 className="text-white text-center text-base md:text-lg font-semibold relative w-full flex justify-center">
                    <span className="relative z-10 line-clamp-3 text-center">{title}</span>
                    {/* Text Glow */}
                    <span className="absolute inset-0 filter blur-sm bg-[#FD1640]/20" />
                </h3>
            </div>
        </motion.div>
    );
}

FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default FeatureCard;
