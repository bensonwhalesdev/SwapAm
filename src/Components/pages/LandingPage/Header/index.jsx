import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../../../reuseables/Button';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Fixed header for desktop */}
      <div className="fixed top-0 left-0 w-full bg-[#18392F] text-white z-50 shadow-md md:flex hidden justify-between items-center px-6 py-4">
        <div>
          <img src="/logo.jpg" alt="logo" className="w-15 rounded-[10px]" />
        </div>

        <ul className="flex gap-6 font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <Button phoneNumber="2349078837815"
        message="Hello, i want to trade!" text="Trade Now" classStyle="bg-green-600 hover:bg-green-700 font-medium px-5 py-3 rounded-xl shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 cursor-pointer" />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-[#18392F] text-white z-50 shadow-md flex justify-between items-center px-4 py-4">
        <img src="/logo.jpg" alt="logo" className="w-15" />
        <button onClick={toggleSidebar}> {sidebarOpen ? <X size={28} /> : <Menu size={28} />}</button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-5 left-0 h-full w-45 bg-[#18392F] text-white z-40 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="px-6 py-4 flex flex-col gap-6 mt-16 text-lg font-medium">
          <li className="hover:border-b-3 border-white list-none cursor-pointer">Home</li>
          <li className="hover:border-b-3 border-white list-none cursor-pointer">About</li>
          <li className="hover:border-b-3 border-white list-none cursor-pointer">Contact</li>
          <Button phoneNumber="2349078837815"
        message="Hello, i want to trade!" text="Trade Now" classStyle="bg-green-600 hover:bg-green-700 font-medium py-2 px-2 rounded-xl shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 cursor-pointer mt-2" />
        </div>
      </div>
    </>
  );
};

export default Header;
