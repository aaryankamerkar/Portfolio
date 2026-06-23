import { experiences } from "../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-20 justify-start">
          <span className="text-purple-500 font-mono text-xl">04.</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Experience</span>
          </h2>
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8">
          {/* Glowing line effect */}
          <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-purple-500/80 via-indigo-500/50 to-transparent"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-16 ml-10 md:ml-12 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[46px] md:-left-[54px] top-6 shadow-[0_0_15px_rgba(99,102,241,0.8)] group-hover:scale-125 group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-300">
                <div className="absolute inset-0 bg-white/50 rounded-full animate-ping"></div>
              </div>

              <div className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {exp.role}
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 mb-4 gap-2">
                  <p className="text-lg font-medium text-cyan-400">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 font-mono text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </p>
                </div>

                {exp.description && (
                  <p className="text-gray-300 leading-relaxed">
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