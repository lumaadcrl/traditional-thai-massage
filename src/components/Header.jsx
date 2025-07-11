import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

        window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#205C4A] shadow-md' : 'bg-transparent'}`}>
      <nav className="w-full flex justify-between items-center py-3.5 px-6 font-sans">
          <div className="flex justify-between items-center gap-4">
              <div className="flex justify-center items-center">
                  <Link to="/home">
                      <img src="/logo.png" alt="logo"  className='w-[50px] sm:w-[60px]'/>
                  </Link>
                <div className="text-white lg:hidden md:block sm:block" onClick={toggleMenu}>
                    <i id="menu-icon" className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-3xl sm:text-3xl`}></i>
                </div>
              </div>
              <div className="hidden lg:flex uppercase text-white font-semibold">
                  <Link to="/home" className="px-3.5 border-2 border-transparent py-1 duration-200">Home</Link>
                  <Link to="/about" className="px-3.5 border-2 border-transparent py-1 duration-200">About</Link>
                  <Link to="/services" className="px-3.5 border-2 border-transparent py-1 duration-200">Services</Link>
                  <Link to="/contact" className="px-3.5 border-2 border-transparent py-1 duration-200">Contact</Link>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="flex font-semibold text-white text-[18px]">
                  <a target='_blank' href="https://www.instagram.com/explore/locations/916740021807660/ocean-green-massage/recent/" className="bx bxl-instagram px-3 hover:text-[#205C4A] duration-200"></a>
                  <a target='_blank' href="https://www.facebook.com/TinaMassageSpa/" className="bx bxl-facebook px-3 hover:text-[#205C4A] duration-200"></a>
              </div>
              <div className="uppercase text-white font-semibold">
                  <Link to="/contact"className="border-2 border-white px-2 py-2 text-sm sm:px-6 sm:py-2 sm:text-base md:px-8 md:py-3 md:text-md  hover:bg-[#205C4A] duration-200">
                    Call Now
                  </Link>
              </div>
          </div>
      </nav>

      <div
        id="mobileMenu"
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute w-full flex-col items-center bg-[#1C4F40] rounded-md shadow-lg text-white uppercase font-semibold z-50`}
      >
            <Link to="/about" className="py-3.5 sm:text-[16px]" onClick={toggleMenu}>About</Link>
            <Link to="/home" className="py-3.5 sm:text-[16px]" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="py-3.5 sm:text-[16px]" onClick={toggleMenu}>Services</Link>
            <Link to="/contact" className="py-3.5 sm:text-[16px]" onClick={toggleMenu}>Contact</Link>
        </div>
    </header>
  );
};

export default Header;
