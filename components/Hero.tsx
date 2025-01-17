import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <section className="bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300">
        <div className="container mx-auto px-4 pt-8 pb-24 lg:pb-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {/* Left Section */}
            <div className="lg:w-1/2 text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight lg:leading-snug">
                Together, We Can{' '}
                <span className="text-red-600">Create</span>
                <br />a{' '}
                <span className="text-red-600">Brighter Future</span> for Those
              </h1>
              <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl">
                Our mission is to create awareness, provide resources, and advocate for better
                healthcare solutions while fostering a supportive community.
              </p>
              <button className="mt-6 flex items-center text-gray-700 hover:text-red-600 transition group">
                <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center mr-3 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
                </div>
                <span className="text-lg">See how we work</span>
              </button>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="/doctor.png"
                alt="Doctor"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Information Box */}
      <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 px-4">
        <div className="bg-white rounded-2xl shadow-xl mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 lg:p-8">
            {/* Hotline */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Hotline</h4>
                <p className="text-gray-500 text-sm">123-456-7890</p>
              </div>
            </div>

            {/* Ambulance */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Ambulance</h4>
                <p className="text-gray-500 text-sm">123-456-7890</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-500 text-sm">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;