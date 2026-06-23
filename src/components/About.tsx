import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="text-indigo-500 font-mono text-xl">01.</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
          </h2>
          <div className="h-px bg-white/10 flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          
          {/* Visual Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass p-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 via-purple-900/50 to-cyan-900/50 z-0"></div>
            <div className="w-full h-full rounded-2xl overflow-hidden relative z-10 bg-slate-950/50 flex flex-col items-center justify-center border border-white/5">
                {/* Abstract shape/illustration */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-indigo-500/30 blur-[60px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-cyan-500/30 blur-[60px] rounded-full animate-pulse delay-1000"></div>
                <div className="relative z-20 text-center">
                   <FaBrain className="text-8xl text-indigo-300/80 mb-6 mx-auto drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]" />
                   <h3 className="text-2xl font-bold tracking-widest uppercase text-white/90">Innovate.</h3>
                   <h3 className="text-2xl font-bold tracking-widest uppercase text-white/60">Create.</h3>
                   <h3 className="text-2xl font-bold tracking-widest uppercase text-white/30">Elevate.</h3>
                </div>
            </div>
          </motion.div>

          {/* Text Right Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Exploring the frontiers of <span className="text-indigo-400">Generative AI</span> & <span className="text-cyan-400">Creative Tech</span>.
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I’m Aaryan Kamerkar, a graduate in Artificial Intelligence and Data Science Engineering with a strong interest in generative AI and creative technologies. I enjoy exploring how AI can be used to create visual content, enhance storytelling, and build intelligent applications that combine technology with creativity.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                I have experience working with AI/ML concepts, web development, and modern AI tools, and I’m continuously learning new techniques in generative AI, image creation, and video generation. My goal is to apply these skills to build impactful and visually engaging AI-driven solutions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: FaGraduationCap, title: "Education", text: "B.Tech in AI & Data Science", sub: "Shah & Anchor Kutchhi Engineering" },
                { icon: FaMapMarkerAlt, title: "Location", text: "Mumbai, Maharashtra, India", sub: "Available Remote" },
                { icon: FaLaptopCode, title: "Focus", text: "Full Stack & AI Apps", sub: "End-to-end development" },
                { icon: FaBrain, title: "Interests", text: "Generative AI, ML, CV, NLP", sub: "Continuous learning" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors group"
                >
                  <item.icon className="text-indigo-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-xl mb-1 text-white">{item.title}</h4>
                  <p className="text-gray-300 text-sm mb-1">{item.text}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}