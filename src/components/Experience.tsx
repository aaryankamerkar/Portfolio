import { experiences } from "../data/experience";

export default function Experience() {

  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-10">
          Experience
        </h2>

        <div className="space-y-6">

          {experiences.map((exp) => (

            <div
              key={exp.role}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold">
                {exp.role}
              </h3>

              <p>
                {exp.company}
              </p>

              <p className="text-gray-400">
                {exp.duration}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}