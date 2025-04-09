"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// 📌 Формын баталгаажуулалтын схем
const formSchema = z.object({
  firstname: z.string().min(2, { message: "First name is required" }),
  lastname: z.string().min(2, { message: "Last name is required" }),
  headline: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  facebook: z.string().optional(),
  city: z.string().optional(),
  summary: z.string().optional(),
  education: z.array(
    z.object({
      institution: z.string().min(2, { message: "Institution name required" }),
      start_year: z.number().min(1900).max(new Date().getFullYear()),
    })
  ),
  experience: z.array(
    z.object({
      job_title: z.string().min(2, { message: "Job title required" }),
      company: z.string().min(2, { message: "Company name required" }),
      location: z.string().optional(),
      start_date: z.string().optional(),
      end_date: z.string().optional(),
      responsibilities: z.array(z.string().optional()),
    })
  ),
  skills: z.array(
    z.object({
      skill: z.string().min(2, { message: "Skill name required" }),
      proficiency: z.number().min(1).max(5),
    })
  ),
});

export default function FormPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      headline: "",
      address: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      facebook: "",
      city: "",
      summary: "",
      education: [
        { institution: "", start_year: 2020 },  // Default start_year added
      ],
      experience: [
        {
          job_title: "",
          company: "",
          location: "",
          start_date: "",
          end_date: "",
          responsibilities: [],
        },
      ],
      skills: [
        {
          skill: "",
          proficiency: 3
        },
      ],
    },
  });

  function onSubmit(values: any) {
    console.log("Form Submitted:", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea placeholder="Summary about you" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 🎓 Боловсрол */}
        {form.watch("education").map((edu, index) => (
          <div key={index}>
            <FormField
              control={form.control}
              name={`education.${index}.institution`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <Input placeholder="Institution" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`education.${index}.start_year`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Year</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Start Year"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        ))}

        {/* 💼 Ажлын туршлага */}
        {form.watch("experience").map((exp, index) => (
          <div key={index}>
            <FormField
              control={form.control}
              name={`experience.${index}.job_title`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Job Title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        ))}

        {/* 🛠 Чадварууд */}
        {form.watch("skills").map((skill, index) => (
          <div key={index}>
            <FormField
              control={form.control}
              name={`skills.${index}.skill`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skill</FormLabel>
                  <FormControl>
                    <Input placeholder="Skill" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
