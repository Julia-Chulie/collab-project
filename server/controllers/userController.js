import UserModel from "../models/UserModel.js";

export const getUsers = async (req,res) => {
    const users = await UserModel.find({})
    try {
        return  res.status(200).send(users)     
    } catch (error) {
        return  res.status(401).send(error)        

    }
}

export const getUserById = async (req, res) => {
    const {id} = req.params
    const user = await UserModel.findById(id).exec()
    if(!user){
        res.status(401).send("L'utilisateur n'existe pas")
    }else{
        return res.status(200).json(user)
    }
}

export const createUser = async (req,res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        return  res.status(200).send(user)     
    } catch (error) {
        return  res.status(401).send(error)        

    }
}

export const updateUser = async (req,res) => {
    const {id} = req.params
    console.log(req.body);
    try {
        const user = await UserModel.findByIdAndUpdate(id,req.body, {new:true})
        await user.save()
        return  res.status(200).send(user)     
    } catch (error) {
        return  res.status(401).send(error)        

    } 
}

export const deleteUser = async (req,res) => {
    const {id} = req.params
    const user = await UserModel.findByIdAndDelete(id).exec()
        
    if(!user){
        res.status(401).send("L'utilisateur n'existe pas")
    }else{
        return res.status(200).json(id)
    }
}