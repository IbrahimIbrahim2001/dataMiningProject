//mantine UI
import { TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { usePostKmeansData } from "../hooks/useKmeans";
import SubmitButton from "./SubmitButton";

// import { DevTool } from "@hookform/devtools";

type formValues = {
    k: number
}

export default function KmeanFormComponent() {

    const { mutate, status } = usePostKmeansData();
    const form = useForm<formValues>();
    const { register, handleSubmit } = form;
    const submitData = (data: formValues) => {
        mutate(data);
    }
    return (
        <form onSubmit={handleSubmit(submitData)}>
            <TextInput
                radius="md"
                withAsterisk
                mt="md"
                label="Number of nearest Neighbours"
                {...register('k', { required: true })}
                placeholder="Enter a valid number please"
                description="Specify the number of centroids to consider for clustering"
            />
            <SubmitButton status={status} />
        </form>
    );
}
