import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast"
import { DayPicker } from "react-day-picker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { bookingSchema } from "@/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type Prop = {
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
}

export function BookingForm({ isDialogOpen, setIsDialogOpen }: Prop) {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: undefined,
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof bookingSchema>) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          type: 'booking',
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');
      form.reset();
      // close the dialog
      setIsDialogOpen(false);
      
      toast({
        description: 'Booked successfully',
      });

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        description: 'Failed to book',
        variant: 'destructive',
      });
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Book a Repair
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Name" 
                      {...field} 
                      className="rounded-lg border-gray-300 focus:border-[#52ab98] focus:ring-[#52ab98]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                      className="rounded-lg border-gray-300 focus:border-[#52ab98] focus:ring-[#52ab98]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Phone"
                      {...field}
                      className="rounded-lg border-gray-300 focus:border-[#52ab98] focus:ring-[#52ab98]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={`w-full pl-3 text-left font-normal rounded-lg ${
                            !field.value ? "text-gray-400" : "text-gray-700"
                          }`}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Choose a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white/95 backdrop-blur-sm border border-gray-200"
                      style={{ zIndex: 9999 }}
                      align="start"
                    >
                      <DayPicker
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="rounded-lg shadow-lg"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      {...field}
                      className="rounded-lg border-gray-300 focus:border-[#52ab98] focus:ring-[#52ab98] h-32"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#52ab98] hover:bg-[#3b8273] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
            >
              Submit Booking
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}