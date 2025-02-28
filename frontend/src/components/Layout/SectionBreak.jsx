import React from 'react';
import { motion } from 'framer-motion';

const SectionBreak = () => {
  return (
    <section className="relative w-full py-20 !mt-20 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
        className="w-full flex justify-center px-4"
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [-1, 1, -1],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full relative flex justify-center"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#FD1640]/20 filter blur-3xl transform scale-90" />
          
          <img 
            src="/images/section-break.png" 
            alt="Section Break" 
            className="w-full h-auto max-w-[600px] object-contain relative z-10 drop-shadow-[0_0_20px_rgba(253,22,64,0.4)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionBreak;
