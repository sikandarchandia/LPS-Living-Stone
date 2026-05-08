import React from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'Accounts & Taxation',
    items: [
      { name: 'Accounts and Taxation', path: '/services/accounts-taxation' },
      { name: 'Bookkeeping', path: '/services/bookkeeping' },
      { name: 'Payroll', path: '/services/payroll' },
      { name: 'VAT', path: '/services/vat' },
      { name: 'Rental Income and Property Tax', path: '/services/rental-property-tax' },
      { name: 'Contractors & Freelancers', path: '/services/contractors-freelancers' },
    ],
  },
  {
    title: 'Business Advisory & Support',
    items: [
      { name: 'Business Advisory', path: '/services/business-advisory' },
      { name: 'Business Startup advice', path: '/services/business-startup' },
      { name: 'HMRC Investigation/Enquiries', path: '/services/hmrc-enquiries' },
      { name: 'IR35 Review', path: '/services/ir35-review' },
      { name: 'International Business', path: '/services/international-business' },
      { name: 'Company formation', path: '/services/company-formation' },
    ],
  },
  {
    title: 'Other Services',
    items: [
      { name: 'Urgent Deadlines / Same Day services', path: '/services/urgent-deadlines' },
      { name: 'Registered office and mail forwarding', path: '/services/registered-office' },
      { name: 'Tax Credits & Allowances', path: '/services/tax-credits' },
      { name: 'Visa Application', path: '/services/visa' },
    ],
  },
];

const ShortServices = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5 sticky top-24">

      {data.map((section, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4"
        >

          {/* TITLE */}
          <h3 className="font-bold text-[#0b2b61] mb-3 text-sm">
            {section.title}
          </h3>

          {/* ITEMS */}
          <ul className="space-y-2 text-xs text-gray-600">

            {section.items.map((item, j) => (
              <li
                key={j}
                onClick={() => navigate(item.path)}
                className="
                  cursor-pointer
                  hover:text-cyan-600
                  hover:translate-x-1
                  transition-all duration-200
                  flex items-center gap-1
                "
              >
                <span className="text-cyan-400">•</span>
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