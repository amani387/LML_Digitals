'use client';
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icons for menu toggle
import { navbar } from '@/constants/nav';
import { BookingForm } from './Booking';
import { bookingSchema } from '@/utils/validation';
import Image from 'next/image';
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const segment = usePathname();
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      date: new Date()
    },
  });

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 bg-[#EAEAEA] border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-bold flex items-center gap-1">
            <div className="flex gap-0.5">
              <div className="w-1 h-5 bg-red-500"></div>
              <div className="w-1 h-5 bg-red-300"></div>
              <div className="w-1 h-5 bg-red-100"></div>
            </div>
            <span>  <Image
            src="/logo.png"
            alt="Brand Logo"
            width={50}
            height={50}
            className="object-contain"
          /></span>
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
          <Button onClick={() =>  setIsDialogOpen(true)} className="bg-[#52ab98] rounded-xl hover:bg-[#00c9a7] text-lg px-8 py-2 h-auto text-cyan-50">
                Book a Repair
          </Button>
          <BookingForm isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen}/>
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
            href="/services"
            className="block text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
           SERVICES
          </Link>
          <Dialog >
            <DialogTrigger asChild>
              <Button className="bg-[#52ab98] rounded-xl hover:bg-[#00c9a7] text-lg px-10 py-2 h-auto text-cyan-50">
                Book a Repair
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Book a Repair</DialogTitle>
              </DialogHeader>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-4">
                  <label className="text-gray-700">Name</label>
                  <input type="text" className="border rounded p-2" placeholder="Your Name" {...form.register("name")} />
                  <label className="text-gray-700">Email</label>
                  <input type="email" className="border rounded p-2" placeholder="Your Email" {...form.register("email")} />
                  <label className="text-gray-700">Phone</label>
                  <input type="tel" className="border rounded p-2" placeholder="Your Phone" {...form.register("phone")} />
                  <label className="text-gray-700">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${!form.watch("date") && "text-muted-foreground"}`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {form.watch("date") ? format(form.watch("date"), "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="z-50 w-auto p-0 ">
                      <DayPicker 
                        mode="single" 
                        selected={form.watch("date")} 
                        onSelect={date => form.setValue("date", date)} 
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <label className="text-gray-700">Message</label>
                  <textarea className="border rounded p-2" placeholder="Your Message" {...form.register("message")}></textarea>
                  <Button type="submit" className="bg-[#52ab98] rounded-xl hover:bg-[#00c9a7] text-lg px-10 py-2 h-auto text-cyan-50">
                    Submit
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
