import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Gallery", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-4xl rounded-full ${
        scrolled ? "glass shadow-2xl shadow-indigo-500/10 py-3 px-6" : "bg-transparent py-5 px-4"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          {/* Logo/Name removed as requested */}
        </Link>

        <div className="hidden md:flex gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth
              duration={500}
              spy={true}
              activeClass="bg-indigo-500/20 text-indigo-300"
              className="cursor-pointer px-4 py-2 text-sm font-medium rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button could go here, but for now we keep it simple or hide it */}
        <div className="md:hidden">
           {/* Hamburger icon placeholder */}
           <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer">
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
              <div className="w-6 h-0.5 bg-white rounded-full"></div>
           </div>
        </div>

      </div>
    </motion.nav>
  );
}