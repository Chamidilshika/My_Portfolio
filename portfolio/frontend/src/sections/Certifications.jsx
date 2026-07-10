import React from "react";
import aiBootcampCert from "../assets/AIBootCamp.jpg";
import jpuraXtreme from "../assets/Debugger.jpg";
import codeFuseCert from "../assets/CodeFuse.jpg";
import aiEngineerWorkshop from "../assets/Coursevita.jpg";

const certificationsData = [
  {
    title: "🤖 AI Bootcamp – Participation Certificate",
    description:
      "Completed a 3-day AI Bootcamp conducted by the University of Sri Jayewardenepura in collaboration with SLAAI.",
    image: aiBootcampCert,
  },
  
  {
    title: "💻 J'puraXtreme 2.0",
    description:
      "Participated in J'puraXtreme 2.0, a competitive programming competition organized by the IEEE Computer Society Student Branch Chapter of the University of Sri Jayewardenepura, enhancing my problem-solving and coding skills.",
    image: jpuraXtreme,
  },

  {
  title: "🏆 CODEFUSE 2.0 – 1st Place Achievement",
  description:
    "Secured 1st place in the 3rd year category at CODEFUSE 2.0 coding hackathon organized by the Association of Computing Students, University of Sri Jayewardenepura.",
  image: codeFuseCert,
},

{
  title: "🤖 AI Engineer Workshop – Coursevita",
  description:
    "Successfully completed the AI Engineer Workshop conducted by Coursevita, gaining practical knowledge in Artificial Intelligence, real-world AI applications, and problem-solving techniques.",
  image: aiEngineerWorkshop,
},
];

const Certifications = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certificationsData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-contain bg-white p-3"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;