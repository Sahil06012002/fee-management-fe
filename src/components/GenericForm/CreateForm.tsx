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
  fieldName: string;
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
    .map((header) => header.fieldName);

  console.log(arrayFields);
  // i want the useFieldArray helper of all those fields
  // i have all the fields in a array

  const form = useForm<z.infer<typeof formProps.zodSchema>>({
    resolver: zodResolver(formProps.zodSchema),
    defaultValues: formProps.defaultValues,
  });

  const fieldArrayHelpers = arrayFields.reduce((acc, name) => {
    acc[name] = useFieldArray({
      control: form.control,
      name: name as any,
    });
    return acc;
  }, {} as Record<(typeof arrayFields)[number], ReturnType<typeof useFieldArray>>);

  // handle the useField array
  return (
    <div className="p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formProps.onSubmit)}
          className="space-y-6"
        >
          {formProps.headerList.map((header, headerIndex) => (
            <div className="space-y-4 ">
              {header.isArray && (
                <div>
                  <div className="flex justify-between bg-blue-300">
                    <FormLabel className="text-lg">
                      {header.headerName}
                    </FormLabel>
                    <Button
                      onClick={() => {
                        fieldArrayHelpers[header.fieldName].append(
                          formProps.defaultValues[header.headerName]?.[0]
                        );
                      }}
                    >
                      Add {header.headerName}
                    </Button>
                  </div>

                  {fieldArrayHelpers[header.fieldName].fields.map(
                    (inField, outerIndex) => (
                      <div
                        key={inField.id}
                        className={`space-y-2 grid grid-cols-${header.columns} gap-4`}
                      >
                        {header.fields.map((innerObjFields, index) => (
                          <div>
                            <FormField
                              control={form.control}
                              name={
                                `${header.fieldName}.${outerIndex}.${innerObjFields.name}` as any
                              }
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{innerObjFields.label}</FormLabel>
                                  <FormControl>
                                    <Input
                                      type={innerObjFields.type}
                                      placeholder={innerObjFields.placeholder}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              )}
              {!header.isArray && (
                <div>
                  <div className="flex justify-between bg-blue-300">
                    <FormLabel className="text-lg">
                      {header.headerName}
                    </FormLabel>
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
              )}
            </div>
          ))}
        </form>
      </Form>
      ;
    </div>
  );
}
