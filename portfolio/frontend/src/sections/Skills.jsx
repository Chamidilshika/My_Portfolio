import { useState } from "react";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiFlask,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiJenkins,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";


const Skills = () => {

  const [activeCategory, setActiveCategory] = useState("Frontend");


  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "AI & ML",
    "DevOps",
    "Tools",
  ];


  const skills = {

    Frontend: [
      {
        name: "React.js",
        level: 90,
        icon: <FaReact />
      },
      {
        name: "JavaScript",
        level: 90,
        icon: <SiJavascript />
      },
      {
        name: "TypeScript",
        level: 80,
        icon: <SiTypescript />
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: <SiTailwindcss />
      },
      {
        name: "Bootstrap",
        level: 80,
        icon: <SiBootstrap />
      },
      {
        name: "HTML & CSS",
        level: 90,
        icon: <FaReact />
      },
    ],


    Backend: [
      {
        name: "Node.js",
        level: 85,
        icon: <FaNodeJs />
      },
      {
        name: "Express.js",
        level: 85,
        icon: <SiExpress />
      },
      {
        name: "Laravel",
        level: 80,
        icon: <SiLaravel />
      },
      {
        name: "Python",
        level: 90,
        icon: <FaPython />
      },
      {
        name: "Flask",
        level: 90,
        icon: <SiFlask />
      },
      {
        name: "FastAPI",
        level: 85,
        icon: <SiFastapi />
      },
      {
        name: "Java",
        level: 85,
        icon: <FaJava />
      },
    ],


    Database: [
      {
        name: "MongoDB",
        level: 90,
        icon: <SiMongodb />
      },
      {
        name: "MySQL",
        level: 85,
        icon: <SiMysql />
      },
    ],


    "AI & ML": [
      {
        name: "Machine Learning",
        level: 90,
        icon: <FaPython />
      },
      {
        name: "Deep Learning",
        level: 85,
        icon: <SiTensorflow />
      },
      {
        name: "PyTorch",
        level: 85,
        icon: <SiPytorch />
      },
      {
        name: "Computer Vision",
        level: 85,
        icon: <FaPython />
      },
      {
        name: "Natural Language Processing",
        level: 80,
        icon: <FaPython />
      },
    ],


    DevOps: [
      {
        name: "Docker",
        level: 85,
        icon: <FaDocker />
      },
      {
        name: "AWS EC2",
        level: 75,
        icon: <FaAws />
      },
      {
        name: "GitHub",
        level: 90,
        icon: <SiGithub />
      },
      {
        name: "Jenkins",
        level: 70,
        icon: <SiJenkins />
      },
      {
        name: "Linux",
        level: 80,
        icon: <FaLinux />
      },
    ],


    Tools: [
      {
        name: "Git & GitHub",
        level: 90,
        icon: <FaGitAlt />
      },
      {
        name: "Postman",
        level: 85,
        icon: <SiPostman />
      },
      {
        name: "Figma",
        level: 85,
        icon: <SiFigma />
      },
    ],

  };



  return (

    <section className="bg-[#0B1B3A] text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>



        {/* Category Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {categories.map((category)=>(

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full font-semibold transition
                ${
                  activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-[#102A54] text-gray-300 hover:bg-blue-900"
                }
              `}
            >

              {category}

            </button>

          ))}

        </div>




        {/* Skills Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


          {skills[activeCategory].map((skill,index)=>(

            <div
              key={index}
              className="
              bg-[#102A54]
              p-5
              rounded-xl
              shadow-lg
              hover:-translate-y-2
              transition
              duration-300
              "
            >


              <div className="flex items-center gap-4 mb-4">


                <span className="text-3xl text-blue-300">
                  {skill.icon}
                </span>


                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>


                <span className="ml-auto text-gray-300">
                  {skill.level}%
                </span>


              </div>



              <div className="w-full h-3 bg-[#0B1B3A] rounded-full">


                <div
                  className="
                  h-3
                  bg-blue-400
                  rounded-full
                  transition-all
                  duration-700
                  "
                  style={{
                    width:`${skill.level}%`
                  }}
                />


              </div>


            </div>

          ))}


        </div>


      </div>

    </section>

  );
};


export default Skills;