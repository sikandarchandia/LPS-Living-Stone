import React from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'Service Charge Accounts',
    desc: 'Specialist accounting for managing agents & property portfolios.',
    items: [
      { name: 'Service Charge Accounting', path: '/services/service-charge' },
      { name: 'Property Management Accounts', path: '/services/property' },
      { name: 'Year-end Reporting', path: '/services/year-end' },
    ],
  },
  {
    title: 'Business Services',
    desc: 'Complete support for UK businesses & growth-focused companies.',
    items: [
      { name: 'Accounts & Taxation', path: '/services/accounts-taxation' },
      { name: 'Bookkeeping', path: '/services/bookkeeping' },
      { name: 'Payroll & VAT', path: '/services/payroll' },
      { name: 'Business Advisory', path: '/services/advisory' },
    ],
  },
  {
    title: 'Personal Tax',
    desc: 'Simple, compliant and stress-free personal tax solutions.',
    items: [
      { name: 'Self Assessment', path: '/services/self-assessment' },
      { name: 'Rental Income Tax', path: '/services/rental-property-tax' },
      { name: 'Capital Gains', path: '/services/capital-gains' },
    ],
  },
];

const ShortServices = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">

      {data.map((section, i) => (
        <div
          key={i}
          className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition p-5"
        >

          {/* TITLE */}
          <h3 className="text-[#0b2b61] font-extrabold text-lg">
            {section.title}
          </h3>

          {/* TAGLINE */}
          <p className="text-xs text-gray-500 mt-1 mb-4 leading-5">
            {section.desc}
          </p>

          {/* ITEMS */}
          <ul className="space-y-2">

            {section.items.map((item, j) => (
              <li
                key={j}
                onClick={() => navigate(item.path)}
                className="
                  text-sm text-gray-600
                  hover:text-cyan-600
                  cursor-pointer
                  flex items-center gap-2
                  transition-all duration-200
                  hover:translate-x-1
                "
              >
                <span className="text-cyan-400">▹</span>
                {item.name}
              </li>
            ))}

          </ul>

        </div>
      ))}

    </div>
  );
};

export default ShortServices;