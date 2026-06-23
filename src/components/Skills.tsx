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
      title: "Image & Visual Creation",
      items: skills.visual,
      icon: "🎨",
    },
    {
      title: "Video Generation",
      items: skills.video,
      icon: "🎬",
    },
    {
      title: "Prompt Engineering",
      items: skills.prompting,
      icon: "✨",
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
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-px bg-white/10 flex-grow mr-4"></div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-right">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Skills</span>
          </h2>
          <span className="text-purple-500 font-mono text-xl">02.</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-500"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <span className="text-2xl bg-white/5 p-2 rounded-xl border border-white/10 shadow-inner">{category.icon}</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                    className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-indigo-500 hover:text-white transition-colors cursor-default shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}