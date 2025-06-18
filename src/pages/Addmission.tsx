import { useFieldArray, useForm } from "react-hook-form";
import {
  StudentDetailsSchema,
  type StudentDetails,
} from "../interfaces/StudentDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import apiCient from "./services/apiClient";

export default function Addmission() {
  const form = useForm<StudentDetails>({
    resolver: zodResolver(StudentDetailsSchema),
    defaultValues: {
      name: "John Doe",
      dob: "2000-01-01",
      fathers_name: "Father Name",
      fathers_occupation: "Engineer",
      fathers_dob: "1970-05-15",
      mothers_name: "Mother Name",
      mothers_occupation: "Doctor",
      mothers_dob: "1975-09-20",
      grade_id: 1,
      section: "A",
      roll_number: 101,
      addmission_date: "2024-06-01",
      admission_status: "Enrolled",
      addresses: [
        {
          address_type: "Home",
          line1: "123 Main Street",
          line2: "Apt 4B",
          city: "Delhi",
          state: "Delhi",
          zip_code: "110001",
          country: "India",
          is_current: true,
        },
      ],
      contacts: [
        {
          contact_type: "Phone",
          contact: "+91-9876543210",
          email: "john.doe@example.com",
          note: "Primary contact",
        },
      ],
    },
  });

  const {
    fields: addressFields,
    append: appendFields,
    remove: removeFields,
  } = useFieldArray({
    name: "addresses",
    control: form.control,
  });
  const {
    fields: contactFields,
    append: appendContacts,
    remove: removeContacts,
  } = useFieldArray({
    name: "contacts",
    control: form.control,
  });

  async function onSubmit(formData: StudentDetails) {
    console.log(formData);

    const res = await apiCient.post("students/admit-students", formData);
    console.log(res.status);
  }

  return (
    <div className="p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Student's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* DOB */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Father's Name */}
            <FormField
              control={form.control}
              name="fathers_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Father's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Father's Occupation */}
            <FormField
              control={form.control}
              name="fathers_occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father's Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Father's Occupation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Father's DOB */}
            <FormField
              control={form.control}
              name="fathers_dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Father's Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mother's Name */}
            <FormField
              control={form.control}
              name="mothers_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mother's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mother's Occupation */}
            <FormField
              control={form.control}
              name="mothers_occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother's Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Mother's Occupation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mother's DOB */}
            <FormField
              control={form.control}
              name="mothers_dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mother's Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Grade ID */}
            <FormField
              control={form.control}
              name="grade_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grade ID</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Section */}
            <FormField
              control={form.control}
              name="section"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section</FormLabel>
                  <FormControl>
                    <Input placeholder="Section" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Roll Number */}
            <FormField
              control={form.control}
              name="roll_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roll Number</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Admission Date */}
            <FormField
              control={form.control}
              name="addmission_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Admission Status */}
            <FormField
              control={form.control}
              name="admission_status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission Status</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Enrolled / Pending" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Addresses */}
          <div className="space-y-4 ">
            <div className="flex justify-between bg-blue-300">
              <FormLabel className="text-lg">Addresses</FormLabel>
              <Button
                onClick={() => {
                  appendFields({
                    address_type: "",
                    line1: "",
                    line2: "",
                    city: "",
                    state: "",
                    zip_code: "",
                    country: "",
                    is_current: false,
                  });
                }}
              >
                Add Address
              </Button>
            </div>
            {addressFields.map((field, index) => (
              <div
                key={field.id}
                className="border p-4 rounded-md space-y-2 grid grid-cols-4 gap-4"
              >
                <FormField
                  control={form.control}
                  name={`addresses.${index}.address_type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address Type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Home, Office" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`addresses.${index}.line1`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Line 1</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Street address or landmark"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`addresses.${index}.line2`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Line 2</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Apartment, suite, etc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`addresses.${index}.city`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`addresses.${index}.state`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="State" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`addresses.${index}.zip_code`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Postal Code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`addresses.${index}.country`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {addressFields.length >= 2 && (
                  <Button
                    // type="button"
                    variant="destructive"
                    onClick={() => removeFields(index)}
                    size="icon"
                    className="size-8 bg-red-700"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Contacts */}
          <div className=" space-y-4 ">
            <div className="flex justify-between bg-blue-300">
              <FormLabel className="text-lg">Contacts</FormLabel>
              <Button
                onClick={() => {
                  appendContacts({
                    contact_type: "",
                    contact: "",
                    email: "",
                    note: "",
                  });
                }}
              >
                Add Contacts
              </Button>
            </div>
            {contactFields.map((field, index) => (
              <div
                key={field.id}
                className="border p-4 rounded-md space-y-2 grid grid-cols-5 gap-4"
              >
                {/* Contact Type */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.contact_type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Phone, Landline" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contact */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.contact`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., +91-1234567890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.email`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g., example@mail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Note */}
                <FormField
                  control={form.control}
                  name={`contacts.${index}.note`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Note</FormLabel>
                      <FormControl>
                        <Input placeholder="Optional note" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Delete Button (if >= 2 items) */}
                {contactFields.length >= 2 && (
                  <Button
                    variant="destructive"
                    onClick={() => removeContacts(index)}
                    size="icon"
                    className="size-8 bg-red-700"
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
