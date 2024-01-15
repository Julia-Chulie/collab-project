import UserModel from "../models/UserModel.js";
import fs from 'fs'

export const seeds = async (req,res) => {

    const file = fs.readFileSync('./dataSeed/users.json', 'utf8')
    const jsonFile = JSON.parse(file)
    try {
        jsonFile.forEach( async (element) => {
            const user = new UserModel(element)
            user.password = hashPassword(user.password)
            await user.save()
        });
    } catch (error) {
        res.send(error)
    }
   
    console.log(jsonFile);
}


