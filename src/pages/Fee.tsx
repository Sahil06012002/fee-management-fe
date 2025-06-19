import CreateForm from "@/components/GenericForm/CreateForm";
import type { DefaultValues } from "react-hook-form";
import { z } from "zod";

const PaymentSchema = z.object({
  method: z.string(),
  amount: z.number(),
});

const FeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  pass: z.string().min(1, "Password is required"),
  amount: z.number().min(1, "Amount must be positive"),
  email: z.string().email("Invalid email").optional(),
  notes: z.string().optional(),
  payments: z.array(PaymentSchema).optional(), // ✅ Array field added
});

const defaultValues: DefaultValues<z.infer<typeof FeeSchema>> = {
  name: "",
  pass: "",
  amount: 0,
  email: "",
  notes: "",
  payments: [
    {
      method: "Cash",
      amount: 0,
    },
  ],
};

const headerList = [
  {
    headerName: "Fee Details",
    headerColor: "blue",
    columns: 2,
    isArray: false,
    fieldName: "feeDetails",
    fields: [
      {
        name: "name",
        label: "Name",
        placeholder: "Enter Name",
        type: "text",
      },
      {
        name: "pass",
        label: "Password",
        placeholder: "Enter Password",
        type: "password",
      },
      {
        name: "amount",
        label: "Amount",
        placeholder: "Enter Amount",
        type: "number",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Enter Email (optional)",
        type: "email",
      },
      {
        name: "notes",
        label: "Notes",
        placeholder: "Additional Notes (optional)",
        type: "text",
      },
    ],
  },
  {
    headerName: "payments", // ⚠️ This **must match the key in defaultValues & schema**
    headerColor: "green",
    columns: 2,
    isArray: true,
    fieldName: "payments", // Optional but useful if you want to separate headerName & fieldName
    fields: [
      {
        name: "method",
        label: "Payment Method",
        placeholder: "Cash / Card / UPI",
        type: "text",
      },
      {
        name: "amount",
        label: "Amount",
        placeholder: "Enter Amount",
        type: "number",
      },
    ],
  },
];

export default function Fee() {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Test Generic Form with Array</h1>
      <CreateForm
        zodSchema={FeeSchema}
        defaultValues={defaultValues}
        headerList={headerList}
        onSubmit={() => {
          console.log("Form Submitted ✅");
        }}
      />
    </div>
  );
}
