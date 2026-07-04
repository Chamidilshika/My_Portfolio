const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">
            Chami
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Full Stack Developer passionate about building modern web applications
            using React, Node.js, and MongoDB.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <a href="#home" className="hover:text-blue-600 cursor-pointer">
                Home
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-blue-600 cursor-pointer">
                Projects
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-blue-600 cursor-pointer">
                Skills
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-600 cursor-pointer">
                Contact
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-600 cursor-pointer">
                About
              </a>
            </li>

          </ul>
        </div>

        <ul className="space-y-2 text-sm">

          <li>
            <a
              href="https://github.com/Chamidilshika"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/chami-dilshika-508045320/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </li>

          <li>
            Email: chamidilshika7@gmail.com
          </li>

        </ul>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Chami.dev. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;