import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const OurValues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Reliability</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We are open as a team and as a product. We don't put walls up unless it's necessary. We become better when we share information. We are open to diversity of opinion, backgrounds, and thought.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Online Access</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We play because we're a creator tool. Life is short. Let's build something meaningful. We play as a team because great teams build great things together. We keep those standards high.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Professional Partners</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We want the best for our customers and ourselves. We coach people to their best potential. That's why an "Arcader" is both a teammate and a customer.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Fast Service</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We act like owners. Let's empower each other. If we see something that needs change, we lead through it.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="bg-gray-100">
        <CardHeader>
          <CardTitle>Trusted</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            We can be honest and kind. We can have high standards and be kind. We can say no and be kind. Kindness can vary across cultures, upbringings, and languages - but we try our best to be kind.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default OurValues;
