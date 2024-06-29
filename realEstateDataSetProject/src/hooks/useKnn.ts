import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { getKnnData } from "../features/Knn/knnSlice";

type userFormData = {
    bedrooms: number,
    bathrooms: number,
    sqft: number,
    yearBuilt: number
    k: number,
}

const knnPostData = async (data: userFormData) => {
    const response = await axios.post("http://localhost:3000/knn", data)
    return response.data;
}

export function usePostKnnData() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return useMutation({
        mutationKey: ["real-estate"],
        mutationFn: knnPostData,
        onSuccess: async (res) => {
            dispatch(getKnnData(res));
            navigate('../knn-results');
            console.log(res);
        },
        onError: (error) => console.log(error.message),
    })
}