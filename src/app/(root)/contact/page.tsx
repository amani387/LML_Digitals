'use client';
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";



const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 relative mt-20">
      {/* Main Content */}
      <div className="flex flex-wrap w-full max-w-6xl items-center justify-center relative">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="text-left mb-6">
              <h1 className="text-4xl font-bold text-emerald-600">Contact Us</h1>
              <p className="text-gray-700 mt-2 text-lg">
                Reach out to us for any queries or support. We’re happy to help!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-12 p-6">
  <div className="mb-6">
    <label className="block text-gray-700 font-semibold text-lg">Name</label>
    <Input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your full name"
      className="w-full mt-2 p-8 border border-gray-300 rounded-xl shadow-sm focus:border-emerald-600 focus:bg-emerald-50 focus:ring focus:ring-emerald-600"
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 font-semibold text-lg">Email</label>
    <Input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email address"
      className="w-full mt-2 p-8 border border-gray-300 rounded-xl shadow-sm focus:border-emerald-600 focus:bg-emerald-50 focus:ring focus:ring-emerald-300"
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 font-semibold text-lg">Message</label>
    <Textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Write your message here..."
      className="w-full mt-2 p-8 border border-gray-300 rounded-xl shadow-sm focus:border-emerald-600 focus:bg-emerald-50 focus:ring focus:ring-emerald-300"
    />
  </div>
  <Button
    type="submit"
    className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white p-6 rounded-xl shadow-md transition w-full text-lg"
  >
    Submit
  </Button>
</form>
          </div>
        </div>
        {/* Right Section: Illustration and Info */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center col-span-2 w">
        <Image
    src="/undraw_contact-us_kcoa.svg"
    alt="Contact Illustration"
    width={1000} // Increased width
    height={600} // Increased height
    className="rounded-lg  max-w-full" // Ensures responsiveness
  />
          <div className="space-y-4 text-lg mt-20 flex flex-col items-start">
            <p className="flex items-center justify-center text-gray-700">
                          545 Mavis Island, IL 99191
            </p>
            <p className="flex items-center justify-center text-gray-700">         
              +2034 4040 3030
            </p>
            <p className="flex items-center justify-center text-gray-700">              
              support@international.org
            </p>
          </div>
        </div>
      </div>


 
   {/* Social Media Links */}
   <div className="absolute bottom-8 right-4   p-4 rounded-l-2xl">
  <div className="flex flex-col items-center space-y-6">
    <a
      href="#"
      className="group flex items-center justify-center flex-col text-purple-700 hover:text-purple-900"
    >
      <div className="bg-[#52ab98] text-white p-4 rounded-full transform transition-transform duration-300 group-hover:scale-110">
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <span className="opacity-0 group-hover:opacity-100 text-sm font-semibold mt-2 transition-opacity duration-300">
        Facebook
      </span>
    </a>
    <a
      href="#"
      className="group flex items-center justify-center flex-col text-purple-700 hover:text-purple-900"
    >
      <div className="bg-[#52ab98] text-white p-4 rounded-full transform transition-transform duration-300 group-hover:scale-110">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <span className="opacity-0 group-hover:opacity-100 text-sm font-semibold mt-2 transition-opacity duration-300">
        Instagram
      </span>
    </a>
    <a
      href="#"
      className="group flex items-center justify-center flex-col text-purple-700 hover:text-purple-900"
    >
      <div className="bg-[#52ab98] text-white p-4 rounded-full transform transition-transform duration-300 group-hover:scale-110">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <span className="opacity-0 group-hover:opacity-100 text-sm font-semibold mt-2 transition-opacity duration-300">
        LinkedIn
      </span>
    </a>
    <a
      href="#"
      className="group flex items-center justify-center flex-col text-purple-700 hover:text-purple-900"
    >
      <div className="bg-[#52ab98] text-white p-4 rounded-full transform transition-transform duration-300 group-hover:scale-110">
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <span className="opacity-0 group-hover:opacity-100 text-sm font-semibold mt-2 transition-opacity duration-300">
        Twitter
      </span>
    </a>
  </div>
</div>

    </div>
  );
};

export default ContactPage;
