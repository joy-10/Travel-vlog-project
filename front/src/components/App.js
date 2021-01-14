import React from 'react'
import Signin from './Signin'
import Signup from './Signup'
import Home from './Home'
import Singlepost from './Single-post'
import Createpost from './Createpost'

import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'

function App( ) {

  

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='/Signin'>
          <Signin />
        </Route>
        <Route path='/Single-post'>
          <Singlepost/>
        </Route>
        <Route path='/Createpost'>
          <Createpost/>
        </Route>
      </Switch>
    </Router>
    )

}

export default App