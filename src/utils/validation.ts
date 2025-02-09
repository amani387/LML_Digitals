import { z } from "zod";

// Define the form schema
export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export const bookingSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" }),
  date: z.date().refine((date) => date > new Date(), {
    message: "Date must be in the future",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
