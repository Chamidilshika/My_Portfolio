const About = () => {
  return (
    <>

      <section className="bg-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            About Me
          </h1>

          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
            
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side - Text */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Who I Am
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                I am an undergraduate student at the University of Sri
                Jayewardenepura in Software Engineering. I enjoy
                turning complex problems into simple, beautiful, and intuitive
                solutions.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                My interests include full-stack web development, UI/UX design,
                and machine learning applications. I love working with modern
                technologies like React, Node.js, Laravel, and MongoDB.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I am constantly learning and improving my skills through
                projects, research, and real-world applications.
              </p>
            </div>

            {/* Right Side - Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white border rounded-2xl p-8 shadow-sm">

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Info
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>Degree:</strong> BSc (Hons) Software Engineering
                </li>

                <li>
                  <strong>University:</strong> University of Sri
                  Jayewardenepura
                </li>

                <li>
                  <strong>Focus:</strong> Full-Stack Development, ML/DL/AI Projects
                </li>

                <li>
                  <strong>Interest:</strong> Web Apps, Mobile Apps, AI, ML, UI/UX, DevOps, Cloud Deployment
                </li>

                <li>
                  <strong>Goal:</strong> Software Engineer, AI/ML Engineer 
                </li>
              </ul>
            </div>

          </div>

          {/* Skills Highlight */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Technologies I Use
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Node.js",
                "Express",
                "Laravel",
                "MongoDB",
                "MySQL",
                "Tailwind CSS",
                "JavaScript",
                "Git",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;