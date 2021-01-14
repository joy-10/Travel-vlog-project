import React from 'react'
import { useHistory } from 'react-router-dom'
 

function Post(props){

  const history = useHistory()
  function handlepostclick(e){
    e.preventDefault()
    history.push({
      pathname: '/Single-post',
      state: { title:props.title,
               author : props.author,
                description: props.description,
              image:props.image
            }
      })
    }
  
  return (
    <div className='post-div'>
      
      <img src={`http://localhost:8000/uploads/${props.image}`} height={250} width={350} style={{float:'right'}} />
      <h1>Title : {props.title}</h1>
      <h1>Author : {props.author}</h1>
      <button className='btn' onClick={handlepostclick} >Open</button>
      
    </div>
  )
}

export default Post