import { skills } from "../data/skills";

export default function Skills() {

  const renderSkill = (
    title: string,
    items: string[]
  ) => (
    <div className="bg-slate-800 p-6 rounded-xl">

      <h3 className="text-2xl mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">

        {items.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-600 px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );

  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {renderSkill(
            "Programming",
            skills.programming
          )}

          {renderSkill(
            "AI & ML",
            skills.ai
          )}

          {renderSkill(
            "Web Development",
            skills.web
          )}

          {renderSkill(
            "Database & Tools",
            skills.database
          )}

        </div>

      </div>
    </section>
  );
}