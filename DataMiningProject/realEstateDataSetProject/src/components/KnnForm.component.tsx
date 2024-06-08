//mantine UI
import { Button, TextInput } from "@mantine/core";
//react-hook-form
import { useForm } from "react-hook-form";

//hooks
import { usePostKnnData } from "../hooks/useKnn";



type formValues = {
  bedrooms: number,
  bathrooms: number,
  sqft: number,
  yearBuilt: number,
  k: number
}

export default function KnnFormComponent() {

  const { mutate } = usePostKnnData();
  const form = useForm<formValues>();
  const { register, handleSubmit } = form;
  const submitData = (data: formValues) => {
    mutate(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitData)}>

        <TextInput
          radius="md"
          withAsterisk
          mt="md"
          label="Number of Bedrooms"
          {...register('bedrooms', { required: true })}
          placeholder="Enter a valid number please"
        />
        <TextInput
          radius="md"
          withAsterisk
          mt="md"
          label="Number of Bathrooms"
          {...register('bathrooms', { required: true })}
          placeholder="Enter a valid number please"
        />
        <TextInput
          radius="md"
          withAsterisk
          mt="md"
          label="Property sqft"
          {...register('sqft', { required: true })}
          placeholder="Enter a valid number please"
        />
        <TextInput
          radius="md"
          withAsterisk
          mt="md"
          label="Year Built"
          {...register('yearBuilt', { required: true })}
          placeholder="Enter a valid number please"
        />
        <TextInput
          radius="md"
          withAsterisk
          mt="md"
          label="Number of nearest Neighbours"
          {...register('k', { required: true })}
          placeholder="Enter a valid number please"
          description="Specify the number of nearest neighbors to consider for classification"
        />
        <Button type="submit" mt="md" variant="filled" bg="indigo">
          Submit
        </Button>
      </form>
    </>
  );
}
