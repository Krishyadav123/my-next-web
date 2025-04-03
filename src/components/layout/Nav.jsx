"use client";

import { Briefcase, Home, Info, MessageSquare, Settings, Users, X, Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const serviceItems = [
    { name: 'Business Loan', image: 'https://www.hexafin.com/wp-content/uploads/2022/11/business-loan-now.jpg', href: '/business-loan' },
    { name: 'Personal Loan', image: 'https://www.hexafin.com/wp-content/uploads/2022/11/doctor-in-white-appron-is-smiling.jpg', href: '/services/personal-loan' },
    { name: 'Education Loan', image: 'https://www.hexafin.com/wp-content/uploads/2022/11/Business-man-in-a-suite-is-smiling.jpg', href: '/education' },
    { name: 'Professional Loan', image: 'https://www.hexafin.com/wp-content/uploads/2022/11/hands-holding-home-keys.jpg', href: '/services/professional-loan' },
  ];

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="w-full py-4 px-4 lg:px-32 border-b bg-white">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <img 
                src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1743671470/random%20images/jratmanib0b52o3usvx2.png" 
                alt="Finance Gaze Logo" 
                className="h-8 w-32 lg:h-10 lg:w-40" 
              />
            </Link>
          </div>
          
          <div className="hidden lg:block text-right">
            <div className="text-amber-500 text-sm">Get free consultation!</div>
            <div className="text-xl font-bold">+91 85301 13456</div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block w-full py-3 px-32 border-b bg-white shadow-md">
        {/* ... Keep your existing desktop navigation code here ... */}

        <nav className="w-full py-3 px-32 border-b bg-white shadow-md">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-amber-500">
            <Home className="w-5 h-5 text-amber-500" /> <span>Home</span>
          </Link>
          {/* <Link href="/company" className="text-gray-700 font-medium hover:text-amber-500">Company</Link> */}

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setShowServicesMenu(true)}
            onMouseLeave={() => setShowServicesMenu(false)}
          >

            <div href="/" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-amber-500">
              <Settings className="w-5 h-5 text-amber-500" /> <span className="cursor-pointer text-gray-700 font-medium hover:text-amber-500">Services ▼</span>
            </div>
            {/* <span className="cursor-pointer text-gray-700 font-medium hover:text-amber-500">Services ▼</span> */}

            {showServicesMenu && (
              <div className="absolute z-50 left-0 mt-2 w-[32rem] bg-white shadow-lg border rounded-lg p-3 grid grid-cols-2 gap-4">
                {serviceItems.map((service, index) => (
                  <Link key={index} href={service.href} className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
                    <img src={service.image} alt={service.name} className="w-14 h-14 object-cover rounded-md" />
                    <span className="font-semibold">{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-amber-500">
            <Info className="w-5 h-5 text-amber-500" /> <span>About</span>
          </Link>
          <Link href="/career" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-amber-500">
            <Briefcase className="w-5 h-5 text-amber-500" /> <span>Career</span>
          </Link>

          <Link href="/testimonials" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-amber-500">
            <Users className="w-5 h-5 text-amber-500" /> <span>Testimonial</span>
          </Link>

          <Link href="/contact" className="flex items-center space-x-2 text-gray-700 font-medium hover:text-amber-500">
            <MessageSquare className="w-5 h-5 text-amber-500" /> <span>Contact</span>
          </Link>
        </div>
      </nav>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`lg:hidden fixed inset-0 z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white w-3/4`}>
        <div className="p-4 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-6">
            <img 
              src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1743671470/random%20images/jratmanib0b52o3usvx2.png" 
              alt="Finance Gaze Logo" 
              className="h-8 w-32" 
            />
            <button 
              className="p-2"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-gray-100 rounded">
              <Home className="w-5 h-5 text-amber-500" />
              <span>Home</span>
            </Link>

            <div className="border-t border-gray-200"></div>

            <div 
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <div className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-amber-500" />
                <span>Services</span>
              </div>
              <span className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>

            {mobileServicesOpen && (
              <div className="ml-6 space-y-4">
                {serviceItems.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.href} 
                    className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-10 h-10 object-cover rounded-md" 
                    />
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            )}

            <div className="border-t border-gray-200"></div>

            <Link href="/about" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-gray-100 rounded">
              <Info className="w-5 h-5 text-amber-500" />
              <span>About</span>
            </Link>

            <Link href="/career" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-gray-100 rounded">
              <Briefcase className="w-5 h-5 text-amber-500" />
              <span>Career</span>
            </Link>

            <Link href="/testimonials" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-gray-100 rounded">
              <Users className="w-5 h-5 text-amber-500" />
              <span>Testimonial</span>
            </Link>

            <Link href="/contact" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-gray-100 rounded">
              <MessageSquare className="w-5 h-5 text-amber-500" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="mt-8 p-4 bg-amber-50 rounded-lg">
            <div className="text-amber-600 text-sm font-medium">Get free consultation!</div>
            <div className="text-lg font-bold text-gray-800 mt-1">+91 85301 13456</div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;