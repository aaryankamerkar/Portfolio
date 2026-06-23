import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
              Let's Build Something <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Extraordinary.</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a 
                href="mailto:aaryan.kamerkar17558@sakec.ac.in"
                className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                <FaEnvelope /> Say Hello
              </a>
              <a 
                href="tel:+919167607080"
                className="flex items-center gap-3 glass px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/10 transition-colors"
              >
                <FaPhoneAlt /> +91 9167607080
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 border-t border-white/10 pt-10">
              <a
                href="https://github.com/aaryankamerkar"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full glass text-gray-400 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/aaryankamerkar14"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-full glass text-gray-400 hover:text-[#0a66c2] hover:bg-white/10 hover:-translate-y-1 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}