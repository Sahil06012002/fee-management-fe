// export type StudentsAddress  = {
//   address_type?: string;
//   line1?: string;
//   line2?: string;
//   city?: string;
//   state?: string;
//   zip_code?: string;
//   country?: string;
//   is_current: boolean;
// }

// export type StudentsContact  = {
//   contact_type: string;
//   contact: string;
//   email?: string;
//   note?: string;
// }


// export type StudentDetails =  {
//   name: string;
//   dob: string;
//   fathers_name?: string;
//   fathers_occupation?: string;
//   fathers_dob?: string;
//   mothers_name?: string;
//   mothers_occupation?: string;
//   mothers_dob?: string;
//   grade_id: number;
//   section?: string;
//   roll_number?: number;
//   addmission_date: Date;
//   admission_status: string;
//   addresses?: StudentsAddress[];
//   contacts?: StudentsContact[];
// }


import { z } from "zod";

// Address schema
export const StudentsAddressSchema = z.object({
  address_type: z.string().optional(),
  line1: z.string().optional(),
  line2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip_code: z.string().optional(),
  country: z.string().optional(),
  is_current: z.boolean(),
});

// Contact schema
export const StudentsContactSchema = z.object({
  contact_type: z.string(),
  contact: z.string(),
  email: z.string().email().optional(),
  note: z.string().optional(),
});

// Student details schema
export const StudentDetailsSchema = z.object({
  name: z.string(),
  dob: z.string(), // You can use z.coerce.date() if you expect Date input
  fathers_name: z.string().optional(),
  fathers_occupation: z.string().optional(),
  fathers_dob: z.string().optional(),
  mothers_name: z.string().optional(),
  mothers_occupation: z.string().optional(),
  mothers_dob: z.string().optional(),
  grade_id: z.number(),
  section: z.string().optional(),
  roll_number: z.number().optional(),
  addmission_date  : z.string(),
  // addmission_date: z.coerce.date(), // Converts string to Date if needed
  admission_status: z.string(),
  addresses: z.array(StudentsAddressSchema).optional(),
  contacts: z.array(StudentsContactSchema).optional(),
});

export type StudentsAddress = z.infer<typeof StudentsAddressSchema>;
export type StudentsContact = z.infer<typeof StudentsContactSchema>;
export type StudentDetails = z.infer<typeof StudentDetailsSchema>;
