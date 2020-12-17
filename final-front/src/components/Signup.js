import React,{useState} from 'react'
import { useHistory,Link} from 'react-router-dom'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import DefNav from './DefNav'


function Signup(){

  const [data, setData] = useState({
    name:"",
    lastname: "",
    email:"",
    password:""
  })

  const history = useHistory()

  async function signuppost()
  { 
    try{
    const res = await axios.post('/api/signup',data)
    if(res.data.err)
      return console.log(res.data.err)
    history.push('/')
    } catch(err){
      console.log(err)
    }
    
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
    signuppost()
   }

  return (
<React.Fragment>
<DefNav/>
<Container className='mt-4 ml-2'>
<Form className='col-lg-6 offset-lg-3'>
  <Form.Group controlId="name">
    <Form.Label>Firstname</Form.Label>
    <Form.Control type="text" placeholder="FirstName" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="lastname">
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" placeholder="LastName" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handleChange} />
  </Form.Group>
  <Form.Text as={Link} to='/Signin' > Already User ? Let's Go</Form.Text>
  <Button variant="primary" type="submit" className='mt-4 mb-3 font-weight-bold' onClick={handleSubmit}>
    Sign-Up
  </Button>
  <Form.Text className="text-muted">
      We'll never share your details with anyone else.
  </Form.Text>
</Form>
</Container>
</React.Fragment>
  )
}

export default Signup