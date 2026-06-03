import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-[#071633]/90 backdrop-blur-md shadow-lg">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Reetu<span className="text-blue-500">.dev</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-blue-400 transition">
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Theme Button */}
        <button className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 text-yellow-400 hover:bg-white/5 transition">
          ☀️
        </button>
      </div>
    </nav>
  );
};

export default Navbar;