//Requiring models from models folder
const Post = require('../models/post')
const User = require('../models/user')


//exporting functions to be used in routers

//creates new post
exports.post = (req,res) => {
  req.body.image = req.file.filename
  const post = new Post(req.body)
  post.save(async (err,posted)=>{
    if(err)
      return res.json({
        err : 'Not able save the post, submit again'
      })
      try
     {const user = await User.findOneAndUpdate({_id:res.locals.id},{$push: {posts : posted._id }},{new:true})
     res.json(user)}catch(err){
       console.log(err)
     }
  })    
}

exports.getposts = (req,res) => {
  Post.find({},(err,result) => {
    if(err)
      res.json(err)
    res.json(result)
  })
  
}