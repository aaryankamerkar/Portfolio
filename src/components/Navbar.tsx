import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">
          Aaryan Kamerkar
        </h1>

        <div className="flex gap-6">
          <Link to="about" smooth>
            About
          </Link>

          <Link to="skills" smooth>
            Skills
          </Link>

          <Link to="projects" smooth>
            Projects
          </Link>

          <Link to="contact" smooth>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}