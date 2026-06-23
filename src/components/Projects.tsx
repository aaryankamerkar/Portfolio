import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold mb-3 text-indigo-400">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-5 leading-relaxed">
                {project.description}
              </p>

              <h4 className="font-semibold mb-3">
                Key Features
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400"
                  >
                    ✓ {feature}
                  </span>
                ))}

              </div>

              <h4 className="font-semibold mb-3">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4 mt-auto">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}