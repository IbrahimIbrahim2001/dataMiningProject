import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


type formValues = {
    bedrooms: number,
    bathrooms: number,
    garage: number,
    sqft: number,
    yearBuilt: number,
    listPrice: number
}


const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/realEstateData")
    return response.data;
}

const postData = async (data: formValues) => {
    console.log(data);
    const response = await axios.post("http://localhost:3000/add", data)
    return response.data;
}

export function useFetchData() {
    return useQuery({
        queryKey: ["real-estate"],
        queryFn: () => fetchData(),
    })
}

export function usePostData() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ['post_data'],
        mutationFn: (data: formValues) => postData(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["real-estate"] })
            navigate('../');
        },
    })
}