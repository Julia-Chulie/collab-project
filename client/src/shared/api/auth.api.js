import instance from "./axios.api.js";


const login =  async (user) => {
    return await instance.post("/login",user)
}

export default login;


