require('dotenv')
const jwt = require('jsonwebtoken')

//middleware to check admin or not
exports.isAdmin = (req,res,next) => {
  if(res.locals.role == 0)
    return res.json({err:'Not Authorized'})
  res.json('Sucess')
  next()
}

//middleware to check who is logged in
exports.isAuthenticated = (req,res,next) => {
  jwt.verify(req.cookies.blog,process.env.SECRET,(err,decoded) => {
    if(err)
      return res.json({err:'Not a valid user'})
    res.locals.id = decoded._id
    res.locals.role = decoded.role
  })
  next()
}