import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>
          <p className="text-gray-400 mt-4">
            My academic journey and continuous learning in Software Engineering.
          </p>
        </div>

        <div className="relative border-l-4 border-cyan-400 ml-5">

          {/* University */}
          <div className="mb-12 ml-8 relative">
            <div className="absolute -left-[47px] bg-cyan-400 p-3 rounded-full">
              <GraduationCap size={22} className="text-black" />
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition duration-300">
              <h3 className="text-2xl font-semibold text-cyan-400">
                Bachelor of Computing Honours in Software Engineering
              </h3>

              <h4 className="text-lg mt-2 font-medium">
                University of Sri Jayewardenepura
              </h4>

              <div className="flex flex-wrap gap-6 mt-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>2023 – Present</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Sri Lanka</span>
                </div>
              </div>

              <p className="mt-5 text-gray-300 leading-7">
                Pursuing a Bachelor's degree in Software Engineering,
                with strong foundations in software development, web technologies,
                databases, algorithms, software architecture, DevOps, and Human
                Computer Interaction.
              </p>

              <div className="mt-5 flex items-center gap-2 text-cyan-400">
                <Award size={18} />
                <span>Expected Graduation: 2027</span>
              </div>
            </div>
          </div>

          {/* Professional Training */}
            <div className="mb-12 ml-8 relative">
            <div className="absolute -left-[47px] bg-cyan-400 p-3 rounded-full">
                <GraduationCap size={22} className="text-black" />
            </div>

            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition duration-300">
                <h3 className="text-2xl font-semibold text-cyan-400">
                Java Programming Course
                </h3>

                <h4 className="text-lg mt-2 font-medium">
                SITEC Education Center
                </h4>

                <div className="flex flex-wrap gap-6 mt-4 text-gray-400">
                <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>2022</span>
                </div>

                <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Sri Lanka</span>
                </div>
                </div>

                <p className="mt-5 text-gray-300 leading-7">
                Completed a Java Application Development course covering object-oriented programming (OOP), Java fundamentals, exception handling, file handling, collections, and GUI application development. Strengthened problem-solving and software development skills through practical projects.
                </p>
            </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Education;