import { useEffect, useState } from "react";
import API from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="p-10 bg-slate-950 text-white min-h-screen">
      <h1 className="text-4xl mb-6">All Projects</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p._id} className="bg-slate-800 p-4 rounded">
            <h2 className="text-xl">{p.title}</h2>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;