import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import CreatePost from './CreatePost'
import ControlledRoute from './ControlledRoute'
import PostRoute from './PostRoute'
import Notfound from './Notfound'
import './style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />

        <ControlledRoute path='/Signup' component={Signup} />

        <ControlledRoute path='/Signin' component={Signin} />

        <PostRoute
          path='/CreatePost' component={CreatePost}/>

        <Route component={Notfound}/>
      </Switch>
    </Router> 
  )
}

export default App
