import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-6xl font-bold">
          Hi, I'm Aaryan Kamerkar
        </h1>

        <TypeAnimation
          sequence={[
            "AI Engineer",
            2000,
            "Data Scientist",
            2000,
            "Full Stack Developer",
            2000,
          ]}
          repeat={Infinity}
          className="text-indigo-400 text-3xl"
        />

        <p className="mt-4 text-gray-400">
          Building Intelligent Systems That
          Solve Real-World Problems.
        </p>
      </motion.div>
    </section>
  );
}