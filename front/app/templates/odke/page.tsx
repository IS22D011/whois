  // Add this line at the top of your file to specify it's a client component
  'use client';

  import React, { useEffect, useState, useRef } from 'react';
  import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaGraduationCap, FaHome } from 'react-icons/fa';

  const CurriculumVitae: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const printRef = useRef(null);

    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js';
      document.body.appendChild(script);

      fetch('/api/example.json')
        .then((res) => res.json())
        .then((json) => setData(json));

      return () => {
        document.body.removeChild(script);
      };
    }, []);

    const handleDownloadPDF = () => {
      if (window.html2pdf && printRef.current) {
        const opt = {
          margin: 0.5,
          filename: 'resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: {
            scale: 3,
            logging: false,
            letterRendering: true,
            useCORS: true
          },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        };
        window.html2pdf().set(opt).from(printRef.current).save();
      }
    };

    if (!data) return <div className="text-center mt-10">Уншиж байна...</div>;

    const person = data.person_details;

    return (
      <div className="bg-gray-100">
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
          <header className="flex items-center bg-gray-900 text-white p-6 rounded-lg mb-6">
            <img
              src={person.profile_picture}
              alt="Your Name"
              className="w-64 h-64 rounded-lg profile-image mr-6 object-cover -mb-10"
            />
            <div className="text-center ml-20">
              <h1 className="text-5xl font-bold">{person.firstname} {person.lastname}</h1>
              <p className="text-2xl text-gray-500">Your Job Title</p>
            </div>
          </header>

          <div className="flex mt-8">
            {/* Left Section */}
            <div className="w-1/3 bg-gray-100 rounded-lg p-5">
              {/* Certifications */}
              <section>
                <h2 className="text-xl font-semibold">Contact</h2>
                <hr className="my-2 border-gray-300" />
                  <div className="flex items-center gap-2 text-sm mb-1"><FaPhoneAlt /> {person.phone}</div>
                  <div className="flex items-center gap-2 text-sm mb-1"><FaEnvelope /> {person.email}</div>
                  <div className="flex items-center gap-2 text-sm mb-1"><FaLinkedin /> {person.linkedin}</div>
                  <div className="flex items-center gap-2 text-sm mb-1"><FaGithub /> {person.github}</div>
                  <div className="flex items-center gap-2 text-sm"><FaFacebook /> {person.facebook}</div>
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
                <ul className="list-disc list-inside text-sm">
                  {data.skills?.map((skill: any, i: number) => (
                    <li key={i}>{skill.skill} — {skill.proficiency}</li>
                  ))}
                </ul>
              </section>

              {/* Hobbies */}
              <section className="mt-8">
                <h2 className="text-2xl font-semibold">Hobbies</h2>
                <hr className="my-2 border-gray-300" />
                <ul className="list-disc list-inside text-sm">
                  {data.hobbies?.map((hobby: any, i: number) => (
                    <li key={i}>{hobby}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Section */}
            <div className="w-2/3 pl-8">
              {/* Education */}
              <section>
                <h2 className="text-2xl font-semibold">Education</h2>
                <hr className="my-2 border-gray-300" />
                {data.education?.map((edu: any, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm mb-1">
                    <FaGraduationCap className="text-purple-600" /> {edu.institution} — {edu.start_year}
                  </div>
                ))}
              </section>

              {/* Experience */}
              <section className="mt-8">
                <h2 className="text-2xl font-semibold">Experience</h2>
                <hr className="my-2 border-gray-300" />
                <div className="mt-4">
                  {data.experience?.map((exp: any, i: number) => (
                    <div key={i} className="mb-4">
                      <p className="text-sm text-gray-500">{exp.start_date} - {exp.end_date}</p>
                      <p className="text-lg font-semibold text-blue-600">{exp.job_title}</p>
                      <p className="italic">{exp.company}</p>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {exp.responsibilities?.map((task: string, j: number) => (
                          <li key={j}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
