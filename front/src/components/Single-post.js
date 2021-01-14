import React from 'react'
import { useLocation } from 'react-router-dom'

function Singlepost(){
  const location = useLocation()
  return (
  
  <div className='post-page-wrap'>
  <header className='head'>
    <h1>Travel Blog</h1>
    
  </header>
  <h1 className='post-page-h1'>{location.state.title}  By  {location.state.author}</h1>
  <div className='line'></div>
  <img className='main-img' src={`http://localhost:8000/uploads/${location.state.image}`}/>
  <div className='post-page-wrap post-back'>
    <h1 className='post-page-h1'>Description</h1>
    <div className='line'></div>
    <h2>{location.state.description}</h2>
  </div>
   </div>  
  )
}

export default Singlepost