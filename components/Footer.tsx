import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo & Mission */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Conqueror Foundation</h2>
          <p className="text-sm text-gray-300">
            Our mission is to create awareness, provide resources, and advocate
            for better healthcare solutions while fostering a supportive
            community.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a
                href="#about"
                className="hover:underline text-gray-300"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#services"
                className="hover:underline text-gray-300"
              >
                Services
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#contact"
                className="hover:underline text-gray-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:underline text-gray-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul>
            <li className="mb-2">
              <span className="font-bold">Hotline:</span> 123-456-7890
            </li>
            <li className="mb-2">
              <span className="font-bold">Ambulance:</span> 123-456-7890
            </li>
            <li>
              <span className="font-bold">Location:</span> Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to stay updated on the latest healthcare news and
            resources.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Healthcare Plus. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
