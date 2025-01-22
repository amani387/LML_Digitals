import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { values } from "@/constants/about";

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full pt-20 lg:min-h-screen mx-auto max-w-screen-2xl">
      <section className="w-full max-w-[95%] md:max-w-[90%] mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 mt-10 sm:mt-20 lg:mt-32">
          {/* Title Card */}
          <Card className="bg-white border-none col-span-1 sm:col-span-2" style={{ backgroundImage: "url('/undraw_testimonials_4c7y.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", alignSelf: "initial" }}>
            <CardHeader>
              <CardTitle className="text-right font-bold text-2xl sm:text-3xl lg:text-[40px] tracking-wide">
                <strong>OUR VALUES</strong>
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Individual Value Cards */}
          {values.map((value, index) => (
            <Card key={index} className="bg-white shadow-md group hover:shadow-lg hover:border-4 hover:border-green-100 transition-all duration-300 relative overflow-hidden">
              <CardHeader>
                <FontAwesomeIcon icon={value.icon} className={`w-6 h-6 text-blue-500 mb-2`} />
                <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
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
