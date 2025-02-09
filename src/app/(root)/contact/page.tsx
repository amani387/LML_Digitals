'use client';
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../../../utils/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          type: 'contact',
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      form.reset();
      toast({
        description: 'Message sent successfully',
      });
      // Add toast notification here if needed
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        description: 'Failed to send message',
        variant: 'destructive',
      });
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 relative mt-20">
      <div className="flex flex-wrap w-full max-w-6xl items-center justify-center relative">
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="bg-gray-100 p-8 rounded-2xl">
            <div className="text-left mb-6">
              <h1 className="text-4xl font-bold text-emerald-600">Contact Us</h1>
              <p className="text-gray-700 mt-2 text-lg">
                Reach out to us for any queries or support. We’re happy to help!
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-lg">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="p-6 rounded-xl text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-lg">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          className="p-6 rounded-xl text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-lg">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here..."
                          className="p-6 rounded-xl text-lg min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-6 rounded-xl text-lg"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Right Section: Illustration and Info */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center">
          <Image
            src="/undraw_contact-us_kcoa.svg"
            alt="Contact Illustration"
            width={1000}
            height={600}
            className="rounded-lg max-w-full"
          />
          <div className="space-y-4 text-lg mt-20 text-center">
            <p className="text-gray-700">545 Mavis Island, IL 99191</p>
            <p className="text-gray-700">+2034 4040 3030</p>
            <p className="text-gray-700">support@international.org</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-8 right-4 p-4 rounded-l-2xl">
        <div className="flex flex-col items-center space-y-6">
          {[faFacebookF, faInstagram, faLinkedinIn, faTwitter].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="group flex items-center justify-center flex-col text-purple-700 hover:text-purple-900"
            >
              <div className="bg-[#52ab98] text-white p-4 rounded-full transform transition-transform duration-300 group-hover:scale-110">
                <FontAwesomeIcon icon={icon} />
              </div>
              <span className="opacity-0 group-hover:opacity-100 text-sm font-semibold mt-2 transition-opacity duration-300">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'][index]}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;