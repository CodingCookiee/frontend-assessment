import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Text from "./Text";

const RoadmapCard = ({ phase, title, list, image, isImageRight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 md:gap-6 w-full !mb-12 md:!mb-24"
    >
      <div 
        className={`w-full md:w-[70%] ${!isImageRight ? 'md:!ml-62' : ''}`} 
        style={{ backgroundColor: "#5C071E" }}
      >
        <Text 
          as="h3"
          className="!mt-2 md:!mt-2.5 !mb-2 md:!mb-2.5 !text-[#FD1640] !text-xl md:!text-2xl !py-3 md:!py-4 !px-6 md:!px-12 font-['Zen_Dots']"
        >
          {title}
        </Text>
      </div>

      <div
        className={`flex flex-col ${
          isImageRight ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-4 md:gap-8 rounded-lg relative`}
        style={{ backgroundColor: "#FD1640" }}
      >
        <div className="flex-1 !px-6 md:!px-12 !py-6 md:!py-8 w-full">
          <ul className="space-y-3 md:space-y-4">
            {list.map((item, index) => (
              <Text 
                key={index} 
                className="!text-white !text-base md:!text-lg !pl-4 md:!pl-6 relative"
              >
                • {item}
              </Text>
            ))}
          </ul>
        </div>

        <div className="flex-1 relative w-full md:w-auto min-h-[200px] md:min-h-[300px]">
        <img 
  src={image} 
  alt={`Phase ${phase}`} 
  className="w-[200px] md:w-[300px] absolute left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 !-top-8 md:!-top-16 bg-transparent" 
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
  isImageRight: PropTypes.bool.isRequired,
};

export default RoadmapCard;
