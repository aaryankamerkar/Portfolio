import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-xl font-bold text-indigo-400">
              Aaryan Kamerkar
            </h3>

            <p className="text-gray-400 mt-2">
              AI Engineer • Data Scientist • Full Stack Developer
            </p>
          </div>

          <div className="flex gap-5">

            <a
              href="https://github.com/aaryankamerkar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/aaryankamerkar14"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin size={24} />
            </a>

            <button
              onClick={scrollToTop}
              className="hover:text-indigo-400 transition"
            >
              <FaArrowUp size={22} />
            </button>

          </div>

        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2026 Aaryan Kamerkar. Built with React, TypeScript &
          Tailwind CSS.
        </div>

      </div>

    </footer>
  );
}