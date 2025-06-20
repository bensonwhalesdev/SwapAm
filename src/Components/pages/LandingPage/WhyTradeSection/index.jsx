import React from 'react';
import Button from '../../../reuseables/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Wallet, Clock, ShieldCheck } from 'lucide-react';

const cardData = [
  {
    title: 'Fast & Reliable',
    desc: 'Experience lightning-speed trading with trusted infrastructure, wherever you are.',
    icon: Rocket,
  },
  {
    title: 'Seamless Transactions',
    desc: 'Send, receive, and convert crypto instantly with zero stress or complications.',
    icon: Wallet,
  },
  {
    title: '24/7 Access',
    desc: 'No closing time. Trade anytime, from any device, around the world.',
    icon: Clock,
  },
  {
    title: 'Secure & Trusted',
    desc: 'Your funds and data are protected by top-level security and encryption.',
    icon: ShieldCheck,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const WhyTradeSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-[#F3F4F6] py-16 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800" initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>Why Trade With Us?
        </motion.h2>
        <motion.p className="text-gray-600 mt-2 text-lg" initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          Your trusted crypto exchange — built for everyone, everywhere.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {cardData.map((card, i) => { const Icon = card.icon;
          return (
            <motion.div key={i} className="bg-[#18392F] text-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300" custom={i} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}>
              <motion.div className="mb-4" initial={{ scale: 0, rotate: -45 }} animate={inView ? { scale: 1, rotate: 0 } : {}} transition={{ delay: 0.2 + i * 0.2, type: 'spring', stiffness: 200 }}>
                <Icon size={36} className="text-[#12A633]" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }} >
        <Button phoneNumber="2349078837815" message="Hello, i wwant to trade!" text="Trade Now"
          classStyle="bg-[#12A633] hover:bg-[#0f8e2b] px-6 py-3 text-white font-semibold text-lg rounded-xl shadow-md transition"/>
      </motion.div>
    </section>
  );
};

export default WhyTradeSection;
