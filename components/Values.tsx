
import React from "react";

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

const Values: React.FC = () => {

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Values</h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {value.title}
              </h3>
              
                <p className="text-gray-600 text-sm transition-opacity duration-300 opacity-100">
                  {value.description}
                </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
