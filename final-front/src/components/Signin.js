import React,{useState} from 'react'
import { useHistory,Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import DefNav from './DefNav'
import axios from 'axios'

function Signin(){  
  
  const [data, setData] = useState({
    email:"",
    password:""
  })

  const history = useHistory()

  async function signinpost()
  { 
    
    const res = await axios.post('/api/signin',data)
    if(!res)
      return console.log(res)
    history.push('/')
   
    
  }

  function handleChange(e){
    const { id, value } = e.target
    setData(prev => {
      return {
        ...prev,
        [id]:value
   }})}

   function handleSubmit(e){
    e.preventDefault()
    signinpost()
   }
  
  return (
<React.Fragment>
<DefNav/>
<Container className='mt-4 ml-2 '>
<Form className='col-lg-6 offset-lg-3'>
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" onChange={handleChange} />
  </Form.Group>
  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
  </Form.Group>
  <Form.Text as={Link} to='/Signup' > New User ? Get Started</Form.Text>
  <Form.Text as={Link} to='/Forget' className='mt-2 text-muted'>Forget password ?</Form.Text>
  <Button variant="primary" type="submit" className='mt-4 mb-3 font-weight-bold' onClick={handleSubmit}>
    Sign-In
  </Button>
  <Form.Text className="text-muted">
      We'll never share your details with anyone else.
  </Form.Text>
</Form>
</Container>
</React.Fragment>
  )
}

export default Signin