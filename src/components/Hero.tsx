import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-indigo-400 font-semibold tracking-wider mb-4"
        >
          AI Engineer • Data Scientist • Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Aaryan Kamerkar
          </span>
        </motion.h1>

        <div className="mt-6 text-2xl md:text-4xl font-semibold text-indigo-300">
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
        </div>

        <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Graduate in Artificial Intelligence and Data Science Engineering
          passionate about building AI-powered applications, intelligent
          systems, machine learning solutions, and innovative products that
          solve real-world problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="/resume.pdf"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="https://github.com/aaryankamerkar"
            target="_blank"
            className="border border-slate-700 hover:border-indigo-500 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-slate-700 hover:border-indigo-500 px-6 py-3 rounded-xl flex items-center gap-2 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}