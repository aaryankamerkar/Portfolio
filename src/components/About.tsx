import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6 text-indigo-400">
              AI Engineer & Developer
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              I'm Aaryan Kamerkar, a graduate in Artificial Intelligence and
              Data Science Engineering with a passion for building intelligent
              systems, AI-powered applications, and scalable software solutions.
            </p>

            <p className="text-gray-400 leading-8">
              My interests span Machine Learning, Deep Learning, Computer Vision,
              Generative AI, Full Stack Development, and Data Science. I enjoy
              transforming innovative ideas into practical products that solve
              real-world challenges.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <FaGraduationCap className="text-indigo-400 text-3xl mb-4" />
              <h4 className="font-bold text-xl mb-2">Education</h4>
              <p className="text-gray-400">
                B.Tech in Artificial Intelligence & Data Science
              </p>
              <p className="text-gray-500 mt-2">
                Shah & Anchor Kutchhi Engineering College
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <FaMapMarkerAlt className="text-indigo-400 text-3xl mb-4" />
              <h4 className="font-bold text-xl mb-2">Location</h4>
              <p className="text-gray-400">
                Mumbai, Maharashtra, India
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <FaLaptopCode className="text-indigo-400 text-3xl mb-4" />
              <h4 className="font-bold text-xl mb-2">Focus</h4>
              <p className="text-gray-400">
                Full Stack Development & AI Applications
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <FaBrain className="text-indigo-400 text-3xl mb-4" />
              <h4 className="font-bold text-xl mb-2">Interests</h4>
              <p className="text-gray-400">
                Generative AI, ML, CV, NLP & Automation
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}