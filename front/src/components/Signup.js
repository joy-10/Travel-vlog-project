import React,{useState} from 'react'
import './styles.css'
import { useHistory,Redirect } from 'react-router-dom'
import axios from 'axios'


function Signup(props){

  const [data, setData] = useState({
    name:"",
    lastname: "",
    email:"",
    password:""
  })

  const history = useHistory()

  async function signuppost()
  {
    const res = await axios.post('/api/signup',data)
    if(!res)
      return console.log(res)
    console.log(res)
  }

  
  function Redirecthandler(e) {
    e.preventDefault()
    history.push('/Signin')
  }
  
  function handleChange(e){
    const { name, value } = e.target
    setData(prev => {
      return {
        ...prev,
        [name]:value
      }})}

  function handleSubmit(e){
    e.preventDefault()
    signuppost();

    <Redirect to="/user/dashboard" />
    
  }

  return (
  <React.Fragment>
  <div className='flex'>
  <header className='head'>
    <h1>Travel Blog</h1>
    
  </header>
  <form className='flex form-top-pad'>
    
    <div>
    <label className='label ' for='name'>FIRSTNAME :</label>
    <input className='input' type='text' name='name' placeholder='Firstname' onChange={handleChange} />
    </div>

    <div>
    <label className='label ' for='lastname'>LASTNAME :</label>
    <input className='input' type='text' name='lastname' 
    placeholder='Lastname' onChange={handleChange}/>
    </div>
    

    <div>
    <label className='label label-left-pad' for='email'>EMAIL :</label>
    <input className='input' type='email' name='email' placeholder='Email' onChange={handleChange}/>
    </div>

    <div>
    <label className='label' for='password'>PASSWORD :</label>
   <input className='input' type='password'  name='password' placeholder='Password' onChange={handleChange}/>
    </div>

   <input className='btn' type='submit' value='SIGNUP' onClick={handleSubmit} />

   <button className='under-btn' onClick={Redirecthandler}>
    Already User ? Signin
  </button>
  </form>
  </div>
  </React.Fragment>
  )
  
}

export default Signup