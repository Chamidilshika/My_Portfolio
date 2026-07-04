import { useEffect, useState } from "react";
import API from "../services/api";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <section className="bg-white text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl text-black font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map((p) => (
            <div
              key={p._id}
              className="bg-[#102A54] border border-blue-900 p-5 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-3">
                {p.description}
              </p>

              {/* Tech */}
              <p className="text-xs text-blue-300 mb-4">
                {p.tech}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">

                {/* GitHub */}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    className="px-3 py-1 text-sm border border-gray-400 rounded hover:bg-gray-700 transition"
                  >
                    GitHub Link
                  </a>
                )}

                {/* Live Link */}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    className="px-3 py-1 text-sm bg-blue-500 rounded hover:bg-blue-600 transition"
                  >
                    Live Link
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>
  

      </div>
    </section>
  );
};

export default FeaturedProjects;