import cookies from 'js-cookie'
import axios from 'axios'

function isAuth() {
  if(cookies.get('blog'))
  return true
  return false
}

async function isAdmin() {


 const res = await axios.get('/api/Isadmin')
 if(res.data === 'Sucess')
  return res.data
return 0
}

export {isAuth,isAdmin}