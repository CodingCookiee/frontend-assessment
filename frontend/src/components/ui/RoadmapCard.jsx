import React from 'react';
import PropTypes from 'prop-types';

const RoadmapCard = ({ phase, title, list, image, isImageRight }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Title with lighter background */}
      <div 
        className="px-6 py-3 rounded-lg w-fit"
        style={{ backgroundColor: '#FE4D6D' }} // Lighter version of FD1640
      >
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>

      {/* Content container */}
      <div className={`flex ${isImageRight ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}>
        {/* List container */}
        <div className="flex-1">
          <ul className="space-y-3">
            {list.map((item, index) => (
              <li 
                key={index}
                className="px-6 py-3 rounded-lg text-white"
                style={{ backgroundColor: '#FD1640' }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Image container with overflow effect */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[#FD1640] rounded-lg transform scale-95" />
          <img 
            src={image} 
            alt={`Phase ${phase}`}
            className="relative z-10 w-full h-auto transform scale-110"
          />
        </div>
      </div>
    </div>
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
