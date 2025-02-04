'use client'

import React, { useState } from 'react';
import { Button } from '../../../components/ui/button'; // Updated import path
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you have a revenue share?",
      answer: "No, we offer a buy-rate, interchange-plus pricing model giving you the most control over your revenue.",
    },
    {
      question: "Do you have any minimum fees or fixed monthly fees?",
      answer: "No, we do not have any minimum fees or fixed monthly fees.",
    },
    {
      question: "Do you charge any PCI DSS program or non-compliance fees?",
      answer: "No, we do not charge any PCI DSS program or non-compliance fees.",
    },
    {
      question: "Can I set the pricing to my merchants?",
      answer: "Yes, you can set the pricing to your merchants.",
    },
    {
      question: "Are the pricing tiers 'pick a tier' or 'fill a tier'?",
      answer: "The pricing tiers are 'pick a tier'.",
    },
    {
      question: "Do you charge an ACH volume-based fee?",
      answer: "No, we do not charge an ACH volume-based fee.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 h-56 sm:mt-20 lg:mt-32 p-4 text-center">
      <h1 className="text-4xl px-8 font-bold mb-4 ">Most Frequently Asked FAQ's</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <button
            className="w-full text-left p-4 bg-gray-200 rounded-md"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-100 rounded-md">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      
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

        
      </div>
  
  );
};

export default FAQs;
