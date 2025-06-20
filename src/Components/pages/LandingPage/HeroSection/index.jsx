import React from 'react';
import TradingChart from '../TradingViewChart';
import 'animate.css'
import Button from '../../../reuseables/Button';

const Hero = () => {
  return (
    <section className="pt-20 px-4 bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className='animate__animated animate__fadeInLeft'>
          <h1 className="text-4xl md:text-5xl font-bold text-[#12A633] mb-4">
           Buy and Sell your crypto and gift-cards the Smart Way.
          </h1>
          <p className="text-gray-700 text-2xl mb-6">
            We’re 100% reliable, secure, fast, and Real-time stress free
          </p>
          <Button phoneNumber="2349078837815"
        message="Hello, i want to trade!" classStyle={"bg-[#12A633] text-white px-6 py-3 rounded-xl shadow hover:bg-[#0f8e2b] transition cursor-pointer"} text={'Trade Now'}  />
        </div>

        <TradingChart />
      </div>
    </section>
  );
};

export default Hero;
