import React from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'Service Charge Accounts',
    desc: 'Specialist accounting for managing agents & property portfolios.',
    path: '/servicecharge',
    items: [
      { name: 'Service Charge Accounting', path: '/services/service-charge' },
      { name: 'Property Management Accounts', path: '/services/property' },
      { name: 'Year-end Reporting', path: '/services/year-end' },
    ],
  },
  {
    title: 'Business Services',
    desc: 'Complete support for UK businesses & growth-focused companies.',
    path: '/services',
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
    path: '/services/personal-tax',
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
          onClick={() => navigate(section.path)}
          className="
            group
            relative
            bg-white
            rounded-3xl
            border border-[#E5E7EB]
            shadow-sm
            hover:shadow-2xl
            transition-all duration-300
            p-5
            cursor-pointer
            overflow-hidden
            hover:-translate-y-1
          "
        >

          {/* top glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#0D6E4F]" />

          {/* background hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(13,110,79,0.06),transparent_45%)]" />

          {/* TITLE */}
          <h3
            className="
              relative
              text-[#0D2040]
              font-extrabold
              text-lg
              transition-all duration-300
              group-hover:text-[#0D6E4F]
            "
          >
            {section.title}
          </h3>

          {/* TAGLINE */}
          <p className="relative text-xs text-[#6B7280] mt-1 mb-4 leading-5">
            {section.desc}
          </p>

          {/* ITEMS */}
          <ul className="space-y-2">

            {section.items.map((item, j) => (
              <li
                key={j}
                className="
                  relative
                  text-sm text-[#6B7280]
                  hover:text-[#0D6E4F]
                  flex items-center justify-between
                  transition-all duration-200
                  group/item
                "
              >
                <span>
                  {item.name}
                </span>

                <span
                  className="
                    text-[#0D6E4F]
                    font-bold
                    transition-all duration-300
                    group-hover/item:translate-x-1
                  "
                >
                  ▹
                </span>
              </li>
            ))}

          </ul>

          {/* bottom action */}
          <div
            className="
              relative
              mt-5
              pt-4
              border-t border-[#E5E7EB]
              flex items-center justify-between
            "
          >
            <span className="text-xs font-semibold text-[#0D2040]">
              Explore Services
            </span>

            <div
              className="
                w-8 h-8
                rounded-full
                bg-[#0D6E4F]
                text-white
                flex items-center justify-center
                text-sm
                transition-all duration-300
                group-hover:translate-x-1
              "
            >
              →
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default ShortServices;