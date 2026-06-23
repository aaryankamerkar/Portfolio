import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        <p className="text-gray-300 leading-8">
          I’m Aaryan Kamerkar, an Artificial
          Intelligence and Data Science Engineer
          passionate about building AI-powered
          applications, intelligent systems,
          machine learning models and scalable
          software solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Education
            </h3>

            <p>
              B.Tech AI & DS
            </p>

            <p>
              Shah & Anchor Kutchhi Engineering
              College
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Location
            </h3>

            <p>Mumbai, India</p>
          </div>

        </div>
      </div>
    </section>
  );
}