import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-2xl text-indigo-400">
          Aaryan
        </h1>

        <div className="flex gap-8 text-sm md:text-base">

          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-indigo-400">
            About
          </Link>

          <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-indigo-400">
            Skills
          </Link>

          <Link to="experience" smooth duration={500} className="cursor-pointer hover:text-indigo-400">
            Experience
          </Link>

          <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-indigo-400">
            Projects
          </Link>

          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-indigo-400">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}