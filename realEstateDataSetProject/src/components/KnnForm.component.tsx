import { TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";

import { usePostKnnData } from "../hooks/useKnn";
import SubmitButton from "./SubmitButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type formValues = {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  k: number;
};

type inputFieldType = {
  id: number;
  inputName: keyof formValues;
  label: string;
  description?: string;
};


const DATE = new Date();
const NEXTYEAR = DATE.getFullYear() + 1;
const SHAREDNUMBERMESSAGE = "Enter A Realistic Numbers, For Accurate Results";
const SHAREDPOSITIVENUMBERMESSAGE = "Not A Valid Number";

const KnnSchema = z.object({
  bedrooms: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
  bathrooms: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
  sqft: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
  yearBuilt: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }).gt(1900, "Only Greater Than 1900").lt(NEXTYEAR, `Only Less Than ${NEXTYEAR}`),
  k: z.number().positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
})

const inputFieldsArray: inputFieldType[] = [
  { id: 1, inputName: 'bedrooms', label: 'Number of Bedrooms' },
  { id: 2, inputName: 'bathrooms', label: 'Number of Bathrooms' },
  { id: 3, inputName: 'sqft', label: 'Property sqft' },
  { id: 4, inputName: 'yearBuilt', label: 'Year Built' },
  { id: 5, inputName: 'k', label: 'Number of nearest Neighbours', description: "Specify the number of nearest neighbors to consider for classification" },
];


export default function KnnFormComponent() {
  const { mutate, status } = usePostKnnData();
  const form = useForm<formValues>({
    resolver: zodResolver(KnnSchema)
  });
  const { register, handleSubmit, formState: { errors } } = form;

  const submitData = (data: formValues) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      {inputFieldsArray.map((element) => (
        <TextInput
          key={element.id}
          radius="md"
          withAsterisk
          mt="md"
          label={element.label}
          {...register(element.inputName, { required: true, setValueAs: (v) => parseInt(v, 10) })}
          placeholder="Enter a valid number please"
          description={element.description}
          error={errors[element.inputName]?.message}
        />
      ))}
      <SubmitButton status={status} />
    </form>
  );
}
