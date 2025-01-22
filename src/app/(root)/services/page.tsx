"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"; // shadcn button
import { cn } from "@/lib/utils"; // shadcn utility for classnames
import * as THREE from "three";

// Dummy Services Data
const services = [
  {
    id: 1,
    name: "Mobile Phone Repair",
    description: "Screen repair, battery replacement, and software updates.",
    image: "/images/undraw_mobile-encryption_flk2.svg",
  },
  {
    id: 2,
    name: "Laptop Maintenance",
    description: "Hardware upgrades, virus removal, and troubleshooting.",
    image: "/images/undraw_mobile-encryption_flk2.svg",
  },
  {
    id: 3,
    name: "Gaming Console Repair",
    description: "Fix hardware issues and software updates for consoles.",
    image: "/images/undraw_mobile-encryption_flk2.svg",
  },
];

const ServicePage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // THREE.js Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a Geometry
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x4f46e5 }); // Indigo color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(2, 2, 2);
    scene.add(light);

    camera.position.z = 2;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 mx-auto mt-10 sm:mt-20 lg:mt-32">
      {/* Three.js Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-4"></canvas>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Our Repair Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "group border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition"
              )}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                {service.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
              <Button
                variant="primary"
                className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white"
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
