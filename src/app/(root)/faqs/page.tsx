'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/ui/button'; // Updated import path
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"; // shadcn collapsible
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { faqs } from '@/constants/faqs';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full pt-28 lg:min-h-screen mx-auto max-w-[1440px]">
      <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-0 py-0 md:px-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* SVG Section */}
          <div className="lg:w-1/3 flex-shrink-0 lg:h-auto">
            <div
              className="w-full h-[300px] lg:h-[400px] xl:h-[500px]"
              style={{
                backgroundImage: "url('/undraw_questions_g2px.svg')", // Replace with your SVG path
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* FAQ Section */}
            <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold mb-8 text-center lg:text-left">
              Most Frequently Asked FAQ&apos;s
            </h1>
            {faqs.map((faq, index) => (
              <Collapsible key={index} open={openIndex === index}>
              <CollapsibleTrigger
                asChild
                className="w-full text-left py-4 rounded-md flex items-center "
                onClick={() => toggleFAQ(index)}
              >
                <div className="w-full flex justify-start items-start gap-2 ">
                <span>
                {openIndex === index ? (
                  <XMarkIcon className="hover:cursor-pointer p-1 size-6 text-black rounded-full bg-[#d6f1a2] hover:bg-[#c0e18f] transition-all duration-300" />                    
                  ) : (
                  <PlusIcon className="hover:cursor-pointer p-1 size-6 text-black rounded-full bg-[#d6f1a2] hover:bg-[#c0e18f] transition-all duration-300" />                    )}
                </span>
                <span>{faq.question}</span>
                </div>
              </CollapsibleTrigger>
              <div className="border-b border-[#E1DCD4]">
                <CollapsibleContent className='px-8 bg-gray-100 rounded-md mt-2 mb-2 '>
                {faq.answer}
              </CollapsibleContent>
              </div>
              </Collapsible>
            ))}
            </div>
          </div>

          <Card className="mt-14 flex-shrink-0">
            <CardHeader>
            <CardTitle className="text-4xl text-center text-CardHeader color-[#555555]">
              Still have questions or want to know more
            </CardTitle>
            </CardHeader>
            <CardContent className="text-customBg">
            We use only the highest quality parts and offer a wide range of
            repair services, from simple screen replacements to complex
            motherboard repairs. We also offer same-day repairs in most cases!
            </CardContent>
            <CardFooter className="flex justify-center">
            <Button className="block bg-emerald-500 text-white px-16 py-2 hover:bg-emerald-600 transition-colors text-center rounded-2xl">
              Contact Us
            </Button>
            </CardFooter>
          </Card>
      </section>
    </div>
  );
};

export default FAQs;
