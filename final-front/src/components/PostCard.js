import React from 'react'
import {Card,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'



function PostCard(props){
  var str = props.description
  str = str.substring(0,100)
  return(
  <Col lg={3} md={4} sm={12} className='mb-3' >
  <Card style={{ width: '100%' }}>  
  <Card.Img variant="top" src={`http://localhost:8000/uploads/${props.image}`} />
  <Card.Body>
    <Card.Title>Title : {props.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Author : {props.author}</Card.Subtitle>
    <Card.Text>
      {str}
    </Card.Text>
    <Button variant="primary">Read...</Button>
  </Card.Body>
  </Card>
  </Col>
  )
}

export default PostCard