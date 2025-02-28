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
      className="flex flex-col gap-6 w-full !mb-24"
    >
      <div className="w-[70%]" style={{ backgroundColor: "#5C071E" }}>
        <Text 
          as="h3"
          className="!mt-2.5 !mb-2.5 !text-[#FD1640] !text-2xl !py-4 !px-12 font-['Zen_Dots']"
        >
          {title}
        </Text>
      </div>

      <div
        className={`flex ${
          isImageRight ? "flex-row" : "flex-row-reverse"
        } items-center gap-8 rounded-lg relative`}
        style={{ backgroundColor: "#FD1640" }}
      >
        <div className="flex-1 !px-12 !py-8">
          <ul className="space-y-4">
            {list.map((item, index) => (
              <Text 
                key={index} 
                className="!text-white !text-lg !pl-6 relative"
              >
                • {item}
              </Text>
            ))}
          </ul>
        </div>

        <div className="flex-1 relative">
          <img 
            src={image} 
            alt={`Phase ${phase}`} 
            className="w-full absolute -bottom-12" 
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
