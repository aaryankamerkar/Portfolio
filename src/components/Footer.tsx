import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030014] py-12 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tighter">
              <span className="text-white">Aaryan</span>
              <span className="text-indigo-500">.</span>
            </h3>
            <p className="text-gray-400 mt-2 font-medium">
              AI Engineer • Data Scientist • Full Stack Developer
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/aaryankamerkar"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/aaryankamerkar14"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full glass text-gray-400 hover:text-indigo-400 hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <FaArrowUp size={20} />
            </button>
          </div>

        </div>

        <div className="mt-12 text-center text-gray-600 text-sm font-medium">
          <p>© {new Date().getFullYear()} Aaryan Kamerkar. Crafted with <span className="text-indigo-500">♥</span> using React & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}