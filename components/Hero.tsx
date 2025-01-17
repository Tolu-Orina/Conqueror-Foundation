import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="container mx-auto px-6 py-12 lg:flex lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 lg:text-5xl leading-snug">
            Together, We Can <br />
            <span className="text-red-600">Create a Brighter Future for Those</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Our mission is to create awareness, provide resources, and advocate for better
            healthcare solutions while fostering a supportive community.
          </p>
          <button className="mt-6 flex items-center text-blue-600 hover:text-red-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10.132v4.736a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
            See how we work
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/doctor.png"
            alt="Doctor"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Information Box */}
      <div className="bg-white shadow-lg rounded-lg mx-6 lg:mx-auto p-6 mt-8 flex flex-wrap justify-between items-center space-y-4 lg:space-y-0 lg:max-w-4xl">
        <div className="flex items-center space-x-4">
          <div className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6.5 6.5h11m-11 5h11m-11 5h11m-15 2.5a2.5 2.5 0 005 0M6 9.5A2.5 2.5 0 118.5 7a2.5 2.5 0 011-5M6.5 6.5h11"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Hotline</h4>
            <p className="text-gray-600">123-456-7890</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 9.5a5.5 5.5 0 015.5 5.5m7.5 7.5a5.5 5.5 0 11-5.5-5.5m8.25 5.75l-2.5 2.5"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Ambulance</h4>
            <p className="text-gray-600">123-456-7890</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.185 11.895L4.64 7.895a1.045 1.045 0 00-1.3-.077l-2.8 1.65A1.045 1.045 0 001 9.895v3.987c0 .42.261.792.66.928L4.64 15.95m5.54-1.455l5.545 4v-4.97"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Location</h4>
            <p className="text-gray-600">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
