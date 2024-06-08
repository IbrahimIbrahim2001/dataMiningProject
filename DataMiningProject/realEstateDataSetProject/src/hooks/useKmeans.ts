import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { getKmeanData } from "../features/Kmeans/kmeansSlice";


type userFormData = {
    k: number,
}

const kmeansPostData = async (data: userFormData) => {
    const response = await axios.post("http://localhost:3000/kmeans", data)

    return response.data;
}

export function usePostKmeansData() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return useMutation({
        mutationKey: ["k-means"],
        mutationFn: kmeansPostData,
        onSuccess: (res) => {
            navigate('../kmeans-results');
            dispatch(getKmeanData(res));
        },
        onError: (error) => console.log(error.message),
    })
}