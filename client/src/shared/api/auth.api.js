import instance from "./axios.api.js";

export const loginApi =  async (user) => {
    return await instance.post("/login",user)
}
