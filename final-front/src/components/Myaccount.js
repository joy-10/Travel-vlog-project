import React,{useState,useEffect} from 'react'
import DefNav from './DefNav'
import axios from 'axios'
import Toast from './Toast'
import Container from 'react-bootstrap/Container'

function Myaccount(){
  const [details,setDetail] = useState({})
  const [toast, setToast] = useState({stat:false})

  function toggleShow() {
    setToast({stat:false})  
  }

  useEffect(async ()=> {
    const res = await axios.get('/api/account')
    if(res.data.err || !res)
    return setToast({
      stat:true,
      head:'Error !!',
      text:res.data.err || 'Unable to Access Details',
      class:'toast-fail'
    })
    setDetail(res.data)
    },[])
    console.log(details)
  return (
    <React.Fragment>
      <DefNav/>
      <Container className='mt-5 ml-2 '>
      <Toast data={toast} toggleShow={toggleShow}/>
      </Container>
    </React.Fragment>
  )
}

export default Myaccount
