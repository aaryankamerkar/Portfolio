import { skills } from "../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Programming",
      items: skills.programming,
      icon: "💻",
    },
    {
      title: "AI & Machine Learning",
      items: skills.ai,
      icon: "🤖",
    },
    {
      title: "Web Development",
      items: skills.web,
      icon: "🌐",
    },
    {
      title: "Database & Tools",
      items: skills.database,
      icon: "🛠️",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-800/70 border border-slate-700 rounded-2xl p-8 hover:border-indigo-500 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span>{category.icon}</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}