import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAdmin} from './isAuth'


function AdminRoute
({ component:Component, ...rest }) {
  const temp = isAdmin()
  console.log(temp)
  return (
    <Route 
      {...rest}
      render={ props =>
        isAdmin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default AdminRoute