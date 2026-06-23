import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {  
    id: 1, 
    type: "image", 
    src: "motorcycle-before.jpg", 
    hoverSrc: "motorcycle-after.png",
  alt: "IMG to IMG Modification (Hover to see transformation)"
  },
  { 
    id: 2, 
    type: "image", 
    src: "virtual-try-on.png", 
    alt: "Avarobe Virtual Try-On Interface Design" 
  },
  { 
    id: 3, 
    type: "image", 
    src: "sign-speak.png", 
    alt: "SignSpeak AI System - Holographic Concept" 
  },
  { 
    id: 4, 
    type: "image", 
    src: "pokemon-mumbai.png", 
    alt: "Pokémon in Mumbai - Generative AI Concept" 
  },
  // Placeholders for future videos
  { id: 5, type: "video", src: "my-video-1.mp4.mp4", alt: "AI Video Generation 1" },
  { id: 6, type: "video", src: "my-video-2.mp4.mp4", alt: "AI Video Generation 2" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("image");

  const filteredItems = galleryItems.filter((item) => {
    return item.type === filter;
  });

  return (
    <section id="gallery" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12">
          <div className="flex items-center gap-4 w-full md:w-auto flex-grow justify-start">
            <span className="text-cyan-500 font-mono text-xl">07.</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide">
              Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Gallery</span>
            </h2>
            <div className="hidden md:block h-px bg-white/10 flex-grow ml-4 max-w-[200px]"></div>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0 bg-slate-900/50 p-1 rounded-xl border border-white/5 w-full md:w-auto overflow-x-auto">
            {["image", "video"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold capitalize transition-all whitespace-nowrap ${
                  filter === category
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category + "s"}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-400 mb-12 max-w-2xl text-lg">
          A collection of AI-generated visuals, conceptual art, and motion assets—showcasing prompt engineering and creative workflows.
        </p>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card aspect-video rounded-2xl overflow-hidden relative group bg-slate-800"
              >
                {item.src ? (
                  item.type === "video" ? (
                    <video 
                      src={item.src} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {item.hoverSrc && (
                        <img 
                          src={item.hoverSrc} 
                          alt={`${item.alt} transformed`} 
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-0 group-hover:opacity-100"
                        />
                      )}
                    </>
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                      {item.type} placeholder
                    </span>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10 pointer-events-none">
                  <span className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                    {item.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
