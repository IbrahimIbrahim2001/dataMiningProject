import axios, { AxiosResponse, AxiosError } from "axios";

const BASEURL = 'https://dataminingproject.onrender.com'
const client = axios.create({
    baseURL: BASEURL
});

const request = async ({ ...options }) => {
    const onSuccess = (response: AxiosResponse) => {
        return response;
    };
    const onError = (error: AxiosError) => {
        return Promise.reject(error);
    };
    return client(options).then(onSuccess).catch(onError);
};

export default request;
