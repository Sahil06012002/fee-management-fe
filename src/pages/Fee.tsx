import CreateForm from "@/components/GenericForm/CreateForm";
import type { DefaultValues } from "react-hook-form";
import { z } from "zod";

export const FeeSchema = z.object({
  name: z.string(),
  pass: z.string(),
});

const defaultValues: DefaultValues<z.TypeOf<typeof FeeSchema>> = {
  name: "",
  pass: "",
};
const headerList = [
  {
    headerName: "Fee Details",
    headerColor: "blue", // just have a prop for styling which will include evry styling for the component
    columns: 2,
    isArray: false,
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
    ],
  },
];

export default function Fee() {
  return (
    <div>
      <CreateForm
        zodSchema={FeeSchema}
        defaultValues={defaultValues}
        headerList={headerList}
        onSubmit={() => {
          console.log("data");
        }}
      />{" "}
    </div>
  );
}
