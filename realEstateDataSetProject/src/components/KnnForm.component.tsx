import { TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";

import { usePostKnnData } from "../hooks/useKnn";
import SubmitButton from "./SubmitButton";

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

const inputFieldsArray: inputFieldType[] = [
  { id: 1, inputName: 'bedrooms', label: 'Number of Bedrooms' },
  { id: 2, inputName: 'bathrooms', label: 'Number of Bathrooms' },
  { id: 3, inputName: 'sqft', label: 'Property sqft' },
  { id: 4, inputName: 'yearBuilt', label: 'Year Built' },
  { id: 5, inputName: 'k', label: 'Number of nearest Neighbours', description: "Specify the number of nearest neighbors to consider for classification" },
];


export default function KnnFormComponent() {
  const { mutate, status } = usePostKnnData();
  const form = useForm<formValues>();
  const { register, handleSubmit } = form;

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
          {...register(element.inputName, { required: true })}
          placeholder="Enter a valid number please"
          description={element.description}
        />
      ))}
      <SubmitButton status={status} />
    </form>
  );
}
