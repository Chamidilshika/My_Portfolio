import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white text-gray-900 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">

          {/* MAIN HEADING (ONE LINE STYLE) */}
          <h1 className="text-5xl font-bold leading-tight">
            I'm Chami Dilshika
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-xl text-gray-600">
            Software Engineering Undergraduate at University of Sri Jayewardenepura
          </p>

          <p className="mt-2 text-gray-500">
            Full Stack Developer | DevOps Enthusiast | AI Solutions
          </p>

          {/* OPTIONAL BUTTONS (professional touch) */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              View CV
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;