import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const data = [
  {
    title: 'ISA Updates',
    content: `
Lifetime ISA and ISA update

Alongside auto-enrolment is the lifetime ISA the new pension for the under 40s?

From April 2017, any adult under 40 will be able to open a new Lifetime ISA from which they will also be able to withdraw amounts they have contributed.

Making contributions
Up to £4,000 can be saved each year. The government will pay in a 25% bonus on these contributions at the end of the tax year (i.e. up to £1,000 each tax year).

Savers will be able to make Lifetime ISA contributions and receive a bonus from the age of 18 up to the age of 50. No additional contributions will be allowed after the age of 50.

Tax free funds, including the government bonus, can be used to buy a first home worth up to £450,000 at any time from 12 months after opening the account. The funds, including the government bonus, can be withdrawn from the Lifetime ISA from age 60 for any other purpose.

Lifetime ISA managers will claim the bonus due on the accounts they manage from HMRC. Where the individual is purchasing a home they will be able to receive their bonus in-year based on the contributions they have made in that tax year. They will not have to wait until the end of the tax year to receive their bonus.

Individuals will be able to transfer savings from other ISAs as one way of funding their Lifetime ISA. In line with existing rules, transfers from previous years’ ISA contributions do not affect that year’s £20,000 overall ISA limit.

During the 2017-18 tax year only, those who have a Help to Buy ISA will be able to transfer those funds into a Lifetime ISA and receive the government bonus of 25% on those savings. Any Help to Buy ISA funds that were saved prior to the introduction of the Lifetime ISA on 6 April 2017 will not count towards the Lifetime ISA annual contribution limit.

Contributions made after this point to the Help to Buy ISA and transferred to the Lifetime ISA will count against the annual contribution limit of £4,000. At the end of the tax year they will receive a bonus on the full amount of the transferred Help to Buy ISA and their Lifetime ISA contributions.

Withdrawal to purchase first home
First time home buyers will be able to withdraw up to 100% of their Lifetime ISA balance, including the government bonus (which will have been added to the account at the end of each tax year and up to the date of purchase in that tax year).

Their withdrawal can only be put towards a first home located in the UK with a purchase price of up to £450,000.

The Lifetime ISA must have been opened at least 12 months before the withdrawal that is to include the government bonus for the first home purchase.

If more than one person is buying their first house together they can each use a Lifetime ISA and each benefit from their government bonus.

The withdrawal must be for a deposit on a property for the first time buyer to live in as their only residence and not buy-to-let.

The account holder will inform their ISA manager of the house purchase, who will claim any additional bonus due up to that point from HMRC and the funds will then be paid direct to the conveyance. If a purchase does not complete after a withdrawal has been made then the funds will be returned to the same ISA manager by the conveyancer and will not count against the annual contribution limit.

The Help to Buy ISA will be open for new savers until 30 November 2019, and open to new contributions until 2029. Savers will be able to save into both a Help to Buy ISA and a Lifetime ISA, but will only be able to use the government bonus from one of their accounts to buy their first home.

The following options will be available:
use their Help to Buy ISA with the government bonus to purchase their first home and save with their Lifetime ISA to make withdrawals after age 60 with the government bonus
use their Lifetime ISA with the government bonus to purchase their first home and withdraw the funds held in their Help to Buy ISA to put towards this purchase but without the government bonus
use their Help to Buy ISA including the government bonus to purchase their first home and withdraw from their Lifetime ISA to put towards the purchase. Although the government bonuses on the Lifetime ISA savings would be returned to HMRC and the individual would be required to pay a charge as set out below.

Withdrawals after 60 years of age
Full or partial withdrawals including the bonuses can be made from age 60 and used for any purpose and will be free of tax. Funds may remain invested and any interest and investment growth will be tax-free.

Withdrawals in other circumstances when bonus can be retained
Tax free withdrawals including the bonuses will also be allowed where people are diagnosed with terminal ill health regardless of the individual’s age. The definition of terminal ill health will be based on that used for pensions.

Withdrawals in other circumstances when bonus will be returned to the government
Savers will be able to make withdrawals at any time for other purposes, but with the government bonus element of the fund (including any interest or growth on that bonus) returned to the government, and a 5% charge applied. The individual saver will still have access to those savings and any interest or growth earned on those savings minus the 5% charge.

Balance held on account when the individual dies
Upon the death of the account holder, the funds will form part of the estate for inheritance tax purposes. Their spouse or civil partner can also inherit their ISA tax advantages and will be able to invest as much into their own ISA as their spouse used to have, on top of their usual allowance.

Points for the government to explore in the future
The government wants it to be easy for individuals to save additional funds on top of those receiving a bonus and will explore the best way to achieve that. For example if individuals want to save more than £4,000 per year or keep contributing after the age of 50.
The government will explore whether savers should be able to access contributions and the government bonus for other specific life events.
The government will explore whether there should be the flexibility to borrow funds from the Lifetime ISA without incurring a charge if the borrowed funds are fully repaid.

ISA update
Other ISAs
The total amount which can be saved each year into all ISAs will increase from £15,240 to £20,000 from April 2017.

Help to Buy ISAs
These were introduced from 1 December 2015...

Innovative finance ISAs
These are being introduced from 6 April 2016...
`
  },

  {
    title: 'Changes to Dividend Taxation',
    content: `
Operative date:
The measure will apply to distributions made on or after 6 April 2016.

Current law:
Part 4 Income Tax (Trading and Other Income) Act (ITTOIA) 2005 imposes the charge to income tax on most dividend income.

Proposed revisions:
£5,000 dividend allowance introduced.

7.5% basic rate
32.5% higher rate
38.1% additional rate

Dividend allowance applies in addition to ISA and personal allowance.

Dividend tax credit abolished.
`
  },

  {
    title: 'Tax returns FAQs',
    content: `
Q:
A:
`
  },

  {
    title: 'Typical Tax Allowable expenses for Limited companies FAQs',
    content: `
Here are some of the main business expenses you can set off against Corporation Tax:

Salaries
Executive pension contributions
Employers’ NICs
Travel and subsistence
Accommodation costs
Mileage allowance
Training costs
Stationery, postage
Insurance
Company formation costs
Telephone & broadband
Computer equipment
Marketing & advertising
Professional fees
Capital allowances
Bank charges
`
  },

  {
    title: 'VAT FAQs',
    content: `
Q:
A:
`
  },

  {
    title: 'Payroll FAQs',
    content: `
Q:
A:
`
  },

  {
    title: 'Freelancers FAQs',
    content: `
Q: How to registering as a freelance

A:

Step 1: Get National Insurance Number
Step 2: Register as self-employed / partnership / company
Step 3: Report to HMRC and Companies House if applicable
`
  },

  {
    title: 'Subcontractors FAQs',
    content: `
Q:
A:
`
  },
];

const FreeResources = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-[#f6f9ff]">

      {/* HERO */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0d2f68] to-[#0a3d91]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs uppercase tracking-[0.2em]">
            <Sparkles size={14} />
            Free Resources
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-black">
            Tax & Business Knowledge Hub
          </h1>

        </div>
      </section>

      {/* ACCORDION */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-5">

          {data.map((item, i) => {
            const isOpen = active === i;

            return (
              <div key={i} className="bg-white rounded-3xl border shadow">

                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="w-full flex justify-between p-6 font-bold text-[#0b2b61]"
                >
                  {item.title}
                  <ChevronDown className={isOpen ? "rotate-180" : ""} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6 text-sm text-gray-700 whitespace-pre-line"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
};

export default FreeResources;