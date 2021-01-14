import React,{useEffect, useState} from 'react'
import { useHistory} from 'react-router-dom'
import axios from 'axios'
import './styles.css'
import Post from './Post-template'
import cookies from 'js-cookie'



function Home(){

  const [posts,setPosts] = useState([])
  const [isLogged,setActive] = useState(false)

  
  const history = useHistory()


  function handleSubmit(e)
  {
    e.preventDefault()
    
    history.push(`/${e.target.name}`)
  }

  function handleLogout(e){
    e.preventDefault()
    setActive(false)
    cookies.remove('blog')
  }
  
  useEffect(async ()=> {
  try{const res = await axios.get('/api/posts')
  setPosts(res.data)
  
  
  } catch(err){
    console.log('internal error')
  }
  },[])

  useEffect(()=> {
    if(cookies.get('blog'))
    setActive(true)
  },[])
  
  return (
    <div>
      <header className='h-head'>
        <div className='h-head-internal'>
          <h1 className='head-h1'>Travel Blog</h1>
            { isLogged ? null :  <button className='head-btn' name='Signup' onClick={handleSubmit}>Sign-Up</button>}
            { isLogged ? null :<button  className='head-btn' name='Signin' onClick={handleSubmit}>Sign-In</button>}
            { isLogged ? <button className='head-btn' name='Createpost' onClick={handleSubmit}>Create-Post</button>  : null }
            { isLogged ? <button className='head-btn' name='Logout' onClick={handleLogout}>LogOut</button>  : null }
        </div>
      </header>
      <h1 className='post'>POSTS</h1>
      <div className='container'>
        {posts.map(post => {
          return <Post title={post.title} author={post.author} description={post.description} image={post.image} />
        })}
      </div>
    </div>
  )
}

export default Home