import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Createpost(){

  const [data, setData] = useState({
    title:"",
    author:"",
    description:"",
    image:null
    
  })

  const history = useHistory()

  function postsend(){
    const formdata = new FormData()
    formdata.append('title',data.title)
    formdata.append('author',data.author)
    formdata.append('description',data.description)
    formdata.append('image',data.image)
    

    axios.post('/api/post',formdata)
    .then((posted)=>{console.log(posted)
    history.push('/')})
    .catch((err)=>console.log(err))
    
  }

  function handleChange(e){
    const { name, value } = e.target
    if(name==='image')
    {
      setData(prev => {
        return {
          ...prev,
          [name]:e.target.files[0]
        }
      })
    }
    else
    {setData(prev => {
      return {
        ...prev,
        [name]:value
      }
    })}
  }

    function handleSubmit(e) {
      e.preventDefault()
      postsend()
      history.push('/')
    }


  return (
    <div className='flex'>
  <header className='head'>
    <h1>Travel Blog</h1>
    
  </header>
  <form className='flex form-top-pad' method='post'>
    
    <div>
    <label className='label ' for='title'>TITLE :</label>
    <input className='input' type='text' name='title' placeholder='Title' onChange={handleChange} />
    </div>

    <div>
    <label className='label ' for='author'>AUTHOR :</label>
    <input className='input' type='text' name='author' 
    placeholder='author' onChange={handleChange}/>
    </div>
    

    <div>
    <label className='label label-left-pad' for='description'>DESCRIPTION :</label>
    <input className='input' type='text' name='description' placeholder='Description' onChange={handleChange}/>
    </div>

    <div>
    <label className='label' for='image'>IMAGE :</label>
   <input className='input' type='file'  name='image' onChange={handleChange}/>
    </div>

   <input className='btn' type='submit' value='SUBMIT' onClick={handleSubmit} />
  </form>
  </div>
  )
}

export default Createpost
