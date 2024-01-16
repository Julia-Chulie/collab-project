import authStorageService from "../../components/Features/user/store/authStorage.js";
import instance from "./axios.api.js";

export const fetchCurrentUser = async () => {
    const token = authStorageService.getToken();
    if(!token) return null
    const response  = await instance.get(`/users/${token}`);
    return response.data
}

export  const fetchUserById = async (id) => {
    const response = await instance.get(`/users/user/${id}`);

    return response.data
}

export const fetchUsers = async () => {
    const response = await instance.get("/users");
    return response.data
}

export const fetchRandomUser = async () => {
    const response = await instance.get("/users/random");
    return response.data
}

export const deleteUser = async (id) => {
    const response = await instance.delete(`/users/${id}`);
    return response.data
}

export const createUser = async (user) => {
    const response = await instance.post("/users",user);
    return response.data
}