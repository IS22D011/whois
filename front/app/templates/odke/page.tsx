'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaGraduationCap, FaHome } from 'react-icons/fa';
import Header from '../../../components/footer';
import Footer from '../../../components/headers';


const LightCV: React.FC = () => {
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
          scale: 3,          // Илүү өндөр чанартай зураг авах
          logging: false,    // Лог үүсгэхгүй
          letterRendering: true, // Товч үсгүүдийг зөв харуулах
          useCORS: true      // Гадны эх сурвалжаас зургийг авах боломж
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      };
      window.html2pdf().set(opt).from(printRef.current).save();
    }
  };

  if (!data) return <div className="text-center mt-10">Уншиж байна...</div>;

  const person = data.person_details;

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-right mb-4">
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
          >
            📄 PDF татах
          </button>
        </div>

        <div ref={printRef} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
          {/* LEFT SIDE */}
          <div className="w-1/3 bg-gray-900 text-white p-6 flex flex-col items-center">
            <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center text-center mb-4 text-sm">
              {person.profile_picture ? (
                <img
                  src={person.profile_picture}
                  alt="Profile Picture"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                'Profile'
              )}
            </div>
            <h2 className="text-xl font-bold">{person.firstname} {person.lastname}</h2>
            <p className="text-sm text-gray-300 italic">{person.headline}</p>

            <div className="mt-6 w-full">
              <h3 className="text-blue-400 font-semibold border-b border-blue-500 pb-1 mb-2">PROFILE</h3>
              <p className="text-sm">{person.summary}</p>
              <p className="text-sm"><FaHome /> {person.address}</p>
            </div>

            <div className="mt-6 w-full">
              <h3 className="text-blue-400 font-semibold border-b border-blue-500 pb-1 mb-2">CONTACT</h3>
              <div className="flex items-center gap-2 text-sm mb-1"><FaPhoneAlt /> {person.phone}</div>
              <div className="flex items-center gap-2 text-sm mb-1"><FaEnvelope /> {person.email}</div>
              <div className="flex items-center gap-2 text-sm mb-1"><FaLinkedin /> {person.linkedin}</div>
              <div className="flex items-center gap-2 text-sm mb-1"><FaGithub /> {person.github}</div>
              <div className="flex items-center gap-2 text-sm"><FaFacebook /> {person.facebook}</div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-2/3 p-6 text-gray-800 space-y-6">
            <div>
              <h3 className="text-xl font-bold border-b border-gray-400 pb-1 mb-3">Experience</h3>
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="mb-4">
                  <p className="text-sm text-gray-500">{exp.start_date} - {exp.end_date}</p>
                  <p className="text-lg font-semibold text-blue-600">{exp.job_title}</p>
                  <p className="italic">{exp.company}</p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    {exp.responsibilities.map((task: string, j: number) => (
                      <li key={j}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold border-b border-gray-400 pb-1 mb-3">Education</h3>
              {data.education.map((edu: any, i: number) => (
                <div key={i} className="flex items-center gap-2 text-sm mb-1">
                  <FaGraduationCap className="text-purple-600" /> {edu.institution} — {edu.start_year}
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold border-b border-gray-400 pb-1 mb-3">Skills</h3>
              <ul className="list-disc list-inside text-sm">
                {data.skills.map((skill: any, i: number) => (
                  <li key={i}>{skill.skill} — {skill.proficiency}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightCV;