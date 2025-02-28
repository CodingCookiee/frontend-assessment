import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        let timeoutId;
        const throttledScroll = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    handleScroll();
                    timeoutId = null;
                }, 100);
            }
        };

        window.addEventListener('scroll', throttledScroll);
        return () => {
            window.removeEventListener('scroll', throttledScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Artist', path: '/artist' },
        { name: 'Staking', path: '/staking' },
        { name: 'Roadmap', path: '/roadmap' },
        { name: 'Team', path: '/team' },
        { name: 'Vesting', path: '/vesting' },
        { name: 'Marketplace', path: '/marketplace' }
    ];

    return (
        <header 
            className={`fixed w-full top-2 sm:top-4 z-[100] transition-all duration-300 ${
                isScrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <nav className="flex items-center justify-between max-w-[1200px] mx-auto">
                    <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                        <img src="/favicon.png" alt="Logo" className="h-10 w-auto" />
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`
                                        relative py-1 cursor-pointer
                                        ${location.pathname === link.path ? 'text-[#FD1640]' : 'text-white'} 
                                        hover:text-[#FD1640] font-normal transition-colors duration-200 text-sm
                                        after:content-[''] after:absolute after:bottom-0 after:left-0 
                                        after:w-0 after:h-[2px] after:bg-[#FD1640] after:transition-all after:duration-300
                                        hover:after:w-full
                                    `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <Button 
                                size="sm"
                                className="font-medium px-6 py-2.5 rounded-sm cursor-pointer"
                            >
                                Connect Wallet
                            </Button>
                            <button 
                                onClick={() => setIsMuted(!isMuted)}
                                className="p-2.5 rounded-full transition-all duration-200 hover:bg-white/10 cursor-pointer"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? 
                                    <VolumeX className="h-5 w-5 text-white" /> : 
                                    <Volume2 className="h-5 w-5 text-white" />
                                }
                            </button>
                        </div>
                    </div>

<div className="flex lg:hidden items-center justify-center gap-2.5">
    <button 
        onClick={() => setIsMuted(!isMuted)}
        className=" rounded-full transition-all duration-200 hover:bg-white/10 cursor-pointer bg-black/30 backdrop-blur-sm"
        aria-label={isMuted ? "Unmute" : "Mute"}
    >
        {isMuted ? 
            <VolumeX className="h-6 w-6 text-white" /> : 
            <Volume2 className="h-6 w-6 text-white" />
        }
    </button>
    <button
        onClick={() => setIsOpen(!isOpen)}
        className="!pr-16 rounded-full transition-all duration-200 hover:bg-white/10 cursor-pointer bg-black/30 backdrop-blur-sm"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
    >
        {isOpen ? 
            <X className="h-6 w-6 text-white" /> : 
            <Menu className="h-6 w-6 text-white" />
        }
    </button>
</div>

                </nav>
            </div>

            {isOpen && (
                <div className="lg:hidden fixed inset-0  top-[72px] sm:top-[76px] bg-black/95 backdrop-blur-md z-50">
                    <div className="w-full h-full px-6 py-8">
                        <div className="flex flex-col gap-6 items-center justify-center px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`
                                        cursor-pointer
                                        ${location.pathname === link.path ? 'text-[#FD1640]' : 'text-white'}
                                        hover:text-[#FD1640] font-normal transition-all duration-200 text-lg
                                    `}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button 
                                className="mt-4 w-full max-w-[200px] px-6 py-2.5 rounded-sm cursor-pointer"
                                size="md"
                            >
                                Connect Wallet
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
