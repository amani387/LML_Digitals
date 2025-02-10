import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { values } from "@/constants/about";

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full pt-28 lg:min-h-screen mx-auto max-w-[1440px]">
      <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-0 py-0 md:px-4 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-none border-none col-span-1 md:col-span-1 h-20 hover:cursor-pointer">
        <CardHeader className="pb-2 px-2">
          <CardTitle className="text-1xl lg:text-[20px] tracking-wide">
          <strong>OUR VALUES</strong>
          </CardTitle>
          <CardDescription>
          What we love and stand for every day
          </CardDescription>
        </CardHeader>
        </Card>

        {/* Individual Value Cards */}
        {values.map((value, index) => (
        <Card
          key={index}
          style={{
            background: `linear-gradient(135deg, ${
              index % 4 === 0
          ? "#F9FAFB"
          : index % 4 === 1
          ? "#E7FAEF"
          : index % 4 === 2
          ? "#F2FFF9"
          : "#ffffff"
            }, #CEDCF8)`,
          }}
          className={`shadow-sm border-none group hover:cursor-pointer transition-all duration-300 relative overflow-hidden ${
            index % 2 === 0 ? "row-span-2" : "row-span-2"
          } hover:shadow-lg hover:scale-105 hover:bg-opacity-90`}
        >
          <CardHeader>
            <FontAwesomeIcon
              icon={value.icon}
              className={`w-6 h-6 text-blue-500 mb-2`}
            />
            <CardTitle className="text-lg font-semibold">
              {value.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm sm:text-base">
              {value.description}
            </CardDescription>
          </CardContent>
        </Card>
        ))}
      </div>
      </section>
    </main>
  );
};

export default AboutPage;
