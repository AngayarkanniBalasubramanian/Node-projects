// the file name is singular because we will write the model for one entity which is nothing but schema.
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    regno:{
        type:String,
        require:true
    },
    name:{
        type:String,
        required:true
    },
    std:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Student',studentSchema)