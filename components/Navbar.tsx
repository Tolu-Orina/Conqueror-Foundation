"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About Us' },
    { href: '#education', text: 'Education Resources' },
    { href: '#supportive-service', text: 'Supportive Service' },
    { href: '#get-involve', text: 'Get Involved' },
  ];

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/cf-logo.png"
            alt="Conqueror Foundation Logo"
            className="h-8 lg:h-10"
          />
          <span className="ml-2 lg:ml-5 text-blue-700 text-lg lg:text-2xl font-bold">
            Conqueror Foundation
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-black">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition text-sm lg:text-base"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Search and Menu Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-black hover:text-red-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 lg:h-6 lg:w-6"
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
          <button
            onClick={toggleMenu}
            className="md:hidden text-black hover:text-red-600 transition"
          >
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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-black hover:text-red-600 transition text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;