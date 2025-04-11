'use client';

import { useState } from 'react';

export default function NameForm() {
  const [formData, setFormData] = useState({ ner: '', ovog: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert formData to JSON string and display it using document.getElementById
    const jsonString = JSON.stringify(formData, null, 2);
    const outputElement = document.getElementById('jsonOutput');
    if (outputElement) {
      outputElement.textContent = jsonString;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Хэрэглэгчийн мэдээлэл</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Нэр</label>
          <input
            type="text"
            name="ner"
            value={formData.ner}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Нэрээ оруулна уу"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Овог</label>
          <input
            type="text"
            name="ovog"
            value={formData.ovog}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Овгоо оруулна уу"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Илгээх
        </button>
      </form>
      <h3 className="text-lg font-semibold mb-2">Оруулсан утга </h3>
          <p>{formData.ovog}</p>
          <p>{formData.ner}</p>
      {/* <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h3 className="text-lg font-semibold mb-2">Оруулсан утга (JSON):</h3>
        <pre className="text-sm text-gray-700">
          <span id="jsonOutput"></span>
          
        </pre>
      </div> */}
    </div>
  );
}
