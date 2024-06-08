//mantine UI
import { Button, TextInput } from "@mantine/core";
//react-hook-form
import { useForm } from "react-hook-form";


import { usePostData } from "../hooks/useFetchData";

type formValues = {
    bedrooms: number,
    bathrooms: number,
    garage: number,
    sqft: number,
    yearBuilt: number,
    listPrice: number
}

export default function AddNewPropertyFormComponent() {
    const { mutate } = usePostData();
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
                    label="garage"
                    {...register('garage', { required: true })}
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
                    placeholder="Enter a valid year please"
                />
                <TextInput
                    radius="md"
                    withAsterisk
                    mt="md"
                    label="listPrice"
                    {...register('listPrice', { required: true })}
                    placeholder="Enter a valid price please"
                />
                <Button type="submit" mt="md" variant="filled" bg="indigo">
                    Submit
                </Button>
            </form>
        </>
    )
}
