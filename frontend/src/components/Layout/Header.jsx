import gsap from "gsap";
import React,{ useEffect, useRef, useState } from "react";
import { navLinks } from "../../constants/index.js";
import { Volume2, VolumeX } from "lucide-react";
import { scrollToSection } from "../../utils/Scroll";
import Button from "../ui/Button";
import { useWindowScroll } from "react-use";


const Header = () => {
  const { y: scrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    // Early return for mobile menu
    if (isMobileMenuOpen) {
      setIsNavVisible(true);
      return;
    }

    // Track if page is scrolled for styling
    setIsScrolled(scrollY > 0);

    // Handle scroll behavior based on position
    if (scrollY === 0) {
      // At the top of the page: always show navbar
      setIsNavVisible(true);
     
    } else if (scrollY > lastScrollY + 10) {
      // Scrolling down: hide navbar (added threshold to prevent jitter)
      setIsNavVisible(false);
     
    } else if (scrollY < lastScrollY - 10) {
      // Scrolling up: show navbar (added threshold to prevent jitter)
      setIsNavVisible(true);
    
    }
    
    // Update last scroll position
    setLastScrollY(scrollY);
  }, [scrollY, isMobileMenuOpen, lastScrollY]);

  // Mobile menu animation
  useEffect(() => {
    gsap.to(mobileMenuRef.current, {
      height: isMobileMenuOpen ? "auto" : 0,
      opacity: isMobileMenuOpen ? 1 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.3, 
        ease: "power2.out", 
        overwrite: true,
      });
    }
  }, [isNavVisible]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      ref={navContainerRef}
      className={`fixed inset-x-0 top-4 z-100 h-[100px] border-none transition-all duration-700 sm:inset-x-6 ${
        isScrolled ? '' : 'bg-transparent'
      } rounded-lg`}
    >
      <header className="relative w-full font-inter">
        <nav className="flex items-center justify-between px-6 h-full">
          <div className="flex items-center gap-4">
            <img
              src="/favicon.png"
              alt="logo"
              className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer !ml-2.5"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.location.href = "#home";
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center h-full gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`
                  relative px-4 py-2 cursor-pointer text-white hover:text-[#FD1640] transition-colors duration-200
                  font-semibold text-base
                  ${link.id === 'home' ? 'text-[#FD1640]' : ''}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-0 after:h-[2px] after:bg-[#FD1640] after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="mx-6 px-6 py-2 bg-[#FD1640] text-white rounded-md hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
            >
              Connect Wallet
            </Button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center space-x-0.5 !outline-none !border-none cursor-pointer hover:opacity-80 transition-opacity"
            >
              {isMuted ? 
                <VolumeX className="h-5 w-5 text-white" /> : 
                <Volume2 className="h-5 w-5 text-white" />
              }
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-4 !px-5">
        
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="!p-2.5 rounded-sm bg-black/30 backdrop-blur-lg transition-all duration-200 hover:bg-white/10 cursor-pointer"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? 
                <VolumeX className="h-6 w-6 text-white" /> : 
                <Volume2 className="h-6 w-6 text-white" />
              }
            </button>
            <button
              className="!p-2 rounded-sm bg-black/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 cursor-pointer"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className="z-100 xl:hidden overflow-hidden bg-black/50 backdrop-blur-lg "
        >
          <div className="px-6 !py-10 flex flex-col items-center">
            <div className="w-full max-w-md space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`
                    block text-center text-lg font-semibold transition-all duration-300
                    !py-3 px-4 rounded-lg cursor-pointer
                    ${link.id === 'home' 
                      ? 'text-[#FD1640] bg-white/5' 
                      : 'text-white hover:text-[#FD1640] hover:bg-white/5'
                    }
                  `}
                >
                  {link.name}
                </a>
              ))}
              <div className="!pt-6 flex justify-center">
                <Button 
                  className="w-full max-w-[200px] px-6 py-3 bg-[#FD1640] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 cursor-pointer font-semibold"
                >
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;