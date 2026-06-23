import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-cyan-500 font-mono text-xl">03.</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
          </h2>
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-card rounded-3xl p-1 overflow-hidden flex flex-col h-full"
            >
              {/* Hover glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-3xl" />
              
              <div className="bg-slate-950/80 rounded-[22px] p-6 flex flex-col h-full relative z-10 backdrop-blur-sm border border-white/5">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-xs uppercase tracking-wider text-gray-500">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-cyan-500 mt-1 text-[10px]">❖</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-2 text-xs uppercase tracking-wider text-gray-500">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm font-semibold"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm font-semibold shadow-lg shadow-indigo-500/20"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}