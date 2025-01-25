import React from 'react';
import { popularMobiles, popularBrands } from "@/constants/footer"
import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
const Footer: React.FC = () => {

  return (
    <footer className="bg-[#1a2b34] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Popular Brands */}
          <div>
            <h3 className="text-lg mb-4 flex items-center">
              <DevicePhoneMobileIcon className="mr-2 h-5 w-5"/>
              Popular Brands
            </h3>
            <ul className="space-y-2">
              {popularBrands.map((brand, index) => (
                <li key={index}>{brand}</li>
              ))}
            </ul>
          </div>

          {/* Popular Mobiles */}
          <div>
            <h3 className="text-lg mb-4 flex items-center">
              <DevicePhoneMobileIcon className="mr-2 h-5 w-5"/>
              Popular Mobiles
            </h3>
            <ul className="space-y-2">
              {popularMobiles.map((mobile, index) => (
                <li key={index}>{mobile}</li>
              ))}
            </ul>
          </div>

          {/* Contact and Newsletter */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg mb-2">Want to be a Partner</h3>
              <a href="#" className="text-white hover:underline">Contact Us</a>
            </div>

            <div>
              <h3 className="text-lg mb-2">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="px-3 py-2 bg-white text-black rounded-l"
                />
                <button className="bg-[#00c9a7] text-white px-4 py-2 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-600 text-center text-sm">
          <p>Copyright &copy; {new Date().getFullYear()} (Pvt) Ltd. - All Rights Reserved.</p>
          <p>Reproduction of material from any pages without permission is strictly prohibited.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
