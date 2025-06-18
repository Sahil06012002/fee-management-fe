import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, type DefaultValues } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface CreateFormFields {
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

interface CreateFormHeader {
  headerName: string;
  isArray: boolean;
  headerColor: string;
  columns: number;
  fields: CreateFormFields[];
}

interface CreateFormProps<TSChema extends z.AnyZodObject> {
  zodSchema: TSChema;
  defaultValues: DefaultValues<z.TypeOf<TSChema>>;
  headerList: CreateFormHeader[];
  onSubmit: () => void;
}

export default function CreateForm<TSChema extends z.AnyZodObject>(
  formProps: CreateFormProps<TSChema>
) {
  // if the field is an array get the helpers from the useFieldArray hook
  const arrayFields = formProps.headerList
    .filter((header) => header.isArray)
    .map((header) => header.headerName);

  const form = useForm<z.infer<typeof formProps.zodSchema>>({
    resolver: zodResolver(formProps.zodSchema),
    defaultValues: formProps.defaultValues,
  });

  //  const fieldArrayHelpers = arrayFields.reduce((acc, name) => {
  //   acc[name] = useFieldArray({control : form.control,name : name as any})
  //   return acc;
  // }) as Record<typeof >

  // handle the useField array
  return (
    <div className="p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formProps.onSubmit)}
          className="space-y-6"
        >
          {formProps.headerList.map((header, _) => (
            <div className="space-y-4 ">
              <div className="flex justify-between bg-blue-300">
                <FormLabel className="text-lg">{header.headerName}</FormLabel>
                <Button onClick={() => {}}>Add ${header.headerName}</Button>
              </div>
              <div
                // key={field.id}
                className={`space-y-2 grid grid-cols-${header.columns} gap-4`}
              >
                {header.fields.map((inField, _) => (
                  <FormField
                    control={form.control}
                    name={inField.name as any}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{inField.label}</FormLabel>
                        <FormControl>
                          <Input
                            type={inField.type}
                            placeholder={inField.placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>
          ))}
        </form>
      </Form>
      ;
    </div>
  );
}
