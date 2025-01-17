"use client";
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setEmail('');
  };

  const quickLinks = [
    { href: '#about', text: 'About Us' },
    { href: '#services', text: 'Services' },
    { href: '#contact', text: 'Contact Us' },
    { href: '#privacy', text: 'Privacy Policy' },
  ];

  const contactInfo = [
    { label: 'Hotline', value: '123-456-7890' },
    { label: 'Ambulance', value: '123-456-7890' },
    { label: 'Location', value: 'Lagos, Nigeria' },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold">Conqueror Foundation</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Our mission is to create awareness, provide resources, and advocate
              for better healthcare solutions while fostering a supportive
              community.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li key={info.label} className="text-sm">
                  <span className="font-semibold">{info.label}:</span>{' '}
                  <span className="text-gray-300">{info.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Subscribe to stay updated on the latest healthcare news and
              resources.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors duration-200 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Conqueror Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;