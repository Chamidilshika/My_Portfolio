import React from "react";
import reviewPaper from "../assets/ReviewPaper.jpg";
import idealize from "../assets/Idealize.jpg";
import artemia from "../assets/Artemia.jpg";
import codeFuse from "../assets/CodeFuse1.jpg";

const achievementsData = [
  {
    title: "🌊📘 Research Publication",
    description:
      "Published a review paper on AI-based coral reef health monitoring using image classification techniques at JCS 2026 Symposium.",
    image: reviewPaper,
  },

  {
    title: "🏆 Idealize 2025 Semi-Finalist",
    description:
      "Selected for the Semi-Finals of Idealize 2025, organized by AIESEC in University of Moratuwa, for RedAlert – a Smart Blood Donor Discovery Platform that connects urgent blood requests with nearby donors.",
    image: idealize,
  },
  
  {
    title: "🎨 Artemia 1.0 Finalist",
    description:
      "Team INPIX was selected as a Finalist in Artemia 1.0, the UI/UX Design Challenge organized by the IEEE WIE Affinity Group of the University of Sri Jayewardenepura.",
    image: artemia,
  },

  {
  title: "🏆 CODEFUSE 2.0 – 3rd Year Winners",
  description:
    "Secured 1st place in the 3rd year category at CODEFUSE 2.0 coding marathon organized by the Association of Computing Students, University of Sri Jayewardenepura, as a member of Team Debuggers.",
  image: codeFuse,
},
];

const Achievements = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">        {achievementsData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
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

export default Achievements;