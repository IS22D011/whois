"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
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

// 🧠 Баталгаажуулалтын схем
const formSchema = z.object({
  firstname: z.string().min(2, { message: "First name is required" }),
  lastname: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  summary: z.string().optional(),
  education: z
    .array(
      z.object({
        institution: z.string().min(2, { message: "Institution name required" }),
        start_year: z
          .number({ invalid_type_error: "Start year must be a number" })
          .min(1900)
          .max(new Date().getFullYear()),
      })
    )
    .optional(),
  experience: z
    .array(
      z.object({
        job_title: z.string().min(2, { message: "Job title required" }),
        company: z.string().min(2, { message: "Company name required" }),
      })
    )
    .optional(),
  skills: z
    .array(
      z.object({
        skill: z.string().min(2, { message: "Skill name required" }),
        proficiency: z.coerce.number({ invalid_type_error: "Must be a number between 1 and 5" })
          .min(1)
          .max(5),
      })
    )
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function FormPage() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      summary: "",
      education: [],
      experience: [],
      skills: [],
    },
  });

  const { control, handleSubmit } = form;

  const { fields: educationFields, append: addEducation, remove: removeEducation } = useFieldArray({
    control,
    name: "education",
  });

  const { fields: experienceFields, append: addExperience, remove: removeExperience } =
    useFieldArray({
      control,
      name: "experience",
    });

  const { fields: skillFields, append: addSkill, remove: removeSkill } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (values: FormData) => {
    console.log("✅ Form Submitted:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 🧍‍♂️ Хувийн мэдээлэл */}
        <FormField
          control={control}
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
          control={control}
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
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea placeholder="About you" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 🎓 Боловсрол */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Education</h2>
          {educationFields.map((field, index) => (
            <div key={field.id} className="space-y-2 border p-4 rounded">
              <FormField
                control={control}
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
                control={control}
                name={`education.${index}.start_year`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Year</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="2020" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="destructive" type="button" onClick={() => removeEducation(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => addEducation({ institution: "", start_year: 2024 })}>
            Add Education
          </Button>
        </div>

        {/* 💼 Ажлын туршлага */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Experience</h2>
          {experienceFields.map((field, index) => (
            <div key={field.id} className="space-y-2 border p-4 rounded">
              <FormField
                control={control}
                name={`experience.${index}.job_title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`experience.${index}.company`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="destructive" type="button" onClick={() => removeExperience(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => addExperience({ job_title: "", company: "" })}>
            Add Experience
          </Button>
        </div>

        {/* 🛠 Чадварууд */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Skills</h2>
          {skillFields.map((field, index) => (
            <div key={field.id} className="space-y-2 border p-4 rounded">
              <FormField
                control={control}
                name={`skills.${index}.skill`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skill</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. React" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`skills.${index}.proficiency`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proficiency (1-5)</FormLabel>
                    <FormControl>
                      <Input type="number" min={1} max={5} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="destructive" type="button" onClick={() => removeSkill(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => addSkill({ skill: "", proficiency: 1 })}>
            Add Skill
          </Button>
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
