import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiLaravel } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, icon: <FaReact /> },
    { name: "Node.js", level: 85, icon: <FaNodeJs /> },
    { name: "Express", level: 80, icon: <SiExpress /> },
    { name: "MongoDB", level: 85, icon: <SiMongodb /> },
    { name: "Laravel", level: 80, icon: <SiLaravel /> },
    { name: "Python", level: 90, icon: <FaPython /> },
  ];

  return (
    <section className="bg-[#0B1B3A] text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-[#102A54] p-5 rounded-xl border border-blue-900 shadow-md hover:scale-105 transition"
            >

              {/* TOP: Icon + Name */}
              <div className="flex items-center gap-3 mb-3 text-xl">

                <span className="text-blue-300 text-2xl">
                  {skill.icon}
                </span>

                <span className="font-semibold">
                  {skill.name}
                </span>

                <span className="ml-auto text-sm text-gray-300">
                  {skill.level}%
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#0B1B3A] rounded-full h-3">

                <div
                  className="bg-blue-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;