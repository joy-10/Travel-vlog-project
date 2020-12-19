import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import DefNav from './DefNav'
import axios from 'axios'
import Toast from './Toast'
import { useHistory} from 'react-router-dom'


function CreatePost (){

  const [data, setData] = useState({
    title:"",
    author:"",
    description:"",
    image:null
    
  })
  const [toast, setToast] = useState({stat:false})

  const history = useHistory()

  function toggleShow() {
    setToast({stat:false})  
  }

  async function postsend(){
    const formdata = new FormData()
    formdata.append('title',data.title)
    formdata.append('author',data.author)
    formdata.append('description',data.description)
    formdata.append('image',data.image)
    
    axios.post('/api/post',formdata)
    .then((res)=>{
      if(res.data === 'success')
      {setToast({
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
    setToast({
      stat:true,
      head:'Error !!',
      text:res.data.err,
      class:'toast-fail'
    })

      })
    .catch((err)=> setToast({
      stat:true,
      head:'Error !!',
      text:'Try again with valid data',
      class:'toast-fail'
    }))
    
  }

  function handleChange(e){
    const { id, value } = e.target
    if(id==='image')
    {
      setData(prev => {
        return {
          ...prev,
          [id]:e.target.files[0]
        }
      })
    }
    else
    {
      setData(prev => {
      return {
        ...prev,
        [id]:value
      }
    })}
  }

  function handleSubmit(e) {
    e.preventDefault()
    postsend()
  }

  return(
    <React.Fragment>
<DefNav/>
<Container className='mt-4 ml-2'>
<Toast data={toast} toggleShow={toggleShow}/>
<Form className='col-lg-6 offset-lg-3'>
  <Form.Group controlId="title">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Title" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="author">
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="Author" onChange={handleChange} />
  </Form.Group>
  <Form.Group controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Deddscription" onChange={handleChange}/>
  </Form.Group>
  <Form.Group>
    <Form.File id="image" label="Image" onChange={handleChange}/>
  </Form.Group>
  <Button variant="primary" type="submit" className='mt-4 mb-3' onClick={handleSubmit}>
    Create
  </Button>
</Form>
</Container>
</React.Fragment>
  )
}

export default CreatePost