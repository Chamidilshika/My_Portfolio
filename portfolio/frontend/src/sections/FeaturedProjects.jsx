import smartflix from "../assets/SmartcodeFixer.png";
import eventaura from "../assets/eventAura.jpeg";
import textSummarizer from "../assets/TextSummarizer.png";
import bloodDonation from "../assets/BloodDonation.png";
import fashionRecommender from "../assets/FashionRecommender.png"
import healthcare from "../assets/Healthcare.png";

const projects = [
 
  {
    id: 1,
    title: "EventAura",
    image: eventaura,
    description:
      "Event management platform for ticket booking and host management.",
    tech: "Laravel, Inertia.js, MySQL, React, PHP, JavaScript, SCSS",
    github: "https://lnkd.in/ga84N99e",
    live: "https://huggingface.co/spaces/Chamidilshika/EventAura",
  },
  {
    id: 2,
    title: "SmartFlix",
    image: smartflix,
    description:
      "Movie recommendation system using collaborative and content-based filtering.",
    tech: "Python, Flask, Machine Learning, HTML, CSS, JavaScript",
    github: "https://github.com/Chamidilshika/SmartCodeFixer",
    live: "https://smart-code-fixer.vercel.app/",
  },
  {
    id: 3,
    title: "Blood Donation Platform",
    image: bloodDonation,
    description:
      "Community blood donation platform with request management.",
    tech: "MongoDB, Express.js, React.js, Node.js, React Native, AI",
    github: "https://github.com/ImalshaSathsarani/RedAlert",
    live: "https://red-alert-zeta.vercel.app/",
  },
  {
    id: 4,
    title: "AI Text Summarization Web App",
    image: textSummarizer,
    description:
      "Converts lengthy text into accurate, meaningful summaries.",
    tech: "Python, Flask, Hugging Face Transformers, PyTorch, NLP, HTML, CSS",
    github: "https://github.com/Chamidilshika/Text-Summarization-Webapp.git",
    live: "https://huggingface.co/spaces/Chamidilshika/Text_Summarization_Webapp",
  },
  {
    id: 5,
    title: "Fashion Image Recommender System",
    image: fashionRecommender,
    description:
      "Suggests visually similar clothing items based on uploaded images.",
    tech: "Python, Flask, Hugging Face Transformers, PyTorch, HTML, CSS",
    github: "https://github.com/Chamidilshika/fashion_recommender.git",
    live: "https://huggingface.co/spaces/Chamidilshika/fashion-recommender",
  },

  {
  id: 6,
  title: "Healthcare Appointment Management System",
  image: healthcare,
  description:
    "A MERN stack healthcare platform connecting patients, doctors, and administrators with secure appointment booking and management.",
  tech: "MongoDB, Express.js, React.js, Node.js, JWT, Tailwind CSS, Twilio, Nodemailer",
  github: "https://github.com/Chamidilshika/Healthcare-Appointment-System",
  live: "https://healthcare-appointment-system-tpop.vercel.app/",
},
];

const FeaturedProjects = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-6">
                  {project.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-blue-600">
                  {project.tech}
                </p>

                <div className="flex gap-3 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;