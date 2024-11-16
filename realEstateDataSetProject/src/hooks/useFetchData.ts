import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import request from "../utils/axios-utils";


type formValues = {
    bedrooms: number,
    bathrooms: number,
    garage: number,
    sqft: number,
    yearBuilt: number,
    listPrice: number
}

const fetchData = async () => {
    const response = await request({ url: "/realEstateData", method: 'get' });
    return response.data;
}

const postData = async (data: formValues) => {
    const response = await request({ url: "/add", method: 'post', data: data });
    return response.data;
}

export function useFetchData() {
    return useQuery({
        queryKey: ["real-estate"],
        queryFn: () => fetchData(),
    })
}

export function usePostData(onSuccess: () => void) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationKey: ['post_data'],
        mutationFn: (data: formValues) => postData(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["real-estate"] })
            onSuccess();
            navigate('../');
        },
    })
}