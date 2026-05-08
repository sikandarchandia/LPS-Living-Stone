import React, { useState, useEffect } from 'react';

const data = [
  {
    name: "Dr Asad",
    role: "Locum Doctor - London",
    text: "For the past 5 years, LPS has handled my tax affairs quickly, efficiently and professionally..."
  },
  {
    name: "Client 2",
    role: "Contractor",
    text: "Very professional service and excellent communication..."
  },
  {
    name: "Client 3",
    role: "Landlord",
    text: "They helped me reduce tax liability significantly..."
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const t = data[index];

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow text-center">

      <p className="text-gray-600 text-sm italic">
        "{t.text}"
      </p>

      <h4 className="mt-4 font-bold text-[#0b2b61]">
        {t.name}
      </h4>

      <p className="text-xs text-gray-500">
        {t.role}
      </p>

    </div>
  );
};

export default Testimonials;