"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type ContactUsProps = {
  showPill?: boolean;
  showInfo?: boolean;
};

export const ContactUs = ({
  showPill = true,
  showInfo = false,
}: ContactUsProps) => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-white text-black px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 lg:py-[120px]">
      {showPill && (
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
          <h2 className="border-[#DCFCE7] bg-[#F0FDF4] border text-xs sm:text-sm tracking-wide rounded-full px-3 md:px-4 py-2 md:py-3 uppercase">
            GET IN TOUCH
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Contact us
          </h3>
          <p className="text-center max-w-4xl text-sm sm:text-base md:text-lg text-neutral-700">
            {
              "We'd love to hear from you! Reach out to us with your inquiries, partnership opportunities, or any questions you may have."
            }
          </p>
        </div>
      )}

      <div
        className={`flex flex-col lg:flex-row  ${
          showInfo
            ? "lg:gap-8 xl:gap-16"
            : "lg:rounded-4xl lg:overflow-hidden"
        } max-w-7xl mx-auto`}
      >
        {showInfo ? (
          <div className="flex-1 flex flex-col gap-6 md:gap-8 mb-8 lg:mb-0">
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex gap-3 md:gap-4 items-start">
                <MapPin className="size-5 md:size-6 text-[#167F3D] mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-lg sm:text-xl font-semibold">
                    Our offices
                  </h4>
                  <div className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                    <p>123 Business Ave, Suite 400, Riyadh, Riyadh</p>
                    <p>Postal code 12345, Kingdom of Saudi Arabia</p>
                    <br />
                    <p>
                      123 Business Ave, Suite 400, Islamabad, Federal Capital
                    </p>
                    <p>Postal code 12345, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 items-start">
                <Mail className="size-5 md:size-6 text-[#167F3D] mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-lg sm:text-xl font-semibold">Email us</h4>
                  <p className="text-neutral-700 text-sm sm:text-base">
                    info@defendixtechnologies.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 items-start">
                <Phone className="size-5 md:size-6 text-[#167F3D] mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-lg sm:text-xl font-semibold">Call us</h4>
                  <p className="text-neutral-700 text-sm sm:text-base">
                    +1 (123) 456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 bg-red-500 mb-6 rounded-xl lg:mb-0 lg:rounded-l-4xl lg:rounded-r-none overflow-hidden">
            <img
              src="/contact-banner.png"
              alt=""
              className="w-full h-48 md:h-64 lg:h-full object-cover"
            />
          </div>
        )}

        <div className="flex-1">
          <div
            className={`bg-[#167F3D] rounded-2xl  ${
              showInfo ? "lg:rounded-4xl" : "lg:rounded-r-4xl lg:rounded-l-none"
            } p-6 md:p-8`}
          >
            <div className="mb-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">
                Complete the form below for the demo and pricing details.
              </h4>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4 md:gap-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter name"
                          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter email address"
                          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-medium">
                        Phone number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Enter phone number"
                          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-sm font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          placeholder="Enter message"
                          className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-sm" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-white text-[#167F3D] py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send message"}
                  <ArrowRight className="size-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
