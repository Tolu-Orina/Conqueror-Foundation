import React from 'react';

const valuesData = [
  {
    title: "Compassion",
    description:
      "We support those with sickle cell disease through counseling, financial aid, education, advocacy, emergency assistance, and access to resources like blood drives and clinical trials, improving their quality of life.",
  },
  {
    title: "Innovation",
    description:
      "We foster innovation in healthcare by leveraging cutting-edge research and technology to develop better treatment options and improve the patient experience.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with healthcare providers, researchers, and the community to create a united front against sickle cell disease.",
  },
  {
    title: "Empowerment",
    description:
      "We empower patients and families by providing the tools, knowledge, and support they need to navigate their healthcare journey effectively.",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity and transparency in all our interactions and initiatives.",
  },
];

const Values = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 pt-24 md:pt-32 pb-8 md:pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base flex-grow">
                  {value.description}
                </p>
                <div className="h-1 w-12 bg-blue-500 mt-4 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;