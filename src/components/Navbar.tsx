'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-4 bg-[#EAEAEA] border-b border-gray-100 "> 
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-bold flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-5 bg-red-500"></div>
              <div className="w-1 h-5 bg-red-300"></div>
              <div className="w-1 h-5 bg-red-100"></div>
            </div>
            <span>SiteLogo</span>
          </div>
        </Link>

        {/* Navigation Links */}
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
        </div>

        {/* Book a Repair Button */}
        <Link
          href="/book-repair"
          className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors"
        >
          Book a Repair
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 