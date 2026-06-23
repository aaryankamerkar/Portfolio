import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const stats = [
    { label: "Projects Built", value: "5+" },
    { label: "Certifications", value: "4" },
    { label: "Hackathons", value: "3" },
    { label: "Graduation", value: "2026" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden"
    >
      {/* Unique Abstract Gradients instead of particles */}
      <div className="absolute top-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-indigo-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[0%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center mt-10 lg:mt-0">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md"
        >
          <span className="text-indigo-300 text-sm font-medium tracking-wide">
            Available for Full-Time & Freelance Roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-[6rem] font-black leading-tight mb-4 tracking-tighter"
        >
          Aaryan <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 drop-shadow-sm">Kamerkar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-8 h-10"
        >
          <TypeAnimation
            sequence={[
              "Artificial Intelligence Engineer",
              2000,
              "AI Generative Media Enthusiast",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Graduate in Artificial Intelligence and Data Science Engineering
          passionate about building AI-powered applications, intelligent
          systems, and innovative products that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <a
            href="#contact"
            className="bg-white text-slate-950 px-8 py-4 rounded-full flex items-center gap-3 font-bold transition-all hover:scale-105 shadow-xl shadow-white/10"
          >
            <FaEnvelope /> Get in Touch
          </a>
          <a
            href="resume.pdf"
            className="glass hover:bg-white/10 px-8 py-4 rounded-full flex items-center gap-3 font-bold transition-all hover:-translate-y-1 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Resume
          </a>
          <div className="flex items-center gap-4 ml-2">
            <a href="https://github.com/aaryankamerkar" target="_blank" rel="noreferrer" className="p-4 rounded-full glass hover:bg-white/10 text-white hover:text-indigo-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 rounded-full glass hover:bg-white/10 text-white hover:text-[#0a66c2] transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Stats row below */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card py-6 px-4 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform">
              <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-1">{stat.value}</span>
              <span className="text-xs text-indigo-300 uppercase tracking-widest font-semibold">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}