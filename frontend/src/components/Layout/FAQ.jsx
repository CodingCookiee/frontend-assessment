import React, { useState, useEffect, useRef } from 'react';
import Text from '../ui/Text';
import QuestionBar from '../ui/QuestionBar';
import Button from '../ui/Button';
import { ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('General');
    const [showScrollButton, setShowScrollButton] = useState(false);
    const buttonRef = useRef(null);

    const tabs = ['General', 'Pre ICO', 'Token', 'Client', 'Legal'];

    const generalQuestions = [
        {
            question: "How do I create NFTs on 3dotlink?",
            answer: "Artists and creators can use our AI-integrated platform to generate NFTs by providing specific inputs, such as the desired features and elements for their digital artwork."
        },
        {
            question: "What kind of art does 3dotlink support?",
            answer: "3dotlink supports a wide range of digital art forms and styles, leveraging AI technology to help artists create unique pieces."
        },
        {
            question: "How are digital artworks verified for authenticity?",
            answer: "Each artwork is verified using blockchain technology, ensuring its authenticity and providing a transparent record of ownership."
        },
        {
            question: "Can artists access and manage their collections on 3dotlink?",
            answer: "Yes, artists have full control over their collections through our user-friendly dashboard."
        }
    ];

    // Handle scroll event to show/hide the button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Add hover animation effect using GSAP
    useEffect(() => {
        if (buttonRef.current) {
            const button = buttonRef.current;
            
            const enterAnimation = () => {
                gsap.to(button, {
                    scale: 1.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };
            
            const leaveAnimation = () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };
            
            button.addEventListener('mouseenter', enterAnimation);
            button.addEventListener('mouseleave', leaveAnimation);
            
            return () => {
                button.removeEventListener('mouseenter', enterAnimation);
                button.removeEventListener('mouseleave', leaveAnimation);
            };
        }
    }, [showScrollButton]);

    // Enhanced smooth scroll to top function using GSAP
    const scrollToTop = () => {
        gsap.to(window, {
            duration: 2,
            scrollTo: {
                y: 0,
                autoKill: false
            },
            ease: "power4.out"
        });
    };

    return (
        <section className="w-full py-24 relative overflow-hidden !mt-20">
            <div className="container !mx-auto !pl-4 !lg:pl-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 relative">
                    {/* Left Section - Questions */}
                    <div className="w-full lg:w-1/2 z-10">
                        {/* Title and Subtitle */}
                        <div className="mb-12">
                            <h2 className="!text-4xl !md:text-5xl !mb-4 font-['Zen_Dots'] text-white">
                                Have any question?
                            </h2>
                            <Text variant="body" className="text-gray-300 max-w-xl !mb-5">
                                Curious about 3dotlink? Explore our frequently asked questions to find answers
                            </Text>
                        </div>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-6 md:gap-8 !mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => tab === 'General' && setActiveTab(tab)}
                                    className={`text-white cursor-pointer relative pb-2 group ${
                                        activeTab === tab ? 'text-[#FD1640]' : ''
                                    }`}
                                >
                                    {tab}
                                    {/* Underline effect */}
                                    <div
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FD1640] transition-transform duration-300 ${
                                            activeTab === tab ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Questions */}
                        <div className="space-y-4">
                            {activeTab === 'General' && generalQuestions.map((item, index) => (
                                <QuestionBar
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="w-full  lg:absolute lg:-right-10 lg:top-0 lg:bottom-0 ">
                        <div className="relative !w-full !h-full">
                            <img 
                                src="/images/popular/faq-image.png" 
                                alt="FAQ Illustration" 
                                className="!w-full !h-full !object-cover  lg:origin-left"
                            />
                            {/* Gradient overlay for better text readability on mobile */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent lg:hidden" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <div 
                ref={buttonRef}
                className={`fixed bottom-8 right-8 z-50 transition-opacity ease-in-out duration-500 ${
                    showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <Button 
                    onClick={scrollToTop}
                    variant="primary"
                    size="md"
                    className="rounded-full !p-3 shadow-lg bg-gradient-to-r from-[#FD1640] to-[#FD1640]/80"
                    aria-label="Scroll to top"
                    icon={<ArrowUp size={20} className="drop-shadow-[0_0_8px_rgba(253,22,64,0.5)]" />}
                >
                </Button>
            </div>
        </section>
    );
};

export default FAQ;