const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        tittle:{
            type:String,
            required:true,
            maxLength:50,
        },

        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createAt:{
            type:String,
            required:true,
           default:Date.now(),
        },
        updateAt:{
            type:String,
            required:true,
           default:Date.now(),
        },
    }
);

module.exports = mongoose.model("Todo",todoSchema);