'use client';

import { testimonials } from "@/constants/testimonials"
import { SetStateAction, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"

export default function Testimonial() {
  const carouselRef1 = useRef<HTMLDivElement>(null)
  const carouselRef2 = useRef<HTMLDivElement>(null)
  const carouselRef3 = useRef<HTMLDivElement>(null)
  const carouselRef4 = useRef<HTMLDivElement>(null)
  const carouselRef5 = useRef<HTMLDivElement>(null)
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollAmount1, setScrollAmount1] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollAmount2, setScrollAmount2] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollAmount3, setScrollAmount3] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const carousel1 = carouselRef1.current
    const carousel2 = carouselRef2.current
    const carousel3 = carouselRef3.current
    const carousel4 = carouselRef4.current
    const carousel5 = carouselRef5.current

    const scrollInterval1 = setInterval(() => {
      if (!isHovered1 && carousel1) {
        setScrollAmount1(prev => {
          const newScrollAmount = prev + 1
          carousel1.scrollTop = newScrollAmount
          return newScrollAmount >= carousel1.scrollHeight - carousel1.clientHeight ? 0 : newScrollAmount
        })
      }
    }, 50)

    const scrollInterval2 = setInterval(() => {
      if (!isHovered2 && carousel2) {
        setScrollAmount2(prev => {
          const newScrollAmount = prev - 1
          carousel2.scrollTop = newScrollAmount
          return newScrollAmount <= 0 ? carousel2.scrollHeight - carousel2.clientHeight : newScrollAmount
        })
      }
    }, 50)

    const scrollInterval3 = setInterval(() => {
      if (!isHovered3 && carousel3) {
        setScrollAmount3(prev => {
          const newScrollAmount = prev + 1
          carousel3.scrollTop = newScrollAmount
          return newScrollAmount >= carousel3.scrollHeight - carousel3.clientHeight ? 0 : newScrollAmount
        })
      }
    }, 50)

    const scrollInterval4 = setInterval(() => {
      if (carousel4) {
        setScrollAmount2(prev => {
          const newScrollAmount = prev - 1
          carousel4.scrollTop = newScrollAmount
          return newScrollAmount <= 0 ? carousel4.scrollHeight - carousel4.clientHeight : newScrollAmount
        })
      }
    }, 50)

    const scrollInterval5 = setInterval(() => {
      if (carousel5) {
        setScrollAmount2(prev => {
          const newScrollAmount = prev - 1
          carousel5.scrollTop = newScrollAmount
          return newScrollAmount <= 0 ? carousel5.scrollHeight - carousel5.clientHeight : newScrollAmount
        })
      }
    }, 50)

    return () => {
      clearInterval(scrollInterval1)
      clearInterval(scrollInterval2)
      clearInterval(scrollInterval3)
      clearInterval(scrollInterval4)
      clearInterval(scrollInterval5)
    }
  }, [isHovered1, isHovered2, isHovered3])

  const handleDotClick = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full max-w-[1920px] mx-auto md:px-4 py-8">
      <div className="hidden md:flex flex-col border-none shadow-none md:flex-row gap-8 overflow-hidden relative transform-gpu">
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#f2f3f3] to-transparent z-[1] pointer-events-none"></div>
        
        {/* Left Gradient Overlay */}
        <div className="absolute bottom-0 left-0 h-full w-72 bg-gradient-to-r from-[#f2f3f3] to-transparent z-[1] pointer-events-none"></div>

        {/* Right Gradient Overlay */}
        <div className="absolute bottom-0 right-0 h-full w-72 bg-gradient-to-l from-[#f2f3f3] to-transparent z-[1] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-t from-[#f2f3f3] to-transparent z-[1] pointer-events-none"></div>
        <div 
          ref={carouselRef4} 
          className="flex-1 overflow-hidden h-[60rem] scrollbar-hide w-1/12 -ml-[10%]"
        >    
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <Card key={index} className="p-4 rounded-xl shadow-sm mb-4">              
              <CardContent>
                <p className="text-gray-800">{testimonial.message}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-start space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <p className="text-teal-800 font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
          <div className="sticky bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>
        
        <div 
          ref={carouselRef1} 
          className="flex-1 overflow-hidden h-[60rem] scrollbar-hide w-1/3"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >    
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <Card key={index} className="p-4 rounded-xl shadow-sm mb-4 hover:bg-gradient-to-br hover:from-[#f7f8f8] hover:to-[#acbb78]">              
              <CardContent>
                <p className="text-gray-800">{testimonial.message}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-start space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <p className="text-teal-800 font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
          <div className="sticky bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>
        
        <div 
          ref={carouselRef2} 
          className="flex-1 overflow-hidden h-[60rem] scrollbar-hide w-1/3"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <Card key={index} className="p-4 rounded-xl shadow-sm mb-4 hover:bg-gradient-to-br hover:from-[#f7f8f8] hover:to-[#acbb78]">              
              <CardContent>
                <p className="text-gray-800">{testimonial.message}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-start space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <p className="text-teal-800 font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div 
          ref={carouselRef3} 
          className="flex-1 overflow-hidden h-[60rem] scrollbar-hide w-1/3"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <Card key={index} className="p-4 rounded-xl shadow-sm mb-4 hover:bg-gradient-to-br hover:from-[#f7f8f8] hover:to-[#acbb78]">              
              <CardContent>
                <p className="text-gray-800">{testimonial.message}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-start space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <p className="text-teal-800 font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div 
          ref={carouselRef5} 
          className="flex-1 overflow-hidden h-[60rem] scrollbar-hide w-1/12 -mr-[10%]"
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <Card key={index} className="p-4 rounded-xl shadow-sm mb-4">              
              <CardContent>
                <p className="text-gray-800">{testimonial.message}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-start space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <p className="text-teal-800 font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="md:hidden flex flex-col items-center">
        {/* Carousel */}
        <div className="w-full overflow-hidden relative">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full">
                <Card className="p-4 rounded-xl shadow-sm mb-4 hover:bg-gradient-to-r hover:from-[#f7f8f8] hover:to-[#acbb78]"> 
                  <CardContent>
                    <p className="text-gray-800">{testimonial.message}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-start space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-teal-800 font-bold">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-teal-800' : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
