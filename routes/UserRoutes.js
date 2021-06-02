const express = require('express');
const router = express.Router();
const Users = require('../model/UsersModel');
router.get('/', async(req,res) =>{
    try {
        const users = await Users.find();
        res.send(users)
    }catch (err){
        res.send(err)
    }
})
router.post('/', async(req,res) =>{
     const userBody = new Users({
         name : req.headers.name,
         email : req.headers.email,
         mobile : req.headers.mobile
     });
     console.log(userBody)
    try {
        console.log('inside')
        const a1 = await userBody.save();
        res.send(a1)
    }catch (err){
        res.send(err)
    }
})
router.get('/:id', async(req,res) =>{
   try {
       const user = await Users.findById(req.params.id);
       res.send(user)
   }catch (err){
       res.send(err)
   }
})
router.patch('/:id', async(req,res) =>{
    try {
        const user = await Users.findById(req.params.id);
        user.name = req.headers.name;
        const a2 = await user.save();
        res.send(a2)
    }catch (err){
        res.send(err)
    }
 })

module.exports = router