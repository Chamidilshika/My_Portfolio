import smartCodeFixer from "../assets/SmartcodeFixer.png";
import eventaura from "../assets/eventAura.jpeg";
import textSummarizer from "../assets/TextSummarizer.png";
import bloodDonation from "../assets/BloodDonation.png";
import fashionRecommender from "../assets/FashionRecommender.png"
import healthcare from "../assets/Healthcare.png";
import devopsPipeline from "../assets/Devops.png";
import moodSyncAI from "../assets/MoodSyncAI.png";
import smartHome from "../assets/SmartHome.png";
import smartEnergy from "../assets/SmartEnergy.png";
import jenkinsDocker from "../assets/Jenkins.jpg";

const projects = [
 
  {
    id: 1,
    title: "EventAura",
    image: eventaura,
    description:
      "Event management platform for ticket booking and host management.",
    tech: "Laravel, Inertia.js, MySQL, React, PHP, JavaScript, SCSS",
    github: "https://lnkd.in/ga84N99e",
  },
  {
    id: 2,
    title: "SmartCodeFixer",
    image: smartCodeFixer,
    description:
      "An AI-powered code analysis platform that automatically detects programming errors and provides intelligent fix suggestions.",
    tech: "Python, Flask, Machine Learning, HTML, CSS, JavaScript",
    github: "https://github.com/Chamidilshika/SmartCodeFixer",
  },
  {
    id: 3,
    title: "Blood Donation Platform",
    image: bloodDonation,
    description:
      "Community blood donation platform with request management.",
    tech: "MongoDB, Express.js, React.js, Node.js, React Native, AI",
    github: "https://github.com/ImalshaSathsarani/RedAlert",
  },
  {
    id: 4,
    title: "AI Text Summarization Web App",
    image: textSummarizer,
    description:
      "Converts lengthy text into accurate, meaningful summaries.",
    tech: "Python, Flask, Hugging Face Transformers, PyTorch, NLP, HTML, CSS",
    github: "https://github.com/Chamidilshika/Text-Summarization-Webapp.git",
  },
  {
    id: 5,
    title: "Fashion Image Recommender System",
    image: fashionRecommender,
    description:
      "Suggests visually similar clothing items based on uploaded images.",
    tech: "Python, Flask, Hugging Face Transformers, PyTorch, HTML, CSS",
    github: "https://github.com/Chamidilshika/fashion_recommender.git",
  },

  {
  id: 6,
  title: "Healthcare Appointment Management System",
  image: healthcare,
  description:
    "A MERN stack healthcare platform connecting patients, doctors, and administrators with secure appointment booking and management.",
  tech: "MongoDB, Express.js, React.js, Node.js, JWT, Tailwind CSS, Twilio, Nodemailer",
  github: "https://github.com/Chamidilshika/Healthcare-Appointment-System",
},

{
  id: 7,
  title: "CI/CD Pipeline with AWS EC2 & GitHub Actions",
  image: devopsPipeline,
  description:
    "Implemented an end-to-end CI/CD pipeline for a Dockerized Node.js application deployed on AWS EC2. Automated build and deployment using GitHub Actions.",
  tech: "Node.js, Express.js, Docker, GitHub Actions, AWS EC2, Linux, CI/CD",
  github: "https://github.com/Chamidilshika/CI-CD_Dockerized_WebApp",
},

{
  id: 8,
  title: "Mood-Sync AI",
  image: moodSyncAI,
  description:
    "An AI-powered real-time music recommendation system that detects facial emotions using computer vision and recommends personalized music based on the user's current mood.",
  tech:
    "Python, Deep Learning, CNN, Computer Vision, Streamlit, WebRTC, PyWhatKit, Machine Learning",
  github:
    "https://github.com/ImalshaSathsarani/music-recommender-using-face-emotions",
},

{
  id: 9,
  title: "Smart Electricity Cost Analyzer",
  image: smartEnergy,
  description:
    "A machine learning-based electricity cost prediction system that estimates daily, weekly, and monthly energy bills while providing personalized cost-saving recommendations through an interactive dashboard.",
  tech:
    "Python, Machine Learning, FastAPI, Streamlit, Pandas, Scikit-learn",
  github:
    "https://github.com/Chamidilshika/electricity-bill-predictor",
},

{
  id: 9,
  title: "Smart Home System using ESP32 & IoT",
  image: smartHome,
  description:
    "An IoT-based smart home automation system that enables remote appliance control and real-time electricity consumption monitoring using ESP32, sensors, and the Blynk platform.",
  tech:
    "ESP32, Arduino IDE, Blynk IoT, ACS712 Current Sensor, Relay Module, Embedded Systems",
},

{
  id: 11,
  title: "CI/CD Pipeline using Jenkins & Docker",
  image: jenkinsDocker,
  description:
    "A DevOps learning project implementing a CI/CD environment using Jenkins running inside Docker. Created automated pipelines to understand build, test, and deployment workflows.",
  tech:
    "Jenkins, Docker, CI/CD, Linux, DevOps, Pipeline Automation",
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

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition"
                    >
                      GitHub
                    </a>
                  )}

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