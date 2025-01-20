import ToDoModel from "../models/ToDoModel.js";

export const getToDo = async(req,res) =>{
    const toDo = await ToDoModel.find();
    res.status(200).json({success:true, msg: "All to-do list" ,toDo})
}

export const saveToDo = async(req,res) =>{

    const {text} = req.body;
    if(!text){
        return res.status(400).json({success:false})
    }
      const data = await ToDoModel.create({text})
      res.status(201).json({success : true, msg: "Data has been added Sucessfully",data})
    
}

export const updateToDo = async(req,res) =>{
    const {_id} = req.params;
    const {text} = req.body

    if(!_id ){
        return res.status(400).json({sucess:false ,msg :"please  provide id "})
    }

    const updatedData = await ToDoModel.findByIdAndUpdate(_id,{text},{new:true,fields: { text: 1 }})
    res.status(200).json({success : true, msg: "Data has been updated Sucessfully",updatedData})
}

export const deleteToDo = async(req,res) =>{
    const {_id} = req.params;


    if(!_id ){
        return res.status(400).json({success:false ,msg :"please  provide id "})
    }

    await ToDoModel.findOneAndDelete({_id})
    res.status(200).json({sucess : true, msg: "Data has been deleted Sucessfullly",})
}