//mantine UI
import { TextInput } from "@mantine/core";
//react-hook-form
import { useForm } from "react-hook-form";
//hooks
import { usePostData } from "../hooks/useFetchData";
//context
import { useSuccessNotification } from "../context/SuccessNotificationProvider";
import SubmitButton from "./SubmitButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type formValues = {
    bedrooms: number,
    bathrooms: number,
    garage: number,
    sqft: number,
    yearBuilt: number,
    listPrice: number
}

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


const AddPropertySchema = z.object({
    bedrooms: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
    bathrooms: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
    garage: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
    sqft: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }),
    yearBuilt: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE }).gt(1900, "Only Greater Than 1900").lt(NEXTYEAR, `Only Less Than ${NEXTYEAR}`).gt(1900, "Only Greater Than 1900").lt(NEXTYEAR, `Only Less Than ${NEXTYEAR}`),
    listPrice: z.number({ message: SHAREDNUMBERMESSAGE }).positive({ message: SHAREDPOSITIVENUMBERMESSAGE })
})

const inputFieldsArray: inputFieldType[] = [
    { id: 1, inputName: 'bedrooms', label: 'Number of Bedrooms' },
    { id: 2, inputName: 'bathrooms', label: 'Number of Bathrooms' },
    { id: 3, inputName: 'garage', label: 'garace capacity' },
    { id: 4, inputName: 'sqft', label: 'Property sqft' },
    { id: 5, inputName: 'yearBuilt', label: 'Year Built' },
    { id: 6, inputName: 'listPrice', label: 'listPrice', description: "Specify the number of nearest neighbors to consider for classification" },
];


export default function AddNewPropertyFormComponent() {
    const form = useForm<formValues>(({
        resolver: zodResolver(AddPropertySchema)
    }));
    const { register, handleSubmit } = form;
    const { handleNotify } = useSuccessNotification();
    const onSucces: () => void = () => {
        handleNotify('Property Added Successfully')
    }
    const { mutate, status } = usePostData(onSucces);
    const submitData = (data: formValues) => {
        mutate(data);
    }
    return (
        <>
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
                    />
                ))}
                <SubmitButton status={status} />
            </form>
        </>
    )
}
