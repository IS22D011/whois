// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>hi</div>
//   );
// }


import React from 'react';

const CurriculumVitae = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <header className="flex items-center bg-gray-900 text-white p-6 rounded-lg mb-6">
          <img
            src="wl.jpg"
            alt="Your Name"
            className="w-64 h-64 rounded-lg profile-image mr-6 object-cover -mb-10"
          />
          <div className="text-center ml-20">
            <h1 className="text-5xl font-bold">Your Name</h1>
            <p className="text-2xl text-gray-500">Your Job Title</p>
          </div>
        </header>

        <div className="flex mt-8">
          {/* Left Section */}
          <div className="w-1/3 bg-gray-100 rounded-lg p-5">
            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-semibold">Certifications</h2>
              <hr className="my-2 border-gray-300" />
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Certification Name - Issuer (Year)</li>
                <li>Certification Name - Issuer (Year)</li>
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-2xl font-semibold mt-8">Languages</h2>
              <hr className="my-2 border-gray-300" />
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>English - Fluent</li>
                <li>Mongolian - Native</li>
                <li>French - Intermediate</li>
                <li>German - Basic</li>
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-semibold mt-8">Skills</h2>
              <hr className="my-2 border-gray-300" />
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
              </ul>
            </section>

            {/* Hobbies */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold">Hobbies</h2>
              <hr className="my-2 border-gray-300" />
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Hobby 1</li>
                <li>Hobby 2</li>
                <li>Hobby 3</li>
              </ul>
            </section>
          </div>

          {/* Right Section */}
          <div className="w-2/3 pl-8">
            {/* Education */}
            <section>
              <h2 className="text-2xl font-semibold" id="education"></h2>
              <hr className="my-2 border-gray-300" />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700" id="institution"></h3>
                <p className="text-gray-500">Month Year - Month Year</p>
                <p className="text-gray-600">Relevant coursework or honors received.</p>
              </div>
            </section>

            {/* Experience */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold" id="experience"></h2>
              <hr className="my-2 border-gray-300" />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Job Title - Company Name
                </h3>
                <p className="text-gray-500">Month Year - Present</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Key responsibility or achievement</li>
                  <li>Another responsibility or achievement</li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Previous Job Title - Previous Company Name
                </h3>
                <p className="text-gray-500">Month Year - Month Year</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Key responsibility or achievement</li>
                  <li>Another responsibility or achievement</li>
                </ul>
              </div>
            </section>

            {/* Summary */}
            <section>
              <h2 className="text-2xl font-semibold mt-8">Summary</h2>
              <hr className="my-2 border-gray-300" />
              <p className="mt-2 text-gray-600">
                A brief summary of your professional background, skills, and what you can bring to a
                potential employer.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;
