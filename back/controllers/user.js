require('dotenv')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

//exporting functions to be used in routers

//signs up user
exports.signup =  async (req,res) => {
  var user = await User.findOne({email:req.body.email})
    if(user)
      return res.json({err:'User already exists'})
    
  user = new User(req.body)
  user.save( async (err,user) => {
    if(err)
      return res.json({err : "NOT able to save user in DB"})
      const token = await jwt.sign({
        _id:user._id,
         role:user.role},process.env.SECRET) //token creation
        res.cookie('blog',token)
        res.json('sucess')
   
  })
  
}

//signs in user and saves cookie
exports.signin = async (req,res) => {
  const {email,password} = req.body
  const user = await User.findOne({email:email}) //email exists check
  if(!user)
    return res.json({err:'email do not exists'})
  
  const match = await bcrypt.compare(password,user.password) //password check
  if(!match)
    return res.json({err:'password do not match'})
  
  try
 { const token = await jwt.sign({
   _id:user._id,
  role:user.role},process.env.SECRET) //token creation
  res.cookie('blog',token)
  res.json('success')
 
} catch(err){
  return res.json({err:'Internal error please try agin after some time'})

 }
}


