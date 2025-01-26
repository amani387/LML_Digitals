"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button"; // shadcn button
import { cn } from "@/lib/utils"; // shadcn utility for classnames

// Dummy Services Data
const services = [
  {
    id: 1,
    name: "Mobile Phone Repair",
    description: "Screen repair, battery replacement, and software updates.",
    image: "/undraw_mobile-encryption_flk2.svg",
  },
  {
    id: 2,
    name: "Laptop Maintenance",
    description: "Hardware upgrades, virus removal, and troubleshooting.",
    image: "/undraw_in-sync_3wdt.svg",
  },
  {
    id: 3,
    name: "Gaming Console Repair",
    description: "Fix hardware issues and software updates for consoles.",
    image: "/undraw_mobile-encryption_flk2.svg",
  },
  {
    id: 4,
    name: "Mobile Phone Repair",
    description: "Screen repair, battery replacement, and software updates.",
    image: "/undraw_mobile-encryption_flk2.svg",
  },
  {
    id: 5,
    name: "Laptop Maintenance",
    description: "Hardware upgrades, virus removal, and troubleshooting.",
    image: "/undraw_mobile-encryption_flk2.svg",
  },
  {
    id: 6,
    name: "Gaming Console Repair",
    description: "Fix hardware issues and software updates for consoles.",
    image: "/undraw_mobile-encryption_flk2.svg",
  },
];

const ServicePage = () => {
 
  return (
    <div className="relative min-h-screen bg-gray-50 mx-auto mt-10 sm:mt-20 lg:mt-32">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Our Repair Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "group border rounded-lg p-6 shadow-lg bg-white transform hover:scale-102 hover:shadow-xl transition-transform duration-200 ease-in-out"
              )}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-32 object-cover rounded-md mb-4 transition-transform duration-200 group-hover:scale-105"
              />
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-500 transition-colors duration-200">
                {service.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-700 transition-colors duration-200">
                {service.description}
              </p>
              <Button
                variant="primary"
                className="mt-4 bg-[#52ab98] hover:bg-[#00c9a7] text-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
