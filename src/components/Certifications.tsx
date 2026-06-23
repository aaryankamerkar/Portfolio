import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certifications = [
  {
    title: "Cisco AICTE Virtual Internship",
    period: "May 2024 - Jul 2024",
    description: "Cybersecurity Internship Program",
  },
  {
    title: "AI/ML Internship",
    period: "Jul 2024 - Sept 2024",
    description: "India Edu Program",
  },
  {
    title: "Android Development Internship",
    period: "Oct 2024 - Dec 2024",
    description: "India Edu Program",
  },
  {
    title: "Cisco Skill-A-Thon",
    period: "Dec 2024 - Jan 2025",
    description: "Networking Trainee",
  },
  {
    title: "Data Analytics Internship",
    period: "Jan 2025 - Mar 2025",
    description: "India Edu Program",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-start">
          <span className="text-indigo-500 font-mono text-xl">06.</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Training</span>
          </h2>
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500 text-indigo-400">
                <FaAward size={64} />
              </div>
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-300 border border-indigo-500/30 group-hover:bg-indigo-500/40 transition-colors">
                  <FaAward size={18} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-indigo-300 font-mono text-xs mb-3 bg-white/5 inline-block px-2 py-1 rounded">
                  {cert.period}
                </p>
                
                <p className="text-gray-400 text-sm">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}