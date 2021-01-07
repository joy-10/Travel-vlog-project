import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import Signup from './Signup'
import Signin from './Signin'
import CreatePost from './CreatePost'
import ControlledRoute from './ControlledRoute'
import PostRoute from './PostRoute'
import Notfound from './Notfound'
import Showpost from './Showpost'
import Myaccount from './Myaccount'
import Admin from './Admin'
import AdminRoute from './AdminRoute'
import ForgetResolve from './ForgetResolve'
import './style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
 import Forget from '../components/Forget'
 

function App() {

  return (
    
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />

        <ControlledRoute path='/Signup' component={Signup} />

        <ControlledRoute path='/Signin' component={Signin} />

        <ControlledRoute path='/Forget' component={Forget} exact />

        <ControlledRoute path='/forget/resolve/:token' component={ForgetResolve} />
          
        <PostRoute
          path='/CreatePost' component={CreatePost}/>
        
        <PostRoute path='/Myaccount' component={Myaccount}/>
        
        <Route path='/Showpost' >
          <Showpost/>
        </Route>

        <AdminRoute path='/admin' component={Admin} />

        <Route component={Notfound}/>
      </Switch>
    </Router> 
  )
}

export default App
