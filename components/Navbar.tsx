import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/cf-logo.png"
            alt="Conqueror Foundation Logo"
            className="h-10"
          />
          <span className="ml-5 text-blue-700 text-2xl"> Conqueror Foundation </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-black">
          <a href="#home" className="hover:text-red-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-red-600 transition">
            About Us
          </a>
          <a href="#education" className="hover:text-red-600 transition">
            Education Resources
          </a>
          <a href="#supportive-service" className="hover:text-red-600 transition">
            Supportive Service
          </a>
          <a href="#get-involve" className="hover:text-red-600 transition">
            Get Involved
          </a>
        </nav>

        {/* Search and Menu Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-black hover:text-red-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
          </button>
          <button className="sm:hidden text-black hover:text-red-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden">
        <nav className="flex flex-col space-y-4 px-6 pb-4">
          <a href="#home" className="text-black hover:text-red-600 transition">
            Home
          </a>
          <a href="#about" className="text-black hover:text-red-600 transition">
            About Us
          </a>
          <a href="#education" className="text-black hover:text-red-600 transition">
            Education Resources
          </a>
          <a href="#supportive-service" className="text-black hover:text-red-600 transition">
            Supportive Service
          </a>
          <a href="#get-involve" className="text-black hover:text-red-600 transition">
            Get Involve
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
