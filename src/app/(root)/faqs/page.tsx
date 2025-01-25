'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/ui/button'; // Updated import path
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { faqs } from '@/constants/faqs';


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full pt-20  lg:min-h-screen mx-auto max-w-screen-2xl">
    <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-6">
        {/* SVG Section */}
        <div className="lg:w-1/3">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/undraw_questions_g2px.svg')", // Replace with your SVG path
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "100%",
            }}
          ></div>
        </div>

        {/* FAQ Section */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-8 text-center lg:text-left">
            Most Frequently Asked FAQ&apos;s
          </h1>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-gray-200 rounded-md"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-100 rounded-md mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
     
      
      <Card className="mt-14">
        <CardHeader>
          <CardTitle className='text-4xl text-center text-CardHeader'>Still have questions or want to know more</CardTitle>
        </CardHeader>
        <CardContent className='text-customBg'>
          We use only the highest quality parts and offer a wide range of repair services, from simple screen replacements to complex motherboard repairs. We also offer same-day repairs in most cases!
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="block bg-emerald-500 text-white px-16 py-2  hover:bg-emerald-600 transition-colors text-center rounded-2xl">Contact Us</Button>
        </CardFooter>
      </Card>

      </section>
   
    </div>
  );
};

export default FAQs;
