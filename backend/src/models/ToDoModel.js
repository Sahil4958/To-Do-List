import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    text : {
        type: String,
        require : true
    }
})

export default mongoose.model("ToDo",toDoSchema)