import UserModel from "../models/UserModel.js";
import fs from 'fs'
import hashPassword from "../utils/hashPassword.js";

export const seeds = async (req,res) => {
    
   const users = await UserModel.find({})
    if(users.length > 0 ){
      await  UserModel.deleteMany();
    }
    const file = fs.readFileSync('./dataSeed/users.json', 'utf8')
    const jsonFile = JSON.parse(file);
    try {
        jsonFile.forEach( async (element) => {
            const user = new UserModel(element);
            user.password = hashPassword(user.password);
            await user.save();
            return  res.send('seed ok');
        });
    } catch (error) {
        res.send(error);
    }
}
