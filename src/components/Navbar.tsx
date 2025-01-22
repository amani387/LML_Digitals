'use client';
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icons for menu toggle
import { navbar } from '@/constants/nav';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const segment = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 bg-[#EAEAEA] border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navbar.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${segment === link.href ? "text-green-500 hover:text-green-600" : "text-gray-600 hover:text-gray-800"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-repair"
            className="bg-[#52ab98] rounded-xl hover:bg-[#00c9a7] text-lg px-8 py-2 h-auto text-cyan-50"
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
        <div className="md:hidden flex flex-col mt-4 bg-white shadow-md rounded-lg p-4 space-y-4">
          {navbar.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${segment === link.href ? "text-green-500 hover:text-green-600" : "block text-gray-600 hover:text-green-900"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-repair"
            className="bg-[#52ab98] rounded-xl hover:bg-[#00c9a7] text-lg px-10 py-2 h-auto text-cyan-50"
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
