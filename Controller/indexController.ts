import Express  from "express"
import { Usermodel } from "../models/usermodel"


   export const addUser= async(req:Express.Request,res:Express.Response)=>{
    try {
      console.log(req.body,'aslaaaaaaaammmmmmmmm')
        const add = new Usermodel(req.body)
      const user =  await add.save()
            res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }

    }

        export const allUsers = async (req:Express.Request,res:Express.Response)=>{
        const result =  await Usermodel.find()
        console.log(result);
        res.status(200).json(result)     
    }
    

    export const deleteUser = async (req:Express.Request,res:Express.Response)=>{
    const userId = req.params.id
     const result =  await Usermodel.deleteOne({_id:userId})
     console.log(result);
     res.status(200).json(result)
    }

    export const updateUser = async (req:Express.Request,res:Express.Response)=>{
      const userId = req.params.id
      const result = await Usermodel.updateOne({_id:userId},{$set:{
        name:req.body.name,
        place:req.body.place,
        age:req.body.age
      }})
      console.log(result);
      res.status(200).json(result)
    }