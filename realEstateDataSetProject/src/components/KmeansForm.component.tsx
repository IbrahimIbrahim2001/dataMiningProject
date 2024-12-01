//mantine UI
import { TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { usePostKmeansData } from "../hooks/useKmeans";
import SubmitButton from "./SubmitButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type formValues = {
    k: number
}
const KmeansSchema = z.object({
    k: z.number()
        .positive()
        .gt(9, "The Number of Clusters Must be Between 10 and 200")
        .lt(201, "The Number of Clusters Must be Between 10 and 200"),
})



export default function KmeanFormComponent() {

    const { mutate, status } = usePostKmeansData();
    const form = useForm<formValues>({
        resolver: zodResolver(KmeansSchema),
    });
    const { register, handleSubmit, formState: { errors } } = form;
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
                {...register("k", {
                    required: true, setValueAs: (v) => parseInt(v, 10),
                })}
                placeholder="Enter a valid number please"
                description="Specify the number of centroids to consider for clustering"
                error={errors.k?.message}
            />
            <SubmitButton status={status} />
        </form>
    );
}
