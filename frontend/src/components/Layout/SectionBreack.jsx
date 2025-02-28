import { motion } from 'framer-motion';

const SectionBreak = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 1,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full max-w-[800px] mx-auto"
        >
          <img 
            src="/images/section-break.png" 
            alt="Section Break" 
            className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(253,22,64,0.3)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionBreak;
