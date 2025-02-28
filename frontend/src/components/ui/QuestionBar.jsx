import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionBar = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <motion.div
                onClick={() => setIsOpen(!isOpen)}
                className="w-[95%] lg:w-full xl:w-full  cursor-pointer rounded-sm !py-6 !px-6 !mt-2.5 !mb-5"
                style={{ backgroundColor: '#5C071E' }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
            >
                <div className="flex justify-between items-center">
                    <h3 
                        className="!font-[Zen_Dots] text-lg"
                        style={{ color: isOpen ? '#FD1640' : 'white' }}
                    >
                        {question}
                    </h3>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M19 9L12 16L5 9" 
                                stroke="#5C071E"
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4"
                        >
                            <p className="text-white font-inter text-base">
                                {answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

QuestionBar.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
};

export default QuestionBar;
