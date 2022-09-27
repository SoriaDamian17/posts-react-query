import axiosBase from "."

const API_URL = '/posts';

export const getPosts = async () => {
    const { data } = await axiosBase.get(API_URL);
    return data;
}

export const getPostId = async (id: string | undefined) => {
    const { data } = await axiosBase.get(`${API_URL}/${id}`)
    return data;
}