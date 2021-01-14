import React,{useState} from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'




function Signin(){

  const [data, setData] = useState({
    email:"",
    password:""
  })

  const history = useHistory()

  async function  signinpost(){

    const res = await axios.post('/api/signin',data)
    if(!res)
      return console.log(res)
    console.log(res)
    

  }

  
  function Redirecthandler(e) {
    e.preventDefault()
    history.push('/Signup')
  }

  function handleChange(e){
    const { name, value } = e.target
    setData(prev => {
      return {
        ...prev,
        [name]:value
      }
    }) }

  function handleSubmit(e){
    e.preventDefault()
    signinpost()
    history.push('/')
    
  }

  return (
  <React.Fragment>
  <div className='main flex'>
  <header className='head'>
    <h1>Travel Blog</h1>
    
  </header>
  <form className='flex form-top-pad' method='post'>
    <div>
    <label className='label label-left-pad' for='email'>EMAIL :</label>
    <input className='input' type='email' name='email' placeholder='Email' onChange={handleChange}/>
    </div>
    <div>
    <label className='label' for='password'>PASSWORD :</label>
   <input className='input' type='password'  name='password' placeholder='Password' onChange={handleChange} />
    </div>
   

   <input className='btn' type='submit' value='SIGNIN' onClick={handleSubmit} />
  
  <button className='under-btn' onClick={Redirecthandler}>
    New User ? Get Started
  </button>
  </form>
  
  </div>
  </React.Fragment>
  )
  
}

export default Signin