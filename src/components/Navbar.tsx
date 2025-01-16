'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icons for menu toggle

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 bg-[#EAEAEA] border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex  items-center">
          <div className="text-xl font-bold flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-5 bg-red-500"></div>
              <div className="w-1 h-5 bg-red-300"></div>
              <div className="w-1 h-5 bg-red-100"></div>
            </div>
            <span>SiteLogo</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-green-500 hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact us
          </Link>
          <Link href="/faqs" className="text-gray-600 hover:text-gray-800">
            FAQs
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
          
          </Link>
          <Link
            href="/book-repair"
            className="block bg-emerald-500 text-white px-4 py-2  rounded-md hover:bg-emerald-600 transition-colors text-center ml-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Repair
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg p-4 space-y-4">
          <Link
            href="/"
            className="block text-green-500 hover:text-green-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact us
          </Link>
          <Link
            href="/faqs"
            className="block text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/book-repair"
            className="block bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Repair
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
