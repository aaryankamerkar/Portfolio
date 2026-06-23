import { motion } from "framer-motion";

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
    <section
      id="certifications"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Certifications & Training
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-bold text-indigo-400">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {cert.period}
              </p>

              <p className="mt-3 text-gray-300">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}