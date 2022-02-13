const express = require('express')
const router = express.Router()
const Student = require('../models/student')


// find all the students
router.get('/',async(req, res) => {
    try{
        const students = await Student.find()
        res.json(students)
    }catch(err){
        console.log('Error '+err)
    }
    console.log('get request')
})


//find one particular student
router.get('/:id',async(req, res) => {
    try{
        const student = await Student.findById(req.params.id)
        res.json(student)
    }catch(err){
        console.log('Error '+err)
    }
})


//save student
router.post('/',async(req,res) =>{
    const student = new Student({
        regno:req.body.regno,
        name:req.body.name,
        std:req.body.std
    })

    try{
        const s1 = await student.save()
        res.json(s1)
    }catch(err){
        res.send('Error '+err)
    }
})

//update using patch
router.patch('/:id',async(req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        student.std = req.body.std
        const s1 = await student.save()
        res.json(s1)
    }catch(err){
        res.send('Error '+err)
    }
})

//delete particular student
router.delete('/:id',async(req,res) => {
    try{
        const student = await Student.findById(req.params.id)
        student.std = req.body.std
        const s1 = await student.remove()
        res.json(s1)
    }catch(err){
        res.send('Error '+err)
    }
})


module.exports = router