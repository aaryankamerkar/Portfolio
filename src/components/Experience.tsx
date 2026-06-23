import { experiences } from "../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-indigo-500 ml-4">

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="mb-10 ml-8"
            >

              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px]" />

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500 transition">

                <h3 className="text-2xl font-bold text-indigo-400">
                  {exp.role}
                </h3>

                <p className="text-lg mt-2">
                  {exp.company}
                </p>

                <p className="text-gray-400 mt-2">
                  {exp.duration}
                </p>

                {exp.description && (
                  <p className="text-gray-300 mt-4 leading-7">
                    {exp.description}
                  </p>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}