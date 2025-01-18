import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faGlobe, faHandshake, faRocket, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 mt-10 sm:mt-20 lg:mt-32">
      {/* Title Card */}
      <Card className="bg-white border-none col-span-1 sm:col-span-2">
        <CardHeader>
          <CardTitle className="text-center font-bold text-2xl sm:text-3xl lg:text-[40px] tracking-wide">
            <strong>OUR VALUES</strong>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Individual Value Cards */}
      <Card className="bg-white shadow-md">
        <CardHeader>
          <FontAwesomeIcon icon={faCheckCircle} className="w-6 h-6 text-blue-500 mb-2" />
          <CardTitle className="text-lg font-semibold">Reliability</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm sm:text-base">
            We are open as a team and as a product. We don't put walls up unless
            it's necessary. We become better when we share information. We are
            open to diversity of opinion, backgrounds, and thought.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-md">
        <CardHeader>
          <FontAwesomeIcon icon={faGlobe} className="w-6 h-6 text-green-500 mb-2" />
          <CardTitle className="text-lg font-semibold">Online Access</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm sm:text-base">
            We play because we're a creator tool. Life is short. Let's build
            something meaningful. We play as a team because great teams build
            great things together. We keep those standards high.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-md">
        <CardHeader>
          <FontAwesomeIcon icon={faHandshake} className="w-6 h-6 text-yellow-500 mb-2" />
          <CardTitle className="text-lg font-semibold">Professional Partners</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm sm:text-base">
            We want the best for our customers and ourselves. We coach people to
            their best potential. That's why an "Arcader" is both a teammate and
            a customer.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-md">
        <CardHeader>
          <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-red-500 mb-2" />
          <CardTitle className="text-lg font-semibold">Fast Service</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm sm:text-base">
            We act like owners. Let's empower each other. If we see something
            that needs change, we lead through it.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-md">
        <CardHeader>
          <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6 text-purple-500 mb-2" />
          <CardTitle className="text-lg font-semibold">Trusted</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm sm:text-base">
            We can be honest and kind. We can have high standards and be kind.
            We can say no and be kind. Kindness can vary across cultures,
            upbringings, and languages - but we try our best to be kind.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
