import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

export default function Publications() {
  const publications = [
    {
      title: "AI Virtual Clothes Try-On",
      journal: "IJRPR Journal",
      year: "2025",
      link: "https://ijrpr.com/uploads/V6ISSUE5/IJRPR44630.pdf",
      description: "A research paper detailing a novel approach to virtual try-on technology using advanced generative AI and computer vision techniques."
    }
  ];

  return (
    <section id="publications" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-px bg-white/10 flex-grow mr-4"></div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-right">
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Publications</span>
          </h2>
          <span className="text-cyan-500 font-mono text-xl">05.</span>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                <FaBookOpen size={32} />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pub.title}
                </h3>
                <div className="flex items-center gap-3 text-sm mb-3">
                  <span className="text-indigo-300 font-medium bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">{pub.journal}</span>
                  <span className="text-gray-400">{pub.year}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {pub.description}
                </p>
              </div>

              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 md:mt-0 flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/30 transition-all font-semibold whitespace-nowrap"
              >
                Read Paper <FaExternalLinkAlt size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}