import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {

  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-bold mb-10">
          Contact Me
        </h2>

        <div className="bg-slate-800 rounded-2xl p-8">

          <p>
            Email:
          </p>

          <p className="text-indigo-400 mb-5">
            aaryan.kamerkar17558@sakec.ac.in
          </p>

          <p>
            Phone:
          </p>

          <p className="mb-5">
            +91 9167607080
          </p>

          <div className="flex gap-5">

            <a
              href="https://github.com/aaryankamerkar"
              target="_blank"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://linkedin.com/in/aaryankamerkar14"
              target="_blank"
            >
              <FaLinkedin size={28} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}