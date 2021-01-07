import React,{useState} from 'react'
import {Button,Container,Form} from 'react-bootstrap'
import {useParams,useHistory} from 'react-router-dom'
import DefNav from './DefNav'
import axios from 'axios'
import {passchk} from './validation'
import Toast from './Toast'

function ForgetResolve(){
  const [data, setData] = useState({
    pwd:"",
    cpwd:""
  })

  const history = useHistory()

  const [toast, setToast] = useState({stat:false})

  function toggleShow() {
    setToast({stat:false})  
  }

  const [pwd,setpwd] = useState({password:''})
  const [cpwd,setcpwd] = useState({password:''})

  const params = useParams()

  function handleChange(e){
    const { id, value } = e.target
    setData(prev => {
      return {
        ...prev,
        [id]:value
   }})}

   async function handleSubmit(e) {
    e.preventDefault()
    setpwd = " "
    setcpwd = " "
    var res1 = passchk(data.pwd)
    var res2 = passchk(data.cpwd)
    if(res1 || res2)
    {
      setpwd(res1)
      setcpwd(res2)
    }
    else
    {
      if(data.pwd === data.cpwd)
    {
      const res = await axios.patch(`/api/forget/resolve/${params.token}`,{pwd:data.pwd})
      if(res.data.err || !res)
        return setToast({
          stat:true,
          head:'Error !!',
          text:res.data.err || 'Try Again after some Time',
          class:'toast-fail'
        })
      
        setToast({
          stat:true,
          head:'Success !!',
          text:res.data,
          class:'toast-success'
        })
  
        const timer = setTimeout(() => {
          toggleShow()
          history.push('/')
        }, 1500)
        return () => clearTimeout(timer)
    }
    }
  }

  return (
    <React.Fragment>
      <DefNav/>
      <Container className='mt-5 ml-2 '>
      <Form className='col-lg-6 offset-lg-3'>
        <Form.Group controlId="pwd">
          <Form.Label>Enter New Password</Form.Label>
          <Form.Control type="text" placeholder="Enter Password" onChange={handleChange}/>
          <span className='ml-2' style={{color: "red"}}>{pwd.password}</span>
        </Form.Group>
        <Form.Group controlId="cpwd">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="text" placeholder="Enter Again" onChange={handleChange}/>
          <span className='ml-2' style={{color: "red"}}>{cpwd.password}</span>
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-4 mb-3 font-weight-bold' onClick={handleSubmit} >
          Submit
          </Button>
      </Form>
      </Container>
      <Toast data={toast} toggleShow={toggleShow}/>
    </React.Fragment>
  )
}

export default ForgetResolve