import authStorageService from "../../components/Features/user/store/authStorage.js";
import instance from "./axios.api.js";
import { useUsersStore } from "../../components/Features/user/store/usersStore.js";

export const fetchCurrentUser = async () => {
    const token = authStorageService.getToken();
    if(!token) return null
    const response  = await instance.get(`/users/${token}`);
    return response.data
}

export  const fetchUserById = async (id) => {
    const response = await instance.get(`/users/${id}`);

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
    const store = useUsersStore()
    store.fetchUsers()
    return response.data
}

export const createUser = async (user) => {
    const response = await instance.post("/users",user);
    return response.data
}

export const updateUser = async (id,user) => {
    const response = await instance.put(`/users/${id}`,user);
    return response.data
}