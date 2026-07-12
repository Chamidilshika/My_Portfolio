const Navbar = () => {
  return (
    <nav className="w-full bg-blue-400 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">

        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide text-black cursor-pointer">
          Chami
        </h2>

        {/* Links */}
        <ul className="flex gap-8 text-lg text-black font-medium">

          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-blue-600 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#certifications" className="hover:text-blue-600 transition">
              Certifications
            </a>
          </li>

          <li>
            <a href="#achievements" className="hover:text-blue-600 transition">
              Achievements
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;