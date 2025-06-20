import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is this exchange secure?',
    answer: 'Yes. We use bank-level encryption and multi-layered security to keep your assets safe.',
  },
  {
    question: 'How fast are withdrawals?',
    answer: 'Most withdrawals are processed within minutes depending on network traffic.',
  },
  {
    question: 'Can I trade using Naira (₦)?',
    answer: 'Yes. You can fund your wallet with Naira and trade crypto easily from Nigeria.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes, our mobile app is available on both iOS and Android platforms for seamless trading.',
  },
];

const FaqSection = () => {
  return (
    <section className="bg-[#18392F] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="text-gray-300 mt-2 text-lg">Everything you need to know before you start trading.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-white bg-[#295C4C] rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-[#12A633] focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <ChevronUp className={`${ open ? 'rotate-180 transform' : '' } w-5 h-5 text-[#12A633]`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pt-3 pb-5 text-gray-200 bg-[#21493D] rounded-b-lg">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
