import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const RoadmapCard = ({ phase, title, list, image, isImageRight }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 w-full"
    >
      {/* Title with lighter background */}
      <div 
        className="w-[70%]"
        style={{ backgroundColor: '#5C071E' }}
      >
        <h3 className="!mt-2.5 !mb-2.5 text-[#FD1640] text-2xl !py-4 px-8 font-['Zen_Dots']">{title}</h3>
      </div>

      {/* Content container with shared background */}
      <div 
        className={`flex ${isImageRight ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 p-8 rounded-lg`}
        style={{ backgroundColor: '#FD1640' }}
      >
        {/* List container */}
        <div className="flex-1">
          <ul className="space-y-4">
            {list.map((item, index) => (
              <li 
                key={index}
                className="text-white text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image container */}
        <div className="flex-1">
          <img 
            src={image} 
            alt={`Phase ${phase}`}
            className="w-full "
          />
        </div>
      </div>
    </motion.div>
  );
};

RoadmapCard.propTypes = {
  phase: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  isImageRight: PropTypes.bool.isRequired
};

export default RoadmapCard;
