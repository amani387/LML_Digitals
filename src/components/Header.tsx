import { heroSection } from "@/constants/home"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-sm">
          <div className="flex-1 flex flex-col justify-between space-y-6 p-4 md:p-16 ">
            <h1 className="px-2 text-xl font-bold text-teal-800 md:text-5xl md:px-12 ">
              {heroSection.title}
              <p className="text-gray-400 text-sm">
                {heroSection.subtitle}
              </p>
            </h1>
            <div className="flex justify-center">
              <Button className="bg-[#52ab98] rounded-xl hover:bg-[#00c9a7] text-lg px-10 py-2 h-auto text-cyan-50" size="lg">{heroSection.buttonText}</Button>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={heroSection.image.src}
              alt={heroSection.image.alt}
              width={400}
              height={300}
              className="w-full rounded-s-none rounded-e-xl"
              priority
              loading="eager"
            />
          </div>
        </div>
      </section>
  )
}
